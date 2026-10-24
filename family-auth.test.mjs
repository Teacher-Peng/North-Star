import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Readable} from 'node:stream';
import {readHostingConfig, isApprovedFamily, createFamilyAccess} from './family-auth.mjs';
import {createFamilyCode, hashFamilyCode, verifyFamilyCode, readFamilyCodes} from './family-codes.mjs';

const currentTime = Date.UTC(2026, 9, 20, 12);
const sampleCode = 'ns1.family.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef';
const sampleEntry = {id: 'family', label: 'Test family', hash: hashFamilyCode(sampleCode)};
function givenConfig(overrides = {}) {
  return readHostingConfig({PUBLIC_ORIGIN: 'https://learn.example.test', FAMILY_ACCESS_CODES: JSON.stringify([sampleEntry]), ...overrides});
}
function givenIdentity(overrides = {}) {
  return {id: 'family', codeHash: sampleEntry.hash, ...overrides};
}
function givenResponse() {
  return {
    headers: {}, status: 200, body: '',
    setHeader(name, value) { this.headers[name.toLowerCase()] = value; },
    writeHead(status, headers = {}) { this.status = status; Object.entries(headers).forEach(([name, value]) => this.setHeader(name, value)); },
    end(body = '') { this.body = body; },
  };
}
function givenAccess({config = givenConfig()} = {}) {
  const sessions = new Map();
  let time = currentTime;
  return {sessions, config, advance(ms) { time += ms; }, access: createFamilyAccess({config, sessions, now: () => time})};
}
async function whenRequest(fixture, path, {method = 'GET', cookie = '', form, origin = fixture.config.origin, headers = {}} = {}) {
  const req = Readable.from(form ? [new URLSearchParams(form).toString()] : []);
  req.method = method;
  req.headers = {cookie, origin, 'content-type': 'application/x-www-form-urlencoded', ...headers};
  const res = givenResponse();
  const state = await fixture.access.handle(req, res, new URL(path, fixture.config.origin));
  return {res, state};
}
async function givenPendingLogin(fixture) {
  const response = await whenRequest(fixture, '/login');
  return {
    cookie: response.res.headers['set-cookie'].split(';')[0],
    session: response.state.session, sid: response.state.sid, page: response.res.body,
  };
}
function whenLogin(fixture, pending, form = {}) {
  return whenRequest(fixture, '/auth/family/login', {
    method: 'POST', cookie: pending.cookie, form: {csrf: pending.session.csrf, challenge: pending.session.familyPending?.nonce || 'used', accessCode: sampleCode, ...form},
  });
}
function thenLoginRejected(result, fixture) {
  assert.equal(result.res.headers.location, '/login');
  assert.equal(fixture.access.isAllowed(result.state.session), false);
}

