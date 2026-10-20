import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const core=vm.runInNewContext(readFileSync(new URL('./learning-core.js',import.meta.url),'utf8')+';LearningCore');
function whenRead(value){return core.value(value);}
function whenCheckFraction(value,exactFraction){return Array.from(core.grade({type:'number',answer:'3/4',exactFraction},[value]));}
test('accepts a Chinese mixed number when a whole and fractional part are provided',()=>{assert.equal(whenRead('1 又 1/4'),1.25);});
test('accepts a spaced mixed number when the learner uses a keyboard separator',()=>{assert.equal(whenRead('1 1/4'),1.25);});
test('normalizes full width mixed numbers when using a Chinese keyboard',()=>{assert.equal(whenRead('２又１／６'),13/6);});
test('rejects ambiguous separated integers when no fraction is present',()=>{assert.equal(whenRead('1 2'),null);});
test('rejects invalid mixed fractions when the denominator is zero',()=>{assert.equal(whenRead('1又1/0'),null);});
test('rejects unreduced equivalent input when the task specifies the fraction form',()=>{assert.deepEqual(whenCheckFraction('6/8',true),[false]);});
test('accepts equivalent input when the task only asks for a quantity',()=>{assert.deepEqual(whenCheckFraction('6/8',false),[true]);});
