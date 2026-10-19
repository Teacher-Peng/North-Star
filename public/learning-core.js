// Shared by the browser and local server: data, grading and tutor context agree.
const LearningCore = Object.freeze({
 normalize(value){return String(value??'').normalize('NFKC').replace(/\s+/g,'').replace(/⁄/g,'/');},
 value(value){
  const text=this.normalize(value);
  if(!/^[+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:\/[+]?(?:\d+(?:\.\d+)?|\.\d+))?$/.test(text))return null;
  const [n,d='1']=text.split('/').map(Number);const result=n/d;
  return d!==0 && Number.isFinite(result)?result:null;
 },
 grade(question,answers){
  if(question.type==='game')return [GameCore.grade(question.game,answers[0])];
  if(question.type==='choice')return [answers[0]===question.answer];
  const expected=question.type==='steps'?question.fields.map(f=>f.answer):[question.answer];
  return expected.map((answer,i)=>{
   if(question.exactFraction)return this.normalize(answers[i])===this.normalize(answer);
   const a=this.value(answers[i]),b=this.value(answer);
   return a!==null && b!==null && Math.abs(a-b)<1e-10;
  });
 },
 context(lesson,index,state={}){
  const q=index===null?null:lesson.questions[index];
  const answers=Array.isArray(state.answers)?state.answers.slice(0,4).map(v=>String(v).slice(0,q?.type==='game'?512:80)):[];
  const checks=q?this.grade(q,answers):[];
  const submitted=state.submitted===true;
  return {
   page:q?'練習題':'觀念頁',unit:lesson.unit,topic:lesson.concept,title:lesson.title,
   goal:lesson.goal,
   visibleContent:q?{
    questionId:q.id,questionNumber:index+1,type:q.type,prompt:q.prompt,choices:q.choices,
    fields:q.fields?.map(f=>({label:f.label,unit:f.unit})),unit:q.unit,incorrectWorkedExample:q.work,
    diagram:this.diagramContext(q.diagram,submitted&&checks.every(Boolean)),
    interactive:q.game?{...GameCore.publicSpec(q.game),current:GameCore.describe(q.game,answers[0]),comparisonVisible:state.gameView?.fold===true,packetSize:Number.isInteger(state.gameView?.packetSize)&&state.gameView.packetSize>0&&state.gameView.packetSize<=24?state.gameView.packetSize:undefined}:undefined,
    student:{answers,submitted,fieldCorrect:submitted?checks:undefined,attempts:Number.isInteger(state.attempts)?Math.min(Math.max(state.attempts,0),100):0,hintVisible:state.hint===true},
    visibleHint:state.hint===true?q.hint:undefined,
    visibleSolution:submitted&&checks.every(Boolean)?q.explain:undefined
   }:{explanation:lesson.explanation,example:lesson.example,notes:lesson.notes,diagram:this.diagramContext(lesson.introDiagram,true)},
   teacherOnly:q?{game:q.game,answer:q.answer,steps:q.fields,explanation:q.explain,hint:q.hint}:undefined
  };
 },
 diagramContext(d,reveal){
  if(!d)return null;
  const result={...d,revealed:reveal};
  if(d.kind==='angles'){
   result.labels=d.values.map((v,i)=>({position:['左下','右下','頂部'][i],color:['橘色','綠色','紫色'][i],text:!reveal&&(i===d.unknown||d.equilateral||(d.isosceles&&d.unknown===0&&i===1))?'?':v+'°'}));
   delete result.values;result.sumBarVisible=reveal;
  }
  return result;
 }
});
if(typeof module!=='undefined')module.exports=LearningCore;
