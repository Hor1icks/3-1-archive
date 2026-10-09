import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const data=JSON.parse(fs.readFileSync(path.join(root,'data/questions.json'),'utf8'));
const context={window:{}};vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root,'search.js'),'utf8'),context);
const engine=context.window.DBMSSearch;
const indexed=data.questions.map(q=>engine.index(q,data.chapters));
const find=query=>indexed.filter(q=>engine.matches(q,engine.tokens(query)));
assert.equal(data.questions.length,80);
assert.equal(data.questions.filter(q=>q.entryType==='question').length,78);
assert.equal(new Set(data.questions.map(q=>q.id)).size,80);
for(const year of [2016,2017,2018,2019,2021,2022,2023,2024,2025]){
  assert.deepEqual(data.questions.filter(q=>q.year===year).map(q=>q.number).sort(),[1,2,3,4,5,6,7,8]);
}
assert.equal(new Set(data.questions.filter(q=>q.year===2026).map(q=>q.paper)).size,6);
assert.deepEqual([...new Set(data.questions.filter(q=>q.year===2026).flatMap(q=>q.pages))].sort(),[1,2,3,4,5,6,7,8]);
for(const q of data.questions){
  assert.ok(q.body.length>20,q.id+' needs text');
  assert.ok(q.chapters.length&&q.chapters.every(id=>data.chapters.some(c=>c.id===id)),q.id+' has invalid chapters');
  assert.ok(q.topics.length,q.id+' needs topics');
  assert.ok(q.pages.length&&q.pages.every(p=>Number.isInteger(p)&&p>0),q.id+' needs provenance');
  assert.ok(!q.body.includes('�'),q.id+' contains replacement characters');
  assert.ok(!q.body.includes('BANGLADESH UNIVERSITY'),q.id+' contains a leaked page header');
  assert.ok(!q.body.includes('<img'),q.id+' contains a scanned question');
  const lines=q.body.split('\n');
  for(let i=0;i<lines.length;i++)if(/^\|/.test(lines[i])){
    const row=lines[i].split('|').length;
    if(i&&/^\|/.test(lines[i-1]))assert.equal(row,lines[i-1].split('|').length,q.id+' table columns inconsistent');
  }
}
const bcnf=find('BCNF').map(q=>q.id);
assert.ok(bcnf.includes('2026-ct3-q1'));
assert.ok(bcnf.includes('2019-final-q5'));
assert.ok(bcnf.includes('2025-final-q3'));
assert.deepEqual(find('What questions contained BCNF?').map(q=>q.id),bcnf);
assert.deepEqual(find('Boyce-Codd normal form').map(q=>q.id),bcnf);
assert.ok(find('ER diagram').some(q=>q.id==='2026-mid1-q1'));
assert.ok(find('B+ tree').some(q=>q.id==='2024-final-q7'));
assert.ok(find('B⁺ tree').some(q=>q.id==='2026-ct3-b-q1')===false); // B-tree differs from B+ tree.
assert.ok(find('2PL').some(q=>q.id==='2025-final-q5'));
assert.ok(find('SQL injection').some(q=>q.id==='2022-final-q5'));
assert.ok(find('normalisation').some(q=>q.id==='2026-ct3-q1'));
assert.equal(find('zzzznonexistenttopic').length,0);
assert.equal(data.questions.filter(q=>q.year===2026&&q.chapters.includes('7')).length,1);
assert.ok(data.questions.filter(q=>q.chapters.includes('others')).some(q=>q.body.includes('RAID')));
assert.ok(data.questions.filter(q=>q.chapters.includes('others')).some(q=>q.body.includes('regression')));
assert.ok(data.questions.find(q=>q.id==='2023-final-q5').notes.some(n=>n.includes('not present')));
assert.ok(data.questions.find(q=>q.id==='2021-final-q4').entryType==='viva');
for(const file of ['index.html','styles.css','app.js','search.js','data/questions.js','assets/favicon.svg','sources/final-exams.pdf','sources/2026-assessments.pdf'])assert.ok(fs.existsSync(path.join(root,file)),file+' is missing');
vm.runInContext(fs.readFileSync(path.join(root,'data/questions.js'),'utf8'),context);
assert.deepEqual(JSON.parse(JSON.stringify(context.window.DBMS_DATA)),data,'JSON and browser data diverged');
console.log(`PASS: 80 entries, 78 written question groups, 15 papers, 10 chapter groups. BCNF search returns ${bcnf.length} complete question groups. Provenance, tables, aliases, source exceptions and deploy files checked.`);

const quoted=query=>indexed.filter(q=>engine.matchesQuery(q,query));
const union=[...new Set([...find('BCNF'),...find('deadlock')].map(q=>q.id))].sort();
assert.deepEqual(quoted('"BCNF" "deadlock"').map(q=>q.id).sort(),union);
assert.deepEqual(quoted('“BCNF” “deadlock”').map(q=>q.id).sort(),union);
assert.ok(quoted('"SQL injection"').length>0);
assert.ok(quoted('"SQL injection"').every(q=>q.searchable.includes('sql injection')));
assert.equal(quoted('"zzzz nonexistent phrase"').length,0);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert.ok(!/href="data\/(?:question-bank\.md|questions\.json)"/.test(html));
assert.ok(!html.includes(' download'));
assert.ok(html.includes('Made by <strong>Mushfique</strong>'));
assert.ok(html.includes('How it is structured'));
console.log('PASS: quoted OR searches, exact phrases, smart quotes, no data download links, About structure, footer credit.');

for(const q of data.questions){
  assert.ok(Array.isArray(q.partMarks),q.id+' missing allocation metadata');
  const paragraphs=q.body.split('\n\n');
  for(const m of q.partMarks){
    assert.ok(Number.isInteger(m.paragraph)&&m.paragraph>=0&&m.paragraph<paragraphs.length,q.id+' invalid marks anchor');
    assert.ok(m.marks===null||Number.isFinite(m.marks)&&m.marks>0,q.id+' invalid marks');
    assert.ok(m.marks!==null||m.sharedWith==='question',q.id+' unidentified shared total');
  }
  const top=q.partMarks.filter(m=>/^(?:[a-f]|Task [ABC])$/.test(m.label));
  if(top.length&&top.every(m=>m.marks!==null)&&q.id!=='2019-final-q3')assert.equal(top.reduce((sum,m)=>sum+m.marks,0),q.marks,q.id+' total disagrees');
}
const marks=id=>data.questions.find(q=>q.id===id).partMarks;
assert.deepEqual(marks('2024-final-q2').map(m=>m.marks),[8,12,10]);
assert.deepEqual(marks('2025-final-q2').map(m=>m.marks),[6,6,6,6,6]);
assert.deepEqual(marks('2026-mid1-b-q1').map(m=>m.marks),[18,10,2]);
assert.ok(marks('2026-mid1-q1').every(m=>m.marks===null));
assert.ok(marks('2026-ct3-q1').every(m=>m.marks===null));
assert.equal(marks('2024-final-q3').find(m=>m.label==='b(ii)').marks,2);
assert.equal(marks('2017-final-q3').find(m=>m.label==='b(i)').marks,4.25);
assert.equal(marks('2017-final-q8').find(m=>m.label==='c').allocation,'9+3+4=17');
console.log('PASS: allocations, paragraph anchors, totals, nested/fractional marks, printed arithmetic exceptions and unallocated shared totals.');
