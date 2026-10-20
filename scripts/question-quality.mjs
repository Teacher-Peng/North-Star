import {createHash} from 'node:crypto';

export function fingerprint(question, dependencies, profile = {}) {
  const editorial = Object.fromEntries(['revision','curriculum','objective','prerequisites','thinking','interaction','difficulty','misconception','scaffolding','grading','cases','facts','renderLabels','forbiddenVisibleText'].map(key => [key,profile[key]]));
  return createHash('sha256').update(JSON.stringify({question, dependencies, editorial})).digest('hex');
}
function filled(value) { return typeof value === 'string' && value.trim().length > 0; }
function atPath(value, path) { return path.split('.').reduce((current, key) => current?.[key], value); }
function currentReview(review, hash) {
  return review?.status === 'passed' && review.fingerprint === hash &&
    ['reviewer','method','date','evidence'].every(key => filled(review[key])) &&
    /^\d{4}-\d{2}-\d{2}$/.test(review.date);
}
export function auditQuestion(question, profile, dependencies, core, render, lesson = {unit:8,title:"面積",concept:"面積",goal:"面積"}) {
  const issues = [];
  function issue(code, message, severity = 'blocker') { issues.push({code, message, severity}); }
  const hash = fingerprint(question, dependencies, profile);
  if (!profile) return {id:question.id, hash, status:'草稿', issues:[{code:'profile-missing',severity:'blocker',message:'缺少題目履歷'}], checks:0};
  for (const key of ['curriculum','objective','thinking','interaction','difficulty','misconception','grading']) {
    if (!filled(profile[key])) issue('profile-field', `履歷缺少 ${key}`);
  }
  for (const key of ['prerequisites','scaffolding']) {
    if (!Array.isArray(profile[key]) || !profile[key].length || !profile[key].every(filled)) issue('profile-field', `履歷缺少 ${key}`);
  }
  if (!Number.isInteger(profile.revision) || profile.revision < 1) issue('revision','內容版本必須是正整數');
  if (profile.fingerprint !== hash) issue('stale','題目或共用程式已改動，履歷與審查需重看');
  for (const key of ['prompt','hint','explain']) if (!filled(question[key])) issue('question-field',`缺少 ${key}`);
  if (question.type === 'choice' && (!Array.isArray(question.choices) || new Set(question.choices).size !== question.choices.length || !question.choices.includes(question.answer))) issue('choice','選項重複或正確答案不在選項內');
  if (!['choice','number','steps','error','game'].includes(question.type)) issue('type','不支援的題型');
  const cases = Array.isArray(profile.cases) ? profile.cases : [];
  if (!cases.some(c => c.accept === true) || !cases.some(c => c.accept === false)) issue('cases','需要獨立推導的正例及反例');
  let checks = 0;
  for (const sample of cases) {
    if (!Array.isArray(sample.answers) || typeof sample.accept !== 'boolean' || !filled(sample.reason)) { issue('case-format','案例需答案陣列、預期結果與理由'); continue; }
    try {
      const result = core.grade(question, sample.answers);
      const accepted = result.length > 0 && result.every(Boolean);
      checks++;
      if (accepted !== sample.accept) issue('grading',`${sample.reason}：預期${sample.accept?'接受':'拒絕'}，實際${accepted?'接受':'拒絕'}`);
    } catch { issue('grading-error','判分器發生例外'); }
  }
  for (const fact of profile.facts || []) {
    if (JSON.stringify(atPath(question, fact.path)) !== JSON.stringify(fact.equals)) issue('fact',`資料不符已推導條件：${fact.path}`);
  }
  try {
    const svg = render(question);
    const revealed = render(question,true);
    if (/NaN|undefined/.test(revealed)) issue('diagram-invalid','解答圖解產生無效數值');
    for (const problem of auditStructure(question)) issues.push(problem);
    for (const label of profile.renderLabels || []) if (!svg.includes(label)) issue('diagram-label',`圖解未呈現標示：${label}`);
    for (const text of profile.forbiddenVisibleText || []) {
      const visible=[question.prompt,question.diagram?.description,svg].join('\n');
      if (visible.includes(text)) issue('answer-leak',`初始畫面包含應避免的答案線索：${text}`);
    }
    if (/NaN|undefined/.test(svg)) issue('diagram-invalid','圖解產生無效數值');
    const context = core.context({...lesson,questions:[question]},0,{});
    if (context.visibleContent.prompt !== question.prompt || context.visibleContent.visibleSolution !== undefined) issue('context','AI 題幹不一致或未答對就暴露解答');
    if (question.diagram && JSON.stringify(context.visibleContent.diagram?.panels) !== JSON.stringify(question.diagram.panels)) issue('context-diagram','AI 圖形資料不一致');
    if (question.constraint && JSON.stringify(context.visibleContent.constraint) !== JSON.stringify(question.constraint)) issue('context-constraint','AI 缺少開放題條件');
  } catch { issue('context-render','圖解或 AI context 產生失敗'); }
  for (const finding of profile.findings || []) {
    if (finding.status !== 'resolved') issue(finding.id, finding.reason, finding.severity);
    else if (!filled(finding.resolution)) issue('resolution','已解決問題缺少修正說明');
  }
  if (question.prompt.length > 90) issue('reading-load','題幹超過 90 字，需檢查讀題負擔（啟發式提示）','warning');
  const reviews = profile.reviews || {};
  const approved = ['pedagogical','visual','human'].every(key => currentReview(reviews[key], hash)) && reviews.human?.method === 'human';
  if (!approved) issue('review-pending','缺少目前版本的教學、視覺／操作或真人確認','pending');
  const blocked=issues.some(i=>['blocker','major'].includes(i.severity));
  const status=blocked?'草稿':!approved?'待審':currentReview(reviews.child,hash)&&reviews.child.method==='observed-child'?'已驗證':'可試用';
  return {id:question.id, hash, status, issues, checks};
}
export function auditUnit(lesson, profiles, coverage = []) {
  const issues=[];
  const games=lesson.questions.filter(q=>q.type==='game');
  if(games.length>=3 && new Set(games.map(q=>q.game.kind)).size===1) issues.push({code:'interaction-concentration',severity:'warning',message:`${games.length} 個遊戲全為 ${games[0].game.kind}，不代表 ${games.length} 種學習操作；需替換或區分用途。`});
  const thinking=lesson.questions.map(q=>profiles.find(p=>p.id===q.id)?.thinking);
  for(let i=2;i<thinking.length;i++) if(thinking[i]&&thinking[i]===thinking[i-1]&&thinking[i]===thinking[i-2]) issues.push({code:'strategy-run',severity:'warning',message:`第 ${i-1}～${i+1} 題連續使用相同策略：${thinking[i]}`});
  for(const section of coverage) if(!profiles.some(p=>p.curriculum?.includes(section))) issues.push({code:'coverage',severity:'major',message:`履歷未對應 ${section}；有標記也不等於完整覆蓋。`});
  return issues;
}


