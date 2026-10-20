import {randomBytes} from 'node:crypto';
import {readFile} from 'node:fs/promises';
import {readFamilyCodes, verifyFamilyCode} from './family-codes.mjs';

const sessionLifetime = 8 * 60 * 60 * 1000;
const loginLifetime = 10 * 60 * 1000;

function randomToken() { return randomBytes(32).toString('base64url'); }
function error(message, status = 400) { return Object.assign(new Error(message), {safe: true, status}); }
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[character]));
}

export function readHostingConfig(env = process.env) {
  if (env.NODE_ENV === 'production' && !env.PUBLIC_ORIGIN) throw new Error('Production requires PUBLIC_ORIGIN.');
  const origin = new URL(env.PUBLIC_ORIGIN || 'http://127.0.0.1:5175');
  const loopback = ['localhost', '127.0.0.1', '[::1]'].includes(origin.hostname);
  if (origin.username || origin.password || origin.pathname !== '/' || origin.search || origin.hash ||
      !['https:', 'http:'].includes(origin.protocol) || (!loopback && origin.protocol !== 'https:')) {
    throw new Error('PUBLIC_ORIGIN must be an HTTPS origin (HTTP is allowed only on loopback).');
  }
  const mode = env.FAMILY_AUTH_MODE || (loopback && env.NODE_ENV !== 'production' ? 'local' : 'family');
  if (!['local', 'family'].includes(mode)) throw new Error('FAMILY_AUTH_MODE must be local or family.');
  const bindHost = env.BIND_HOST || (mode === 'local' ? '127.0.0.1' : '0.0.0.0');
  if (mode === 'local' && (!loopback || env.NODE_ENV === 'production' || !['127.0.0.1', '::1'].includes(bindHost))) {
    throw new Error('Local bypass is permitted only on a loopback listener outside production.');
  }
  const port = Number(env.PORT || origin.port || (loopback ? 5175 : 3000));
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('PORT must be between 1 and 65535.');
  const familyCodes = readFamilyCodes(env.FAMILY_ACCESS_CODES);
  return {
    origin: origin.origin, host: origin.host, secure: origin.protocol === 'https:', mode, port, bindHost,
    familyCodes, configured: familyCodes.size > 0,
    // Local subscription registration is not assumed to work on a hosted domain.
    chatgptLoginEnabled: env.CHATGPT_LOGIN_ENABLED === 'true' || (mode === 'local' && env.CHATGPT_LOGIN_ENABLED !== 'false'),
  };
}

export function isApprovedFamily(identity, config) {
  if (!identity || typeof identity.id !== 'string') return false;
  const invitation = config.familyCodes.get(identity.id);
  return !!invitation && invitation.hash === identity.codeHash;
}

function cookieId(req) {
  return req.headers.cookie?.match(/(?:^|;\s*)northstar=([A-Za-z0-9_-]+)/)?.[1];
}
function redirect(res, location) { res.writeHead(303, {Location: location}); res.end(); }
async function formBody(req) {
  if (req.headers['content-type']?.split(';')[0].trim() !== 'application/x-www-form-urlencoded') throw error('登入資料格式不正確。');
  let data = '';
  for await (const chunk of req) {
    data += chunk;
    if (Buffer.byteLength(data) > 20000) throw error('登入資料過大。', 413);
  }
  const form = new URLSearchParams(data);
  if (['csrf', 'accessCode', 'challenge'].some(key => form.getAll(key).length > 1)) throw error('登入資料格式不正確。');
  return form;
}

