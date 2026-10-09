// Run after editing data/questions.json. No installation is required.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const file=path.join(root,'data/questions.json');
const data=JSON.parse(fs.readFileSync(file,'utf8'));
const ids=new Set();
for(const q of data.questions){
  if(!q.id||ids.has(q.id)||!q.body||!q.chapters?.length||!q.topics?.length||!q.pages?.length)throw new Error('Invalid or duplicate question: '+q.id);
  ids.add(q.id);
}
fs.writeFileSync(path.join(root,'data/questions.js'),'window.DBMS_DATA = '+JSON.stringify(data)+';\n','utf8');
const text='# CSE-301 DBMS Question Bank\n\n'+data.questions.map(q=>`## ${q.year} · ${q.assessment} · Question ${q.number}\n\n${q.body.split('\n\n').map((p,i)=>{const marks=(q.partMarks||[]).filter(m=>m.paragraph===i);return p+(marks.length?'\n['+marks.map(m=>m.label+': '+(m.marks!==null?m.marks+' marks'+(m.allocation&&/[+×]/.test(m.allocation)?' ('+m.allocation+')':''):'shared '+q.marks+'-mark total')).join('; ')+']':'');}).join('\n\n')}\n\nTotal: ${q.marks} marks.\nSource: ${q.source}, pages ${q.pages.join(', ')}.\n${q.notes.length?'\nNotes: '+q.notes.join(' '):''}`).join('\n\n');
fs.writeFileSync(path.join(root,'data/question-bank.md'),text,'utf8');
console.log('Updated browser data and text export for '+data.questions.length+' entries.');
