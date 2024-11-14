import{al as N,h as _,am as T,I as k,an as M,ao as F,ap as z,aq as I}from"./runtime.CAD8VR5C.js";import{i as V,f as B,d as w,n as x,g as L,l as D}from"./store.CwYFn7uV.js";function C(s,a){if(a){const n=document.body;s.autofocus=!0,N(()=>{document.activeElement===n&&s.focus()})}}function O(s,a,n,i){var o=s.__attributes??(s.__attributes={});_&&(o[a]=s.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&s.nodeName==="LINK")||o[a]!==(o[a]=n)&&(a==="style"&&"__styles"in s&&(s.__styles={}),a==="loading"&&(s[T]=n),n==null?s.removeAttribute(a):typeof n!="string"&&G(s).includes(a)?s[a]=n:s.setAttribute(a,n))}function H(s,a,n,i,o=!1,u=!1,c=!1){var t=a||{},P=s.tagName==="OPTION";for(var v in a)v in n||(n[v]=null);var j=G(s),E=s.__attributes??(s.__attributes={}),g=[];for(const e in n){let r=n[e];if(P&&e==="value"&&r==null){s.value=s.__value="",t[e]=r;continue}var b=t[e];if(r!==b){t[e]=r;var d=e[0]+e[1];if(d!=="$$"){if(d==="on"){const f={},l="$$"+e;let p=e.slice(2);var h=L(p);if(V(p)&&(p=p.slice(0,-7),f.capture=!0),!h&&b){if(r!=null)continue;s.removeEventListener(p,t[l],f),t[l]=null}if(r!=null)if(h)s[`__${p}`]=r,w([p]);else{let y=function(S){t[e].call(this,S)};a?t[l]=B(p,s,y,f):g.push([e,r,()=>t[l]=B(p,s,y,f)])}}else if(e==="style"&&r!=null)s.style.cssText=r+"";else if(e==="autofocus")C(s,!!r);else if(e==="__value"||e==="value"&&r!=null)s.value=s[e]=s.__value=r;else{var m=e;o||(m=x(m)),r==null&&!u?(E[e]=null,s.removeAttribute(e)):j.includes(m)&&(u||typeof r!="string")?s[m]=r:typeof r!="function"&&(_&&(m==="src"||m==="href"||m==="srcset")||O(s,m,r))}e==="style"&&"__styles"in s&&(s.__styles={})}}}return a||N(()=>{if(s.isConnected)for(const[e,r,f]of g)t[e]===r&&f()}),t}var A=new Map;function G(s){var a=A.get(s.nodeName);if(a)return a;A.set(s.nodeName,a=[]);for(var n,i=k(s),o=Element.prototype;o!==i;){n=M(i);for(var u in n)n[u].set&&a.push(u);i=k(i)}return a}function J(s,a){var n=s.__className,i=$(a);_&&s.className===i?s.__className=i:(n!==i||_&&s.className!==i)&&(a==null?s.removeAttribute("class"):s.className=i,s.__className=i)}function $(s){return s??""}function K(s,a,n=a){var i,o,u=()=>{cancelAnimationFrame(i),s.paused||(i=requestAnimationFrame(u));var c=s.currentTime;o!==c&&n(o=c)};i=requestAnimationFrame(u),s.addEventListener("timeupdate",u),F(()=>{var c=Number(a());o!==c&&!isNaN(c)&&(s.currentTime=o=c)}),z(()=>cancelAnimationFrame(i))}function Q(s,a,n=a){var i=a(),o=()=>{i!==s.paused&&n(i=s.paused)};D(s,["play","pause","canplay"],o,i==null),I(()=>{(i=!!a())!==s.paused&&(i?s.pause():s.play().catch(()=>{n(i=!0)}))})}function Y(s,a,n=a){var i=()=>{n(s.volume)};a()==null&&i(),D(s,["volumechange"],i,!1),F(()=>{var o=Number(a());o!==s.volume&&!isNaN(o)&&(s.volume=o)})}const U=[{id:1,name:"Schlagzeug",image:"001-schlagzeug.png",audios:["Drums - Funk 111 bpm.mp3","Drums - Funk 112 bpm.mp3","Drums - Funk 122 bpm.mp3","Drums - Jazz Break 125 bpm.mp3","Drums - Jazz Brushes 70 bpm.mp3","Drums - Rock 72 bpm.mp3"]},{id:2,name:"Gitarre",image:"002-spanische-gitarre.png",audios:["Gt1 AfricanFunk Gm 120bpm.mp3","Gt1 Alternative Em 120bpm.mp3","Gt1 Blues Amaj 88bpm.mp3","Gt1 Chill Bm 108bpm.mp3","Gt1 Funk Cmaj 124bpm.mp3","Gt1 Punk Emaj 170bpm.mp3"]},{id:3,name:"Bass",image:"003-elektrische-gitarre.png",audios:["Bs1 AfricanFunk Gm 120bpm.mp3","Bs1 Alternative Em 120bpm.mp3","Bs1 Blues Amaj 88bpm.mp3","Bs1 Chill Bm 108bpm.mp3","Bs1 Funk Cmaj 124bpm.mp3","Bs1 Punk Emaj 170bpm.mp3"]},{id:5,name:"Piano",image:"004-elektrisches-klavier.png",audios:["Piano Grand Piano Dirty Stabs E Minor 90 bpm.mp3","Piano Ostinato Focus F Dorian 85 bpm.mp3","Piano Ostinato Retrospection D Major 100 bpm.mp3","Piano Phrase Blues Sky Eb Minor 92bpm.mp3","Piano Phrase Lazy Day IV-I Ab Major 105 bpm.mp3","Piano Progression City Drive A Minor 125 bpm.mp3"]},{id:6,name:"Trompete",image:"006-trompete.png",audios:["Trumpet 87bpm G minor.mp3","Trumpet 105bpm D minor.mp3","Trumpet Sax Sound Instrument.mp3","Trumpet Solo F Instrument.mp3"]},{id:7,name:"Violine",image:"007-violine.png",audios:["Violine 1.mp3"]},{id:8,name:"Saxophone",image:"008-saxophon.png",audios:["Sax 60bpm E minor.mp3"]},{id:9,name:"Mikrophone",image:"009-karaoke.png",audios:["Vocal Beatbox Quasheesh.mp3","Vocal Demo Harmony.mp3","Vocal Kyathe Monks.mp3","Vocal L10 Demo Voc Reverb 1.mp3"]},{id:10,name:"Harmonium",image:"harmonium.png",audios:["Harmonium_124bpm_E.mp3"]},{id:11,name:"Banjo",image:"banjo.png",audios:["Banjo-exotic-loop_100bpm_B_minor.mp3"]},{id:12,name:"Flöte",image:"flute.png",audios:["Flute-vibey_150bpm.mp3"]}],W=["success1.gif","success2.gif","success3.gif","success4.gif","success5.gif","happy-snoopy.gif","gil-cat.gif"],X=["fail1.gif","fail3.gif","fail4.gif","fail4.gif"],Z=[{id:1,instrument_ids:[1,2,3,4,5,6,7,8],track_path:"Drums - Funk 112 bpm.mp3",correct_id:1}],ss=["trumpet-fail-242645.mp3"],as=["brass-fanfare-with-timpani-and-winchimes-reverberated-146260.mp3","success-fanfare-trumpets-6185.mp3"];export{Y as a,Q as b,O as c,W as d,as as e,X as f,ss as g,H as h,U as i,K as j,Z as l,J as s};
