// All diagram data is authored locally; no learner text is interpolated into markup.
function triangleDiagram(data, reveal = false) {
  const [a,b,c] = data.values;
  const radians = Math.PI / 180;
  const left={x:0,y:0};const right={x:1,y:0};
  const side=Math.sin(b*radians)/Math.sin(c*radians);
  const top={x:side*Math.cos(a*radians),y:-side*Math.sin(a*radians)};
  const minX=Math.min(0,top.x);const maxX=Math.max(1,top.x);
  const scale=Math.min(260/(maxX-minX),165/Math.abs(top.y));
  const offset=70-minX*scale;
  const points=[left,right,top].map(p=>({x:p.x*scale+offset,y:p.y*scale+225}));
  const center={x:points.reduce((n,p)=>n+p.x,0)/3,y:points.reduce((n,p)=>n+p.y,0)/3};
  const colors=['#dd7946','#3f8776','#8264ac'];
  let markup=`<svg viewBox="0 0 400 290" role="img" aria-label="${data.values.map((v,i)=>`第 ${i+1} 個角：${!reveal&&(i===data.unknown||data.equilateral||(data.isosceles&&data.unknown===0&&i===1))?'待求':v+' 度'}`).join('，')}"><polygon points="${points.map(p=>`${p.x},${p.y}`).join(' ')}" fill="#f3f0f8" stroke="#756985" stroke-width="2.5"/>`;
  points.forEach((p,i)=>{
    const previous=points[(i+1)%3];const next=points[(i+2)%3];
    const unit=function(q){const d=Math.hypot(q.x-p.x,q.y-p.y);return{x:(q.x-p.x)/d,y:(q.y-p.y)/d};};
    const u=unit(previous);const v=unit(next);const radius=23;
    const start={x:p.x+u.x*radius,y:p.y+u.y*radius};const end={x:p.x+v.x*radius,y:p.y+v.y*radius};
    const sweep=u.x*v.y-u.y*v.x>0?1:0;
    if(data.values[i]===90)markup+=`<path d="M${start.x} ${start.y} L${p.x+(u.x+v.x)*radius} ${p.y+(u.y+v.y)*radius} L${end.x} ${end.y}" fill="none" stroke="${colors[i]}" stroke-width="2"/>`;
    else markup+=`<path d="M${p.x} ${p.y} L${start.x} ${start.y} A${radius} ${radius} 0 0 ${sweep} ${end.x} ${end.y}Z" fill="${colors[i]}" opacity=".35"/>`;
    const dx=p.x-center.x;const dy=p.y-center.y;const d=Math.hypot(dx,dy);
    const hidden=!reveal&&(i===data.unknown||data.equilateral||(data.isosceles&&data.unknown===0&&i===1));
    markup+=`<text x="${p.x+dx/d*27}" y="${p.y+dy/d*27+6}" text-anchor="middle" fill="${colors[i]}" font-size="20" font-weight="700">${hidden?'?':data.values[i]+'°'}</text>`;
  });
  if(data.isosceles||data.equilateral){
    const edges=data.equilateral?[[0,1],[1,2],[2,0]]:[[0,2],[1,2]];
    for(const [i,j]of edges){const p=points[i],q=points[j],d=Math.hypot(q.x-p.x,q.y-p.y),x=(p.x+q.x)/2,y=(p.y+q.y)/2,dx=-(q.y-p.y)/d*6,dy=(q.x-p.x)/d*6;markup+=`<path d="M${x-dx} ${y-dy}L${x+dx} ${y+dy}" stroke="#756985" stroke-width="2"/>`;}
  }
  markup+='</svg>';
  if(reveal)markup+=`<div class="angle-sum" role="img" aria-label="三個內角相加等於 180 度">${data.values.map((v,i)=>`<span style="flex:${v};background:${colors[i]}">${v}°</span>`).join('')}</div><p class="diagram-caption">${a}° + ${b}° + ${c}° = 180°</p>`;
  return markup;
}
function fractionStrip(n,d,label){return `<div class="strip-label">${label}</div><div class="fraction-strip" role="img" aria-label="平均分成 ${d} 份，其中 ${n} 份著色">${Array.from({length:d},(_,i)=>`<span class="${i<n?'filled':''}"></span>`).join('')}</div>`;}
function questionDiagram(question,reveal=false){
 const d=question.diagram;
 if(!d)return '';
 let content='';let caption='';
 const extra=extraDiagram(d);if(extra)return `<figure class="question-diagram"><div class="diagram-heading">◎ 看圖找線索</div>${extra}<figcaption>${d.description||''}</figcaption></figure>`;
 if(d.kind==='angles'){content=triangleDiagram(d,reveal);caption=d.isosceles?'相同短線標記，表示兩條邊一樣長。':d.equilateral?'三條邊一樣長，三個角也相等。':'觀察已知角，再想想三個角的總和。';}
 if(d.kind==='groups'){
   const cols=reveal?d.solutionCols:d.cols;
   content=`<div class="group-grid" style="grid-template-columns:repeat(${cols}, minmax(0, 1fr))" role="img" aria-label="${d.total} 個圓點，每排 ${cols} 個，完整 ${Math.floor(d.total/cols)} 排，剩下 ${d.total%cols} 個">${Array.from({length:Math.ceil(d.total/cols)*cols},(_,i)=>`<span class="counter ${i>=d.total?'empty':''}"></span>`).join('')}</div>`;
   caption=`共有 ${d.total} 個，每排 ${cols} 個。${reveal?`完整 ${Math.floor(d.total/cols)} 排，剩下 ${d.total%cols} 個。`:'虛線圓圈是沒有放滿的空位。'}`;
 }
 if(d.kind==='fraction'){
   content=fractionStrip(d.numerator,d.denominator,`${d.numerator} / ${d.denominator}`);
   if(reveal)content+=`<div class="strip-arrow">↓ 等份改變，總量不變 ↓</div>`+fractionStrip(d.numerator*d.targetDenominator/d.denominator,d.targetDenominator,`${d.numerator*d.targetDenominator/d.denominator} / ${d.targetDenominator}`);
   else content+='<div class="strip-arrow">同一個整體，想想每份大小和份數的關係。</div>';
   caption='每一條長條都代表同樣大小的一個整體。';
 }
 if(d.kind==='area'){
   const scale=Math.min(250/d.base,155/d.height);const w=d.base*scale,h=d.height*scale,x=70,y=30;
   content=`<svg viewBox="0 0 400 240" role="img" aria-label="底 ${d.base} 公分，高 ${d.height} 公分，三角形占長方形的一半"><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${reveal||d.rectangle?'#eee5f7':'none'}" stroke="#beaecf" stroke-dasharray="5"/><path d="M${x} ${y} L${x} ${y+h} L${x+w} ${y+h}Z" fill="#a492bc" stroke="#78628e" stroke-width="2"/><path d="M${x} ${y+h-13}h13v13" stroke="#463c53" fill="none"/><text x="${x+w/2}" y="${y+h+28}" text-anchor="middle" font-size="16">底 ${d.base} 公分</text><text x="${x-12}" y="${y+h/2}" text-anchor="end" font-size="14">高 ${d.height}</text>${reveal?`<text x="${x+w*.28}" y="${y+h*.75}" fill="white" font-size="20">${d.base*d.height/2}</text>`:''}</svg>`;
   caption=reveal?`底 × 高 = ${d.base*d.height}；取一半 = ${d.base*d.height/2} 平方公分。`:'虛線框的面積是底 × 高；三角形占其中一半。';
 }
 return `<figure class="question-diagram"><div class="diagram-heading">${reveal?'✦ 一起看圖解':'◎ 看圖找線索'}</div>${content}<figcaption>${caption}</figcaption></figure>`;
}