test('requires family access when an HTTPS public origin is configured', () => {
  assert.equal(givenConfig().mode, 'family');
});
test('rejects public bypass when local mode is requested', () => {
  assert.throws(() => givenConfig({FAMILY_AUTH_MODE: 'local'}), /loopback/);
});
test('rejects an exposed listener when local bypass is requested', () => {
  assert.throws(() => readHostingConfig({BIND_HOST: '0.0.0.0'}), /loopback/);
});
test('rejects missing origin when production is selected', () => {
  assert.throws(() => readHostingConfig({NODE_ENV: 'production'}), /PUBLIC_ORIGIN/);
});
test('rejects unencrypted public access when HTTP is configured', () => {
  assert.throws(() => givenConfig({PUBLIC_ORIGIN: 'http://learn.example.test'}), /HTTPS/);
});
test('keeps local prototype usable when no hosting settings exist', () => {
  const config = readHostingConfig({});
  assert.equal(config.mode, 'local');
  assert.equal(config.bindHost, '127.0.0.1');
  assert.equal(config.chatgptLoginEnabled, true);
});
test('disables subscription login by default when hosted mode is selected', () => {
  assert.equal(givenConfig().chatgptLoginEnabled, false);
});
test('fails closed when the allowlist is empty', () => {
  const config = givenConfig({FAMILY_ACCESS_CODES: '[]'});
  assert.equal(config.configured, false);
  assert.equal(isApprovedFamily(givenIdentity(), config), false);
});
test('rejects malformed configuration when plaintext credentials are supplied', () => {
  assert.throws(() => givenConfig({FAMILY_ACCESS_CODES: JSON.stringify([{...sampleEntry, code: sampleCode}])}), /plaintext/);
});
test('rejects duplicate families when two entries use the same ID', () => {
  assert.throws(() => readFamilyCodes(JSON.stringify([sampleEntry, sampleEntry])), /duplicate/);
});
test('accepts the correct code when its hash matches the configured invitation', () => {
  assert.deepEqual(verifyFamilyCode(sampleCode, givenConfig().familyCodes), givenIdentity());
});
test('rejects an incorrect secret when the family ID exists', () => {
  assert.equal(verifyFamilyCode('ns1.family.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdeg', givenConfig().familyCodes), null);
});
test('rejects an unknown family when a valid-looking code is supplied', () => {
  assert.equal(verifyFamilyCode(sampleCode.replace('.family.', '.stranger.'), givenConfig().familyCodes), null);
});
test('accepts surrounding whitespace when pasting a correct code', () => {
  assert.deepEqual(verifyFamilyCode('  ' + sampleCode + '\n', givenConfig().familyCodes), givenIdentity());
});
test('rejects a malformed short code when the format is incomplete', () => {
  assert.equal(verifyFamilyCode('123456', givenConfig().familyCodes), null);
});
test('generates independently usable invitations when two families are created', () => {
  const first = createFamilyCode('alpha', 'Family A');
  const second = createFamilyCode('beta', 'Family B');
  const codes = readFamilyCodes(JSON.stringify([first.entry, second.entry]));
  assert.notEqual(first.code, second.code);
  assert.deepEqual(verifyFamilyCode(first.code, codes), {id: 'alpha', codeHash: first.entry.hash});
  assert.deepEqual(verifyFamilyCode(second.code, codes), {id: 'beta', codeHash: second.entry.hash});
  assert.equal(Object.hasOwn(first.entry, 'code'), false);
});
test('rejects a path-like ID when generating an invitation', () => {
  assert.throws(() => createFamilyCode('../escape', 'Family'), /Family ID/);
});
test('redirects the learning page when the visitor is anonymous', async () => {
  const result = await whenRequest(givenAccess(), '/');
  assert.equal(result.res.headers.location, '/login');
  assert.equal(result.state.handled, true);
});
test('blocks voice before handler execution when the visitor is anonymous', async () => {
  const result = await whenRequest(givenAccess(), '/api/voice', {method: 'POST'});
  assert.equal(result.res.status, 401);
  assert.equal(JSON.parse(result.res.body).loginRequired, true);
  assert.equal(result.state.handled, true);
});
test('blocks text chat when a session exists without family authentication', async () => {
  const fixture = givenAccess();
  const pending = await givenPendingLogin(fixture);
  const result = await whenRequest(fixture, '/api/chat', {method: 'POST', cookie: pending.cookie});
  assert.equal(result.res.status, 401);
});
test('blocks lesson assets when the visitor bypasses the landing page', async () => {
  const result = await whenRequest(givenAccess(), '/lessons.js');
  assert.equal(result.res.headers.location, '/login');
});
test('disables login when no family invitations are configured', async () => {
  const result = await whenRequest(givenAccess({config: givenConfig({FAMILY_ACCESS_CODES: '[]'})}), '/login');
  assert.match(result.res.body, /<fieldset disabled>/);
  assert.match(result.res.body, /家庭登入準備中/);
  assert.doesNotMatch(result.res.body, /accounts.google.com/);
});
test('rotates the cookie and CSRF token when an approved parent signs in', async () => {
  const fixture = givenAccess();
  const pending = await givenPendingLogin(fixture);
  const result = await whenLogin(fixture, pending);
  assert.equal(result.res.headers.location, '/#home');
  assert.equal(fixture.access.isAllowed(result.state.session), true);
  assert.notEqual(result.state.sid, pending.sid);
  assert.notEqual(result.state.session.csrf, pending.session.csrf);
  assert.equal(fixture.sessions.has(pending.sid), false);
  assert.match(result.res.headers['set-cookie'], /HttpOnly; SameSite=Lax; Max-Age=28800; Secure/);
});
test('denies entry when the access code is incorrect', async () => {
  const fixture = givenAccess();
  const pending = await givenPendingLogin(fixture);
  thenLoginRejected(await whenLogin(fixture, pending, {accessCode: 'ns1.family.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdeg'}), fixture);
});
test('creates an authenticated session when a ten-character invitation is entered in lowercase', async () => {
  const invitation = createFamilyCode('short-family', 'Short family');
  const fixture = givenAccess({config: givenConfig({FAMILY_ACCESS_CODES: JSON.stringify([invitation.entry])})});
  const pending = await givenPendingLogin(fixture);

  const result = await whenLogin(fixture, pending, {accessCode: invitation.code.toLowerCase()});

  assert.equal(result.res.headers.location, '/#home');
  assert.equal(fixture.access.isAllowed(result.state.session), true);
  assert.deepEqual(result.state.session.family, {id: 'short-family', codeHash: invitation.entry.hash});
  assert.notEqual(result.state.sid, pending.sid);
});
test('denies entry when the form CSRF token is forged', async () => {
  const fixture = givenAccess();
  const pending = await givenPendingLogin(fixture);
  thenLoginRejected(await whenLogin(fixture, pending, {csrf: 'forged'}), fixture);
});
test('denies entry when the login form comes from another origin', async () => {
  const fixture = givenAccess();
  const pending = await givenPendingLogin(fixture);
  const result = await whenRequest(fixture, '/auth/family/login', {
    method: 'POST', cookie: pending.cookie, origin: 'https://attacker.example',
    form: {csrf: pending.session.csrf, challenge: pending.session.familyPending.nonce, accessCode: sampleCode},
  });
  thenLoginRejected(result, fixture);
});
test('denies entry when the login page has expired', async () => {
  const fixture = givenAccess();
  const pending = await givenPendingLogin(fixture);
  fixture.advance(10 * 60 * 1000);
  thenLoginRejected(await whenLogin(fixture, pending), fixture);
});
test('rejects replay when the anonymous cookie was already exchanged', async () => {
  const fixture = givenAccess();
  const pending = await givenPendingLogin(fixture);
  await whenLogin(fixture, pending);
  thenLoginRejected(await whenLogin(fixture, pending), fixture);
});
test('blocks new requests when the authenticated session expires', async () => {
  const fixture = givenAccess();
  const pending = await givenPendingLogin(fixture);
  const signedIn = await whenLogin(fixture, pending);
  fixture.advance(8 * 60 * 60 * 1000);
  const result = await whenRequest(fixture, '/api/voice', {method: 'POST', cookie: signedIn.res.headers['set-cookie'].split(';')[0]});
  assert.equal(result.res.status, 401);
});
test('revokes access on the next request when the account is removed from the allowlist', async () => {
  const fixture = givenAccess();
  const pending = await givenPendingLogin(fixture);
  const signedIn = await whenLogin(fixture, pending);
  fixture.config.familyCodes.clear();
  const result = await whenRequest(fixture, '/api/chat', {method: 'POST', cookie: signedIn.res.headers['set-cookie'].split(';')[0]});
  assert.equal(result.res.status, 401);
});
test('invalidates the old session when the parent logs out', async () => {
  const fixture = givenAccess();
  const pending = await givenPendingLogin(fixture);
  const signedIn = await whenLogin(fixture, pending);
  const cookie = signedIn.res.headers['set-cookie'].split(';')[0];
  const logout = await whenRequest(fixture, '/auth/family/logout', {method: 'POST', cookie, form: {csrf: signedIn.state.session.csrf}});
  const denied = await whenRequest(fixture, '/api/voice', {method: 'POST', cookie});
  assert.match(logout.res.headers['set-cookie'], /Max-Age=0/);
  assert.equal(denied.res.status, 401);
});
test('keeps the session intact when logout has invalid CSRF', async () => {
  const fixture = givenAccess();
  const pending = await givenPendingLogin(fixture);
  const signedIn = await whenLogin(fixture, pending);
  await assert.rejects(whenRequest(fixture, '/auth/family/logout', {
    method: 'POST', cookie: signedIn.res.headers['set-cookie'].split(';')[0], form: {csrf: 'forged'},
  }), {status: 403});
  assert.equal(fixture.access.isAllowed(signedIn.state.session), true);
});

