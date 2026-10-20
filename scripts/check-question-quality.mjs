import {readFileSync, writeFileSync} from 'node:fs';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import {fingerprint, auditQuestion, auditUnit} from './question-quality.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
function read(path){return readFileSync(root+path,'utf8');}
const dependencies=Object.fromEntries(['public/learning-core.js','public/game-core.js','public/diagrams.js','public/games.js','public/app.js','public/styles.css'].map(path=>[path,read(path)]));
const runtime=vm.createContext({});
vm.runInContext(read('public/game-core.js')+'\n'+read('public/learning-core.js')+'\n'+read('public/lessons.js')+'\n'+read('public/diagrams.js'),runtime);
const lessons=vm.runInContext('lessons',runtime),core=vm.runInContext('LearningCore',runtime),render=vm.runInContext('questionDiagram',runtime);
const args=process.argv.slice(2),unitArg=args.find(a=>a.startsWith('--unit='));
if(args.some(a=>!['--release','--packet'].includes(a)&&!a.startsWith('--unit=')))throw new Error('支援 --release、--packet、--unit=單元ID');
const selected=unitArg?lessons.filter(l=>l.id===unitArg.slice(7)):lessons;
if(!selected.length)throw new Error('未知單元ID');
const allIds=lessons.flatMap(l=>l.questions.map(q=>q.id));
const duplicateIds=new Set(allIds).size!==allIds.length;
function cell(value){return String(value).replaceAll('|','／').replaceAll('\n',' ');}
const units=selected.map(lesson=>{
 let document;
 try{document=JSON.parse(read(`quality/${lesson.id}.json`));}catch{document={questions:[],coverage:[]};}
 const profiles=document.questions;
 const results=lesson.questions.map(q=>auditQuestion(q,profiles.find(p=>p.id===q.id),dependencies,core,render,lesson));
 const issues=auditUnit(lesson,profiles,document.coverage);
 if(duplicateIds)issues.push({severity:'blocker',message:'全題庫題目 ID 重複'});
 if(new Set(profiles.map(p=>p.id)).size!==profiles.length)issues.push({severity:'blocker',message:'履歷 ID 重複'});
 for(const p of profiles)if(!lesson.questions.some(q=>q.id===p.id))issues.push({severity:'blocker',message:`履歷找不到題目 ${p.id}`});
 const blockers=results.flatMap(r=>r.issues).concat(issues).filter(i=>['blocker','major'].includes(i.severity));
 return {lesson,profiles,results,issues,blockers};
});
const results=units.flatMap(u=>u.results),blocking=units.flatMap(u=>u.blockers);
const ready=results.every(r=>['可試用','已驗證'].includes(r.status));
function unitReport(u){return [
 `## ${u.lesson.unit}. ${u.lesson.concept}（${u.results.length} 題）`,'',
 '| 題目 | 學習目標 | 狀態 | 案例 | 待辦 |','| --- | --- | --- | --- | --- |',
 ...u.results.map(r=>`| ${r.id} | ${cell(u.profiles.find(p=>p.id===r.id)?.objective||'缺履歷')} | ${r.status} | ${r.checks} | ${cell(r.issues.map(i=>`[${i.severity}] ${i.message}`).join('；')||'無')} |`),'',
 ...u.issues.map(i=>`- [${i.severity}] ${i.message}`),
 '- 課綱標記只是對應，不代表出版社完整題庫或孩子已理解。','',
 ...u.profiles.flatMap(p=>(p.findings||[]).filter(f=>f.status==='resolved').map(f=>`- 修正 ${p.id}：${f.reason} → ${f.resolution}`)),''
].join('\n');}
const filename=selected.length===1?`${selected[0].id.toUpperCase().replaceAll('-','_')}_REPORT.md`:'GRADE5_REPORT.md';
const report=[
 '# 五年級上學期題庫品質報告','',
 `本次涵蓋 ${units.length} 個單元、${results.length} 題，${results.reduce((n,r)=>n+r.checks,0)} 個判分案例；自動阻擋問題 ${blocking.length} 個。`,'',
 '由 `npm run quality` 產生。課綱依使用者提供的南一五上目錄；未涵蓋五下。逐題教學自查與算式依據保存在履歷及 review-basis.json。獨立AI審查、真人教育者與孩子實測尚未完成。','',
 `嚴格試用關卡：${blocking.length===0&&ready?'通過':'未通過（須補目前版本的審查證據）'}。程式通過不等於教學已驗證；不會自動把待審題目隱藏或公開發布。`,'',
 '基本用法：每次挑少量主線題；「加強練習」是同策略變體；遊戲是引導探索，不用完成徽章代表精熟。','',
 '| 單元 | 題數 | 案例 | 自動阻擋 | 待審 |','| --- | --- | --- | --- | --- |',
 ...units.map(u=>`| ${u.lesson.concept} | ${u.results.length} | ${u.results.reduce((n,r)=>n+r.checks,0)} | ${u.blockers.length} | ${u.results.filter(r=>r.status==='待審').length} |`),'',
 ...units.map(unitReport),
 '## 後續人工與裝置驗證','',
 '逐題看初始、提示、答錯、答對畫面；先獨立解題再核對答案。以少量孩子試用觀察是否理解任務與提示。iPad/Pencil、現場口頭解釋與獨立教學審查仍需實測。','',
 '## 版本指紋','',...results.map(r=>`- ${r.id}: \`${r.hash}\``),''
].join('\n');
writeFileSync(root+'quality/'+filename,report);
// Keep the original area report current when running the full audit.
if(selected.length>1){const area=units.find(u=>u.lesson.id==='area');writeFileSync(root+'quality/AREA_REPORT.md','# 面積單元品質報告\n\n全題庫結果見 GRADE5_REPORT.md。\n\n'+unitReport(area));}
if(args.includes('--packet')){
 const packet=['# 五上獨立審查包','','請先解題再展開答案。逐題檢查條件、多解、圖文、先備、提示與互動；記下具體理由，AI 不可代簽真人或孩子實測。',''];
 for(const u of units)for(const q of u.lesson.questions){const p=u.profiles.find(p=>p.id===q.id);packet.push(`## ${q.id}`,'',`版本：${fingerprint(q,dependencies,p)}`,'',`題目：${q.prompt}`,'',`課綱：${p?.curriculum}；先備：${p?.prerequisites.join('、')}；策略：${p?.thinking}`,'',`自查：${p?.reviewNote}`,'',`畫面：http://127.0.0.1:5175/#practice/${u.lesson.id}/${u.lesson.questions.indexOf(q)+1}`,'','```json',JSON.stringify(q.diagram||q.game||q.constraint||{},null,2),'```','','<details><summary>獨立解題後才核對答案</summary>','','```json',JSON.stringify({choices:q.choices,answer:q.answer,fields:q.fields,hint:q.hint,explain:q.explain},null,2),'```','','</details>','');}
 writeFileSync(root+'quality/'+(selected.length===1?selected[0].id.toUpperCase().replaceAll('-','_'):'GRADE5')+'_REVIEW_PACKET.md',packet.join('\n'));
}
console.log(`${units.length} 單元 ${results.length} 題：${blocking.length} 個阻擋問題，${results.reduce((n,r)=>n+r.checks,0)} 個判分案例。報告 quality/${filename}`);
if(blocking.length)console.error(blocking.map(i=>`${i.code||'unit'}: ${i.message}`).join('\n'));
if(args.includes('--release')&&!ready)console.error('未放行：缺少目前版本的教學／視覺／真人確認或有待修問題。');
process.exitCode=blocking.length||(args.includes('--release')&&!ready)?1:0;
