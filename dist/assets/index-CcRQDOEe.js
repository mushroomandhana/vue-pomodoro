import{g as L,o as j,a as U,n as W,u as T,b as V,r as N,w as B,c as k,s as A,d as D,e as F,f as b,V as R,h as g,i as I,t as P,j as C}from"./index-CMvMXrFI.js";import{u as q}from"./list-BS1o3hV8.js";import{u as z}from"./settings-DUS_Onhi.js";import{V as E,a as H}from"./VRow-DD24tzJN.js";function O(e){return L()?(j(e),!0):!1}function w(){const e=new Set,t=o=>{e.delete(o)};return{on:o=>{e.add(o);const r=()=>t(o);return O(r),{off:r}},off:t,trigger:(...o)=>Promise.all(Array.from(e).map(r=>r(...o)))}}function x(e){return typeof e=="function"?e():T(e)}const $=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const J=Object.prototype.toString,K=e=>J.call(e)==="[object Object]",Q=()=>{};function X(e){return V()}function Y(e,t=!0,n){X()?U(e,n):t?e():W(e)}function Z(e){var t;const n=x(e);return(t=n==null?void 0:n.$el)!=null?t:n}const M=$?window:void 0;function ee(...e){let t,n,i,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,i,o]=e,t=M):[t,n,i,o]=e,!t)return Q;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const r=[],s=()=>{r.forEach(l=>l()),r.length=0},p=(l,c,u,f)=>(l.addEventListener(c,u,f),()=>l.removeEventListener(c,u,f)),m=B(()=>[Z(t),x(o)],([l,c])=>{if(s(),!l)return;const u=K(c)?{...c}:c;r.push(...n.flatMap(f=>i.map(h=>p(l,f,h,u))))},{immediate:!0,flush:"post"}),v=()=>{m(),s()};return O(v),v}function te(){const e=N(!1),t=V();return t&&U(()=>{e.value=!0},t),e}function ne(e){const t=te();return k(()=>(t.value,!!e()))}function oe(e={}){const{window:t=M,requestPermissions:n=!0}=e,i=e,o=ne(()=>{if(!t||!("Notification"in t))return!1;try{new Notification("")}catch{return!1}return!0}),r=N(o.value&&"permission"in Notification&&Notification.permission==="granted"),s=N(null),p=async()=>{if(o.value)return!r.value&&Notification.permission!=="denied"&&await Notification.requestPermission()==="granted"&&(r.value=!0),r.value},{on:m,trigger:v}=w(),{on:l,trigger:c}=w(),{on:u,trigger:f}=w(),{on:h,trigger:S}=w(),_=async a=>{if(!o.value||!r.value)return;const d=Object.assign({},i,a);return s.value=new Notification(d.title||"",d),s.value.onclick=v,s.value.onshow=c,s.value.onerror=f,s.value.onclose=S,s.value},y=()=>{s.value&&s.value.close(),s.value=null};if(n&&Y(p),O(y),o.value&&t){const a=t.document;ee(a,"visibilitychange",d=>{d.preventDefault(),a.visibilityState==="visible"&&y()})}return{isSupported:o,notification:s,ensurePermissions:p,permissionGranted:r,show:_,close:y,onClick:m,onShow:l,onError:u,onClose:h}}const re={style:{color:"#fff"}},se={style:{color:"#fff"}},ue={__name:"index",setup(e){const t={STOP:0,COUNTING:1,PAUSE:2},n=N(t.STOP),i=q(),{currentItem:o,items:r,timeleft:s}=A(i),{setCurrentItem:p,countdown:m,setFinishItem:v}=i,l=z(),{selectedAlarmFile:c}=A(l);let u=0;const f=()=>{n.value===t.STOP&&r.value.length>0&&p(),n.value=t.COUNTING,u=setInterval(()=>{m(),s.value===0&&S()},1e3)},h=()=>{n.value=t.PAUSE,clearInterval(u)},S=()=>{clearInterval(u),n.value=t.STOP;const a=new Audio;a.src=c.value,a.play();const{show:d,isSupported:G}=oe({title:"事項完成",body:o.value,icon:new URL(""+new URL("tomato-tm_sgEMz.png",import.meta.url).href,import.meta.url).href});G.value&&d(),v(),r.value.length>0&&f()},_=k(()=>o.value.length>0?o.value:r.value.length>0?"點擊開始":"沒有事項"),y=k(()=>{const a=Math.floor(s.value/60).toString().padStart(2,"0"),d=(s.value%60).toString().padStart(2,"0");return a+":"+d});return(a,d)=>(D(),F(R,null,{default:b(()=>[g(H,{style:{"text-align":"center"}},{default:b(()=>[g(E,{cols:"12"},{default:b(()=>[I("h1",re,"目前事項 "+P(_.value),1),I("h2",se,"剩餘時間 "+P(y.value),1)]),_:1}),g(E,{cols:"12"},{default:b(()=>[g(C,{icon:"mdi-play",onClick:f,disabled:n.value===t.COUNTING||T(o).length===0&&T(r).length===0,style:{"background-color":"#b71c1c"}},null,8,["disabled"]),g(C,{icon:"mdi-pause",disabled:n.value!==t.COUNTING,onClick:h,style:{"background-color":"#b71c1c"}},null,8,["disabled"]),g(C,{icon:"mdi-skip-next",disabled:T(o).length===0,onClick:S,style:{"background-color":"#b71c1c"}},null,8,["disabled"])]),_:1})]),_:1})]),_:1}))}};export{ue as default};