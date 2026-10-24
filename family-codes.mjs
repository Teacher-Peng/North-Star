import {createHash, randomInt, timingSafeEqual} from 'node:crypto';

// 32 unambiguous characters × 10 positions = 50 bits of cryptographic randomness.
const codeAlphabet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';

export function hashFamilyCode(code) {
  return createHash('sha256').update('north-star-family-code:v1:' + code).digest('hex');
}
export function createFamilyCode(id, label) {
  if (!/^[a-z0-9][a-z0-9-]{0,31}$/.test(id)) throw new Error('Family ID must use 1–32 lowercase letters, digits or hyphens.');
  if (typeof label !== 'string' || !label.trim() || label.length > 60) throw new Error('Family label must contain 1–60 characters.');
  const code = Array.from({length: 10}, () => codeAlphabet[randomInt(codeAlphabet.length)]).join('');
  return {code, entry: {id, label: label.trim(), hash: hashFamilyCode(code)}};
}
export function readFamilyCodes(value = '') {
  let entries;
  try { entries = value ? JSON.parse(value) : []; } catch { throw new Error('FAMILY_ACCESS_CODES must be a JSON array of hashed invitations.'); }
  if (!Array.isArray(entries) || entries.length > 100) throw new Error('FAMILY_ACCESS_CODES must contain at most 100 invitations.');
  const codes = new Map();
  const hashes = new Set();
  for (const entry of entries) {
    if (!entry || typeof entry !== 'object' || !/^[a-z0-9][a-z0-9-]{0,31}$/.test(entry.id || '') ||
        typeof entry.label !== 'string' || !entry.label.trim() || entry.label.length > 60 ||
        typeof entry.hash !== 'string' || !/^[a-f0-9]{64}$/.test(entry.hash) ||
        Object.keys(entry).some(key => !['id', 'label', 'hash'].includes(key)) || codes.has(entry.id) || hashes.has(entry.hash)) {
      throw new Error('Invalid or duplicate family invitation. Store only id, label and SHA-256 hash; never a plaintext code.');
    }
    codes.set(entry.id, {...entry}); hashes.add(entry.hash);
  }
  return codes;
}
export function verifyFamilyCode(value, codes) {
  if (typeof value !== 'string' || value.length > 128) return null;
  const code = value.trim();
  if (/^[2-9A-HJ-NP-Za-hj-np-z]{10}$/.test(code)) {
    const hash = hashFamilyCode(code.toUpperCase());
    const digest = Buffer.from(hash, 'hex');
    let identity = null;
    // Short codes contain no family ID. Compare every configured hash without
    // returning early; no plaintext code or family identifier reaches the client.
    for (const entry of codes.values()) {
      if (timingSafeEqual(digest, Buffer.from(entry.hash, 'hex'))) identity = {id: entry.id, codeHash: hash};
    }
    return identity;
  }
  // Existing invitations remain valid until their hashes are explicitly rotated.
  const match = /^ns1\.([a-z0-9][a-z0-9-]{0,31})\.([A-Za-z0-9_-]{32})$/.exec(code);
  if (!match) return null;
  const entry = codes.get(match[1]);
  const hash = hashFamilyCode(code);
  // Use a fixed-size comparison even for an unknown family ID.
  const matches = timingSafeEqual(Buffer.from(hash, 'hex'), Buffer.from(entry?.hash || '0'.repeat(64), 'hex'));
  return entry && matches ? {id: entry.id, codeHash: hash} : null;
}