// Check mathematical/data invariants independently of the production grader.
export function auditStructure(q) {
 const issues=[];
 function problem(message){issues.push({code:'math-structure',severity:'blocker',message});}
 const d=q.diagram,g=q.game;
 if(d?.kind==='angles'){
  if(d.values.length!==3||d.values.some(n=>!Number.isFinite(n)||n<=0)||Math.abs(d.values.reduce((a,b)=>a+b,0)-180)>1e-9)problem('三角形角度不是三個正角且和為180');
  if(d.isosceles&&d.values[0]!==d.values[1])problem('等腰標記與底角不一致');
  if(d.equilateral&&d.values.some(n=>n!==60))problem('正三角形不是三個60度');
 }
 if(d?.kind==='fraction'&&(!Number.isInteger(d.denominator)||d.denominator<=0||d.numerator<0||d.numerator>d.denominator||!Number.isInteger(d.numerator*d.targetDenominator/d.denominator)))problem('分數圖等份或目標份數無效');
 if(d?.kind==='chart'&&(d.labels.length!==d.values.length||d.step<=0||d.values.some(n=>!Number.isFinite(n)||n<0)||Math.max(...d.values)<=0))problem('折線圖刻度或資料無效');
 if(d?.kind==='grouped-chart'&&(d.step<=0||d.series.some(s=>s.values.length!==d.labels.length||s.values.some(n=>!Number.isFinite(n)||n<0))))problem('複雜長條圖資料無效');
 if(d?.kind==='mirror-grid'&&d.points.some(p=>p.length!==3||!p.slice(1).every(n=>Number.isInteger(n)&&n>=0&&n<=8)))problem('鏡射格點超出0～8範圍');
 if(q.type==='steps'&&(!q.fields?.length||q.fields.length>4))problem('分步欄位超過AI可接收的4欄或為空');
 if(!g)return issues;
 if(g.kind==='chart'&&(g.labels.length!==g.values.length||g.values.some(v=>v<0||v>g.max||v%g.step!==0)))problem('描點目標不在可選刻度內');
 if(g.kind==='paint'){
  if(!Number.isInteger(g.target)||g.target<0||g.target>g.cells)problem('塗色目標超出可選格數');
  const ref=g.reference?g.reference[0]/g.reference[1]:g.operands[0][0]/g.operands[0][1]+(g.operator==='+'?1:-1)*g.operands[1][0]/g.operands[1][1];
  if(Math.abs(ref*g.cells-g.target)>1e-9)problem('塗色目標與分數運算不一致');
 }
 if(g.kind==='time'){
  const total=g.operation==='multiply'?g.minutes*g.n:g.minutes/g.n;
  if(total!==g.total||!Number.isInteger(total)||total<0||total>359||total%5!==0)problem('時間答案與運算不一致或無法用目前5分鐘按鈕到達');
 }
 if(g.kind==='mirror'&&(g.size!==7||new Set(g.points).size!==g.points.length||g.points.some(v=>!Number.isInteger(v)||v<0||v>=g.size*g.size)))problem('鏡射遊戲資料不符合7×7操作板');
 if(g.kind==='groups'&&(!Number.isInteger(g.total)||g.total<1||g.total>24))problem('分袋數量超出操作板範圍');
 if(g.kind==='order'&&(g.tiles.length!==g.sequence.length||new Set(g.tiles).size!==g.tiles.length||g.sequence.some(s=>!g.tiles.includes(s))))problem('排序卡片缺漏或有重複歧義');
 if(g.kind==='angles'){
  const sums=[];
  function visit(index,count,sum){if(count===g.count){sums.push(sum);return;}for(let i=index;i<g.pieces.length;i++)visit(i+1,count+1,sum+g.pieces[i]);}
  visit(0,0,0);
  if(!sums.includes(g.target)||g.pieces.some(n=>!Number.isFinite(n)||n<=0||n>=180))problem('角片無法組成指定平角或含無效角度');
 }
 return issues;
}
