import{K as w,ao as l,a4 as f,ap as E,F as b,z as T,aq as k,W as A}from"./runtime.Buz-Ab-H.js";function M(t,r,o,n=!0){n&&o();for(var a of r)t.addEventListener(a,o);w(()=>{for(var e of r)t.removeEventListener(e,o)})}function I(t){var r=E,o=b;l(null),f(null);try{return t()}finally{l(r),f(o)}}const N=new Set,O=new Set;function V(t,r,o,n){function a(e){if(n.capture||W.call(r,e),!e.cancelBubble)return I(()=>o.call(this,e))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?T(()=>{r.addEventListener(t,a,n)}):r.addEventListener(t,a,n),a}function j(t,r,o,n,a){var e={capture:n,passive:a},i=V(t,r,o,e);(r===document.body||r===window||r===document)&&w(()=>{r.removeEventListener(t,i,e)})}function z(t){for(var r=0;r<t.length;r++)N.add(t[r]);for(var o of O)o(t)}function W(t){var y;var r=this,o=r.ownerDocument,n=t.type,a=((y=t.composedPath)==null?void 0:y.call(t))||[],e=a[0]||t.target,i=0,_=t.__root;if(_){var p=a.indexOf(_);if(p!==-1&&(r===document||r===window)){t.__root=r;return}var v=a.indexOf(r);if(v===-1)return;p<=v&&(i=p)}if(e=a[i]||t.target,e!==r){k(t,"currentTarget",{configurable:!0,get(){return e||o}});var g=E,m=b;l(null),f(null);try{for(var u,h=[];e!==null;){var d=e.assignedSlot||e.parentNode||e.host||null;try{var c=e["__"+n];if(c!==void 0&&!e.disabled)if(A(c)){var[S,...L]=c;S.apply(e,[t,...L])}else c.call(e,t)}catch(s){u?h.push(s):u=s}if(t.cancelBubble||d===r||d===null)break;e=d}if(u){for(let s of h)queueMicrotask(()=>{throw s});throw u}}finally{t.__root=r,delete t.currentTarget,l(g),f(m)}}}function P(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const q=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function C(t){return q.includes(t)}const x={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",srcobject:"srcObject"};function F(t){return t=t.toLowerCase(),x[t]??t}const B=["touchstart","touchmove"];function G(t){return B.includes(t)}export{C as a,N as b,V as c,z as d,j as e,G as f,W as h,P as i,M as l,F as n,O as r};
