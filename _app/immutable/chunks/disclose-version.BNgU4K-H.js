import{ab as c,ai as f,F as l,au as p,av as h,h as u,e as s,X as E,T}from"./runtime.DuCQTMz_.js";function m(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function a(r,t){var e=l;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function y(r,t){var e=(t&p)!==0,_=(t&h)!==0,n,d=!r.startsWith("<!>");return()=>{if(u)return a(s,null),s;n===void 0&&(n=m(d?r:"<!>"+r),e||(n=f(n)));var o=_?document.importNode(n,!0):n.cloneNode(!0);if(e){var v=f(o),i=o.lastChild;a(v,i)}else a(o,o);return o}}function N(r,t,e="svg"){var _=!r.startsWith("<!>"),n=`<${e}>${_?r:"<!>"+r}</${e}>`,d;return()=>{if(u)return a(s,null),s;if(!d){var o=m(n),v=f(o);d=f(v)}var i=d.cloneNode(!0);return a(i,i),i}}function M(r=""){if(!u){var t=c(r+"");return a(t,t),t}var e=s;return e.nodeType!==3&&(e.before(e=c()),E(e)),a(e,e),e}function b(){if(u)return a(s,null),s;var r=document.createDocumentFragment(),t=document.createComment(""),e=c();return r.append(t,e),a(t,e),r}function x(r,t){if(u){l.nodes_end=s,T();return}r!==null&&r.before(t)}const g="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(g);export{x as a,a as b,b as c,m as d,M as e,N as n,y as t};
