(function(root){
  'use strict';
  const stop = new Set('what which questions question contained contain contains containing find show give me please all the a an of in on is are were was with about that this those these how do does did to for and or through set entire bank get search according sort filter by'.split(' '));
  function normalize(value){
    return String(value ?? '').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'')
      .replace(/[₀-₉]/g,c=>'₀₁₂₃₄₅₆₇₈₉'.indexOf(c)).replace(/[’‘]/g,"'")
      .replace(/b\s*(?:\+|⁺|plus)\s*(?:\(b plus\))?\s*(?:-?\s*tree)?/g,' bplus tree ')
      .replace(/boyce[\s-]*codd(?:\s+normal\s+form)?/g,' bcnf ')
      .replace(/entity[\s-]*relationship|e\s*-\s*r(?:\s*-\s*diagram)?|\berd\b/g,' er ')
      .replace(/two[\s-]*phase\s+locking|strict\s+2pl|\b2\s*pl\b/g,' 2pl ')
      .replace(/first normal form/g,'1nf').replace(/second normal form/g,'2nf').replace(/third normal form/g,'3nf')
      .replace(/normali[sz](?:ation|ations|e|ed|ing)/g,' normalization ')
      .replace(/dead[\s-]+lock/g,'deadlock').replace(/time[\s-]+stamp/g,'timestamp')
      .replace(/[^a-z0-9]+/g,' ').trim().replace(/\s+/g,' ');
  }
  function tokens(query){return [...new Set(normalize(query).split(' ').filter(t=>t&&!stop.has(t)))];}
  function parse(query){
    const phrases=[];
    const rest=String(query??'').replace(/["“]([^"”]+)["”]/g,(_match,phrase)=>{const normalized=normalize(phrase);if(normalized)phrases.push(normalized);return ' ';});
    return {phrases:[...new Set(phrases)],terms:tokens(rest)};
  }
  function matchesQuery(question,query){
    const {phrases,terms}=parse(query);
    return matches(question,terms)&&(!phrases.length||phrases.some(phrase=>(' '+question.searchable+' ').includes(' '+phrase+' ')));
  }
  function index(question,chapters){
    const chapterNames=question.chapters.map(id=>chapters.find(c=>c.id===id)?.name||'').join(' ');
    const searchable=normalize([question.title,question.body,question.year,question.assessment,chapterNames,...question.topics.map(t=>t.name)].join(' '));
    return {...question,searchable,words:new Set(searchable.split(' ')),titleIndex:normalize(question.title),topicIndex:normalize(question.topics.map(t=>t.name).join(' '))};
  }
  function matchesToken(question,token){
    if(question.words.has(token))return true;
    return token.length>=4&&[...question.words].some(w=>w.startsWith(token));
  }
  function matches(question,queryTokens){return queryTokens.every(t=>matchesToken(question,t));}
  function score(question,queryTokens){return queryTokens.reduce((s,t)=>s+(question.titleIndex.includes(t)?5:0)+(question.topicIndex.includes(t)?3:0)+(question.searchable.includes(t)?1:0),0);}
  root.DBMSSearch={normalize,tokens,parse,index,matches,matchesQuery,score};
})(typeof window!=='undefined'?window:globalThis);