export function createFamilyAccess({config, sessions, now = Date.now}) {
  let loginWindow = {start: now(), count: 0};
  function isAllowed(session) {
    return config.mode === 'local' || !!session && session.created + sessionLifetime > now() && isApprovedFamily(session.family, config);
  }
  function setCookie(res, sid, maxAge = sessionLifetime / 1000) {
    res.setHeader('Set-Cookie', `northstar=${sid}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${config.secure ? '; Secure' : ''}`);
  }
  function newSession(res, family) {
    for (const [id, session] of sessions) if (session.created + sessionLifetime <= now()) sessions.delete(id);
    if (sessions.size >= 1000) throw error('目前連線較多，請稍後再試。', 429);
    const sid = randomToken();
    const session = {created: now(), csrf: randomToken(), chats: new Map(), ...(family ? {family} : {})};
    sessions.set(sid, session); setCookie(res, sid);
    return {sid, session};
  }
  function checkFormCsrf(req, session, form) {
    if (!session || req.headers.origin !== config.origin || form.get('csrf') !== session.csrf) {
      throw error('登入頁面已失效，請重新開啟。', 403);
    }
  }
  function limitedLogin() {
    if (now() - loginWindow.start >= 60000) loginWindow = {start: now(), count: 0};
    if (++loginWindow.count > 30) throw error('登入嘗試過多，請稍後再試。', 429);
  }
  async function loginPage(req, res, state) {
    if (config.mode === 'local' || isAllowed(state.session)) { redirect(res, '/#home'); return; }
    if (!state.session) Object.assign(state, newSession(res));
    const session = state.session;
    session.familyPending = {nonce: randomToken(), expires: now() + loginLifetime};
    const template = await readFile(new URL('./private/family-login.html', import.meta.url), 'utf8');
    const message = session.familyError || (config.configured ? '請家長輸入收到的家庭存取碼，再讓孩子開始練習。' : '家庭登入準備中，請聯絡網站管理者完成設定。');
    delete session.familyError;
    const values = {
      CHALLENGE: session.familyPending.nonce, CSRF: session.csrf,
      MESSAGE: message, DISABLED: config.configured ? '' : 'disabled',
    };
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(template.replace(/\{\{([A-Z_]+)\}\}/g, (_, key) => escapeHtml(values[key] || '')));
  }
  async function loginWithCode(req, res, state) {
    try {
      limitedLogin();
      if (config.mode !== 'family' || !config.configured) throw error('家庭登入尚未設定。', 503);
      const form = await formBody(req);
      checkFormCsrf(req, state.session, form);
      const pending = state.session.familyPending;
      delete state.session.familyPending;
      if (!pending || pending.expires <= now() || form.get('challenge') !== pending.nonce) throw error('登入頁面已失效，請重新開啟。', 401);
      const family = verifyFamilyCode(form.get('accessCode'), config.familyCodes);
      if (!family || !isApprovedFamily(family, config)) throw error('存取碼不正確或已失效，請確認完整存取碼，或向邀請你的家人索取。', 401);
      if (sessions.get(state.sid) !== state.session || state.session.created + sessionLifetime <= now()) {
        throw error('登入頁面已失效，請重新開啟。', 401);
      }
      // Rotate the session; anonymous cookies and previous AI authorization are never upgraded in place.
      sessions.delete(state.sid);
      Object.assign(state, newSession(res, family));
      redirect(res, '/#home');
    } catch (failure) {
      if (failure.status === 429) {
        res.writeHead(429, {'Content-Type': 'text/plain; charset=utf-8', 'Retry-After': '60'});
        res.end('登入嘗試過多，請等一分鐘後重新開啟登入頁面。'); return;
      }
      if (state.session) state.session.familyError = failure.safe ? failure.message : '登入失敗，請重新登入。';
      redirect(res, '/login');
    }
  }
  async function handle(req, res, url) {
    let sid = cookieId(req);
    let session = sessions.get(sid);
    if (session && session.created + sessionLifetime <= now()) { sessions.delete(sid); session = undefined; }
    const state = {sid, session, handled: false};
    if (req.method === 'GET' && url.pathname === '/login') {
      await loginPage(req, res, state); state.handled = true; return state;
    }
    if (req.method === 'POST' && url.pathname === '/auth/family/login') {
      await loginWithCode(req, res, state); state.handled = true; return state;
    }
    if (req.method === 'POST' && url.pathname === '/auth/family/logout') {
      checkFormCsrf(req, session, await formBody(req));
      sessions.delete(sid); setCookie(res, '', 0);
      redirect(res, '/login'); state.handled = true; return state;
    }
    if (req.method === 'GET' && url.pathname === '/api/status') {
      if (!session) Object.assign(state, newSession(res));
      return state;
    }
    const publicAssets = ['/family-login.js', '/family-auth.css', '/north-star-logo.png', '/mascot-xiaoguang.png', '/favicon.ico'];
    if (req.method === 'GET' && publicAssets.includes(url.pathname)) return state;
    if (!isAllowed(session)) {
      if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/auth/') || req.method !== 'GET') {
        res.writeHead(401, {'Content-Type': 'application/json; charset=utf-8'});
        res.end(JSON.stringify({error: '請先使用家庭存取碼登入。', loginRequired: true, loginUrl: '/login'}));
      } else redirect(res, '/login');
      state.handled = true;
    }
    return state;
  }
  function accountMarkup(session) {
    if (config.mode !== 'family' || !isAllowed(session)) return '';
    return `<div class="family-account"><span>家庭學習 · ${escapeHtml(config.familyCodes.get(session.family.id).label)}</span><form method="post" action="/auth/family/logout"><input type="hidden" name="csrf" value="${escapeHtml(session.csrf)}"><button type="submit">登出家庭帳號</button></form></div>`;
  }
  return {handle, isAllowed, accountMarkup};
}
