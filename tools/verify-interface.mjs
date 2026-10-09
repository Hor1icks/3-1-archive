// Executes the real interface code against a minimal in-memory DOM. This does
// not replace visual/browser QA; it checks event wiring, markup and state changes.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
class Element{
  constructor(id=''){this.id=id;this.value='';this.hidden=false;this.dataset={};this.attributes={};this.innerHTML='';this.textContent='';this.style={};this.tagName='BUTTON';this.events={};this.classes=new Set();this.classList={add:x=>this.classes.add(x),remove:x=>this.classes.delete(x),contains:x=>this.classes.has(x),toggle:(x,v)=>{v=v===undefined?!this.classes.has(x):v;v?this.classes.add(x):this.classes.delete(x);return v;}};}
  setAttribute(k,v){this.attributes[k]=v;}
  addEventListener(k,f){(this.events[k]??=[]).push(f);}
  focus(){document.activeElement=this;}
  showModal(){this.open=true;}
  close(){this.open=false;}
  scrollIntoView(){}
  closest(){return this;}
}
const elements=new Map(),get=id=>{if(!elements.has(id))elements.set(id,new Element(id));return elements.get(id);};
const docEvents={};
const document={
  querySelector:s=>get(s),getElementById:id=>get('#'+id),body:new Element('body'),activeElement:new Element('body'),
  querySelectorAll:s=>s==='#year-options input'?[...get('#year-options').innerHTML.matchAll(/value="(\d+)"/g)].map(m=>{const e=get('year-'+m[1]);e.value=m[1];return e;}):s==='#chapters button'?[...get('#chapters').innerHTML.matchAll(/data-chapter="([^"]+)"/g)].map(m=>{const e=get('chapter-'+m[1]);e.dataset.chapter=m[1];return e;}):[],
  addEventListener:(k,f)=>(docEvents[k]??=[]).push(f)
};
const storage=new Map(),copied=[];
const location={pathname:'/',search:'',hash:'',href:'http://example.test/'};
const context={document,location,URL,URLSearchParams,Date,console,
  history:{replaceState:(_a,_b,value)=>{const u=new URL(value,location.href);Object.assign(location,{href:u.href,search:u.search,hash:u.hash});}},
  localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},
  navigator:{clipboard:{writeText:async text=>copied.push(text)}},
  setTimeout:f=>{f();return 1;},clearTimeout:()=>{},window:{addEventListener:()=>{}}
};
vm.createContext(context);
for(const file of ['data/questions.js','search.js','app.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const event=(element,type)=>{for(const cb of element.events[type]||[])cb({preventDefault(){},target:element});};
const click=async dataset=>{const b=new Element();b.dataset=dataset;for(const cb of docEvents.click||[])await cb({target:b});return b;};
assert.equal((get('#results').innerHTML.match(/<article /g)||[]).length,12);
assert.ok(get('#result-count').innerHTML.includes('78 questions'));
assert.ok(get('#result-count').innerHTML.includes('2 viva allocations'));
get('#search-input').value='What questions contained BCNF?';event(get('#search-form'),'submit');
assert.ok(get('#result-count').innerHTML.includes('8 questions'));
assert.ok(get('#results').innerHTML.includes('2026-ct3-q1'));
assert.ok(get('#results').innerHTML.includes('<mark>BCNF</mark>'));
get('year-2025').checked=true;get('year-2026').checked=true;event(get('#year-options'),'change');
assert.ok(get('#result-count').innerHTML.includes('2 questions'));
assert.equal(new URLSearchParams(location.search).get('year'),'2026,2025');
assert.ok(get('#results').innerHTML.includes('2025-final-q3'));
await click({remove:'year:2025'});
assert.equal(get('year-2025').checked,false);
assert.ok(get('#result-count').innerHTML.includes('1 question'));
event(get('#clear-years'),'click');
assert.ok(get('#result-count').innerHTML.includes('8 questions'));
get('#search-input').value='"BCNF" "deadlock"';event(get('#search-form'),'submit');
const expected=context.window.DBMS_DATA.questions.map(q=>context.window.DBMSSearch.index(q,context.window.DBMS_DATA.chapters)).filter(q=>context.window.DBMSSearch.matchesQuery(q,'"BCNF" "deadlock"')).filter(q=>q.entryType==='question').length;
assert.ok(expected>8);assert.ok(get('#result-count').innerHTML.includes(expected+' questions'));
get('#search-input').value='BCNF';event(get('#search-form'),'submit');

get('year-2026').checked=true;event(get('#year-options'),'change');
assert.ok(get('#result-count').innerHTML.includes('1 question'));
assert.ok(get('#results').innerHTML.includes('<table>'));
assert.ok(get('#results').innerHTML.includes('StudentID'));
await click({chapter:'7'});
assert.ok(get('#results-title').textContent.includes('Relational Database Design'));
assert.ok(get('#topic-filter').innerHTML.includes('BCNF'));
await click({save:'2026-ct3-q1'});
assert.equal(get('#saved-count').textContent,1);
assert.deepEqual(JSON.parse(storage.get('dbms-saved-v1')),['2026-ct3-q1']);
event(get('#saved-nav'),'click');
assert.equal(get('#results-title').textContent,'Saved questions');
assert.ok(get('#result-count').innerHTML.includes('1 question'));
const expand=await click({expand:'2026-ct3-q1'});
assert.equal(expand.attributes['aria-expanded'],'true');
assert.equal(get('#body-2026-ct3-q1').hidden,false);
await click({copy:'2026-ct3-q1'});
assert.equal(copied[0],'http://example.test/#2026-ct3-q1');
await click({save:'2026-ct3-q1'});
assert.ok(get('#results').innerHTML.includes('Your revision pile starts here'));
event(get('#bank-nav'),'click');
event(get('#load-more'),'click');
assert.equal((get('#results').innerHTML.match(/<article /g)||[]).length,24);
get('#search-input').value='no-matching-question-ever';event(get('#search-form'),'submit');
assert.ok(get('#results').innerHTML.includes('No questions found'));
event(get('#clear-search'),'click');
get('year-2026').checked=true;event(get('#year-options'),'change');
get('#type-filter').value='Midterm';event(get('#type-filter'),'change');
assert.ok(get('#result-count').innerHTML.includes('2 questions'));
assert.ok(get('#results').innerHTML.includes('City Care'));
assert.ok(get('#results').innerHTML.includes('Stitch Craft'));
get('#search-input').value='<script>alert(1)</script>';event(get('#search-form'),'submit');
assert.ok(!get('#active-filters').innerHTML.includes('<script>'));
console.log('PASS: interface boot, 12/24-entry pagination, natural-language BCNF query, multiple years, removable year chips, quoted alternatives, combined chapter/topic filters, HTML tables, save/unsave persistence, saved view, expand controls, copy links, empty states, midterm filtering and HTML escaping. Visual browser QA remains unverified.');

event(get('#bank-nav'),'click');
for(let i=0;i<6;i++)event(get('#load-more'),'click');
const all=get('#results').innerHTML;
for(const q of context.window.DBMS_DATA.questions){
 const start=all.indexOf('id="'+q.id+'"');assert.ok(start>=0,q.id+' absent');
 const card=all.slice(start,all.indexOf('</article>',start));
 assert.ok(card.includes('Total: '+q.marks+' marks'),q.id+' total not labeled');
 assert.equal((card.match(/class="part-marks-wrap"/g)||[]).length,new Set(q.partMarks.map(m=>m.paragraph)).size,q.id+' inline allocation missing');
 for(const m of q.partMarks)assert.ok(card.includes(m.marks!==null?m.label+' · '+m.marks+' marks':m.label+' · Shared '+q.marks+'-mark total'),q.id+' visible marks missing '+m.label);
}
assert.ok(all.includes('a · 8 marks'));assert.ok(all.includes('b · 12 marks'));
assert.ok(all.includes('b(i) · 4.25 marks'));
console.log('PASS: all 80 cards render labeled totals, per-part summaries and all inline allocations/shared-total labels.');