function extraDiagram(d){
 if(d.kind==='area-panels')return `<div class="area-panels">${d.panels.map(areaPanel).join('')}</div>`;
 if(d.kind==='mirror-grid'){
  const position=function(x,y){return [55+x*35,305-y*35];};
  const points=d.points.map(([label,x,y])=>({label,p:position(x,y)}));
  return `<svg viewBox="0 0 400 350" role="img" aria-label="${d.description}">${Array.from({length:9},(_,i)=>`<path d="M55 ${305-i*35}H335M${55+i*35} 25V305" stroke="#dbe2d7"/><text x="${55+i*35}" y="325" text-anchor="middle" font-size="12">${i}</text><text x="40" y="${309-i*35}" text-anchor="end" font-size="12">${i}</text>`).join('')}<path d="${d.axis==='vertical'?'M195 20V310':'M50 165H340'}" stroke="#8264ac" stroke-width="3" stroke-dasharray="7"/>${d.join?`<polyline points="${points.map(v=>v.p.join(',')).join(' ')}" fill="none" stroke="#3f8776" stroke-width="3"/>`:''}${points.map(({label,p})=>`<circle cx="${p[0]}" cy="${p[1]}" r="5" fill="#dd7946"/><text x="${p[0]+8}" y="${p[1]-9}" font-size="13" fill="#573a29">${label}</text>`).join('')}<text x="350" y="326" font-size="12">欄</text><text x="30" y="18" font-size="12">列</text></svg>`;
 }
 if(d.kind==='symmetry-shape'){
  const shapes={rectangle:'M65 65H335V225H65Z',square:'M110 45H310V245H110Z',equilateral:'M200 35L80 243H320Z',isosceles:'M200 30L115 245H285Z',parallelogram:'M120 55H330L280 235H70Z'};
  return `<svg viewBox="0 0 400 280" role="img" aria-label="${d.description}">${d.shape==='circle'?'<circle cx="200" cy="140" r="105" fill="#f3f0f8" stroke="#756985" stroke-width="3"/>':`<path d="${shapes[d.shape]}" fill="#f3f0f8" stroke="#756985" stroke-width="3"/>`}</svg>`;
 }
 if(d.kind==='paper-fold'){
  return `<svg viewBox="0 0 400 290" role="img" aria-label="${d.description}"><rect x="70" y="35" width="260" height="215" fill="#f1f1ec" stroke="#b3b9ae"/><rect x="200" y="35" width="130" height="215" fill="#dcebe9" stroke="#3f8776"/><path d="M200 25V260" stroke="#8264ac" stroke-width="3" stroke-dasharray="6"/><path d="M200 75L290 142.5L200 210" fill="${d.cut==='notch'?'#fff':'#b6d8d0'}" stroke="#dd7946" stroke-width="3" stroke-dasharray="6"/><text x="205" y="18" font-size="13">摺線</text><text x="75" y="275" font-size="12">左半往右摺 →</text><text x="220" y="275" font-size="12">橘色虛線：剪線</text><text x="210" y="145" font-size="12">${d.cut==='notch'?'剪去':'保留'}</text></svg>`;
 }
 if(d.kind==='polygon'){
  const points=Array.from({length:d.sides},(_,i)=>{const angle=-Math.PI/2+i*2*Math.PI/d.sides;return [200+105*Math.cos(angle),135+105*Math.sin(angle)];});
  const diagonals=d.diagonals?points.slice(2,-1).map(p=>`<path d="M${points[0].join(' ')}L${p.join(' ')}" stroke="#dd7946" stroke-width="2" stroke-dasharray="6"/>`).join(''):'';
  return `<svg viewBox="0 0 400 270" role="img" aria-label="${d.description}"><polygon points="${points.map(p=>p.join(',')).join(' ')}" fill="#f3f0f8" stroke="#756985" stroke-width="3"/>${diagonals}${points.map((p,i)=>`<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#3f8776"/><text x="${200+(p[0]-200)*1.17}" y="${140+(p[1]-135)*1.17}" text-anchor="middle" font-size="16">${String.fromCharCode(65+i)}</text>`).join('')}</svg>`;
 }
 if(d.kind==='cards')return `<div class="math-cards">${d.items.map(item=>`<span>${item}</span>`).join('')}</div>`;
 if(d.kind==='fraction-pair')return fractionStrip(...d.a,`${d.a[0]} / ${d.a[1]}`)+fractionStrip(...d.b,`${d.b[0]} / ${d.b[1]}`);
 if(d.kind==='chart'){
  const max=Math.ceil(Math.max(...d.values)/d.step)*d.step,x=i=>60+i*85,y=v=>210-v/max*170;
  return `<svg viewBox="0 0 400 265" role="img" aria-label="${d.description}">${Array.from({length:max/d.step+1},(_,i)=>{const v=i*d.step;return `<path d="M55 ${y(v)}H340" stroke="#dde4d8"/><text x="45" y="${y(v)+5}" text-anchor="end" font-size="12">${v}</text>`;}).join('')}<text x="20" y="20" font-size="13">${d.unit}</text><polyline points="${d.values.map((v,i)=>`${x(i)},${y(v)}`).join(' ')}" fill="none" stroke="#3f8776" stroke-width="3"/>${d.values.map((v,i)=>`<circle cx="${x(i)}" cy="${y(v)}" r="5" fill="#3f8776"/><text x="${x(i)}" y="${y(v)-12}" text-anchor="middle" font-size="14">${d.showValues?v:''}</text><text x="${x(i)}" y="240" text-anchor="middle" font-size="13">${d.labels[i]}</text>`).join('')}</svg>`;
 }
 if(d.kind==='symmetry')return `<svg viewBox="0 0 400 180" role="img" aria-label="${d.description}"><path d="M200 15V145" stroke="#8264ac" stroke-width="3" stroke-dasharray="6"/><path d="M60 85H340" stroke="#c3ccc0"/><circle cx="80" cy="85" r="7" fill="#dd7946"/><circle cx="320" cy="85" r="7" fill="#3f8776"/><text x="72" y="65">A</text><text x="312" y="65">A′</text><text x="115" y="110">${d.distance} ${d.unit||'格'}</text><text x="240" y="110">${d.distance} ${d.unit||'格'}</text><text x="200" y="170" text-anchor="middle">對稱軸（示意圖）</text></svg>`;
 if(d.kind==='square')return '<svg viewBox="0 0 400 220" role="img" aria-label="正方形"><rect x="110" y="20" width="180" height="180" fill="#eee5f7" stroke="#8264ac" stroke-width="3"/></svg>';
 if(d.kind==='solid')return solidDiagram(d);
 if(d.kind==='grouped-chart')return groupedChart(d);
 if(d.kind==='shape-area'){
  const trap=d.shape==='trapezoid';
  return `<svg viewBox="0 0 400 240" role="img" aria-label="${d.description}"><path d="${trap?'M120 40H240L320 185H60Z':'M130 40H330L270 185H70Z'}" fill="#e8ddf0" stroke="#8264ac" stroke-width="2"/><path d="M130 40V185h15v-15h-15" stroke="#3f8776" fill="none" stroke-dasharray="5"/><text x="190" y="215" text-anchor="middle">${trap?'下底':'底'} ${d.base} 公分</text>${trap?`<text x="180" y="25" text-anchor="middle">上底 ${d.top} 公分</text>`:''}<text x="138" y="125">高 ${d.height} 公分</text></svg>`;
 }
 return '';
}

