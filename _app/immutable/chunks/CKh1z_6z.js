import"./Bg9kRutz.js";import{p as B,c as b,s as f,n as x,f as j,t as v,r as y,a as S}from"./DtheE3jy.js";import{s as M}from"./Cf7Zpnqz.js";import{a as I,t as G}from"./wjpkEnKZ.js";import{s as u,B as C,a as R}from"./dz11zXrF.js";import{i as l,b as T}from"./2v17rJd3.js";import{b as w}from"./DeB9t10T.js";import{b as d}from"./0xqX5zhW.js";const k=["success1.gif","success2.gif","success3.gif","success4.gif","success5.gif","gil-cat.gif","happy-snoopy.gif"],z=["fail1.gif","fail2.gif","fail3.gif","fail4.gif"];function Y(t,e){let s=[];if(e){const o=A(l).filter(r=>r.count>=t);if(o.length===0)throw Error(`Could not find a category with at least ${t} instruments.`);const a=o[Math.floor(Math.random()*o.length)];s=l.filter(r=>r.category===a.name)}else s=l;return s=P(s).slice(0,t),s.map((o,a)=>({index:a,name:o.name,category:o.category,image:o.image,audio:o.audios[Math.floor(Math.random()*o.audios.length)]}))}function A(t){const e=new Map;return t.forEach(s=>{e.set(s.category,(e.get(s.category)??0)+1)}),Array.from(e,([s,o])=>({name:s,count:o}))}function P(t){for(let e=t.length;e>0;e--){const s=Math.floor(Math.random()*e);[t[e-1],t[s]]=[t[s],t[e-1]]}return t}function Z(t){return t[Math.floor(Math.random()*t.length)]}function E(t){const e=t?k:z;return e[Math.floor(Math.random()*e.length)]}function H(t){return t!=null?parseInt(""+Math.random()*t.length):-1}function q(t,e){const s=[],o=[];do{const a=H(t);s.includes(a)||(s.push(a),o.push(t[a]))}while(o.length<e);return o}var L=G(" <br> ",1),K=G('<div class="fixed bottom-0 top-0 h-screen w-screen flex-col items-center justify-start"><div class="fixed bottom-0 top-0 z-50 flex h-full w-full flex-col items-center justify-start p-7"><img> <!> <audio></audio></div> <div class="z-15 fixed bottom-0 top-0 flex h-screen w-screen flex-col items-center justify-center bg-gray-500 opacity-80"></div></div>');function $(t,e){B(e,!0);let s=w(e,"success",11,!0),o=w(e,"gifSoundPaused",15,!0),a=E(s()),r=s()?d+"/audios/gif-sounds/success-fanfare-trumpets-6185.mp3":d+"/audios/gif-sounds/trumpet-fail-242645.mp3";var i=K(),g=b(i),n=b(g);u(n,"src",d+"/gifs/"+a);var m=f(n,2);C(m,{get onclick(){return e.onclick},bgFront:"bg-amber-500",bgBack:"bg-amber-700",onmouseup:()=>{},style:"mt-3 flex flex-col justify-center text-3xl font-extrabold",padding:"px-7 py-2",children:(_,Q)=>{x();var h=L(),p=j(h),F=f(p,2);v(()=>{M(p,`${(s()?"RICHTIG :)":"FALSCH :(")??""} `),M(F,` ${(s()?e.GIFButtonTextSuccess:e.GIFButtonTextFailure)??""}`)}),I(_,h)},$$slots:{default:!0}});var c=f(m,2);u(c,"src",r),y(g),x(2),y(i),v(()=>{R(n,`h-5/6 ${(s()?"border-green-800":"border-red-600")??""} border-8 shadow-2xl`),u(n,"alt",s()?"Gewonnen!!!":"Verloren :("),c.volume=e.volume}),T(c,o),I(t,i),S()}export{$ as G,q as a,H as b,P as c,Y as g,Z as s};
