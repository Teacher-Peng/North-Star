import {test} from 'node:test';
import assert from 'node:assert/strict';
import {fingerprint,auditQuestion,auditUnit,auditStructure} from './question-quality.mjs';
function givenQuestion(){return {id:'test-area',type:'number',prompt:'底8高5的三角形面積？',answer:'20',hint:'兩片可以拼合。',explain:'8×5÷2=20。'};}
function givenProfile(q=givenQuestion()){
 const p={id:q.id,revision:1,curriculum:'8-2',objective:'計算三角形面積',thinking:'計算',interaction:'輸入數字',difficulty:'基礎',misconception:'忘除二',grading:'底乘高取一半',prerequisites:['乘除'],scaffolding:['觀察兩片'],cases:[{answers:['20'],accept:true,reason:'面積20'},{answers:['40'],accept:false,reason:'不是雙倍面積'}],reviews:{}};
 p.fingerprint=fingerprint(q,{},p);return p;
}
const core={grade(q,a){return [a[0]===q.answer];},context(l){return {visibleContent:{prompt:l.questions[0].prompt}};}};
function whenAudit(q=givenQuestion(),p=givenProfile(q),dependencies={}){return auditQuestion(q,p,dependencies,core,()=>'<svg>底 8</svg>');}
function givenApprovedProfile(){const p=givenProfile();for(const key of ['pedagogical','visual','human'])p.reviews[key]={status:'passed',reviewer:'test reviewer',method:'human',date:'2026-10-20',fingerprint:p.fingerprint,evidence:'test observation'};return p;}
function givenWrongAnswer(){return {...givenQuestion(),answer:'40'};}
function givenChangedObjective(){return {...givenApprovedProfile(),objective:'變更教學目標'};}
function givenMissingRenderLabel(){const p=givenProfile();p.renderLabels=['高 5'];p.fingerprint=fingerprint(givenQuestion(),{},p);return p;}
function givenLeakingCaption(){const q=givenQuestion();q.diagram={description:'答案是20'};const p=givenProfile(q);p.forbiddenVisibleText=['答案是20'];p.fingerprint=fingerprint(q,{},p);return {q,p};}
function givenOpenBlocker(){const p=givenApprovedProfile();p.findings=[{id:'math',severity:'major',status:'open',reason:'缺少必要條件'}];return p;}
function givenRepeatedGames(){return {questions:[{id:'a',type:'game',game:{kind:'order'}},{id:'b',type:'game',game:{kind:'order'}},{id:'c',type:'game',game:{kind:'order'}}]};}
test('keeps content pending when only automated checks pass',()=>{assert.equal(whenAudit().status,'待審');});
test('detects wrong mathematical answers when fixed examples disagree',()=>{assert.ok(whenAudit(givenWrongAnswer()).issues.some(i=>i.code==='grading'));});
test('invalidates reviews when a shared renderer changes',()=>{assert.ok(whenAudit(givenQuestion(),givenApprovedProfile(),{renderer:'changed'}).issues.some(i=>i.code==='stale'));});
test('invalidates reviews when the teaching objective changes',()=>{assert.ok(whenAudit(givenQuestion(),givenChangedObjective()).issues.some(i=>i.code==='stale'));});
test('blocks missing diagram labels when required facts are not rendered',()=>{assert.ok(whenAudit(givenQuestion(),givenMissingRenderLabel()).issues.some(i=>i.code==='diagram-label'));});
test('detects a known answer leak when visible caption includes it',()=>{const {q,p}=givenLeakingCaption();assert.ok(whenAudit(q,p).issues.some(i=>i.code==='answer-leak'));});
test('allows a trial when current teaching visual and human evidence exist',()=>{assert.equal(whenAudit(givenQuestion(),givenApprovedProfile()).status,'可試用');});
test('blocks release when a major issue remains despite approvals',()=>{assert.equal(whenAudit(givenQuestion(),givenOpenBlocker()).status,'草稿');});
test('keeps a question as draft when its profile is absent',()=>{assert.equal(auditQuestion(givenQuestion(),undefined,{},core,()=>'' ).status,'草稿');});
test('flags unit monotony when every game uses the same mechanism',()=>{assert.ok(auditUnit(givenRepeatedGames(),[]).some(i=>i.code==='interaction-concentration'));});
function givenChildEvidence(){const p=givenApprovedProfile();p.reviews.child={status:'passed',reviewer:'test observer',method:'observed-child',date:'2026-10-20',fingerprint:p.fingerprint,evidence:'Observed learner explain task and complete without demonstration'};return p;}
function givenAiOnlyApproval(){const p=givenApprovedProfile();p.reviews.human.method='ai';return p;}
test('marks verified when a trial includes current child observation evidence',()=>{assert.equal(whenAudit(givenQuestion(),givenChildEvidence()).status,'已驗證');});
test('keeps content pending when AI approval substitutes for a human',()=>{assert.equal(whenAudit(givenQuestion(),givenAiOnlyApproval()).status,'待審');});

function givenImpossibleTriangle(){return {diagram:{kind:'angles',values:[80,80,80]}};}
function givenWrongPaintTarget(){return {game:{kind:'paint',cells:8,target:3,reference:[1,2]}};}
function givenUnreachableTime(){return {game:{kind:'time',operation:'multiply',minutes:17,n:1,total:17}};}
test('blocks impossible geometry when triangle angles do not sum to 180',()=>{assert.equal(auditStructure(givenImpossibleTriangle()).length,1);});
test('blocks wrong paint answers when the reference fraction differs',()=>{assert.equal(auditStructure(givenWrongPaintTarget()).length,1);});
test('blocks unreachable time tasks when controls move in five minute increments',()=>{assert.equal(auditStructure(givenUnreachableTime()).length,1);});
