import{z as k,A as h,h as A,B,L as E}from"./runtime.D-iqYtEX.js";import{i as I,c as z,d as M,n as b,a as q}from"./utils.C1iE3jgQ.js";function D(s,i){if(i){const o=document.body;s.autofocus=!0,k(()=>{document.activeElement===o&&s.focus()})}}function G(s,i,o,c){var _=s.__attributes??(s.__attributes={});A&&(_[i]=s.getAttribute(i),i==="src"||i==="srcset"||i==="href"&&s.nodeName==="LINK")||_[i]!==(_[i]=o)&&(i==="style"&&"__styles"in s&&(s.__styles={}),i==="loading"&&(s[E]=o),o==null?s.removeAttribute(i):typeof o!="string"&&N(s).includes(i)?s[i]=o:s.setAttribute(i,o))}function S(s,i,o,c,_=!1,n=!1,K=!1){var t=i||{},L=s.tagName==="OPTION";for(var p in i)p in o||(o[p]=null);var $=N(s),w=s.__attributes??(s.__attributes={});for(const r in o){let f=o[r];if(L&&r==="value"&&f==null){s.value=s.__value="",t[r]=f;continue}var d=t[r];if(f!==d){t[r]=f;var y=r[0]+r[1];if(y!=="$$"){if(y==="on"){const l={},v="$$"+r;let u=r.slice(2);var g=q(u);if(I(u)&&(u=u.slice(0,-7),l.capture=!0),!g&&d){if(f!=null)continue;s.removeEventListener(u,t[v],l),t[v]=null}if(f!=null)if(g)s[`__${u}`]=f,M([u]);else{let O=function(T){t[r].call(this,T)};t[v]=z(u,s,O,l)}}else if(r==="style"&&f!=null)s.style.cssText=f+"";else if(r==="autofocus")D(s,!!f);else if(r==="__value"||r==="value"&&f!=null)s.value=s[r]=s.__value=f;else{var a=r;_||(a=b(a)),f==null&&!n?(w[r]=null,s.removeAttribute(r)):$.includes(a)&&(n||typeof f!="string")?s[a]=f:typeof f!="function"&&(A&&(a==="src"||a==="href"||a==="srcset")||G(s,a,f))}r==="style"&&"__styles"in s&&(s.__styles={})}}}return t}var e=new Map;function N(s){var i=e.get(s.nodeName);if(i)return i;e.set(s.nodeName,i=[]);for(var o,c=h(s),_=Element.prototype;_!==c;){o=B(c);for(var n in o)o[n].set&&i.push(n);c=h(c)}return i}export{S as a,G as s};