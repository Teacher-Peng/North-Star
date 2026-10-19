// Shared, deterministic rules for the interactive missions. No browser dependencies.
const GameCore=Object.freeze({
 parse(answer){try{const value=JSON.parse(answer);return Array.isArray(value)?value:null;}catch{return null;}},
 sameSet(a,b){return a.length===b.length && new Set(a).size===a.length && a.every(value=>b.includes(value));},
 reflected(game){return game.points.map(index=>{const x=index%game.size,y=Math.floor(index/game.size);return game.axis==='horizontal'?(game.size-1-y)*game.size+x:y*game.size+(game.size-1-x);});},
 netOpposite(face){return {A:'F',F:'A',B:'D',D:'B',C:'E',E:'C'}[face];},
 expected(game){
  switch(game.kind){
   case 'chart':return game.values;
   case 'groups':return Array.from({length:game.total},(_,i)=>i+1).filter(n=>game.total%n===0);
   case 'mirror':return this.reflected(game);
   case 'net':return ['A','B','C','D','E','F'].filter(face=>game.relation==='opposite'?face===this.netOpposite(game.face):face!==game.face&&face!==this.netOpposite(game.face));
   case 'order':return game.sequence.map(text=>game.tiles.indexOf(text));
   default:return null;
  }
 },
 grade(game,answer){
  const values=this.parse(answer);if(!values)return false;
  switch(game.kind){
   case 'paint':return values.length===game.target&&new Set(values).size===values.length&&values.every(n=>Number.isInteger(n)&&n>=0&&n<game.cells);
   case 'angles':return values.length===game.count&&new Set(values).size===values.length&&values.every(n=>Number.isInteger(n)&&n>=0&&n<game.pieces.length)&&values.reduce((sum,n)=>sum+game.pieces[n],0)===game.target;
   case 'time':return values.length===2&&values.every(Number.isInteger)&&values[0]>=0&&values[0]<=5&&values[1]>=0&&values[1]<60&&values[0]*60+values[1]===game.total;
   case 'chart':case 'order':{const expected=this.expected(game);return values.length===expected.length&&values.every((v,i)=>v===expected[i]);}
   case 'groups':case 'mirror':case 'net':return this.sameSet(values,this.expected(game));
   default:return false;
  }
 },
 publicSpec(game){const {target,sequence,...visible}=game;if(game.kind==='time')delete visible.total;return visible;},
 describe(game,answer){
  const values=this.parse(answer)||[];
  if(game.kind==='angles')return {placedAngles:values.filter(Number.isInteger).map(n=>game.pieces[n]),sum:values.reduce((sum,n)=>sum+(Number.isInteger(n)?game.pieces[n]:0),0)};
  if(game.kind==='paint')return {paintedCells:values.length,wholeCells:game.cells};
  if(game.kind==='mirror')return {selectedPoints:values.map(n=>({column:n%game.size+1,row:Math.floor(n/game.size)+1}))};
  if(game.kind==='order')return {steps:values.map(n=>game.tiles[n])};
  if(game.kind==='time')return {hours:values[0],minutes:values[1]};
  return {selected:values};
 }
});
if(typeof module!=='undefined')module.exports=GameCore;
