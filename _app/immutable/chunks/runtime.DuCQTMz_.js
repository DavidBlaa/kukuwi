var Rn=Array.isArray,Sn=Array.from,Dn=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyDescriptors,In=Object.prototype,On=Array.prototype,Zt=Object.getPrototypeOf;const kn=()=>{};function Nn(t){return t()}function zt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,ht=4,H=8,nt=16,w=32,Z=64,D=128,V=256,p=512,x=1024,b=2048,C=4096,j=8192,Wt=16384,dt=32768,Cn=65536,Xt=1<<18,Et=1<<19,_t=Symbol("$state"),bn=Symbol("legacy props"),Pn=Symbol("");function yt(t){return t===this.v}function Jt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function wt(t){return!Jt(t,this.v)}function Qt(t){throw new Error("effect_in_teardown")}function tn(){throw new Error("effect_in_unowned_derived")}function nn(t){throw new Error("effect_orphan")}function rn(){throw new Error("effect_update_depth_exceeded")}function Fn(){throw new Error("hydration_failed")}function qn(t){throw new Error("props_invalid_value")}function Ln(){throw new Error("state_descriptors_fixed")}function Mn(){throw new Error("state_prototype_fixed")}function en(){throw new Error("state_unsafe_local_read")}function sn(){throw new Error("state_unsafe_mutation")}let z=!1;function Yn(){z=!0}function rt(t){return{f:0,v:t,reactions:null,equals:yt,version:0}}function Hn(t){return Tt(rt(t))}function an(t,n=!1){var e;const r=rt(t);return n||(r.equals=wt),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function jn(t,n=!1){return Tt(an(t,n))}function Tt(t){return o!==null&&o.f&m&&(y===null?yn([t]):y.push(t)),t}function Bn(t,n){return et(t,Kt(()=>ot(t))),n}function et(t,n){return o!==null&&ut()&&o.f&(m|nt)&&(y===null||!y.includes(t))&&sn(),ln(t,n)}function ln(t,n){return t.equals(n)||(t.v=n,t.version=Ht(),mt(t,x),ut()&&u!==null&&u.f&p&&!(u.f&w)&&(_!==null&&_.includes(t)?(E(u,x),W(u)):g===null?wn([t]):g.push(t))),n}function mt(t,n){var r=t.reactions;if(r!==null)for(var e=ut(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&x||!e&&l===u||(E(l,n),i&(p|D)&&(i&m?mt(l,b):W(l)))}}const Un=1,Vn=2,Gn=16,Kn=1,$n=2,Zn=4,zn=8,Wn=16,Xn=1,Jn=2,un="[",on="[!",fn="]",At={},Qn=Symbol();function gt(t){console.warn("hydration_mismatch")}let S=!1;function tr(t){S=t}let d;function L(t){if(t===null)throw gt(),At;return d=t}function nr(){return L(I(d))}function rr(t){if(S){if(I(d)!==null)throw gt(),At;d=t}}function er(t=1){if(S){for(var n=t,r=d;n--;)r=I(r);d=r}}function sr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===fn){if(t===0)return n;t-=1}else(r===un||r===on)&&(t+=1)}var e=I(n);n.remove(),n=e}}var ct,xt,Rt;function ar(){if(ct===void 0){ct=window;var t=Element.prototype,n=Node.prototype;xt=ft(n,"firstChild").get,Rt=ft(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function J(t){return xt.call(t)}function I(t){return Rt.call(t)}function lr(t,n){if(!S)return J(t);var r=J(d);if(r===null)r=d.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),L(e),e}return L(r),r}function ur(t,n){if(!S){var r=J(t);return r instanceof Comment&&r.data===""?I(r):r}return d}function or(t,n=1,r=!1){let e=S?d:t;for(;n--;)e=I(e);if(!S)return e;var s=e.nodeType;if(r&&s!==3){var a=X();return e==null||e.before(a),L(a),a}return L(e),e}function ir(t){t.textContent=""}function _n(t){var n=m|x;u===null?n|=D:u.f|=Et;const r={children:null,ctx:f,deps:null,equals:yt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(o!==null&&o.f&m){var e=o;(e.children??(e.children=[])).push(r)}return r}function fr(t){const n=_n(t);return n.equals=wt,n}function St(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?st(e):F(e)}}}function Dt(t){var n,r=u;$(t.parent);try{St(t),n=jt(t)}finally{$(r)}return n}function It(t){var n=Dt(t),r=(O||t.f&D)&&t.deps!==null?b:p;E(t,r),t.equals(n)||(t.v=n,t.version=Ht())}function st(t){St(t),Y(t,0),E(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ot(t){u===null&&o===null&&nn(),o!==null&&o.f&D&&tn(),lt&&Qt()}function cn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var s=(t&Z)!==0,a=u,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=k;try{vt(!0),B(l),l.f|=Wt}catch(c){throw F(l),c}finally{vt(i)}}else n!==null&&W(l);var T=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&Et)===0;if(!T&&!s&&e&&(a!==null&&cn(l,a),o!==null&&o.f&m)){var A=o;(A.children??(A.children=[])).push(l)}return l}function _r(t){const n=P(H,null,!1);return E(n,p),n.teardown=t,n}function cr(t){Ot();var n=u!==null&&(u.f&w)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=kt(t);return e}}function vr(t){return Ot(),at(t)}function pr(t){const n=P(Z,t,!0);return()=>{F(n)}}function kt(t){return P(ht,t,!1)}function hr(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=at(()=>{t(),!e.ran&&(e.ran=!0,et(r.l.r2,!0),Kt(n))})}function dr(){var t=f;at(()=>{if(ot(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&E(r,b),q(r)&&B(r),n.ran=!1}t.l.r2.v=!1}})}function at(t){return P(H,t,!0)}function Er(t){return vn(t)}function vn(t,n=0){return P(H|nt|n,t,!0)}function yr(t,n=!0){return P(H|w,t,!0,n)}function Nt(t){var n=t.teardown;if(n!==null){const r=lt,e=o;pt(!0),K(null);try{n.call(null)}finally{pt(r),K(e)}}}function Ct(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)st(n[r])}}function bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;F(r,n),r=e}}function pn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||F(n),n=r}}function F(t,n=!0){var r=!1;if((n||t.f&Xt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:I(e);e.remove(),e=a}r=!0}bt(t,n&&!r),Ct(t),Y(t,0),E(t,j);var l=t.transitions;if(l!==null)for(const T of l)T.stop();Nt(t);var i=t.parent;i!==null&&i.first!==null&&Pt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Pt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function wr(t,n){var r=[];Ft(t,r,!0),hn(r,()=>{F(t),n&&n()})}function hn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ft(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&dt)!==0||(e.f&w)!==0;Ft(e,n,a?r:!1),e=s}}}function Tr(t){qt(t,!0)}function qt(t,n){if(t.f&C){q(t)&&B(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&dt)!==0||(r.f&w)!==0;qt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let G=!1,Q=[];function Lt(){G=!1;const t=Q.slice();Q=[],zt(t)}function mr(t){G||(G=!0,queueMicrotask(Lt)),Q.push(t)}function dn(){G&&Lt()}const Mt=0,En=1;let U=Mt,M=!1,k=!1,lt=!1;function vt(t){k=t}function pt(t){lt=t}let R=[],N=0;let o=null;function K(t){o=t}let u=null;function $(t){u=t}let y=null;function yn(t){y=t}let _=null,h=0,g=null;function wn(t){g=t}let Yt=0,O=!1,f=null;function Ht(){return++Yt}function ut(){return!z||f!==null&&f.l===null}function q(t){var l,i;var n=t.f;if(n&x)return!0;if(n&b){var r=t.deps,e=(n&D)!==0;if(r!==null){var s;if(n&V){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(q(a)&&It(a),e&&u!==null&&!O&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||E(t,p)}return!1}function Tn(t,n,r){throw t}function jt(t){var it;var n=_,r=h,e=g,s=o,a=O,l=y,i=f,T=t.f;_=null,h=0,g=null,o=T&(w|Z)?null:t,O=!k&&(T&D)!==0,y=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(Y(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!O)for(v=h;v<c.length;v++)((it=c[v]).reactions??(it.reactions=[])).push(t)}else c!==null&&h<c.length&&(Y(t,h),c.length=h);return A}finally{_=n,h=r,g=e,o=s,O=a,y=l,f=i}}function mn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(E(n,b),n.f&(D|V)||(n.f^=V),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)mn(t,r[e])}function B(t){var n=t.f;if(!(n&j)){E(t,p);var r=u;u=t;try{n&nt?pn(t):bt(t),Ct(t),Nt(t);var e=jt(t);t.teardown=typeof e=="function"?e:null,t.version=Yt}catch(s){Tn(s)}finally{u=r}}}function Bt(){N>1e3&&(N=0,rn()),N++}function Ut(t){var n=t.length;if(n!==0){Bt();var r=k;k=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Vt(s,a),An(a)}}finally{k=r}}}function An(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|C))&&q(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Pt(e):e.fn=null))}}function gn(){if(M=!1,N>1001)return;const t=R;R=[],Ut(t),M||(N=0)}function W(t){U===Mt&&(M||(M=!0,queueMicrotask(gn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|w)){if(!(r&p))return;n.f^=p}}R.push(n)}function Vt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&w)!==0,l=a&&(s&p)!==0;if(!l&&!(s&C))if(s&H){a?r.f^=p:q(r)&&B(r);var i=r.first;if(i!==null){r=i;continue}}else s&ht&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Vt(i,n)}function Gt(t){var n=U,r=R;try{Bt();const s=[];U=En,R=s,M=!1,Ut(r);var e=t==null?void 0:t();return dn(),(R.length>0||s.length>0)&&Gt(),N=0,e}finally{U=n,R=r}}async function Ar(){await Promise.resolve(),Gt()}function ot(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&j){var e=Dt(t);return st(t),e}if(o!==null){y!==null&&y.includes(t)&&en();var s=o.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),g!==null&&u!==null&&u.f&p&&!(u.f&w)&&g.includes(t)&&(E(u,x),W(u))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,q(a)&&It(a)),t.v}function Kt(t){const n=o;try{return o=null,t()}finally{o=n}}const xn=~(x|b|p);function E(t,n){t.f=t.f&xn|n}function gr(t,n=1){var r=+ot(t);return et(t,r+n),r}function xr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},z&&!n&&(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function Rr(t){const n=f;if(n!==null){t!==void 0&&(n.x=t);const l=n.e;if(l!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];$(a.effect),K(a.reaction),kt(a.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return t||{}}function Sr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(_t in t)tt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&_t in r&&tt(r)}}}function tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{tt(t[e],n)}catch{}const r=Zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$t(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{Zn as $,_r as A,K as B,$ as C,o as D,dt as E,u as F,mr as G,Dn as H,Rn as I,In as J,On as K,rt as L,Ln as M,ft as N,Mn as O,Zt as P,Tr as Q,wr as R,_t as S,nr as T,Qn as U,on as V,sr as W,L as X,tr as Y,qn as Z,Cn as _,Rr as a,wt as a0,w as a1,Z as a2,Kn as a3,z as a4,$n as a5,zn as a6,bn as a7,fr as a8,Wn as a9,hr as aA,dr as aB,jn as aC,Bn as aD,gr as aE,Gt as aF,Ar as aG,Jt as aH,an as aa,X as ab,Sn as ac,C as ad,ln as ae,Ft as af,ir as ag,hn as ah,J as ai,fn as aj,Vn as ak,Un as al,Gn as am,I as an,ar as ao,un as ap,At as aq,gt as ar,Fn as as,pr as at,Xn as au,Jn as av,Pn as aw,$t as ax,at as ay,kt as az,vn as b,yr as c,F as d,d as e,ur as f,lr as g,S as h,cr as i,f as j,Kt as k,Nn as l,zt as m,kn as n,ot as o,xr as p,Sr as q,rr as r,or as s,_n as t,vr as u,et as v,Hn as w,Yn as x,Er as y,er as z};
