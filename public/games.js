const missionIcons={chart:'📈',groups:'🍪',angles:'🧩',paint:'🎨',mirror:'🪞',order:'🛠',time:'⏱',net:'📦'};
let missionRecords=readMissionRecords();
function readMissionRecords(){try{const saved=JSON.parse(localStorage.getItem('north-star-missions-v1')||'{}');return saved&&typeof saved==='object'&&!Array.isArray(saved)?saved:{};}catch{return {};}}
function missionDone(id){return missionRecords[id]===true;}
function saveMission(question){missionRecords[question.id]=true;try{localStorage.setItem('north-star-missions-v1',JSON.stringify(missionRecords));}catch{storageAvailable=false;}}
function missionCount(){return lessons.flatMap(l=>l.questions).filter(q=>q.type==='game'&&missionDone(q.id)).length;}
function renderGames(selected){
 const list=selected?[selected]:lessons;
 app.innerHTML=`<section class="mission-home"><a class="back" href="#home">← 回到我的星球</a><div class="mission-banner">${mascot('progress')}<div><span class="eyebrow">小光的數學遊樂場</span><h1>動手玩，找出數學的祕密。</h1><p>挑一個任務，慢慢試。不計時，也不扣生命！</p><span class="mission-badge">✦ 已探索 ${missionCount()} / 30 個任務</span></div></div>${selected?'<a href="#games">看看其他單元 →</a>':''}${list.map(l=>`<section class="mission-unit"><div class="section-head"><h2>${l.unit}. ${l.gameTitle}</h2><a href="#lesson/${l.id}">先看觀念 →</a></div><div class="mission-cards">${l.questions.map((q,i)=>q.type==='game'?`<a class="mission-card" href="#play/${l.id}/${i+1}"><span class="mission-icon" aria-hidden="true">${missionIcons[q.game.kind]}</span><span class="tag">${missionDone(q.id)?'✦ 已探索，可再挑戰':'動手挑戰'}</span><h3>${q.title}</h3><p>${missionInstruction(q.game.kind)}</p><strong>開始玩 →</strong></a>`:'').join('')}</div></section>`).join('')}</section>`;
}
function missionInstruction(kind){return {chart:'點出資料，讓折線長出來。',groups:'試著分袋，找出不剩下的排法。',angles:'搬動角度拼圖，拼成一條直線。',paint:'點一點、塗一塗，看看份量怎麼變。',mirror:'在格點上畫另一半，再摺起來比對。',order:'把步驟卡放進空位，修好計算順序。',time:'把小時和分鐘裝進時間盒。',net:'在展開圖上找找紙盒的鄰居。'}[kind];}
function gameInput(question){return `<div class="game-board" id="gameBoard"><p class="game-instruction">${missionInstruction(question.game.kind)}</p><div id="gameStage"></div><p id="gameStatus" role="status" aria-live="polite"></p><button type="button" class="game-reset" id="gameReset">↶ 重來這個任務</button></div>`;}
function bindGame(question){
 const root=document.querySelector('#gameBoard');if(!root)return;
 const g=question.game,stage=root.querySelector('#gameStage'),status=root.querySelector('#gameStatus');
 let values=GameCore.parse(session.answers[0])||[];
 let selected=null,preview=session.gameView?.packetSize||1,fold=session.gameView?.fold===true;
 function syncView(){session.gameView={packetSize:preview,fold};updateTutorLearningState();}
 function locked(){return session.answered;}
 function commit(){syncView();session.answers=[JSON.stringify(values)];session.submitted=false;updateTutorLearningState();document.querySelector('#check').disabled=false;document.querySelector('#feedback').textContent='';paint();}
 function toggle(value){if(locked())return;values=values.includes(value)?values.filter(v=>v!==value):[...values,value];commit();}
 function button(text,attrs=''){return `<button type="button" ${attrs} ${locked()?'disabled':''}>${text}</button>`;}
 function fractionBar(n,d,label){return `<div class="fraction-reference"><span>${label} ${n}/${d}</span><div class="reference-strip" style="--parts:${d}">${Array.from({length:d},(_,i)=>`<i class="${i<n?'painted':''}"></i>`).join('')}</div></div>`;}
 function drawAngles(){
  let start=0;
  const paths=values.map((index,i)=>{const a=g.pieces[index];if(!Number.isInteger(index)||a===undefined)return '';const end=start+a;const p=t=>[180+140*Math.cos(Math.PI-t*Math.PI/180),180-140*Math.sin(Math.PI-t*Math.PI/180)];const [x,y]=p(start),[ex,ey]=p(end);start=end;return `<path d="M180 180 L${x} ${y} A140 140 0 ${a>180?1:0} 1 ${ex} ${ey} Z" fill="${['#f5b65b','#8dc8be','#bca0df'][i]}" stroke="white" stroke-width="3"/>`;}).join('');
  return `<svg viewBox="0 0 360 330" role="img" aria-label="目前拼出的角度，目標為半圓 180 度"><path d="M40 180 A140 140 0 0 1 320 180" fill="none" stroke="#a2ad9c" stroke-dasharray="6 5"/><path d="M25 180 H335" stroke="#435e50" stroke-width="3"/>${paths}<text x="180" y="315" text-anchor="middle">合計 ${values.reduce((sum,n)=>sum+(Number.isInteger(n)?g.pieces[n]:0),0)}° ／ 目標 180°</text></svg>`;
 }
 function areaVisual(){
  if(!g.illustration)return '';
  const assembled=values.length>0&&g.tiles[values[0]]===g.sequence[0];
  const moving=assembled?'assembled':'';
  if(g.illustration==='triangle')return `<svg class="area-puzzle ${g.illustration} ${moving}" viewBox="0 0 440 190" role="img" aria-label="兩個全等三角形可以拼成一個底8高5的平行四邊形"><path d="M30 150 L190 150 L30 50 Z" fill="#78b8ab"/><path class="area-moving" d="M220 50 L380 50 L380 150 Z" fill="#f4b55e"/><text x="100" y="178">底 8 公分</text><text x="5" y="35">高 5 公分</text><text x="245" y="178">同樣的一片</text></svg>`;
  if(g.illustration==='parallelogram')return `<svg class="area-puzzle ${g.illustration} ${moving}" viewBox="0 0 440 190" role="img" aria-label="平行四邊形剪下一角平移，可以補成長方形"><path d="M95 45 L275 45 L215 145 L95 145 Z" fill="#78b8ab"/><path class="area-moving" d="M95 45 L95 145 L35 145 Z" fill="#f4b55e"/><path d="M95 45 V145" stroke="#345747" stroke-dasharray="4"/><text x="100" y="175">底 6 公分，高 4 公分</text></svg>`;
  return `<svg class="area-puzzle ${g.illustration} ${moving}" viewBox="0 0 440 190" role="img" aria-label="兩個相同梯形拼成底為上底加下底的平行四邊形"><path d="M30 145 L190 145 L150 45 L70 45 Z" fill="#78b8ab"/><path class="area-moving" d="M220 45 L380 45 L340 145 L260 145 Z" fill="#f4b55e"/><text x="45" y="175">上底4、下底8、高5公分</text></svg>`;
 }
 function paint(){
  const focused=document.activeElement;
  const focusAttr=focused&&stage.contains(focused)?['data-day','data-paint','data-factor','data-point','data-face','data-time','data-slot','data-tile'].find(attr=>focused.hasAttribute(attr)):null;
  const focusValue=focusAttr?focused.getAttribute(focusAttr):null;
  const extraAttr=focusAttr==='data-day'?'data-value':focusAttr==='data-time'?'data-change':null;
  const extraValue=extraAttr?focused.getAttribute(extraAttr):null;
  root.querySelector('#gameReset').disabled=locked();
  if(g.kind==='chart'){
   const points=values.map((v,i)=>Number.isFinite(v)?`${70+i*90},${200-v/g.max*180}`:null);
   stage.innerHTML=`<div class="game-data">${g.labels.map((day,i)=>`<span>${day} <b>${g.values[i]} ${g.unit}</b></span>`).join('')}</div><svg class="live-chart" viewBox="0 0 410 235" role="img" aria-label="你畫的折線圖">${Array.from({length:g.max/g.step+1},(_,i)=>`<line x1="50" x2="360" y1="${200-i*g.step/g.max*180}" y2="${200-i*g.step/g.max*180}" stroke="#d6dfd0"/><text x="10" y="${205-i*g.step/g.max*180}">${i*g.step}</text>`).join('')}${points.map((p,i)=>p?`${i>0&&points[i-1]?`<polyline points="${points[i-1]} ${p}" fill="none" stroke="#367f70" stroke-width="4"/>`:''}<circle cx="${p.split(',')[0]}" cy="${p.split(',')[1]}" r="6" fill="#e59843"/>`:'').join('')}${g.labels.map((label,i)=>`<text x="${70+i*90}" y="228" text-anchor="middle">${label}</text>`).join('')}</svg><div class="plot-columns">${g.labels.map((day,i)=>`<div><strong>${day}</strong>${Array.from({length:g.max/g.step+1},(_,j)=>{const value=g.max-j*g.step;return button(value+g.unit,`data-day="${i}" data-value="${value}" aria-label="${day} ${value}${g.unit}" aria-pressed="${values[i]===value}"`);}).join('')}</div>`).join('')}</div>`;
   status.textContent=`已放好 ${values.filter(Number.isFinite).length} / ${g.labels.length} 個點。`;
  }else if(g.kind==='paint'){
   stage.innerHTML=(g.reference?fractionBar(...g.reference,'目標份量'):g.operands.map((pair,i)=>fractionBar(...pair,i===0?'第一份':g.operator==='+'?'要加入':'要拿走')).join(''))+`<p>點格子塗色，再點一次可以擦掉。</p><div class="paint-strip" style="--parts:${g.cells}">${Array.from({length:g.cells},(_,i)=>button(String(i+1),`data-paint="${i}" class="${values.includes(i)?'painted':''}" aria-label="${g.label} ${i+1}" aria-pressed="${values.includes(i)}"`)).join('')}</div>`;
   status.textContent=`目前塗了 ${values.length} / ${g.cells}。`;
  }else if(g.kind==='groups'){
   const full=Math.floor(g.total/preview),remainder=g.total%preview;
   stage.innerHTML=`<label class="packet-slider">試試每袋 <output>${preview}</output> 個 <input id="packetSize" type="range" min="1" max="${g.total}" value="${preview}" ${locked()?'disabled':''}></label><div class="packets">${Array.from({length:full},()=>`<span class="packet">${'●'.repeat(preview)}</span>`).join('')}${remainder?`<span class="packet leftover">${'●'.repeat(remainder)}<small>剩下的</small></span>`:''}</div><p>這種排法：${full} 袋，剩 ${remainder} 個。點下面的數字，收集或取消一種排法。</p><div class="factor-collection">${Array.from({length:g.total},(_,i)=>button(i+1,`data-factor="${i+1}" aria-label="每袋 ${i+1} 個" aria-pressed="${values.includes(i+1)}"`)).join('')}</div>`;
   status.textContent=`你收集了：${values.length?[...values].sort((a,b)=>a-b).join('、'):'還沒有'}。記得找齊所有能剛好分完的排法。`;
  }else if(g.kind==='mirror'){
   const reflected=GameCore.reflected(g);
   stage.innerHTML=`<p>藍色＝原圖　金色＝你畫的點　虛線＝對稱軸</p><div class="mirror-board ${g.axis} ${fold?'folded':''}">${Array.from({length:49},(_,i)=>button(g.points.includes(i)?'●':values.includes(i)?'★':fold&&reflected.includes(i)?'○':'·',`data-point="${i}" class="${g.points.includes(i)?'source-dot':''} ${values.includes(i)?'chosen-dot':''} ${fold&&reflected.includes(i)?'mirror-ghost':''}" aria-label="第 ${i%7+1} 欄第 ${Math.floor(i/7)+1} 列${g.points.includes(i)?' 原圖點':''}" aria-pressed="${values.includes(i)}"`)).join('')}<span class="reflection-layer" aria-hidden="true">${Array.from({length:49},(_,i)=>`<i>${g.points.includes(i)?'○':''}</i>`).join('')}</span></div>${button(fold?'收起比對':'摺一摺，看看重合嗎','id="mirrorFold" class="secondary"')}<p class="note">○ 是原圖摺過來的位置。可以對照後修正。</p>`;
   status.textContent=fold?`摺過來的 ${reflected.filter(n=>values.includes(n)).length} 個點與你的點重合。`:`已畫 ${values.length} 個點；這次要找 3 個。`;
  }else if(g.kind==='angles'||g.kind==='order'){
   const tiles=g.kind==='angles'?g.pieces.map(n=>n+'°'):g.tiles;
   stage.innerHTML=(g.kind==='angles'?drawAngles():areaVisual())+`<p>把卡片拖進空位；也可以先點卡片，再點空位。點已放入的卡片可取回。</p><div class="game-slots">${Array.from({length:g.kind==='angles'?g.count:g.tiles.length},(_,i)=>button(values[i]==null?`${i+1} 放這裡`:tiles[values[i]],`data-slot="${i}" class="game-slot" aria-label="位置 ${i+1}${values[i]==null?' 空位':' '+tiles[values[i]]}"`)).join('')}</div><div class="game-tiles">${tiles.map((text,i)=>values.includes(i)?'':button(text,`data-tile="${i}" class="game-tile" aria-pressed="${selected===i}"`)).join('')}</div>`;
   status.textContent=selected===null?(values.filter(Number.isInteger).length===(g.kind==='angles'?g.count:g.tiles.length)?'卡片都放好了！看看結果，再按確認答案。':'先選一張卡，再選空位。'):`選好了「${tiles[selected]}」，再點想放的位置。`;
  }else if(g.kind==='time'){
   const hours=values[0]||0,minutes=values[1]||0;
   stage.innerHTML=`<div class="time-story">${g.operation==='multiply'?Array.from({length:g.n},()=>`<span>⏱ ${g.minutes} 分鐘</span>`).join(''):`<span>150 分鐘 ÷ ${g.n} 段</span>`}</div><div class="time-dials"><div><strong>小時盒</strong>${button('−','data-time="0" data-change="-1" aria-label="減少一小時"')}<output>${hours}</output>${button('＋','data-time="0" data-change="1" aria-label="增加一小時"')}</div><div><strong>分鐘盒</strong>${button('−5','data-time="1" data-change="-5" aria-label="減少五分鐘"')}<output>${minutes}</output>${button('＋5','data-time="1" data-change="5" aria-label="增加五分鐘"')}</div></div><div class="hour-boxes">${Array.from({length:hours},()=>'<span>60 分鐘</span>').join('')}<span>${minutes} 分鐘</span></div>`;
   status.textContent=`時間盒裡共有 ${hours*60+minutes} 分鐘。分鐘盒裝滿 60 就換成 1 小時。`;
  }else if(g.kind==='net'){
   const positions={A:[2,1],B:[1,2],C:[2,2],D:[3,2],E:[4,2],F:[2,3]};
   stage.innerHTML=`<div class="cube-net">${Object.entries(positions).map(([face,[col,row]])=>button(face,`data-face="${face}" style="grid-column:${col};grid-row:${row}" class="${face===g.face?'given-face':''}" aria-label="${face} 面${face===g.face?' 題目指定面':''}" aria-pressed="${values.includes(face)}"`)).join('')}</div><p>綠色是 ${g.face} 面。相鄰的面摺起來會共用一條邊，相對的面隔著盒子。</p>`;
   status.textContent=`你選了：${values.length?values.join('、'):'還沒有'}。`;
  }
  bindControls();
  if(focusAttr){const selector=`[${focusAttr}="${focusValue}"]`+(extraAttr?`[${extraAttr}="${extraValue}"]`:'');stage.querySelector(selector)?.focus({preventScroll:true});}
 }
 function place(index){if(locked())return;if(selected!==null){const previous=values[index];values[index]=selected;selected=previous??null;}else if(values[index]!=null){selected=values[index];values.splice(index,1);}commit();}
 function bindControls(){
  for(const b of stage.querySelectorAll('[data-day]'))b.onclick=()=>{if(locked())return;while(values.length<g.labels.length)values.push(null);values[Number(b.dataset.day)]=Number(b.dataset.value);commit();};
  for(const b of stage.querySelectorAll('[data-paint]'))b.onclick=()=>toggle(Number(b.dataset.paint));
  for(const b of stage.querySelectorAll('[data-factor]'))b.onclick=()=>{preview=Number(b.dataset.factor);toggle(preview);};
  const slider=stage.querySelector('#packetSize');if(slider){slider.oninput=()=>{stage.querySelector('output').textContent=slider.value;};slider.onchange=()=>{preview=Number(slider.value);syncView();paint();stage.querySelector('#packetSize').focus({preventScroll:true});};}
  for(const b of stage.querySelectorAll('[data-point]'))b.onclick=()=>toggle(Number(b.dataset.point));
  const folding=stage.querySelector('#mirrorFold');if(folding)folding.onclick=()=>{fold=!fold;syncView();paint();};
  for(const b of stage.querySelectorAll('[data-face]'))b.onclick=()=>toggle(b.dataset.face);
  for(const b of stage.querySelectorAll('[data-time]'))b.onclick=()=>{if(locked())return;let total=(values[0]||0)*60+(values[1]||0);total=Math.max(0,Math.min(355,total+Number(b.dataset.change)*(b.dataset.time==='0'?60:1)));values=[Math.floor(total/60),total%60];commit();};
  for(const b of stage.querySelectorAll('[data-slot]'))b.onclick=()=>place(Number(b.dataset.slot));
  for(const b of stage.querySelectorAll('[data-tile]')){
   let start=null;
   b.onclick=()=>{if(locked())return;selected=Number(b.dataset.tile);paint();};
   b.onpointerdown=event=>{if(locked()||!event.isPrimary||(event.pointerType==='mouse'&&event.button!==0))return;start={x:event.clientX,y:event.clientY};b.setPointerCapture(event.pointerId);b.classList.add('dragging');};
   b.onpointermove=event=>{if(start){b.style.translate=`${event.clientX-start.x}px ${event.clientY-start.y}px`;}};
   b.onpointerup=event=>{if(!start)return;const moved=Math.hypot(event.clientX-start.x,event.clientY-start.y)>8;start=null;b.style.translate='';b.classList.remove('dragging');if(!moved)return;const hit=document.elementFromPoint(event.clientX,event.clientY)?.closest('[data-slot]');selected=Number(b.dataset.tile);if(hit){event.preventDefault();place(Number(hit.dataset.slot));}else paint();};
   b.onpointercancel=()=>{start=null;b.style.translate='';b.classList.remove('dragging');};
  }
 }
 root.querySelector('#gameReset').onclick=function(){if(locked())return;values=[];selected=null;fold=false;preview=1;syncView();session.answers=[];session.submitted=false;updateTutorLearningState();document.querySelector('#check').disabled=true;document.querySelector('#feedback').textContent='';paint();};
 paint();
}
