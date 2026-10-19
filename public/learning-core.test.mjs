import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const core=vm.runInNewContext(readFileSync(new URL('./learning-core.js',import.meta.url),'utf8')+';LearningCore');
function givenNumber(answer,extra={}){return{type:'number',answer,...extra};}
function whenGrade(question,answers){return [...core.grade(question,answers)];}
function givenLesson(){return{unit:3,title:'角度',concept:'多邊形',goal:'求角度',explanation:'內角和180度',example:'50+60+70=180',notes:[],introDiagram:{kind:'angles',values:[50,60,70],unknown:2},questions:[{id:'angle-1',type:'number',prompt:'第三角？',answer:'70',explain:'180-50-60=70',hint:'先求已知角總和',diagram:{kind:'angles',values:[50,60,70],unknown:2}}]};}
test('accepts equivalent fractions when a fraction value is requested',()=>{assert.deepEqual(whenGrade(givenNumber('3/4'),['6/8']),[true]);});
test('rejects an unreduced fraction when the requested form is exact',()=>{assert.deepEqual(whenGrade(givenNumber('3/4',{exactFraction:true}),['6/8']),[false]);});
test('rejects empty input when the expected answer is zero',()=>{assert.deepEqual(whenGrade(givenNumber('0'),['']),[false]);});
test('rejects invalid division when the denominator is zero',()=>{assert.deepEqual(whenGrade(givenNumber('1'),['1/0']),[false]);});
test('accepts full width digits when learners type with a Chinese keyboard',()=>{assert.deepEqual(whenGrade(givenNumber('70'),['７０']),[true]);});
test('marks each step separately when one step is wrong',()=>{const question={type:'steps',fields:[{answer:'110'},{answer:'70'}]};assert.deepEqual(whenGrade(question,['110','110']),[true,false]);});
test('rejects incomplete work when the last step is missing',()=>{const question={type:'steps',fields:[{answer:'110'},{answer:'70'}]};assert.deepEqual(whenGrade(question,['110']),[true,false]);});
test('includes the worked illustration when the learner is on a concept page',()=>{const context=core.context(givenLesson(),null);assert.equal(context.page,'觀念頁');assert.equal(context.visibleContent.example,'50+60+70=180');assert.equal(context.visibleContent.diagram.labels[2].text,'70°');assert.equal(context.teacherOnly,undefined);});
test('keeps the unknown angle hidden when the learner has not solved the practice',()=>{const context=core.context(givenLesson(),0,{answers:['110'],submitted:true,attempts:1,hint:true});assert.equal(context.visibleContent.diagram.labels[2].text,'?');assert.equal(context.visibleContent.diagram.values,undefined);assert.equal(context.visibleContent.visibleSolution,undefined);assert.equal(context.visibleContent.student.fieldCorrect[0],false);assert.equal(context.visibleContent.visibleHint,'先求已知角總和');});
test('reveals the explanation when the submitted answer is correct',()=>{const context=core.context(givenLesson(),0,{answers:['70'],submitted:true});assert.equal(context.visibleContent.diagram.labels[2].text,'70°');assert.equal(context.visibleContent.visibleSolution,'180-50-60=70');});
test('does not grade a draft as submitted when the learner is still typing',()=>{const context=core.context(givenLesson(),0,{answers:['110'],submitted:false});assert.equal(context.visibleContent.student.fieldCorrect,undefined);assert.equal(context.visibleContent.student.submitted,false);});
