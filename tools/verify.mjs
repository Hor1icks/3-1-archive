import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const data=JSON.parse(fs.readFileSync(path.join(root,'data/questions.json'),'utf8'));
const context={window:{}};vm.createContext(context);
for(const file of ['search.js','data/questions.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context);
assert.deepEqual(JSON.parse(JSON.stringify(context.window.ARCHIVE_DATA)),data);
assert.equal(data.questions.length,194);assert.deepEqual(data.subjects.map(s=>s.id),['dbms','compiler']);
const search=context.window.ArchiveSearch,indexed=data.questions.map(q=>search.index(q,data.chapters));
const find=(query,subject)=>indexed.filter(q=>(!subject||q.subject===subject)&&search.matchesQuery(q,query));
const byId=id=>data.questions.find(q=>q.id===id);
for(const [subject,written,viva,prep] of [['dbms',78,2,0],['compiler',70,2,42]]){
 const entries=data.questions.filter(q=>q.subject===subject);
 assert.equal(entries.filter(q=>q.entryType==='question').length,written);
 assert.equal(entries.filter(q=>q.entryType==='viva').length,viva);
 assert.equal(entries.filter(q=>['suggestion','practice'].includes(q.entryType)).length,prep);
}
assert.equal(new Set(data.questions.map(q=>q.id)).size,194);
for(const year of [2016,2017,2018,2019,2021,2022,2023,2024,2025]){
 assert.deepEqual(data.questions.filter(q=>q.subject==='compiler'&&q.year===year).map(q=>q.number).sort(),[1,2,3,4,5,6,7,8]);
 assert.deepEqual(data.questions.filter(q=>q.subject==='dbms'&&q.year===year).map(q=>q.number).sort(),[1,2,3,4,5,6,7,8]);
}
for(const q of data.questions){
 assert.ok(q.body.length>20,q.id);assert.ok(q.chapters.length,q.id);
 assert.ok(q.chapters.every(id=>data.chapters.some(ch=>ch.id===id&&ch.subject===q.subject)),q.id+' mixes subject chapters');
 assert.ok(q.topics.length&&q.topics.every(t=>q.chapters.includes(t.chapter)),q.id+' invalid topics');
 assert.ok(q.pages.every(p=>Number.isInteger(p)&&p>0));
 assert.ok(!q.body.includes('\ufffd'),q.id+' has replacement character');
 for(const m of q.partMarks){assert.ok(Number.isInteger(m.paragraph)&&m.paragraph>=0&&m.paragraph<q.body.split('\n\n').length,q.id+' allocation anchor');assert.ok(m.marks===null||m.marks>0,q.id+' invalid marks');}
 if(q.subject==='compiler'){
  assert.match(q.sourceUrl,/^sources\/compiler\/[a-zA-Z0-9_./-]+\.pdf#page=\d+$/);
  assert.ok(fs.existsSync(path.join(root,q.sourceUrl.split('#')[0])));
  if(['suggestion','practice'].includes(q.entryType)){assert.equal(q.year,null);assert.equal(q.marks,null);}
  else {
   assert.equal(q.marks,q.year<2019?35:30);
   const top=q.partMarks.filter(m=>/^[a-z]$/.test(m.label));
   if(top.length&&top.every(m=>m.marks!==null))assert.equal(top.reduce((s,m)=>s+m.marks,0),q.marks,q.id+' part totals');
  }
 }
 const lines=q.body.split('\n');
 for(let i=1;i<lines.length;i++)if(/^\|/.test(lines[i])&&/^\|/.test(lines[i-1]))assert.equal(lines[i].split('|').length,lines[i-1].split('|').length,q.id+' table columns');
}
assert.equal(find('BCNF','dbms').length,8);
assert.deepEqual(find('BCNF','dbms').map(q=>q.id),find('What questions contained Boyce-Codd normal form?','dbms').map(q=>q.id));
assert.ok(find('left recursion','compiler').some(q=>q.id==='compiler-suggestion-maruf-15'));
assert.ok(find('SDD','compiler').some(q=>q.id==='compiler-2025-final-q5'));
assert.deepEqual(find('SDD','compiler').map(q=>q.id),find('syntax-directed definition','compiler').map(q=>q.id));
assert.deepEqual(find('TAC','compiler').map(q=>q.id),find('three-address code','compiler').map(q=>q.id));
assert.deepEqual(find('LR(0)','compiler').map(q=>q.id),find('LR0','compiler').map(q=>q.id));
assert.ok(find('epsilon','compiler').length);assert.ok(find('ε','compiler').length);
assert.equal(find('CSE303').length,114);assert.equal(find('CSE-301').length,80);
const union=[...new Set([...find('left recursion','compiler'),...find('SDD','compiler')].map(q=>q.id))].sort();
assert.deepEqual(find('"left recursion" "SDD"','compiler').map(q=>q.id).sort(),union);
assert.ok(find('"left recursion"','compiler').every(q=>q.searchable.includes('left recursion')));
assert.equal(byId('compiler-2021-final-q4').entryType,'viva');
assert.ok(byId('compiler-2022-final-q3').notes.length);
assert.ok(byId('compiler-2025-final-q6').body.includes('4n'));
assert.ok(byId('compiler-2017-final-q7').body.includes('Code1:'));assert.ok(byId('compiler-2017-final-q7').body.includes('Code2:'));assert.match(byId('compiler-2017-final-q7').body,/6\s+enter ftwo\(15\)/,'Code appendix call trace missing');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert.ok(html.includes('Content-Security-Policy'));assert.ok(html.includes('content="no-referrer"'));
assert.ok(html.includes('3-1 Archive'));assert.ok(html.includes('Made by <strong>Mushfique</strong>'));
assert.ok(!/href="data\/(?:question-bank\.md|questions\.json)"/.test(html));
assert.ok(!/<script(?![^>]*\bsrc=)/.test(html));
console.log('PASS: 194 entries, two isolated subject taxonomies, all nine Compiler finals, marks/provenance, 42 undated preparation prompts, aliases, quoted search, CSP, and source resources.');