// Labels are authored curriculum data, also included verbatim in tutor context.
function areaPanel(p) {
 const triangle=['triangle','lean-triangle','height'].includes(p.shape);
 const apex=p.shape==='lean-triangle'?300:150;
 const topY=triangle&&Number.isFinite(Number(p.height))?190-Number(p.height)*20:65;
 let outline=triangle?`M60 190L300 190L${apex} ${topY}Z`:p.shape==='trapezoid'?'M120 65H240L300 190H60Z':'M135 65H315L240 190H60Z';
 const cutX=300-240*Number(p.cutBase)/Number(p.base),cutY=65+125*Number(p.cutHeight)/Number(p.height);
 if(p.shape==='cutout')outline=`M60 65H${cutX}L300 ${cutY}V190H60Z`;
 const heightX=triangle?apex:p.shape==='trapezoid'?120:135;
 const altitude=p.shape==='cutout'?'':`<path d="M${heightX} ${topY}V190h${heightX===300?-12:12}v-12h${heightX===300?12:-12}" fill="none" stroke="#357b70" stroke-width="2" stroke-dasharray="5"/><text x="${heightX+15}" y="137" font-size="16">${p.shape==='height'?'B':`高 ${p.height}`}</text>`;
 const cutout=p.shape==='cutout'?`<path d="M${cutX} 65H300V${cutY}Z" fill="#faeadb" stroke="#b46f46" stroke-dasharray="5"/><text x="250" y="55" text-anchor="middle">${p.cutBase}</text><text x="310" y="100">${p.cutHeight}</text><text x="32" y="135">${p.height}</text>`:'';
 return `<svg viewBox="0 0 400 255" role="img" aria-label="${p.title}，底 ${p.base}，高 ${p.height}${p.top?`，上底 ${p.top}`:''}"><text x="200" y="25" text-anchor="middle" font-size="16">${p.title}</text><path d="${outline}" fill="#eee7f6" stroke="#806398" stroke-width="2.5"/><path d="M60 190H${triangle||p.shape==='trapezoid'||p.shape==='cutout'?300:240}" stroke="#d97846" stroke-width="4"/>${altitude}${cutout}${p.shape==='height'?'<text x="85" y="120" font-size="18">A</text>':''}${p.top?`<text x="180" y="55" text-anchor="middle">上底 ${p.top}</text>`:''}<text x="180" y="225" text-anchor="middle">底 ${p.base} 公分</text><text x="200" y="248" text-anchor="middle" font-size="12">示意圖，以標示數值為準</text></svg>`;
}


