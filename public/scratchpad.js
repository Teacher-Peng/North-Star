// Per-question drafts are kept only in this tab's memory.
const scratchDrafts=new Map();
const tutorAttachments=new Map();
function scratchPanel(){
 return `<section class="scratch-panel" aria-labelledby="scratchTitle"><h2 id="scratchTitle">✎ 我的解題小白板</h2><p class="note">用手指、Apple Pencil 或滑鼠寫算式。暫存最近 20 題；重新整理後清除。</p><div class="scratch-tools"><button id="scratchPen" aria-pressed="true">筆</button><button id="scratchEraser" aria-pressed="false">橡皮擦</button><button id="scratchUndo">復原</button><button id="scratchClear">清空白板</button><label><input id="scratchPenOnly" type="checkbox"> 只用觸控筆（避免手掌誤畫）</label></div><canvas id="scratchCanvas" width="1200" height="600" aria-label="手寫解題白板">請使用支援畫布的瀏覽器，或改用拍照上傳。</canvas><div class="actions"><button id="attachScratch" class="secondary">附給小光：手寫草稿</button><label class="secondary photo-button">📷 拍照<input id="scratchCamera" type="file" accept="image/*" capture="environment"></label><label class="secondary photo-button">選擇圖片<input id="scratchFile" type="file" accept="image/*"></label></div><div id="scratchPhoto" hidden><img alt="選取的解題照片預覽"><div class="actions"><button id="attachPhoto" class="secondary">附給小光：這張照片</button><button id="removePhoto">移除照片</button></div></div><p id="scratchNotice" class="note" role="status">圖片不會自動送出。附給小光後，可在對話窗確認再送出。</p></section>`;
}
function bindScratchpad(key,onAttach){
 const canvas=document.querySelector('#scratchCanvas');if(!canvas)return;
 const context=canvas.getContext('2d');
 const state=scratchDrafts.get(key)||{strokes:[],photo:null};
 scratchDrafts.delete(key);scratchDrafts.set(key,state);
 if(scratchDrafts.size>20)scratchDrafts.delete(scratchDrafts.keys().next().value);
 let active=null,eraser=false;
 const notice=document.querySelector('#scratchNotice');
 function paint(){
  context.fillStyle='#fff';context.fillRect(0,0,1200,600);
  for(const stroke of state.strokes){context.strokeStyle=stroke.erase?'#fff':'#264e43';context.lineWidth=stroke.erase?32:4;context.lineCap='round';context.lineJoin='round';context.beginPath();const first=stroke.points[0];context.moveTo(first.x,first.y);context.lineTo(first.x+.1,first.y);for(const point of stroke.points)context.lineTo(point.x,point.y);context.stroke();}
  document.querySelector('#scratchUndo').disabled=!state.strokes.length;
 }
 function point(event){const rect=canvas.getBoundingClientRect();return {x:(event.clientX-rect.left)*1200/rect.width,y:(event.clientY-rect.top)*600/rect.height};}
 canvas.onpointerdown=function(event){if(active!==null||(event.pointerType==='mouse'&&event.button!==0)||(document.querySelector('#scratchPenOnly').checked&&event.pointerType!=='pen'))return;event.preventDefault();active=event.pointerId;canvas.setPointerCapture(active);state.strokes.push({erase:eraser,points:[point(event)]});paint();};
 canvas.onpointermove=function(event){if(event.pointerId!==active)return;state.strokes.at(-1).points.push(point(event));paint();};
 function end(event){if(event.pointerId===active)active=null;}
 canvas.onpointerup=end;canvas.onpointercancel=end;canvas.onlostpointercapture=end;
 document.querySelector('#scratchPen').onclick=function(){eraser=false;this.setAttribute('aria-pressed','true');document.querySelector('#scratchEraser').setAttribute('aria-pressed','false');};
 document.querySelector('#scratchEraser').onclick=function(){eraser=true;this.setAttribute('aria-pressed','true');document.querySelector('#scratchPen').setAttribute('aria-pressed','false');};
 document.querySelector('#scratchUndo').onclick=function(){state.strokes.pop();paint();};
 document.querySelector('#scratchClear').onclick=function(){state.strokes=[];paint();};
 document.querySelector('#attachScratch').onclick=function(){if(!state.strokes.some(stroke=>!stroke.erase)){notice.textContent='先在白板寫下你的解法吧。';return;}onAttach(canvas.toDataURL('image/jpeg',.9));};
 function photoPreview(){const box=document.querySelector('#scratchPhoto');box.hidden=!state.photo;if(state.photo)box.querySelector('img').src=state.photo;else box.querySelector('img').removeAttribute('src');}
 async function loadPhoto(event){
  const file=event.target.files[0];if(!file)return;
  try{
   if(file.size>15*1024*1024)throw new Error('圖片太大，請選擇 15 MB 以下的圖片。');
   if(!file.type.startsWith('image/')||file.type==='image/svg+xml')throw new Error('請選擇照片格式，例如 JPEG 或 PNG。');
   notice.textContent='正在準備照片……';
   const bitmap=await createImageBitmap(file);const scale=Math.min(1,1600/Math.max(bitmap.width,bitmap.height));
   const preview=document.createElement('canvas');preview.width=Math.max(1,Math.round(bitmap.width*scale));preview.height=Math.max(1,Math.round(bitmap.height*scale));
   const ctx=preview.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,preview.width,preview.height);ctx.drawImage(bitmap,0,0,preview.width,preview.height);bitmap.close();
   const photo=preview.toDataURL('image/jpeg',.85);if(photo.length>3000000)throw new Error('圖片仍然太大，請拍近一點、只保留這題。');
   state.photo=photo;if(!canvas.isConnected)return;photoPreview();notice.textContent='照片已準備好，確認清楚後按「附給小光」。';
  }catch(error){if(canvas.isConnected)notice.textContent=error.message||'無法讀取圖片，請改用 JPEG 或 PNG。';}
  finally{event.target.value='';}
 }
 document.querySelector('#scratchCamera').onchange=loadPhoto;document.querySelector('#scratchFile').onchange=loadPhoto;
 document.querySelector('#attachPhoto').onclick=function(){if(state.photo)onAttach(state.photo);};
 document.querySelector('#removePhoto').onclick=function(){state.photo=null;photoPreview();};
 paint();photoPreview();
}
