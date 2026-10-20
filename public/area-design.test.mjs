import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const core=vm.runInNewContext(readFileSync(new URL('./learning-core.js',import.meta.url),'utf8')+';LearningCore');
function givenDesign(){return {type:'steps',constraint:{kind:'triangle-design',area:12,min:1,max:12}};}
function whenDesignIsChecked(answers){return Array.from(core.grade(givenDesign(),answers));}
test('accepts different correct designs when both satisfy the target area',()=>{
 assert.deepEqual([whenDesignIsChecked(['6','4']),whenDesignIsChecked(['8','3']),whenDesignIsChecked(['2','12'])],[[true,true],[true,true],[true,true]]);
});
test('rejects an incorrect area when dimensions are otherwise valid',()=>{
 assert.deepEqual(whenDesignIsChecked(['6','3']),[false,false]);
});
test('rejects out of range dimensions when their area matches',()=>{
 assert.deepEqual(whenDesignIsChecked(['1','24']),[false,false]);
});
test('rejects fractional dimensions when the task requires integers',()=>{
 assert.deepEqual(whenDesignIsChecked(['2.4','10']),[false,false]);
});
test('rejects incomplete designs when a dimension is missing',()=>{
 assert.deepEqual(whenDesignIsChecked(['6','']),[false,false]);
});
