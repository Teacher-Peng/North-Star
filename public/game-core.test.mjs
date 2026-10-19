import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const source=readFileSync(new URL('./game-core.js',import.meta.url),'utf8');
const core=vm.runInNewContext(source+';GameCore');
const learning=vm.runInNewContext(source+';'+readFileSync(new URL('./learning-core.js',import.meta.url),'utf8')+';LearningCore');
function givenGame(kind,details){return {kind,...details};}
function whenGrade(game,values){return core.grade(game,JSON.stringify(values));}
function givenMissionLesson(game){return {unit:3,concept:'互動',questions:[{id:'test-mission',type:'game',game,prompt:'試試看',explain:'解法',hint:'再看看'}]};}
test('accepts either painting arrangement when the same fraction is covered',()=>{const game=givenGame('paint',{cells:8,target:4});assert.deepEqual([whenGrade(game,[0,1,2,3]),whenGrade(game,[1,3,5,7])],[true,true]);});
test('rejects duplicate or outside cells when counting painted area',()=>{const game=givenGame('paint',{cells:8,target:4});assert.deepEqual([whenGrade(game,[0,0,1,2]),whenGrade(game,[0,1,2,8])],[false,false]);});
test('rejects incomplete collection when factors are missing',()=>{const game=givenGame('groups',{total:12});assert.equal(whenGrade(game,[1,2,3,4,6]),false);});
test('accepts all factors when collected in any order',()=>{const game=givenGame('groups',{total:12});assert.equal(whenGrade(game,[12,6,4,3,2,1]),true);});
test('accepts different pieces of equal size when forming a right triangle',()=>{const game=givenGame('angles',{pieces:[45,45,90,60],count:3,target:180});assert.equal(whenGrade(game,[1,0,2]),true);});
test('rejects reused pieces and holes when assembling angles',()=>{const game=givenGame('angles',{pieces:[45,45,90,60],count:3,target:180});assert.deepEqual([whenGrade(game,[0,0,2]),whenGrade(game,[null,0,2])],[false,false]);});
test('rejects a missing point when zero is an actual chart value',()=>{const game=givenGame('chart',{values:[0,5,10]});assert.deepEqual([whenGrade(game,[null,5,10]),whenGrade(game,[0,5,10])],[false,true]);});
test('accepts reflected points when the vertical axis runs through the middle column',()=>{const game=givenGame('mirror',{size:7,axis:'vertical',points:[8,16,29]});assert.equal(whenGrade(game,[12,18,33]),true);});
test('accepts reflected points when the horizontal axis runs through the middle row',()=>{const game=givenGame('mirror',{size:7,axis:'horizontal',points:[9,17,12]});assert.equal(whenGrade(game,[37,31,40]),true);});
test('rejects extra marked points when the reflected pattern is otherwise correct',()=>{const game=givenGame('mirror',{size:7,axis:'vertical',points:[8,16,29]});assert.equal(whenGrade(game,[12,18,33,0]),false);});
test('requires multiplication first when cards describe mixed arithmetic',()=>{const game=givenGame('order',{sequence:['6×3','24+18'],tiles:['24+18','6×3']});assert.deepEqual([whenGrade(game,[1,0]),whenGrade(game,[0,1])],[true,false]);});
test('requires normalized minutes when filling time boxes',()=>{const game=givenGame('time',{total:135});assert.deepEqual([whenGrade(game,[2,15]),whenGrade(game,[1,75]),whenGrade(game,[2,10])],[true,false,false]);});
test('finds opposite face across a folded cube when faces are not neighbors in the net',()=>{const game=givenGame('net',{face:'B',relation:'opposite'});assert.deepEqual([whenGrade(game,['D']),whenGrade(game,['E'])],[true,false]);});
test('finds all four adjacent faces when the center face is given',()=>{const game=givenGame('net',{face:'C',relation:'adjacent'});assert.equal(whenGrade(game,['A','B','D','F']),true);});
test('keeps solution private and describes the drawing when the tutor reads an unfinished mission',()=>{const lesson=givenMissionLesson(givenGame('paint',{cells:8,target:4,reference:[1,2]}));const result=learning.context(lesson,0,{answers:['[0,1]'],submitted:false});assert.equal(result.visibleContent.interactive.target,undefined);assert.equal(result.visibleContent.interactive.current.paintedCells,2);assert.equal(result.visibleContent.student.fieldCorrect,undefined);assert.equal(result.teacherOnly.game.target,4);});
test('reveals explanation when an interactive mission is submitted correctly',()=>{const lesson=givenMissionLesson(givenGame('paint',{cells:8,target:4}));const result=learning.context(lesson,0,{answers:['[0,1,2,3]'],submitted:true});assert.equal(result.visibleContent.visibleSolution,'解法');assert.equal(result.visibleContent.student.fieldCorrect[0],true);});