function groupedChart(d) {
 const max=Math.ceil(Math.max(...d.series.flatMap(series=>series.values))/d.step)*d.step;
 const colors=['#3f8776','#8264ac'];
 return `<svg viewBox="0 0 440 295" role="img" aria-label="${d.description}">${d.series.map((series,k)=>`<rect x="${60+k*170}" y="8" width="14" height="14" fill="${colors[k]}"/><text x="${80+k*170}" y="21" font-size="15">${series.label}</text>`).join('')}${Array.from({length:max/d.step+1},(_,i)=>`<path d="M45 ${235-i*d.step/max*170}H410" stroke="#dbe2d7"/><text x="35" y="${240-i*d.step/max*170}" text-anchor="end" font-size="13">${i*d.step}</text>`).join('')}<text x="15" y="48">${d.unit}</text>${d.labels.map((label,i)=>d.series.map((series,k)=>`<rect x="${75+i*115+k*32}" y="${235-series.values[i]/max*170}" width="26" height="${series.values[i]/max*170}" fill="${colors[k]}"/>`).join('')+`<text x="${105+i*115}" y="264" text-anchor="middle">${label}</text>`).join('')}</svg>`;
}
function solidDiagram(d) {
 const top=d.shape==='cube'?40:80, right=245, backX=305, backY=top-25;
 const points={A:[75,210],B:[right,210],C:[right,top],D:[75,top],E:[135,185],F:[backX,185],G:[backX,backY],H:[135,backY]};
 return `<svg viewBox="0 0 400 280" role="img" aria-label="${d.description}"><path d="M75 ${top}L135 ${backY}H${backX}L${right} ${top}Z" fill="#eadfcf"/><path d="M${right} ${top}L${backX} ${backY}V185L${right} 210Z" fill="#c4d6c5"/><path d="M75 ${top}H${right}V210H75Z" fill="#e4eaf1"/><path d="M75 ${top}L135 ${backY}H${backX}V185L${right} 210H75V${top}H${right}V210M${right} ${top}L${backX} ${backY}" fill="none" stroke="#536b65" stroke-width="2"/><path d="M135 ${backY}V185H${backX}M135 185L75 210" stroke="#536b65" stroke-dasharray="6" fill="none"/>${d.vertices?Object.entries(points).map(([name,[x,y]])=>`<text x="${x-10}" y="${y+15}" font-size="16">${name}</text>`).join(''):`<text x="145" y="${(top+210)/2}">前面</text><text x="180" y="${top-7}">上面</text><text x="258" y="${(top+185)/2}">右面</text>`}${d.edgeLength?`<text x="200" y="255" text-anchor="middle">每條邊 ${d.edgeLength} 公分</text>`:''}${d.dimensions?`<text x="200" y="255" text-anchor="middle">長 ${d.dimensions[0]}・寬 ${d.dimensions[1]}・高 ${d.dimensions[2]} 公分</text>`:''}</svg>`;
}
