// Tutor credentials and trusted instructions stay on the server; hosted access requires family login.
let tutorContext=null;
let tutorWindowOpen=false;
const tutorDrafts=new Map();
let voiceRecognition=null;
let tutorController=null;
const tutorHistory=new Map();
function tutorPanel(lesson, question=null){
 stopRealtimeVoice();
 if(voiceRecognition){voiceRecognition.abort();voiceRecognition=null;}
 if(tutorController)tutorController.abort();
 
 const previousDraft=document.querySelector('#tutorDraft');
 if(previousDraft && tutorContext)tutorDrafts.set(tutorContext.lesson+':'+tutorContext.question,previousDraft.value);
 tutorContext={lesson:lesson.id,question:question?lesson.questions.indexOf(question):null};
 return scratchPanel()+`<div class="tutor-widget"><button id="tutorLauncher" class="tutor-launcher" aria-controls="tutorWindow" aria-expanded="${tutorWindowOpen}">${animatedMascot("mascot-launcher")} 問問小光老師 <span aria-hidden="true">${tutorWindowOpen?'−':'+'}</span></button><section id="tutorWindow" class="tutor-panel tutor-window" role="dialog" aria-modal="false" aria-labelledby="tutorTitle" ${tutorWindowOpen?'':'hidden'}><div class="tutor-header">${animatedMascot("mascot-avatar")}<div><h2 id="tutorTitle">小光 · AI 老師</h2><span>陪你想一想，不急著給答案</span></div><span id="connectionStatus" class="tutor-status">檢查連線中</span><button id="tutorMinimize" class="tutor-minimize" aria-label="收合 AI 對話視窗">−</button></div><div class="tutor-window-body"><div class="tutor-context"><strong>${question?'正在練習':'正在看觀念'}：</strong>第 ${lesson.unit} 單元 · ${lesson.concept}${question?`<p>${question.prompt}</p>`:''}</div><div class="actions"><button id="tutorLogin" class="secondary" disabled>Continue with ChatGPT</button><button id="tutorLogout" hidden>中斷 ChatGPT 連線</button></div><p class="note">登入後送出的問題與這題的資料會交給 OpenAI。文字使用你的訂閱授權；即時語音使用 API 額度另計費。對話只保留在伺服器暫存記憶體。</p><div id="tutorLog" class="tutor-messages" role="log" aria-live="polite"></div><label for="tutorDraft">我想問……</label><textarea id="tutorDraft" maxlength="1000" rows="3" placeholder="例如：這張圖在說什麼？我這一步哪裡算錯了？"></textarea><div id="tutorAttachment" hidden><img alt="準備送給小光的解題圖片"><p class="note">送出時，這張圖片與目前題目會交給 OpenAI，使用文字對話的訂閱授權。圖片不會傳入語音對話。</p><button id="removeAttachment">取消附圖</button></div><div class="tutor-prompts"><button type="button" data-question="我看不懂圖上的標記，可以一步一步解釋嗎？">我看不懂圖</button><button type="button" data-question="請給我一個提示，先不要說答案。">給我一點提示</button><button type="button" data-question="可以用生活中的例子解釋這個觀念嗎？">換個例子說明</button></div><div class="actions"><button id="voiceStart" class="secondary" disabled>🎙 跟老師對話</button><button id="voiceMute" class="secondary" hidden>靜音</button><button id="voiceStop" class="secondary" hidden>結束語音</button><button id="tutorSend" class="primary" disabled>送出問題</button></div><p id="tutorNotice" class="note" role="status"></p><p id="voiceNotice" class="note">語音會傳給 OpenAI 並直接語音回覆，可插話打斷。閒置2分鐘或單次15分鐘自動結束；切題、收合也會結束。家庭網站需先登入受邀帳號；語音不使用 ChatGPT 訂閱授權。</p><details><summary>AI 老師的教學設定</summary><p>繁體中文、五年級程度、一次一個步驟、先給提示，不代答未完成的練習。</p><p>修改本機 tutor-instructions.txt 後，下次提問即使用新設定。</p></details></div></section></div>`;
}
async function bindTutorPanel(){
 const panel=document.querySelector('.tutor-panel');if(!panel)return;
 const get=id=>panel.querySelector('#'+id),draft=get('tutorDraft'),notice=get('tutorNotice');
 const context={...tutorContext},key=context.lesson+':'+context.question;
 draft.value=tutorDrafts.get(key)||'';
 const launcher=document.querySelector('#tutorLauncher');
 function setWindowOpen(open){
  tutorWindowOpen=open;panel.hidden=!open;launcher.setAttribute('aria-expanded',String(open));
  launcher.innerHTML=`${animatedMascot("mascot-launcher")} 問問小光老師 <span aria-hidden="true">${open?'−':'+'}</span>`;
  if(open)draft.focus({preventScroll:true});
  else{stopRealtimeVoice('視窗已收合，語音已結束。');if(voiceRecognition){voiceRecognition.abort();voiceRecognition=null;}launcher.focus({preventScroll:true});}
 }
 function previewAttachment(){const image=tutorAttachments.get(key);get('tutorAttachment').hidden=!image;if(image)get('tutorAttachment').querySelector('img').src=image;else get('tutorAttachment').querySelector('img').removeAttribute('src');}
 get('removeAttachment').onclick=function(){tutorAttachments.delete(key);previewAttachment();};
 bindScratchpad(key,function(image){tutorAttachments.set(key,image);if(tutorAttachments.size>20)tutorAttachments.delete(tutorAttachments.keys().next().value);previewAttachment();if(!draft.value.trim())draft.value='請看看我的解法，先給我一個提示，不要直接給答案。';setWindowOpen(true);});
 previewAttachment();
 launcher.onclick=()=>setWindowOpen(!tutorWindowOpen);
 get('tutorMinimize').onclick=()=>setWindowOpen(false);
 panel.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();setWindowOpen(false);}});
 draft.addEventListener('input',()=>tutorDrafts.set(key,draft.value));
 let csrf='',connected=false,busy=false,voiceAvailable=false,textLoginAvailable=true;
 function append(role,text){
  const row=document.createElement('div');
  row.className='tutor-chat-row '+(role==='user'?'from-user':'from-assistant');
  const label=document.createElement('span');
  label.className='tutor-chat-name';label.textContent=role==='user'?'你':'小光老師';
  const bubble=document.createElement('p');
  bubble.className='tutor-bubble';bubble.textContent=text;
  row.append(label,bubble);get('tutorLog').append(row);
 }
 for(const item of tutorHistory.get(key)||[]){append(item.role,item.content);}
 function controls(){get('tutorSend').disabled=!connected||busy;get('tutorLogin').disabled=busy||!textLoginAvailable;get('tutorLogin').hidden=connected||!textLoginAvailable;get('tutorLogout').hidden=!connected;}
 async function post(path,data={}){const response=await fetch(path,{method:'POST',headers:{'Content-Type':'application/json','X-CSRF-Token':csrf},body:JSON.stringify(data)});const result=await response.json();if(result.loginRequired){location.assign('/login');throw new Error('請重新登入家庭帳號。');}if(!response.ok){if(response.status===401){connected=false;get('connectionStatus').textContent='請重新登入';controls();}throw new Error(result.error||'連線失敗。');}return result;}
 try{const response=await fetch('/api/status');if(!response.ok)throw new Error();const status=await response.json();if(!panel.isConnected)return;if(status.familyRequired&&!status.familyAuthenticated){location.assign('/login');return;}textLoginAvailable=status.textLoginAvailable!==false;if(!textLoginAvailable)notice.textContent='此網站的文字對話授權尚未啟用。家庭登入與 ChatGPT 授權分開設定。';csrf=status.csrf;connected=status.connected;voiceAvailable=status.voiceAvailable;if(status.loginError){notice.textContent=status.loginError;setWindowOpen(true);}get('connectionStatus').textContent=connected?'已連線 · '+status.model:'尚未登入';controls();}
 catch{notice.textContent='無法連接網站服務，請重新整理後再試。';return;}
 get('tutorLogin').onclick=async()=>{try{get('tutorLogin').disabled=true;const result=await post('/auth/start');location.assign(result.url);}catch(error){notice.textContent=error.message;controls();}};
 get('tutorLogout').onclick=async()=>{try{await post('/api/logout');tutorHistory.clear();location.reload();}catch(error){notice.textContent=error.message;}};
 for(const button of panel.querySelectorAll('[data-question]'))button.onclick=()=>{draft.value=button.dataset.question;tutorDrafts.set(key,draft.value);draft.focus();};
 get('tutorSend').onclick=async()=>{
  const image=tutorAttachments.get(key);
  const message=draft.value.trim()||(image?'請看看我的解法，先給我一個提示。':'');if(!message||busy||!connected)return;
  busy=true;controls();notice.textContent='AI 老師正在想……';
  tutorController=new AbortController();
  try{
   const response=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json','X-CSRF-Token':csrf},body:JSON.stringify({...context,message,image,learningState:context.question!==null&&session?.lesson.id===context.lesson&&session.index===context.question?session.learningState:{}}),signal:tutorController.signal});
   const result=await response.json();if(result.loginRequired){location.assign('/login');throw new Error('請重新登入家庭帳號。');}if(!response.ok)throw new Error(result.error||'回覆失敗。');
   const history=tutorHistory.get(key)||[];history.push({role:'user',content:message},{role:'assistant',content:result.reply});tutorHistory.set(key,history.slice(-12));
   if(!panel.isConnected)return;
   append('user',message+(image?'（已附解題圖片）':''));append('assistant',result.reply);tutorAttachments.delete(key);previewAttachment();draft.value='';tutorDrafts.delete(key);notice.textContent='';
  }catch(error){if(panel.isConnected)notice.textContent=error.name==='AbortError'?'已停止等待回覆。':error.message;}
  finally{busy=false;if(panel.isConnected)controls();}
 };
 bindRealtimeVoice({panel,csrf,context,available:voiceAvailable,append});
}
window.addEventListener('hashchange',()=>{if(voiceRecognition){voiceRecognition.abort();voiceRecognition=null;}if(tutorController)tutorController.abort();});
