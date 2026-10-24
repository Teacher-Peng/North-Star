import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createFamilyCode, hashFamilyCode, readFamilyCodes, verifyFamilyCode} from './family-codes.mjs';

function givenCodes(code = 'ABCD234567') {
  return readFamilyCodes(JSON.stringify([{id: 'family', label: 'Family', hash: hashFamilyCode(code)}]));
}

test('generates exactly ten unambiguous characters when creating an invitation', () => {
  const invitation = createFamilyCode('family', 'Family');

  assert.match(invitation.code, /^[2-9A-HJ-NP-Z]{10}$/);
  assert.deepEqual(invitation.entry, {id: 'family', label: 'Family', hash: hashFamilyCode(invitation.code)});
  assert.deepEqual(verifyFamilyCode(invitation.code, givenCodes(invitation.code)), {id: 'family', codeHash: invitation.entry.hash});
});

test('accepts lowercase and surrounding whitespace when entering a ten-character code', () => {
  const codes = givenCodes();

  const identity = verifyFamilyCode('  abcd234567\n', codes);

  assert.deepEqual(identity, {id: 'family', codeHash: hashFamilyCode('ABCD234567')});
});

test('rejects a different ten-character code when it does not match an invitation', () => {
  assert.equal(verifyFamilyCode('ABCD234568', givenCodes()), null);
});

test('rejects nine characters when an invitation is incomplete', () => {
  assert.equal(verifyFamilyCode('ABCD23456', givenCodes('ABCD23456')), null);
});

test('rejects eleven characters when an invitation is too long', () => {
  assert.equal(verifyFamilyCode('ABCD2345678', givenCodes('ABCD2345678')), null);
});

test('rejects internal whitespace when entering a code', () => {
  assert.equal(verifyFamilyCode('ABCD 234567', givenCodes()), null);
});

test('revokes the old invitation when its family hash is replaced', () => {
  const oldCode = 'ns1.family.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef';
  const codes = givenCodes();

  assert.equal(verifyFamilyCode(oldCode, codes), null);
  assert.deepEqual(verifyFamilyCode('ABCD234567', codes), {id: 'family', codeHash: hashFamilyCode('ABCD234567')});
});

test('revokes a previous short code when another code replaces it', () => {
  assert.equal(verifyFamilyCode('ABCD234567', givenCodes('WXYZ765432')), null);
});

test('matches the right family when short and legacy invitations coexist', () => {
  const legacyCode = 'ns1.legacy.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef';
  const codes = readFamilyCodes(JSON.stringify([
    {id: 'family', label: 'Family', hash: hashFamilyCode('ABCD234567')},
    {id: 'legacy', label: 'Legacy', hash: hashFamilyCode(legacyCode)},
  ]));

  assert.deepEqual(verifyFamilyCode('ABCD234567', codes), {id: 'family', codeHash: hashFamilyCode('ABCD234567')});
  assert.deepEqual(verifyFamilyCode(legacyCode, codes), {id: 'legacy', codeHash: hashFamilyCode(legacyCode)});
});
