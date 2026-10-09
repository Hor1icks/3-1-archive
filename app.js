/* Static, dependency-free question browser. Data remains editable in data/questions.json. */
(function(){
  'use strict';
  const $=s=>document.querySelector(s),data=window.DBMS_DATA,search=window.DBMSSearch;
  if(!data){$('#result-count').textContent='The question data could not be loaded. Please reload the page.';return;}
  const questions=data.questions.map(q=>search.index(q,data.chapters));
  const params=new URLSearchParams(location.search);
  const validChapter=id=>data.chapters.some(c=>c.id===id);
  const state={chapter:validChapter(params.get('chapter'))?params.get('chapter'):'',years:(params.get('year')||'').split(',').filter(y=>questions.some(q=>String(q.year)===y)),type:params.get('type')||'',topic:params.get('topic')||'',query:params.get('q')||'',sort:params.get('sort')||'newest',savedOnly:params.get('saved')==='1',limit:12};
  let saved=new Set(),toastTimer,queryTimer;
  try{const value=JSON.parse(localStorage.getItem('dbms-saved-v1')||'[]');if(Array.isArray(value))saved=new Set(value.filter(id=>questions.some(q=>q.id===id)));}catch{}
  const expanded=new Set();
  function esc(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function chapterName(id){return data.chapters.find(c=>c.id===id)?.name||id;}
  function toast(message){clearTimeout(toastTimer);$('#toast').textContent=message;$('#toast').classList.add('visible');toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2400);}
  const bookmarkIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4z"/></svg>';
  function highlight(value){
    const raw=String(value),terms=search.tokens(state.query);
    if(!terms.length)return esc(raw);
    const aliases={bcnf:['BCNF','Boyce-Codd'],er:['ER','ERD','E-R','Entity-Relationship'],bplus:['B⁺','B+','B plus'],normalization:['Normalization','Normalisation','Normalize','Normalise'],deadlock:['deadlock'], '2pl':['2PL','Two phase locking','Two-phase locking']};
    const words=terms.flatMap(t=>aliases[t]||[t]);
    const pattern=words.map(w=>w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|');
    if(!pattern)return esc(raw);
    const rx=new RegExp('('+pattern+')','ig');let result='',last=0;
    for(const match of raw.matchAll(rx)){result+=esc(raw.slice(last,match.index))+'<mark>'+esc(match[0])+'</mark>';last=match.index+match[0].length;}
    return result+esc(raw.slice(last));
  }
  function markText(q,m){
    if(m.marks!==null)return m.marks+' marks';
    return 'Shared '+q.marks+'-mark total';
  }
  function markBadge(q,m){
    const detail=m.allocation&&/[+×]/.test(m.allocation)?' · '+m.allocation:'';
    return '<span class="part-marks" aria-label="'+esc(m.label+': '+markText(q,m)+detail)+'">'+esc(m.label)+' · '+esc(markText(q,m))+esc(detail)+'</span>';
  }
  function paragraph(text,badges=''){
    const marks=badges?'<span class="part-marks-wrap">'+badges+'</span>':'';
    const part=text.match(/^(\(?[a-e][.)])\s+([\s\S]*)/);
    const schema=/^(?:[A-Za-z_]+\s*(?:_\s*schema)?\s*(?:=\s*)?\(|[a-f]\.\s*\w+-Schema)/i.test(text);
    if(part&&!schema)return '<p class="subpart">'+marks+'<span class="part-label">'+esc(part[1])+'</span>'+highlight(part[2])+'</p>';
    if(schema)return '<p class="schema">'+highlight(text)+'</p>';
    if(/^Task [A-C]/.test(text))return '<p class="subpart">'+marks+'<strong>'+highlight(text)+'</strong></p>';
    return '<p>'+marks+highlight(text)+'</p>';
  }
  function richText(q){
    const text=q.body,originalParagraphs=text.split(/\n\s*\n/);
    // The input is escaped, never inserted as author-supplied HTML.
    const blocks=text.split(/(```[\s\S]*?```)/g);let html='';
    blocks.forEach(block=>{
      if(block.startsWith('```')){const content=block.replace(/^```[^\n]*\n/,'').replace(/```$/,'').trimEnd();html+='<pre><code>'+highlight(content)+'</code></pre>';return;}
      const paragraphs=block.trim().split(/\n\s*\n/).filter(Boolean);
      paragraphs.forEach(p=>{
        if(/^\|/.test(p.trim())){
          const rows=p.trim().split('\n').filter(r=>!/^\|\s*[-: ]+\|(?:[-: |]+)?$/.test(r));
          const cells=r=>r.trim().replace(/^\||\|$/g,'').split('|').map(x=>x.trim());
          if(rows.length){html+='<div class="table-scroll" tabindex="0" role="region" aria-label="Question data table"><table><thead><tr>'+cells(rows[0]).map(x=>'<th scope="col">'+highlight(x)+'</th>').join('')+'</tr></thead><tbody>'+rows.slice(1).map(row=>'<tr>'+cells(row).map(x=>'<td>'+highlight(x).replace(/; /g,';<br>')+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';}
        }else{const index=originalParagraphs.findIndex(original=>original.trim()===p.trim());const allocations=(q.partMarks||[]).filter(m=>m.paragraph===index);html+=paragraph(p.replace(/\n/g,' '),allocations.map(m=>markBadge(q,m)).join(''));}
      });
    });return html;
  }
  function excerpt(question){
    const paragraphs=question.body.split(/\n\s*\n/).filter(p=>!p.startsWith('|')&&!p.startsWith('```'));
    const terms=search.tokens(state.query);
    const matching=terms.length?paragraphs.find(p=>terms.every(t=>search.normalize(p).includes(t))):null;
    const fallback=terms.length?paragraphs.find(p=>terms.some(t=>search.normalize(p).includes(t))):null;
    let text=(matching||fallback||paragraphs[0]||'').replace(/[\n]+/g,' ').replace(/```/g,'');
    if(text.length>450)text=text.slice(0,447)+'…';
    return {text,matched:!!(matching||fallback)};
  }
  function sourceLink(q){
    if(q.year===2026)return 'sources/2026-assessments.pdf#page='+q.pages[0];
    const starts={2016:2,2017:6,2018:10,2019:14,2021:18,2022:23,2023:27,2024:30,2025:34};
    const page=q.year===2019?(q.pages[0]-1)/2:q.pages[0]-1;
    return 'sources/final-exams.pdf#page='+(starts[q.year]+page);
  }
  function renderCard(q){
    const isExpanded=expanded.has(q.id),isSaved=saved.has(q.id),preview=excerpt(q);
    const topics=q.topics.filter(t=>!state.chapter||t.chapter===state.chapter).slice(0,4);
    const chapterTags=q.chapters.map(id=>'<button type="button" class="tag chapter-tag" data-chapter="'+esc(id)+'">'+(id==='others'?'Others':'Ch. '+id+' · '+esc(chapterName(id)))+'</button>').join('');
    const topicTags=topics.map(t=>'<button type="button" class="tag" data-topic="'+esc(t.name)+'">'+esc(t.name)+'</button>').join('');
    const date=q.date?new Date(q.date+'T00:00:00').toLocaleDateString('en-GB',{day:'numeric',month:'short'}):'';
    return '<article class="question-card'+(isExpanded?' expanded':'')+'" id="'+esc(q.id)+'">'+
      '<div class="card-top"><span class="year-badge'+(q.year===2026?' current':'')+'">'+q.year+'</span><span>'+esc(q.assessment)+'</span><span class="dot" aria-hidden="true"></span><span>QUESTION '+q.number+'</span>'+(date?'<span class="dot" aria-hidden="true"></span><span>'+esc(date)+'</span>':'')+'</div>'+
      '<button type="button" class="save-button'+(isSaved?' saved':'')+'" data-save="'+esc(q.id)+'" aria-pressed="'+isSaved+'" aria-label="'+(isSaved?'Unsave':'Save')+' '+esc(q.title)+'">'+bookmarkIcon+'</button>'+
      '<h3>'+highlight(q.title)+'</h3><div class="card-tags">'+chapterTags+topicTags+'</div>'+
      ((q.partMarks||[]).length?'<div class="marks-breakdown" aria-label="Marks by question part">'+q.partMarks.filter(m=>/^(?:[a-f]|Task [ABC])$/.test(m.label)).map(m=>markBadge(q,m)).join('')+'</div>':'')+
      (preview.matched?'<span class="match-label">MATCHING PASSAGE</span>':'')+'<p class="question-preview">'+highlight(preview.text)+'</p>'+
      '<div class="question-full" id="body-'+esc(q.id)+'"'+(isExpanded?'':' hidden')+'>'+richText(q)+(q.notes.length?'<aside class="source-notes"><strong>NOTE FROM THE SOURCE</strong>'+q.notes.map(n=>'<p>'+esc(n)+'</p>').join('')+'</aside>':'')+'<div class="source-reference">Source: '+esc(q.source)+' · original '+(q.pages.length===1?'page ':'pages ')+q.pages.join(', ')+'<br><a href="'+sourceLink(q)+'" target="_blank" rel="noopener">Check the original paper ↗</a></div></div>'+
      '<div class="card-bottom"><button type="button" class="expand-button" data-expand="'+esc(q.id)+'" aria-expanded="'+isExpanded+'" aria-controls="body-'+esc(q.id)+'">'+(isExpanded?'Close question':'Read full question')+' <span aria-hidden="true">⌄</span></button><div class="card-actions"><span>Total: '+q.marks+' marks'+(q.entryType==='viva'?' · Viva':'')+'</span><button type="button" class="copy-link" data-copy="'+esc(q.id)+'" aria-label="Copy link to '+esc(q.title)+'">Copy link ↗</button></div></div></article>';
  }
  function filtered(){
    const terms=search.tokens(state.query);
    const list=questions.filter(q=>(!state.chapter||q.chapters.includes(state.chapter))&&(!state.years.length||state.years.includes(String(q.year)))&&(!state.type||(state.type==='Viva'?q.entryType==='viva':q.assessment.startsWith(state.type)))&&(!state.topic||q.topics.some(t=>t.name===state.topic&&(!state.chapter||t.chapter===state.chapter)))&&(!state.savedOnly||saved.has(q.id))&&search.matchesQuery(q,state.query));
    const dateKey=q=>q.date||`${q.year}-01-01`;
    return list.sort((a,b)=>{
      if(state.sort==='oldest')return a.year-b.year||dateKey(a).localeCompare(dateKey(b))||a.number-b.number;
      if(state.sort==='chapter'){const rank=q=>Math.min(...q.chapters.map(id=>id==='others'?999:Number(id)));return rank(a)-rank(b)||b.year-a.year||a.number-b.number;}
      if(state.sort==='relevance'&&terms.length){const diff=search.score(b,terms)-search.score(a,terms);if(diff)return diff;}
      return b.year-a.year||dateKey(b).localeCompare(dateKey(a))||a.number-b.number;
    });
  }
  function writeUrl(){
    const p=new URLSearchParams();
    for(const [key,value] of Object.entries({q:state.query,chapter:state.chapter,year:state.years.join(','),type:state.type,topic:state.topic,sort:state.sort==='newest'?'':state.sort,saved:state.savedOnly?'1':''}))if(value)p.set(key,value);
    const target=location.pathname+(p.size?'?'+p:'')+location.hash;history.replaceState(null,'',target);
  }
  function updateTopics(){
    const topics=[...new Set(questions.filter(q=>!state.chapter||q.chapters.includes(state.chapter)).flatMap(q=>q.topics.filter(t=>!state.chapter||t.chapter===state.chapter).map(t=>t.name)))].sort();
    if(state.topic&&!topics.includes(state.topic))state.topic='';
    $('#topic-filter').innerHTML='<option value="">All topics</option>'+topics.map(t=>'<option value="'+esc(t)+'">'+esc(t)+'</option>').join('');$('#topic-filter').value=state.topic;
  }
  function render(resetLimit=true){
    if(resetLimit)state.limit=12;
    updateTopics();
    const list=filtered(),visible=list.slice(0,state.limit);
    $('#search-input').value=state.query;$('#year-summary').textContent=state.years.length?state.years.join(', '):'All years';document.querySelectorAll('#year-options input').forEach(input=>{input.checked=state.years.includes(input.value);});$('#type-filter').value=state.type;$('#sort-filter').value=state.sort;
    $('#clear-search').hidden=!state.query;
    $('#saved-count').textContent=saved.size;$('#bank-nav').classList.toggle('active',!state.savedOnly);$('#saved-nav').classList.toggle('active',state.savedOnly);
    $('#all-chapters').classList.toggle('active',!state.chapter);$('#all-chapters').setAttribute('aria-pressed',String(!state.chapter));
    document.querySelectorAll('#chapters button').forEach(b=>{b.classList.toggle('active',b.dataset.chapter===state.chapter);b.setAttribute('aria-pressed',String(b.dataset.chapter===state.chapter));});
    $('#view-label').textContent=state.savedOnly?'YOUR PERSONAL COLLECTION':state.chapter?(state.chapter==='others'?'BEYOND THE SYLLABUS':'CHAPTER '+state.chapter):'EXPLORE THE ARCHIVE';
    $('#results-title').textContent=state.savedOnly?'Saved questions':state.chapter?chapterName(state.chapter):state.query?'Search results':'All questions';
    const written=list.filter(q=>q.entryType==='question').length,viva=list.length-written;
    $('#result-count').innerHTML='<strong>'+written+' question'+(written===1?'':'s')+'</strong>'+(viva?' + '+viva+' viva allocation'+(viva===1?'':'s'):'')+(state.query?' matching “'+esc(state.query)+'”':' in the archive');
    const active=[];if(state.chapter)active.push(['chapter',state.chapter==='others'?'Others':'Chapter '+state.chapter]);for(const year of state.years)active.push(['year:'+year,year]);if(state.type)active.push(['type',state.type]);if(state.topic)active.push(['topic',state.topic]);if(state.query)active.push(['query','“'+state.query+'”']);
    $('#active-filters').innerHTML=active.map(([key,label])=>'<button type="button" data-remove="'+key+'" aria-label="Remove filter '+esc(label)+'">'+esc(label)+' <span aria-hidden="true">×</span></button>').join('');
    $('#reset-button').hidden=!active.length;
    $('#results').innerHTML=list.length?visible.map(renderCard).join(''):'<div class="empty-state"><div class="empty-icon" aria-hidden="true">'+(state.savedOnly?'▱':'∅')+'</div><h3>'+(state.savedOnly&&!saved.size?'Your revision pile starts here.':'No questions found.')+'</h3><p>'+(state.savedOnly&&!saved.size?'Tap the bookmark on any question to keep it here for later.':'Try a shorter search, another topic, or clear your filters.')+'</p><button type="button" data-empty-reset="true">'+(state.savedOnly?'Browse all questions':'Clear filters')+'</button></div>';
    $('#load-more').hidden=list.length<=state.limit;$('#load-more').textContent='Load more questions ↓';$('#shown-count').textContent=list.length?'Showing '+visible.length+' of '+list.length+' entries':'';
    writeUrl();
  }
  function reset(){Object.assign(state,{chapter:'',years:[],type:'',topic:'',query:'',limit:12});render();}
  function closeSidebar(){const wasOpen=$('#sidebar').classList.contains('open');$('#sidebar').classList.remove('open');$('#sidebar-backdrop').hidden=true;$('#mobile-filters').setAttribute('aria-expanded','false');document.body.style.overflow='';if(wasOpen)$('#mobile-filters').focus();}
  function setChapter(id){state.chapter=id;state.topic='';render();closeSidebar();}
  $('#chapters').innerHTML=data.chapters.map(ch=>'<button type="button" class="chapter-button" data-chapter="'+ch.id+'" aria-pressed="false"><span class="chapter-num">'+(ch.id==='others'?'…':ch.id.padStart(2,'0'))+'</span><span class="chapter-title">'+esc(ch.name)+'</span><span class="count">'+questions.filter(q=>q.chapters.includes(ch.id)).length+'</span></button>').join('');
  $('#all-count').textContent=questions.length;
  $('#year-options').innerHTML=[...new Set(questions.map(q=>q.year))].sort((a,b)=>b-a).map(y=>'<label><input type="checkbox" value="'+y+'"> <span>'+y+'</span></label>').join('');
  $('#year-options').addEventListener('change',()=>{state.years=[...document.querySelectorAll('#year-options input')].filter(input=>input.checked).map(input=>input.value);render();});
  $('#clear-years').addEventListener('click',()=>{state.years=[];render();});
  $('#archive-notes').innerHTML=data.notes.map(n=>'<li>'+esc(n)+'</li>').join('');
  $('#search-form').addEventListener('submit',e=>{e.preventDefault();clearTimeout(queryTimer);state.query=$('#search-input').value;render();});
  $('#search-input').addEventListener('input',()=>{clearTimeout(queryTimer);queryTimer=setTimeout(()=>{state.query=$('#search-input').value;render();},100);});
  $('#clear-search').addEventListener('click',()=>{clearTimeout(queryTimer);state.query='';render();$('#search-input').focus();});
  for(const [id,key] of [['type-filter','type'],['sort-filter','sort'],['topic-filter','topic']])$('#'+id).addEventListener('change',e=>{state[key]=e.target.value;render();});
  $('#all-chapters').addEventListener('click',()=>setChapter(''));
  $('#reset-button').addEventListener('click',reset);
  $('#bank-nav').addEventListener('click',()=>{state.savedOnly=false;reset();});
  $('#saved-nav').addEventListener('click',()=>{state.savedOnly=true;reset();});
  $('#load-more').addEventListener('click',()=>{state.limit+=12;render(false);});
  $('#about-button').addEventListener('click',()=>$('#about-dialog').showModal());
  $('.dialog-close').addEventListener('click',()=>$('#about-dialog').close());
  $('#about-dialog').addEventListener('click',e=>{if(e.target===$('#about-dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
  $('#mobile-filters').addEventListener('click',()=>{$('#sidebar').classList.add('open');$('#sidebar-backdrop').hidden=false;$('#mobile-filters').setAttribute('aria-expanded','true');document.body.style.overflow='hidden';$('#mobile-close').focus();});
  $('#mobile-close').addEventListener('click',closeSidebar);$('#sidebar-backdrop').addEventListener('click',closeSidebar);
  document.addEventListener('keydown',e=>{
    if(e.key==='Tab'&&$('#sidebar').classList.contains('open')){
      const controls=[...document.querySelectorAll('#sidebar button, #sidebar a')],first=controls[0],last=controls[controls.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
    }
    if(e.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)&&!$('#about-dialog').open){e.preventDefault();$('#search-input').focus();}
    if(e.key==='Escape')closeSidebar();
  });
  document.addEventListener('click',async e=>{
    const b=e.target.closest('button');if(!b)return;
    if(b.dataset.chapter!==undefined){setChapter(b.dataset.chapter);return;}
    if(b.dataset.topic){state.topic=b.dataset.topic;render();return;}
    if(b.dataset.query){state.query=b.dataset.query;render();$('#search-input').focus();return;}
    if(b.dataset.remove){if(b.dataset.remove.startsWith('year:'))state.years=state.years.filter(y=>y!==b.dataset.remove.slice(5));else state[b.dataset.remove]='';render();return;}
    if(b.dataset.emptyReset){state.savedOnly=false;reset();return;}
    if(b.dataset.expand){const id=b.dataset.expand,card=document.getElementById(id);expanded.has(id)?expanded.delete(id):expanded.add(id);const open=expanded.has(id);card.classList.toggle('expanded',open);$('#body-'+id).hidden=!open;b.setAttribute('aria-expanded',String(open));b.innerHTML=(open?'Close question':'Read full question')+' <span aria-hidden="true">⌄</span>';return;}
    if(b.dataset.save){const id=b.dataset.save;saved.has(id)?saved.delete(id):saved.add(id);let persisted=true;try{localStorage.setItem('dbms-saved-v1',JSON.stringify([...saved]));}catch{persisted=false;}const isSaved=saved.has(id);b.classList.toggle('saved',isSaved);b.setAttribute('aria-pressed',String(isSaved));b.setAttribute('aria-label',(isSaved?'Unsave ':'Save ')+questions.find(q=>q.id===id).title);$('#saved-count').textContent=saved.size;if(state.savedOnly)render(false);toast(persisted?(isSaved?'Added to your saved questions':'Removed from saved questions'):'Saved for this session. Browser storage is unavailable.');return;}
    if(b.dataset.copy){const q=questions.find(q=>q.id===b.dataset.copy),url=new URL(location.href);url.search='';url.hash=q.id;try{await navigator.clipboard.writeText(url.href);toast('Question link copied');}catch{const ta=document.createElement('textarea');ta.value=url.href;document.body.append(ta);ta.select();let copied=false;try{copied=document.execCommand('copy');}catch{}ta.remove();if(copied)toast('Question link copied');else{location.hash=q.id;toast('Use the address bar to copy this question link');}}}
  });
  function openHash(){let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}const q=questions.find(q=>q.id===id);if(!q)return;expanded.add(id);if(!filtered().some(x=>x.id===id)){state.savedOnly=false;reset();}const index=filtered().findIndex(x=>x.id===id);state.limit=Math.max(state.limit,index+1);render(false);setTimeout(()=>document.getElementById(id)?.scrollIntoView({block:'start',behavior:'auto'}),0);}
  render();openHash();window.addEventListener('hashchange',openHash);
})();
