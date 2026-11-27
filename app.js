(()=>{'use strict';const $=id=>document.getElementById(id), S=window.NF_SCHEMA,C=window.NF_CONFIG,form=$('form');let mode='diagnostico',page=0,groups=[];const live=/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(C.endpoint);if(live)form.action=C.endpoint;else $('demo').hidden=false;if(C.gestaoUrl&&/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(C.gestaoUrl)){$('adminlink').href=C.gestaoUrl;$('adminlink').hidden=false;$('anon').hidden=true}
// Controle local de participação. Altere a campanha apenas ao iniciar nova pesquisa geral.
const CAMPANHA = '2026-11';
const PREFIX = 'nutrifeedback:participacao:v1:';
const KEY_GENERAL = PREFIX + 'geral:' + CAMPANHA;
const ID_RE = /^[-a-zA-Z0-9]{12,80}$/;
function diaEscola() {
  const parts = new Intl.DateTimeFormat('en-CA', {timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
  const d = Object.fromEntries(parts.map(p=>[p.type,p.value]));
  return `${d.year}-${d.month}-${d.day}`;
}
function chaveAtual() {
  if(mode === 'diagnostico') return KEY_GENERAL;
  const meal = form.querySelector('input[name="refeicao"]:checked')?.value;
  return meal ? PREFIX + 'diaria:' + diaEscola() + ':' + meal : null;
}
function ler(key) {
  if(!key) return null;
  try {
    const r = JSON.parse(localStorage.getItem(key));
    return r && ID_RE.test(r.id) && ['pendente','confirmado'].includes(r.estado) ? r : null;
  } catch (_) { return null; }
}
function guardar(key,r) {
  try { localStorage.setItem(key,JSON.stringify(r)); return true; }
  catch (_) { return false; }
}
function receberConfirmacao() {
  const match = /^#nf-confirm=([-a-zA-Z0-9]{12,80})$/.exec(location.hash);
  if(!match) return;
  try {
    for(let i=0;i<localStorage.length;i++) {
      const k=localStorage.key(i);
      if(!k || !k.startsWith(PREFIX)) continue;
      const r=ler(k);
      if(r && r.id===match[1]) { guardar(k,{id:r.id,estado:'confirmado'}); break; }
    }
  } catch (_) {}
  history.replaceState(null,'',location.pathname+location.search);
}
function mensagemBloqueio() {
  return mode==='diagnostico' ? 'A pesquisa geral já foi registrada neste navegador. Você ainda pode fazer a avaliação de hoje.' : 'Esta refeição já foi avaliada hoje neste navegador. Escolha outra refeição.';
}
function atualizarControle() {
  const r=ler(chaveAtual()), bloqueado=r?.estado==='confirmado';
  $('next').disabled=bloqueado;
  $('send').disabled=bloqueado;
  if(bloqueado) $('status').textContent=mensagemBloqueio();
  else if(r?.estado==='pendente') $('status').textContent='Há um envio anterior sem confirmação neste navegador. Se reenviar, o sistema reutilizará o mesmo identificador para evitar uma segunda gravação.';
  else $('status').textContent='';
}
receberConfirmacao();

function el(tag,txt){let e=document.createElement(tag);if(txt)e.textContent=txt;return e}function select(name,options){let e=el('select');e.name=name;e.required=true;let o=el('option','Selecione');o.value='';e.append(o);options.forEach(v=>{let o=el('option',v);o.value=v;e.append(o)});return e}function render(q,i){let f=el('fieldset');f.className='question';const dailyTitles={prato:'Qual preparação foi oferecida hoje?',consumo:'Hoje, quanto você consumiu dessa refeição?'};f.append(el('legend',`${i+1}. ${mode==='diaria'?(dailyTitles[q.key]||q.title):q.title}`));if(q.hint){let h=el('p',mode==='diaria'&&q.key==='refeicao'?'Escolha a refeição de hoje.':q.hint);h.className='muted';f.append(h)}if(q.kind==='select'){let s=select(q.key,q.options);s.setAttribute('aria-label',q.title);f.append(s);
if(['prato','favorito'].includes(q.key)) {
  const detail=el('div');
  detail.style.marginTop='10px';
  const label=el('label','Qual preparação?');
  label.htmlFor=q.key+'_outra';
  const t=el('textarea');
  t.id=q.key+'_outra';
  t.name=q.key+'_outra';
  t.maxLength=120;
  t.rows=2;
  t.placeholder='Digite o nome da preparação (sem dados pessoais)';
  t.style.minHeight='64px';
  const validate=()=>t.setCustomValidity(!t.disabled&&!t.value.trim()?'Informe o nome da preparação.':'');
  const sync=()=>{
    const active=s.value==='Outra preparação';
    detail.hidden=!active;
    t.disabled=!active;
    t.required=active;
    if(!active)t.value='';
    validate();
  };
  detail.append(label,t);
  f.append(detail);
  s.addEventListener('change',sync);
  t.addEventListener('input',validate);
  sync();
}
}else if(q.kind==='matrix'){S.spices.forEach((v,j)=>{let l=el('label');l.className='matrix';l.append(el('span',v),select('cond_'+j,q.options));f.append(l)})}else if(q.kind==='text'){let t=el('textarea');t.name=q.key;t.maxLength=500;t.placeholder='Escreva aqui (opcional)';t.setAttribute('aria-label',q.title);f.append(t)}else{q.options.forEach((v,j)=>{let l=el('label');l.className='option';let a=el('input');a.type=q.kind==='check'?'checkbox':'radio';a.name=q.key;a.value=v;if(a.type==='radio')a.required=true;a.id=q.key+'_'+j;l.append(a,el('span',v));f.append(l);if(q.kind==='check')a.addEventListener('change',()=>{const inputs=[...f.querySelectorAll('input')],none=inputs.at(-1);if(a===none&&a.checked)inputs.slice(0,-1).forEach(x=>x.checked=false);else if(a.checked)none.checked=false})})}return f}function start(m){mode=m;page=0;$('tipo').value=m;$('submission').value=globalThis.crypto?.randomUUID?.()||('nf-'+Date.now()+'-'+Math.random().toString(36).slice(2));$('questions').replaceChildren();const qs=S.questions.filter(q=>q.scope==='ambos'||q.scope===m);groups=[];for(let i=0;i<qs.length;i+=4){let g=el('div');qs.slice(i,i+4).forEach((q,j)=>g.append(render(q,i+j)));$('questions').append(g);groups.push(g)}document.querySelectorAll('.mode').forEach(b=>{b.classList.toggle('active',b.dataset.mode===m);b.setAttribute('aria-pressed',String(b.dataset.mode===m))});show()}function show(){groups.forEach((g,i)=>g.hidden=i!==page);$('counter').textContent=`Etapa ${page+1} de ${groups.length}`;let n=Math.round(page/groups.length*100);$('progress').style.width=n+'%';document.querySelector('.progress').setAttribute('aria-valuenow',n);$('prev').disabled=page===0;$('next').hidden=page===groups.length-1;$('send').hidden=page!==groups.length-1;$('status').textContent='';atualizarControle()}function check(i){for(const f of groups[i].querySelectorAll('fieldset')){let checks=f.querySelectorAll('input[type=checkbox]');if(checks.length&&![...checks].some(x=>x.checked)){ $('status').textContent='Selecione ao menos um motivo ou “Nenhum / não se aplica”.';checks[0].focus();return false}for(const e of f.querySelectorAll('input,select,textarea'))if(!e.checkValidity()){e.reportValidity();return false}}return true}function go(){ $('survey').scrollIntoView({behavior:'smooth',block:'start'}) }document.querySelectorAll('.mode').forEach(b=>b.onclick=()=>{if(mode!==b.dataset.mode&&(!form.querySelector('#questions input:checked, #questions select:valid, #questions textarea:not(:placeholder-shown)')||confirm('Trocar de avaliação apaga as respostas em andamento. Continuar?')))start(b.dataset.mode)});form.addEventListener('change',e=>{if(e.target.name==='refeicao')atualizarControle()});$('next').onclick=()=>{if(ler(chaveAtual())?.estado==='confirmado'){atualizarControle();return}if(check(page)){page++;show();go()}};$('prev').onclick=()=>{if(page){page--;show();go()}};form.noValidate=true;form.addEventListener('submit',e=>{if(page!==groups.length-1){e.preventDefault();return}for(let i=0;i<groups.length;i++){page=i;show();if(!check(i)){e.preventDefault();go();return}}if(!live){e.preventDefault();$('status').textContent='Prévia concluída. Nenhum dado foi enviado. Configure a integração para habilitar a coleta.';return}const key=chaveAtual(), anterior=ler(key);
if(anterior?.estado==='confirmado'){e.preventDefault();atualizarControle();return}
$('submission').value=anterior?.estado==='pendente' ? anterior.id : (globalThis.crypto?.randomUUID?.()||('nf-'+Date.now()+'-'+Math.random().toString(36).slice(2)));
if(key && !guardar(key,{id:$('submission').value,estado:'pendente'})){
  if(!confirm('O navegador não permite guardar o controle de participação. Enviar mesmo assim?')){e.preventDefault();return}
}
$('send').disabled=true;$('send').textContent='Enviando…';$('status').textContent='A confirmação será exibida após a gravação.'});window.addEventListener('pageshow',()=>{receberConfirmacao();$('send').textContent='Enviar avaliação';atualizarControle()});window.addEventListener('storage',e=>{if(e.key===null||e.key.startsWith(PREFIX))atualizarControle()});start(mode)})();