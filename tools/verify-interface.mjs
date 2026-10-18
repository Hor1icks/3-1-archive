// Runs the real app against an in-memory DOM; this is not visual browser QA.
import fs from 'node:fs';import path from 'node:path';import vm from 'node:vm';import assert from 'node:assert/strict';import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
function boot({query='',hash='',stored={}}={}){
 let document;
 class Element{
  constructor(id=''){this.id=id;this.value='';this.hidden=false;this.checked=false;this.dataset={};this.attributes={};this.innerHTML='';this.textContent='';this.style={};this.tagName='BUTTON';this.events={};this.classes=new Set();this.classList={add:x=>this.classes.add(x),remove:x=>this.classes.delete(x),contains:x=>this.classes.has(x),toggle:(x,v)=>{v=v===undefined?!this.classes.has(x):v;v?this.classes.add(x):this.classes.delete(x);return v;}};}
  setAttribute(k,v){this.attributes[k]=v;}addEventListener(k,f){(this.events[k]??=[]).push(f);}focus(){document.activeElement=this;}showModal(){this.open=true;}close(){this.open=false;}scrollIntoView(){}closest(){return this;}
 }
 const elements=new Map(),get=id=>{if(!elements.has(id))elements.set(id,new Element(id));return elements.get(id);},docEvents={};
 document={querySelector:s=>get(s),getElementById:id=>get('#'+id),body:new Element('body'),activeElement:new Element('body'),
 querySelectorAll:s=>s==='#year-options input'?[...get('#year-options').innerHTML.matchAll(/value="([^"]+)"/g)].map(m=>{const e=get('year-'+m[1]);e.value=m[1];return e;}):s==='#chapters button'?[...get('#chapters').innerHTML.matchAll(/data-chapter="([^"]+)"/g)].map(m=>{const e=get('chapter-'+m[1]);e.dataset.chapter=m[1];return e;}):s==='#subjects button'?['dbms','compiler','mma'].map(subject=>{const e=get('subject-'+subject);e.dataset.subject=subject;return e;}):[],
 addEventListener:(k,f)=>(docEvents[k]??=[]).push(f)};
 const storage=new Map(Object.entries(stored)),copied=[],location={pathname:'/3-1-archive/',search:query,hash,href:'https://example.test/3-1-archive/'+query+hash};
 const context={document,location,URL,URLSearchParams,Date,console,history:{replaceState:(_a,_b,value)=>{const u=new URL(value,location.href);Object.assign(location,{href:u.href,search:u.search,hash:u.hash});}},localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,v)},navigator:{clipboard:{writeText:async text=>copied.push(text)}},setTimeout:f=>{f();return 1;},clearTimeout:()=>{},window:{addEventListener:()=>{}}};
 vm.createContext(context);for(const f of ['data/questions.js','search.js','app.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),context,{filename:f});
 const event=(id,type)=>{const e=get(id);for(const cb of e.events[type]||[])cb({preventDefault(){},target:e});};
 const click=async dataset=>{const b=new Element();b.dataset=dataset;for(const cb of docEvents.click||[])await cb({target:b});return b;};
 const search=query=>{get('#search-input').value=query;event('#search-form','submit');};
 return {get,event,click,search,context,location,storage,copied};
}
const a=boot(),{get,event,click,search,location}=a;
assert.ok(get('#result-count').innerHTML.includes('226 questions'));assert.ok(get('#result-count').innerHTML.includes('6 viva'));assert.ok(get('#result-count').innerHTML.includes('111 preparation'));
assert.equal((get('#results').innerHTML.match(/<article /g)||[]).length,12);assert.equal(get('#paper-total').textContent,34);
assert.ok(get('#subjects').innerHTML.includes('70 exam question groups'));assert.ok(get('#subjects').innerHTML.includes('78 exam question groups'));
await click({subject:'compiler'});assert.equal(get('#results-title').textContent,'Compiler questions');assert.ok(get('#result-count').innerHTML.includes('70 questions'));assert.equal(get('#part-field').hidden,false);assert.equal(get('#resource-section').hidden,false);
assert.ok(!get('#chapters').innerHTML.includes('Relational Database Design'));assert.ok(!get('#topic-filter').innerHTML.includes('BCNF'));assert.equal(new URLSearchParams(location.search).get('subject'),'compiler');
get('#part-filter').value='A';event('#part-filter','change');assert.ok(get('#results').innerHTML.includes('PART A'));assert.ok(!get('#results').innerHTML.includes('PART B'));
event('#reset-button','click');assert.equal(new URLSearchParams(location.search).get('subject'),'compiler');
get('year-2024').checked=true;get('year-2025').checked=true;event('#year-options','change');assert.ok(get('#result-count').innerHTML.includes('16 questions'));assert.ok(!get('#result-count').innerHTML.includes('preparation'));
await click({remove:'year:2024'});assert.ok(get('#result-count').innerHTML.includes('8 questions'));event('#clear-years','click');
get('#type-filter').value='preparation';event('#type-filter','change');assert.ok(get('#result-count').innerHTML.includes('42 preparation'));assert.ok(get('#results').innerHTML.includes('Marks not specified'));assert.ok(!get('#results').innerHTML.includes('Total: null'));
search('"left recursion" "SDD"');assert.ok(!get('#results').innerHTML.includes('No questions found'));
event('#reset-button','click');search('FIRST FOLLOW');assert.ok(get('#results').innerHTML.includes('compiler-2025-final-q2'));assert.ok(get('#results').innerHTML.includes('sources/compiler/final-exams.pdf#page='));
search('<img src=x onerror=alert(1)>');assert.ok(!get('#active-filters').innerHTML.includes('<img'));assert.ok(get('#active-filters').innerHTML.includes('&lt;img'));
await click({subject:'dbms'});assert.ok(get('#result-count').innerHTML.includes('78 questions'));assert.equal(get('#part-field').hidden,true);assert.equal(get('#resource-section').hidden,true);assert.ok(!get('#chapters').innerHTML.includes('compiler-a5'));search('BCNF');assert.ok(get('#result-count').innerHTML.includes('8 questions'));
await click({save:'2026-ct3-q1'});assert.equal(get('#saved-count').textContent,1);await click({subject:'compiler'});await click({save:'compiler-2025-final-q1'});assert.equal(get('#saved-count').textContent,2);
event('#saved-nav','click');assert.ok(get('#result-count').innerHTML.includes('1 question'));assert.ok(get('#results').innerHTML.includes('compiler-2025-final-q1'));
event('#all-subjects','click');assert.ok(get('#result-count').innerHTML.includes('2 questions'));
const expand=await click({expand:'compiler-2025-final-q1'});assert.equal(expand.attributes['aria-expanded'],'true');assert.equal(get('#body-compiler-2025-final-q1').hidden,false);
await click({copy:'compiler-2025-final-q1'});assert.equal(a.copied[0],'https://example.test/3-1-archive/#compiler-2025-final-q1');
assert.deepEqual(JSON.parse(a.storage.get('archive-saved-v1')),['2026-ct3-q1','compiler-2025-final-q1']);
event('#bank-nav','click');for(let i=0;i<30;i++)event('#load-more','click');
const all=get('#results').innerHTML;assert.equal((all.match(/<article /g)||[]).length,343);
for(const q of a.context.window.ARCHIVE_DATA.questions){
 const start=all.indexOf('id="'+q.id+'"');assert.ok(start>=0,q.id+' absent');const card=all.slice(start,all.indexOf('</article>',start));
 assert.ok(card.includes(Number.isFinite(q.marks)?'Total: '+q.marks+' marks':'Marks not specified'),q.id+' total');
 const full=card.slice(card.indexOf('class="question-full"'));
 for(const m of q.partMarks)assert.ok(full.includes(m.label+' · '+(m.marks!==null?m.marks+' marks':Number.isFinite(q.marks)?'Shared '+q.marks+'-mark total':'Marks not specified')),q.id+' missing inline allocation '+m.label);
}
const old=boot({hash:'#2026-ct3-q1',stored:{'dbms-saved-v1':'["2026-ct3-q1"]'}});assert.equal(old.get('#saved-count').textContent,1);assert.equal(old.get('#body-2026-ct3-q1').hidden,false);assert.equal(new URLSearchParams(old.location.search).get('subject'),'dbms');
const deep=boot({query:'?subject=dbms&q=BCNF',hash:'#compiler-2025-final-q1'});assert.equal(deep.get('#body-compiler-2025-final-q1').hidden,false);assert.equal(new URLSearchParams(deep.location.search).get('subject'),'compiler');
const savedReload=boot({stored:{'archive-saved-v1':a.storage.get('archive-saved-v1')}});assert.equal(savedReload.get('#saved-count').textContent,2);
const undated=boot({query:'?subject=compiler&year=undated'});assert.ok(undated.get('#result-count').innerHTML.includes('42 preparation'));
const mma=boot({query:'?subject=mma&part=B&year=2021'});
assert.equal(mma.get('#part-field').hidden,false);assert.ok(mma.get('#results').innerHTML.includes('mma-2021-final-q1'));assert.ok(mma.get('#results').innerHTML.includes('SECTION A'));assert.ok(!mma.get('#results').innerHTML.includes('mma-2021-final-q5'));
assert.ok(mma.get('#study-resources').innerHTML.includes('sources/mma/'));assert.ok(!mma.get('#study-resources').innerHTML.includes('sources/compiler/'));
const transcript=boot({hash:'#mma-suggestion-a-01'});assert.ok(transcript.get('#results').innerHTML.includes('Transcript excerpt'));assert.ok(!transcript.get('#results').innerHTML.includes('page=NaN'));
const editions=boot({query:'?subject=mma&year=2024'});assert.ok(editions.get('#result-count').innerHTML.includes('16 questions'));assert.ok(editions.get('#results').innerHTML.includes('180-mark paper'));assert.ok(editions.get('#results').innerHTML.includes('240-mark paper'));
console.log('PASS: subject switching, chapter/topic isolation, Part A/B, multi-year and undated filters, quoted search, old DBMS links/bookmarks, cross-subject saves, URL restoration, safe HTML, source links and all 343 full question cards with inline marks. Visual browser QA is separate.');
