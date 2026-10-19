const app = document.querySelector('#app');
let storageAvailable = true;
let records = readRecords();
let session = null;
function readRecords() {
  try {
    const stored = JSON.parse(localStorage.getItem('north-star-math-five-semester-v2') || '{}');
    if (!stored || typeof stored !== 'object' || Array.isArray(stored)) return {};
    const valid = {};
    for (const lesson of lessons) {
      const entry = stored[lesson.id];
      if (entry && Number.isInteger(entry.score) && entry.score >= 0 && entry.score <= (entry.total || 3) && typeof entry.date === 'string' && !Number.isNaN(Date.parse(entry.date))) valid[lesson.id] = {score:entry.score,total:Number.isInteger(entry.total) && entry.total > 0 && entry.total <= 100 ? entry.total : 3,date:entry.date};
    }
    return valid;
  } catch { storageAvailable = false; return {}; }
}
function saveRecords() {
  try { localStorage.setItem('north-star-math-five-semester-v2', JSON.stringify(records)); }
  catch { storageAvailable = false; }
}
function mascot(size='small') { return `<img class="companion companion-${size}" src="/mascot-xiaoguang.png" alt="" width="100" height="110">`; }
function companionNote(text) { return `<div class="companion-note">${mascot()}<p><strong>小光陪你想</strong><span>${text}</span></p></div>`; }
function context() { return '<div class="context"><span>台中市西區忠孝國小</span><span>·</span><span>115 學年度</span><span class="pill">五年級上學期數學</span><span class="pill">南一版學習情境</span></div>'; }
function card(lesson, index) {
  const completed = Boolean(records[lesson.id]);
  return `<a class="lesson-card" href="#lesson/${lesson.id}"><div class="card-top"><div class="card-friends">${mascot('tiny')}<span class="icon ${lesson.color}">${lesson.icon}</span></div><span class="tag">${completed ? '✓ 已完成，可再練習' : lesson.id === 'angles' ? '正在學的主題' : '約 ' + lesson.duration + ' 分鐘'}</span></div><span class="eyebrow">${String(lesson.unit).padStart(2,'0')} / ${lesson.concept}</span><h3>${lesson.title}</h3><p>${lesson.description}</p><div class="card-foot"><span>3 個互動任務 ＋ ${lesson.questions.length-3} 題練習</span><strong>${completed ? '再次探索' : '開始探索'} ↗</strong></div></a>`;
}
function renderHome() {
  const next = lessons.find(lesson => lesson.id==='angles' && !records[lesson.id]) || lessons.find(lesson => !records[lesson.id]) || lessons[0];
  app.innerHTML = `${context()}<section class="hero"><div><span class="eyebrow">小光陪你 · 數學小旅程</span><h1>今天想挑戰<br>哪個數學任務？</h1><p>拼角度、畫鏡像、開點心店。<br>和小光一起動手，找到數學的小祕密。</p><div class="hero-buttons"><a class="primary" href="#games/angles">先玩角度拼圖 →</a><a class="secondary" href="#games">探索 30 個互動任務</a></div><p class="note">✦ 已探索 ${missionCount()} 個任務 · 沒有倒數，慢慢試就好</p></div><div class="hero-art companion-hero"><div class="mascot-halo" aria-hidden="true"></div>${mascot('hero')}<p class="mascot-hello">嗨，我是小光！<br>今天也一起學一點吧。</p><span class="mascot-spark spark-one" aria-hidden="true">✦</span><span class="mascot-spark spark-two" aria-hidden="true">✧</span></div></section><div class="section-head"><h2>選一個星球，開始探索</h2><span>本週優先：三角形內角</span></div><section class="cards" aria-label="數學課程">${lessons.map(card).join('')}</section><section class="bottom-band">${mascot()}<div><p>${Object.keys(records).length ? '每一小步，都留下成長的足跡。' : '答錯也沒關係，那是學會的開始。'}</p><small>已探索 ${Object.keys(records).length} / ${lessons.length} 個主題 · 卡住時，試試「給我一點提示」</small></div><a href="#progress">看看我的足跡 →</a></section><p class="note">${lessons.reduce((total,lesson)=>total+lesson.questions.length,0)} 題原創代表題 · 參考南一版單元架構，單元目錄已依提供的習作照片核對。這是學習原型，並非完整課本題庫。</p>`;
}
function visual(lesson) { return questionDiagram({diagram:lesson.introDiagram},true); }
function answerInputs(question){
 if(question.type==='choice')return `<div class="choices">${question.choices.map((choice,i)=>`<button class="choice" data-choice="${i}" aria-pressed="false">${choice}</button>`).join('')}</div>`;
 if(question.type==='game')return gameInput(question);
 const fields=question.type==='steps'?question.fields:[{label:question.type==='error'?'改正後的答案':'我的答案',unit:question.unit}];
 return `${question.work?`<div class="incorrect-work"><strong>找出這個解法的錯誤</strong><p>${question.work}</p></div>`:''}<div class="answer-fields">${fields.map((field,i)=>`<label class="answer-field"><span>${question.type==='steps'?'第 '+(i+1)+' 步 · ':''}${field.label}</span><div><input data-answer="${i}" aria-label="${field.label}" type="text" inputmode="${question.answer?.includes('/')?'text':'decimal'}" maxlength="40" autocomplete="off" placeholder="${question.answer?.includes('/')?'例如 3/4':'填入數字'}"><span>${field.unit||''}</span></div><small data-field-feedback="${i}"></small></label>`).join('')}</div>${question.exactFraction?'<p class="note">請依指定方式填分數，例如 3/4。</p>':''}`;
}
function currentAnswers(){return session?.answers||[];}
function updateTutorLearningState(){
 if(!session)return;
 session.learningState={answers:currentAnswers(),submitted:session.submitted===true,attempts:session.attempts,hint:session.hint,gameView:session.gameView};
 syncRealtimeContext();
}
function questionPicker(lesson,index=null) {
 return `<div class="question-picker"><label for="questionPicker">選擇題目</label><select id="questionPicker"><option value="">${index===null?'直接選一題開始練習':'目前第 '+(index+1)+' 題 · 可切換'}</option>${lesson.questions.map((q,i)=>`<option value="${i}">${i+1}. ${q.type==='game'?'🎮 '+q.title+'：':''}${q.prompt.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')}</option>`).join('')}</select><small>這是網站練習題號，並非習作頁碼或題號。</small></div>`;
}
function newPracticeSession(lesson){return {lesson,gameMode:false,gameView:{},index:0,firstCorrect:0,attempts:0,answered:false,selected:null,hint:false,answers:[],submitted:false,questionStates:{},completed:new Set()};}
function moveToQuestion(lesson,index){
 if(!session||session.lesson.id!==lesson.id)session=newPracticeSession(lesson);
 if(session.index===index)return;
 session.questionStates[session.index]={gameView:session.gameView,attempts:session.attempts,answered:session.answered,selected:session.selected,hint:session.hint,answers:[...session.answers],submitted:session.submitted};
 Object.assign(session,{index,gameView:{},attempts:0,answered:false,selected:null,hint:false,answers:[],submitted:false},session.questionStates[index]||{});
}
function nextPracticeLabel(){if(session.gameMode)return '任務完成，挑下一關 ✦';return session.completed.size===session.lesson.questions.length?'完成練習，看成果 ✦':'繼續下一道未完成題 →';}
function renderLesson(lesson) {
  app.innerHTML = `<button class="back" data-home>← 回到我的學習</button><section class="study"><div class="steps"><b>01 學觀念</b><i></i><span>02 動手練習</span><i></i><span>03 看見成長</span></div><span class="eyebrow">五年級數學 / ${lesson.concept}</span><h1>${lesson.title}</h1><div class="goal">◎ 今天的小目標：${lesson.goal}</div><a class="mission-entry" href="#games/${lesson.id}"><span>🎮 ${lesson.gameTitle}</span><strong>先動手玩 3 個任務 →</strong></a>${questionPicker(lesson)}${companionNote('先看圖、找線索，不用急著記答案。')}<article class="panel"><h2>跟小光一起想一想</h2><p>${lesson.explanation}</p>${visual(lesson)}<div class="example">${lesson.example}</div><div class="concept-notes">${lesson.notes.map(([title,body])=>`<section><h3>${title}</h3><p>${body}</p></section>`).join('')}</div></article><div class="actions"><span class="note">看懂一點，就可以試試看。</span><button class="primary" id="startPractice">我準備好了，開始練習 →</button></div>${tutorPanel(lesson)}</section>`;
  document.querySelector('#startPractice').addEventListener('click', function () {session = newPracticeSession(lesson); location.hash = `practice/${lesson.id}`;});

}
function renderPractice() {
  const {lesson,index} = session;
  const question = lesson.questions[index];
  app.innerHTML = `<button class="back" data-home>← 暫停，回到我的學習</button><section class="study"><div class="steps"><span>✓ 學觀念</span><i></i><b>02 動手練習</b><i></i><span>03 看見成長</span></div><span class="eyebrow">${lesson.concept} · ${session.gameMode?'互動任務：'+question.title:'第 '+(index+1)+' / '+lesson.questions.length+' 題'}</span><div class="bar" ${session.gameMode?'hidden':''}><span id="practiceProgress" style="width:${session.completed.size / lesson.questions.length * 100}%"></span></div><p class="note" ${session.gameMode?'hidden':''} id="practiceCompleted" aria-live="polite">本次已完成 ${session.completed.size} / ${lesson.questions.length} 題</p>${session.gameMode?`<a class="back" href="#games/${lesson.id}">← 換一個任務</a>`:questionPicker(lesson,index)}${companionNote('慢慢想就好，卡住時我們一起找提示。')}<article class="panel"><h1>${question.prompt}</h1><p><span class="question-type">${({choice:"觀念選擇",number:"自己填答案",steps:"分步填空",error:"幫小光抓錯",game:"動手闖關"})[question.type]}</span> 慢慢想，也可以請 AI 給提示。</p>${questionDiagram(question)}${answerInputs(question)}<div id="feedback" aria-live="polite"></div><div id="hintContent" aria-live="polite"></div><div class="actions"><button class="secondary" id="hint">✧ 給我一點提示</button><button class="primary" id="check" disabled>確認答案 →</button></div></article><p class="note">這裡不計時。提示和重試，都是學習的一部分。</p>${tutorPanel(lesson,question)}</section>`;
  for (const button of document.querySelectorAll('[data-choice]')) button.addEventListener('click', function () {
    if (session.answered) return;
    session.selected = question.choices[Number(button.dataset.choice)];session.answers=[session.selected];session.submitted=false;updateTutorLearningState();
    for (const choice of document.querySelectorAll('[data-choice]')) {choice.classList.toggle('selected',choice === button); choice.setAttribute('aria-pressed',String(choice === button));}
    document.querySelector('#check').disabled = false;
  });
  for(const input of document.querySelectorAll('[data-answer]'))input.addEventListener('input',function(){
   if(session.answered)return;
   session.answers=Array.from(document.querySelectorAll('[data-answer]')).map(el=>el.value);
   session.submitted=false;updateTutorLearningState();
   document.querySelector('#check').disabled=!session.answers.every(value=>value.trim());
  });
  if(question.type==='game')bindGame(question);
  updateTutorLearningState();
  document.querySelector('#hint').addEventListener('click', function () {session.hint=true;updateTutorLearningState();document.querySelector('#hintContent').innerHTML=`<div class="hint companion-hint">${mascot('tiny')}<div><strong>小光的小提示</strong><br>${question.hint}</div></div>`;});
  document.querySelector('#check').addEventListener('click', checkAnswer);
  for(const input of document.querySelectorAll('[data-answer]')){input.value=session.answers[Number(input.dataset.answer)]||'';input.disabled=session.answered;}
  for(const button of document.querySelectorAll('[data-choice]')){const selected=question.choices[Number(button.dataset.choice)]===session.answers[0];button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',String(selected));button.disabled=session.answered;}
  if(session.hint)document.querySelector('#hintContent').innerHTML=`<div class="hint">${question.hint}</div>`;
  document.querySelector('#check').disabled=!session.answered&&(!session.answers.length||!session.answers.every(value=>String(value).trim()));
  if(session.submitted){
   const checks=LearningCore.grade(question,session.answers);
   for(const [i,ok] of checks.entries()){const label=document.querySelector(`[data-field-feedback="${i}"]`);if(label){label.textContent=ok?'✓ 這一步正確':'再檢查這一步';label.className=ok?'field-ok':'field-retry';}}
   document.querySelector('#feedback').innerHTML=session.answered?`<div class="feedback good"><strong>✓ 這題已完成</strong><p>${question.explain}</p>${questionDiagram(question,true)}</div>`:`<div class="feedback"><strong>我們一起再看一遍。</strong><p>${question.hint}</p></div>`;
  }
  if(session.answered){document.querySelector('#check').textContent=nextPracticeLabel();bindMissionReplay();}
}
function checkAnswer() {
  if (session.answered) {
    if(session.gameMode){location.hash=`games/${session.lesson.id}`;return;}
    if (session.completed.size === session.lesson.questions.length) {
      records[session.lesson.id] = {score:session.firstCorrect,total:session.lesson.questions.length,date:new Date().toISOString()};saveRecords();location.hash=`result/${session.lesson.id}`;return;
    }
    let next=(session.index+1)%session.lesson.questions.length;
    while(session.completed.has(next))next=(next+1)%session.lesson.questions.length;
    location.hash=`practice/${session.lesson.id}/${next+1}`;return;
  }
  if (!session.answers?.length || !session.answers.every(value=>String(value).trim())) return;
  const question = session.lesson.questions[session.index];
  const checks=LearningCore.grade(question,session.answers);
  const correct=checks.every(Boolean);
  session.submitted=true;
  for(const [index,ok] of checks.entries()){
   const label=document.querySelector(`[data-field-feedback="${index}"]`);
   if(label){label.textContent=ok?'✓ 這一步正確':'再檢查這一步';label.className=ok?'field-ok':'field-retry';}
  }
  if (correct && session.attempts === 0) session.firstCorrect++;
  session.attempts++;updateTutorLearningState();
  const feedback = document.querySelector('#feedback');
  if (correct) {
    session.answered=true;session.completed.add(session.index);celebrateMascot();
    if(question.type==='game'){saveMission(question);bindGame(question);}
    document.querySelector("#practiceProgress").style.width=`${session.completed.size/session.lesson.questions.length*100}%`;
    document.querySelector("#practiceCompleted").textContent=`本次已完成 ${session.completed.size} / ${session.lesson.questions.length} 題`;
    feedback.innerHTML=`<div class="feedback good"><div class="companion-feedback">${mascot()}<strong>✓ 你找到答案了！<small>把剛才的方法記住，下次也能用。</small></strong></div><p>${question.explain}</p>${questionDiagram(question,true)}</div>`;
    for (const choice of document.querySelectorAll('[data-choice], [data-answer]')) choice.disabled=true;
    document.querySelector('#check').textContent=nextPracticeLabel();bindMissionReplay();
  } else {
    feedback.innerHTML=`<div class="feedback"><div class="companion-feedback">${mascot()}<strong>我們一起再看一遍。<small>答錯也沒關係，先找下一個小線索。</small></strong></div><p>${question.hint}</p></div>`;
    document.querySelector('#check').disabled=true;
    session.selected=null;
    for (const choice of document.querySelectorAll('[data-choice]')) {choice.classList.remove('selected');choice.setAttribute('aria-pressed','false');}
  }
}
function bindMissionReplay(){
 if(!session.gameMode)return;
 const button=document.createElement('button');button.className='secondary';button.textContent='再玩一次';
 button.onclick=function(){
  const lesson=session.lesson,index=session.index;
  session=newPracticeSession(lesson);session.index=index;session.gameMode=true;render();
 };
 document.querySelector('#feedback').append(button);
}
function renderResult(lesson) {
  const record = records[lesson.id];
  if (!record) {renderLesson(lesson);return;}
  app.innerHTML=`<section class="study result"><div class="mascot-celebration"><span aria-hidden="true">✧</span>${mascot('result')}<span aria-hidden="true">✦</span></div><span class="eyebrow">今天的你，又往前了一小步</span><h1>又完成一段小旅程！</h1><p>你完成了「${lesson.concept}」的學習與練習。</p><div class="panel"><div class="stats"><div class="stat"><strong>${record.total}</strong><small>練習完成</small></div><div class="stat"><strong>${record.score} / ${record.total}</strong><small>首次作答答對</small></div><div class="stat"><strong>1</strong><small>本次探索主題</small></div></div><div class="goal">${record.score === record.total ? '這次你都答對了！隔幾天再來試試，看看還記不記得。' : '你願意再試一次，就是進步。可以回到觀念頁，再慢慢想一遍。'}</div><p class="note">完成練習是學習的開始，不代表已完全熟練。</p></div><div class="actions"><a class="secondary" href="#lesson/${lesson.id}">再看一次觀念</a><a class="primary" href="#home">回到學習旅程 →</a></div></section>`;
}
function renderProgress() {
  app.innerHTML=`${context()}<section class="study"><span class="eyebrow">每一步都算數</span><div class="progress-welcome"><div><h1>我的學習足跡</h1><p>跟昨天的自己比一比，慢慢累積就很好。</p></div>${mascot('progress')}</div>${companionNote('每次願意再試一次，都值得留下來。')}<div class="stats"><div class="stat"><strong>${Object.keys(records).length}</strong><small>已探索主題</small></div><div class="stat"><strong>${Object.values(records).reduce((sum,record)=>sum+record.total,0)}</strong><small>最近紀錄的完成題數</small></div><div class="stat"><strong>${lessons.length}</strong><small>可以探索的主題</small></div></div><div class="panel">${lessons.map(lesson=>{const record=records[lesson.id];return `<div class="progress-row"><span class="icon ${lesson.color}">${lesson.icon}</span><div><h3>${lesson.concept}</h3><p>${record?`已完成 · 最近首次答對 ${record.score}/${record.total} 題 · ${new Date(record.date).toLocaleDateString('zh-TW')}`:'還沒開始，準備好就出發。'}</p></div><a href="#lesson/${lesson.id}">${record?'再練一次':'開始'} →</a></div>`;}).join('')}</div><p class="note">只記錄各主題最近一次完成結果，保存在此瀏覽器。清除瀏覽器資料後，紀錄也會消失。</p></section>`;
}
function render() {
  const [page,id,questionNumber] = location.hash.slice(1).split('/');
  const lesson = lessons.find(item=>item.id===id);
  for (const link of document.querySelectorAll('[data-nav]')) link.classList.toggle('active', link.dataset.nav === (page==='progress'?'progress':'home'));
  if(page==='games')renderGames(lesson);
  else if (page==='lesson' && lesson) renderLesson(lesson);
  else if ((page==='practice'||page==='play') && lesson) {const requested=Number(questionNumber)-1;const index=Number.isInteger(requested)&&requested>=0&&requested<lesson.questions.length?requested:(session?.lesson.id===id?session.index:0);moveToQuestion(lesson,index);session.gameMode=page==='play'&&lesson.questions[index].type==='game';renderPractice();}
  else if (page==='result' && lesson) renderResult(lesson);
  else if (page==='progress') renderProgress();
  else renderHome();
  if (!storageAvailable) app.insertAdjacentHTML('afterbegin','<p class="storage-warning" role="status">瀏覽器目前無法儲存進度，這次學習仍可繼續。</p>');
  for (const button of document.querySelectorAll('[data-home]')) button.addEventListener('click',function(){session=null;location.hash='home';});
  const picker=document.querySelector('#questionPicker');
  if(picker)picker.addEventListener('change',function(){if(picker.value!=='')location.hash=`${lesson.questions[Number(picker.value)].type==='game'?'play':'practice'}/${lesson.id}/${Number(picker.value)+1}`;});
  bindTutorPanel();
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',render);
document.querySelector('#about').addEventListener('click',function(){document.querySelector('#aboutDialog').showModal();});
document.querySelector('#closeAbout').addEventListener('click',function(){document.querySelector('#aboutDialog').close();});
render();
