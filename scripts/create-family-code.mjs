import {readFile, writeFile, mkdir, lstat, chmod, rename, unlink} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {createFamilyCode, readFamilyCodes} from '../family-codes.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
async function regularPath(path, directory = false) {
  try {
    const stat = await lstat(path);
    if (stat.isSymbolicLink() || (directory ? !stat.isDirectory() : !stat.isFile())) throw new Error('Refusing an unsafe configuration path.');
  } catch (failure) { if (failure.code !== 'ENOENT') throw failure; }
}
async function main() {
  const args = process.argv.slice(2);
  const rotate = args.includes('--rotate');
  const values = args.filter(value => value !== '--rotate');
  if (values.length !== 2) throw new Error('Usage: npm run family:invite -- family-id "Family label" [--rotate]');
  const [id, label] = values;
  const {code, entry} = createFamilyCode(id, label);
  const envPath = root + '.env.local';
  const localPath = root + '.local';
  const inviteDir = localPath + '/family-invites';
  await regularPath(envPath);
  await regularPath(localPath, true);
  await mkdir(localPath, {recursive: true, mode: 0o700});
  await regularPath(inviteDir, true);
  await mkdir(inviteDir, {mode: 0o700, recursive: true});
  await chmod(inviteDir, 0o700);
  const invitePath = inviteDir + '/' + id + '.txt';
  await regularPath(invitePath);
  let source = '';
  try { source = await readFile(envPath, 'utf8'); } catch (failure) { if (failure.code !== 'ENOENT') throw failure; }
  const lines = source.split(/\r?\n/);
  const settings = lines.filter(line => /^FAMILY_ACCESS_CODES\s*=/.test(line));
  if (settings.length > 1) throw new Error('Duplicate FAMILY_ACCESS_CODES settings; resolve before generating an invitation.');
  let setting = settings[0]?.slice(settings[0].indexOf('=') + 1).trim() || '';
  if (setting.startsWith("'") && setting.endsWith("'")) setting = setting.slice(1, -1);
  const entries = readFamilyCodes(setting);
  let inviteExists = false;
  try { await lstat(invitePath); inviteExists = true; } catch (failure) { if (failure.code !== 'ENOENT') throw failure; }
  if (!rotate && (entries.has(id) || inviteExists)) throw new Error('This family already exists. Use --rotate only to intentionally replace its code.');
  entries.set(id, entry);
  if (entries.size > 100) throw new Error('At most 100 family invitations are supported.');
  const retained = lines.filter(line => !/^(FAMILY_ACCESS_CODES|GOOGLE_CLIENT_ID|FAMILY_ALLOWED_EMAILS|FAMILY_ALLOWED_GOOGLE_IDS)\s*=/.test(line));
  const configuration = JSON.stringify([...entries.values()]).replace(/#/g, '\\u0023');
  const updated = retained.join('\n').trimEnd() + '\nFAMILY_ACCESS_CODES=' + configuration + '\n';
  const invitation = `北極星 · ${label}\n\nLocal login: http://localhost:5176/login\nAccess code: ${code}\n\nKeep this code private. Anyone who has it can enter this family's learning space.\nThis is a reusable family credential, not a one-time invitation.\nThe server stores only its hash. This local delivery file contains the original code; do not upload it to hosting.\nAfter storing the code in your password manager, you can delete this delivery file.\n`;
  const envTemp = envPath + '.family-tmp';
  const inviteTemp = invitePath + '.tmp';
  // Exclusive temporary files prevent following symlinks or clobbering concurrent setup.
  await writeFile(envTemp, updated, {mode: 0o600, flag: 'wx'});
  try {
    await writeFile(inviteTemp, invitation, {mode: 0o600, flag: 'wx'});
  } catch (failure) { await unlink(envTemp); throw failure; }
  await rename(envTemp, envPath);
  await rename(inviteTemp, invitePath);
  console.log('Family invitation saved privately to: ' + invitePath);
  console.log('Only the hash was added to .env.local. Restart the family server to apply.');
}
try { await main(); } catch (failure) { console.error(failure.message); process.exitCode = 1; }