test('revokes an existing session when the family code is rotated', async () => {
  const fixture = givenAccess();
  const pending = await givenPendingLogin(fixture);
  const signedIn = await whenLogin(fixture, pending);
  fixture.config.familyCodes.set('family', createFamilyCode('family', 'Test family').entry);
  assert.equal(fixture.access.isAllowed(signedIn.state.session), false);
  assert.equal(verifyFamilyCode(sampleCode, fixture.config.familyCodes), null);
});
test('rejects a forged challenge when the session CSRF is otherwise valid', async () => {
  const fixture = givenAccess();
  const pending = await givenPendingLogin(fixture);
  thenLoginRejected(await whenLogin(fixture, pending, {challenge: 'forged'}), fixture);
});
test('does not reflect the submitted secret when a code is rejected', async () => {
  const fixture = givenAccess();
  const pending = await givenPendingLogin(fixture);
  await whenLogin(fixture, pending, {accessCode: '<secret-must-not-appear>'});
  const page = await whenRequest(fixture, '/login', {cookie: pending.cookie});
  assert.doesNotMatch(page.res.body, /secret-must-not-appear/);
});
test('refuses further attempts when the per-process login limit is exhausted', async () => {
  const fixture = givenAccess();
  await Promise.all(Array.from({length: 30}, () => whenRequest(fixture, '/auth/family/login', {method: 'POST', form: {}})));
  const result = await whenRequest(fixture, '/auth/family/login', {method: 'POST', form: {}});
  assert.equal(result.res.status, 429);
  assert.equal(result.res.headers['retry-after'], '60');
  fixture.advance(60000);
  const pending = await givenPendingLogin(fixture);
  const signedIn = await whenLogin(fixture, pending);
  assert.equal(fixture.access.isAllowed(signedIn.state.session), true);
});
