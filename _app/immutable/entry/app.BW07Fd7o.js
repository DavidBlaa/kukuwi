const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.C2dxeJEP.js","../chunks/CmPotoyF.js","../chunks/6JMBiHYb.js","../chunks/CxV61IRv.js","../assets/0.Ccjr17S2.css","../nodes/1.C4fEsM-7.js","../chunks/BJMztX48.js","../chunks/B0IBxgL7.js","../chunks/qfqbhri6.js","../chunks/DkM3fIYe.js","../chunks/C0ubwFn-.js","../chunks/Be6afn5i.js","../nodes/2.GeOCn0U1.js","../chunks/BsWXhmLp.js","../nodes/3.GeOCn0U1.js","../nodes/4.GeOCn0U1.js","../nodes/5.GeOCn0U1.js","../nodes/6.GeOCn0U1.js","../nodes/7.GeOCn0U1.js","../nodes/8.CJO941JD.js","../chunks/qzfPYBVn.js","../chunks/CWcK6JqJ.js","../chunks/BJRrw7D5.js","../nodes/9.CpcCvHIG.js","../chunks/C-PgMaZH.js","../chunks/Dn6whdxK.js","../chunks/CeEkwk16.js","../chunks/bLbAya-w.js","../nodes/10.B6rVJzBx.js","../chunks/DORJG-LQ.js","../assets/10.CPIxhYBE.css","../nodes/11.BxBowcsC.js","../chunks/DJLwxfc1.js","../chunks/DZfaSqai.js","../chunks/CpaBLRS4.js","../nodes/12.DmkyoHFH.js","../chunks/b1I2hU6f.js","../chunks/C_kQ09Xn.js","../nodes/13.D_O4WqQA.js","../nodes/14.HgqaR8iY.js","../nodes/15.DtOi08Tf.js"])))=>i.map(i=>d[i]);
var K=e=>{throw TypeError(e)};var X=(e,t,r)=>t.has(e)||K("Cannot "+r);var c=(e,t,r)=>(X(e,t,"read from private field"),r?r.call(e):t.get(e)),z=(e,t,r)=>t.has(e)?K("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),M=(e,t,r,i)=>(X(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r);import{i as Z,j as ut,h as ct,E as ft,q as lt,w as _t,v as dt,aD as mt,aC as ht,$ as Et,A as vt,af as gt,g as E,ay as yt,b as q,aM as Pt,an as Rt,R as At,p as Ot,a0 as Lt,_ as Tt,aN as bt,f as L,a as Dt,d as Q,s as It,c as Vt,r as kt,t as wt,e as p}from"../chunks/6JMBiHYb.js";import{h as pt,m as xt,u as St,s as Ct}from"../chunks/B0IBxgL7.js";import{a as y,t as et,c as I,b as jt}from"../chunks/CmPotoyF.js";import{i as B}from"../chunks/C-PgMaZH.js";import{b as G,p as Bt}from"../chunks/CWcK6JqJ.js";import{o as Gt}from"../chunks/Be6afn5i.js";function x(e,t,r){Z&&ut();var i=e,s,o;ct(()=>{s!==(s=t())&&(o&&(dt(o),o=null),s&&(o=lt(()=>r(i,s))))},ft),Z&&(i=_t)}function $(e,t){return e===t||(e==null?void 0:e[gt])===t}function S(e={},t,r,i){return mt(()=>{var s,o;return ht(()=>{s=o,o=[],Et(()=>{e!==r(...o)&&(t(e,...o),s&&$(r(...s),e)&&t(null,...s))})}),()=>{vt(()=>{o&&$(r(...o),e)&&t(null,...o)})}}),e}function qt(e){return class extends Ft{constructor(t){super({component:e,...t})}}}var P,_;class Ft{constructor(t){z(this,P);z(this,_);var o;var r=new Map,i=(a,n)=>{var f=At(n);return r.set(a,f),f};const s=new Proxy({...t.props||{},$$events:{}},{get(a,n){return E(r.get(n)??i(n,Reflect.get(a,n)))},has(a,n){return n===yt?!0:(E(r.get(n)??i(n,Reflect.get(a,n))),Reflect.has(a,n))},set(a,n,f){return q(r.get(n)??i(n,f),f),Reflect.set(a,n,f)}});M(this,_,(t.hydrate?pt:xt)(t.component,{target:t.target,anchor:t.anchor,props:s,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&Pt(),M(this,P,s.$$events);for(const a of Object.keys(c(this,_)))a==="$set"||a==="$destroy"||a==="$on"||Rt(this,a,{get(){return c(this,_)[a]},set(n){c(this,_)[a]=n},enumerable:!0});c(this,_).$set=a=>{Object.assign(s,a)},c(this,_).$destroy=()=>{St(c(this,_))}}$set(t){c(this,_).$set(t)}$on(t,r){c(this,P)[t]=c(this,P)[t]||[];const i=(...s)=>r.call(this,...s);return c(this,P)[t].push(i),()=>{c(this,P)[t]=c(this,P)[t].filter(s=>s!==i)}}$destroy(){c(this,_).$destroy()}}P=new WeakMap,_=new WeakMap;const Nt="modulepreload",Ut=function(e,t){return new URL(e,t).href},tt={},u=function(t,r,i){let s=Promise.resolve();if(r&&r.length>0){const a=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),f=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));s=Promise.allSettled(r.map(d=>{if(d=Ut(d,i),d in tt)return;tt[d]=!0;const R=d.endsWith(".css"),C=R?'[rel="stylesheet"]':"";if(!!i)for(let A=a.length-1;A>=0;A--){const T=a[A];if(T.href===d&&(!R||T.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${C}`))return;const v=document.createElement("link");if(v.rel=R?"stylesheet":Nt,R||(v.as="script"),v.crossOrigin="",v.href=d,f&&v.setAttribute("nonce",f),document.head.appendChild(v),R)return new Promise((A,T)=>{v.addEventListener("load",A),v.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(a){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=a,window.dispatchEvent(n),!n.defaultPrevented)throw a}return s.then(a=>{for(const n of a||[])n.status==="rejected"&&o(n.reason);return t().catch(o)})},ne={};var Yt=et('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),zt=et("<!> <!>",1);function Mt(e,t){Ot(t,!0);let r=G(t,"components",23,()=>[]),i=G(t,"data_0",3,null),s=G(t,"data_1",3,null),o=G(t,"data_2",3,null);Lt(()=>t.stores.page.set(t.page)),Tt(()=>{t.stores,t.page,t.constructors,r(),t.form,i(),s(),o(),t.stores.page.notify()});let a=Q(!1),n=Q(!1),f=Q(null);Gt(()=>{const l=t.stores.page.subscribe(()=>{E(a)&&(q(n,!0),bt().then(()=>{q(f,Bt(document.title||"untitled page"))}))});return q(a,!0),l});const d=p(()=>t.constructors[2]);var R=zt(),C=L(R);{var W=l=>{var g=I();const V=p(()=>t.constructors[0]);var k=L(g);x(k,()=>E(V),(O,b)=>{S(b(O,{get data(){return i()},get form(){return t.form},children:(m,Ht)=>{var H=I(),rt=L(H);{var nt=D=>{var w=I();const F=p(()=>t.constructors[1]);var N=L(w);x(N,()=>E(F),(U,Y)=>{S(Y(U,{get data(){return s()},get form(){return t.form},children:(h,Jt)=>{var J=I(),st=L(J);x(st,()=>E(d),(ot,it)=>{S(it(ot,{get data(){return o()},get form(){return t.form}}),j=>r()[2]=j,()=>{var j;return(j=r())==null?void 0:j[2]})}),y(h,J)},$$slots:{default:!0}}),h=>r()[1]=h,()=>{var h;return(h=r())==null?void 0:h[1]})}),y(D,w)},at=D=>{var w=I();const F=p(()=>t.constructors[1]);var N=L(w);x(N,()=>E(F),(U,Y)=>{S(Y(U,{get data(){return s()},get form(){return t.form}}),h=>r()[1]=h,()=>{var h;return(h=r())==null?void 0:h[1]})}),y(D,w)};B(rt,D=>{t.constructors[2]?D(nt):D(at,!1)})}y(m,H)},$$slots:{default:!0}}),m=>r()[0]=m,()=>{var m;return(m=r())==null?void 0:m[0]})}),y(l,g)},v=l=>{var g=I();const V=p(()=>t.constructors[0]);var k=L(g);x(k,()=>E(V),(O,b)=>{S(b(O,{get data(){return i()},get form(){return t.form}}),m=>r()[0]=m,()=>{var m;return(m=r())==null?void 0:m[0]})}),y(l,g)};B(C,l=>{t.constructors[1]?l(W):l(v,!1)})}var A=It(C,2);{var T=l=>{var g=Yt(),V=Vt(g);{var k=O=>{var b=jt();wt(()=>Ct(b,E(f))),y(O,b)};B(V,O=>{E(n)&&O(k)})}kt(g),y(l,g)};B(A,l=>{E(a)&&l(T)})}y(e,R),Dt()}const ae=qt(Mt),se=[()=>u(()=>import("../nodes/0.C2dxeJEP.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),()=>u(()=>import("../nodes/1.C4fEsM-7.js"),__vite__mapDeps([5,1,2,6,7,8,9,10,11]),import.meta.url),()=>u(()=>import("../nodes/2.GeOCn0U1.js"),__vite__mapDeps([12,13,1,2,3]),import.meta.url),()=>u(()=>import("../nodes/3.GeOCn0U1.js"),__vite__mapDeps([14,13,1,2,3]),import.meta.url),()=>u(()=>import("../nodes/4.GeOCn0U1.js"),__vite__mapDeps([15,13,1,2,3]),import.meta.url),()=>u(()=>import("../nodes/5.GeOCn0U1.js"),__vite__mapDeps([16,13,1,2,3]),import.meta.url),()=>u(()=>import("../nodes/6.GeOCn0U1.js"),__vite__mapDeps([17,13,1,2,3]),import.meta.url),()=>u(()=>import("../nodes/7.GeOCn0U1.js"),__vite__mapDeps([18,13,1,2,3]),import.meta.url),()=>u(()=>import("../nodes/8.CJO941JD.js"),__vite__mapDeps([19,1,2,6,20,7,3,21,9,8,10,11,22]),import.meta.url),()=>u(()=>import("../nodes/9.CpcCvHIG.js"),__vite__mapDeps([23,1,2,6,7,24,25,20,3,21,9,26,11,27,8,10]),import.meta.url),()=>u(()=>import("../nodes/10.B6rVJzBx.js"),__vite__mapDeps([28,1,2,24,25,21,9,11,7,20,3,29,10,8,30]),import.meta.url),()=>u(()=>import("../nodes/11.BxBowcsC.js"),__vite__mapDeps([31,1,2,24,32,8,9,10,11,21,33,25,7,20,3,29,34,27,6]),import.meta.url),()=>u(()=>import("../nodes/12.DmkyoHFH.js"),__vite__mapDeps([35,1,2,24,32,8,9,10,11,21,36,25,20,7,3,29,6,34,27,37]),import.meta.url),()=>u(()=>import("../nodes/13.D_O4WqQA.js"),__vite__mapDeps([38,1,2,6,7,25,20,3,21,9,22,10,27]),import.meta.url),()=>u(()=>import("../nodes/14.HgqaR8iY.js"),__vite__mapDeps([39,1,2,7,24,21,9,11,36,25,20,3,29,10,6,34,27,8,37,33,26]),import.meta.url),()=>u(()=>import("../nodes/15.DtOi08Tf.js"),__vite__mapDeps([40,1,2,6,7,25,20,3,21,9,8,10,11,37]),import.meta.url)],oe=[],ie={"/":[8],"/Bestenliste":[9,[2]],"/Genre-Game":[10,[3]],"/Pattern-Game":[11,[4]],"/Quiz-Game":[12],"/layout":[13,[5]],"/raten":[14,[6]],"/uebung":[15,[7]]},Qt={handleError:({error:e})=>{console.error(e)},reroute:()=>{},transport:{}},Wt=Object.fromEntries(Object.entries(Qt.transport).map(([e,t])=>[e,t.decode])),ue=!1,ce=(e,t)=>Wt[e](t);export{ce as decode,Wt as decoders,ie as dictionary,ue as hash,Qt as hooks,ne as matchers,se as nodes,ae as root,oe as server_loads};
