import"../chunks/disclose-version.Bg9kRutz.js";import"../chunks/legacy.CtaTdtmd.js";import{p as tt,t as v,a as lt,c as l,r as t,s as e,A as _,n as p}from"../chunks/runtime.ByPQCJTE.js";import{a as T}from"../chunks/store.B_wTVehC.js";import{s as w,e as Q,i as W}from"../chunks/class.CSIqV9wI.js";import{a as n,t as m,b as L}from"../chunks/template.CElCRC7T.js";import{s as bt}from"../chunks/snippet.DY4Cps8U.js";import{p as et}from"../chunks/props.6q4YRsUj.js";import{s as X}from"../chunks/attributes.w1SPjBoc.js";import{b as ct}from"../chunks/paths.BAYpO7io.js";import{I as pt,F as xt}from"../chunks/index.DLt24czF.js";var kt=m("<button><span><!></span></button>");function k(x,a){tt(a,!0);let g=et(a,"translateY",3,"translate-y-[-0.375rem]");var r=kt(),u=l(r),i=l(u);bt(i,()=>a.children),t(u),t(r),v(()=>{w(r,`rounded-xl border-none p-0 active:[&>span]:translate-y-[-0.125rem] ${a.bgBack}`),w(u,`block rounded-xl duration-75 ${g()} ${a.bgFront} ${a.padding}`)}),n(x,r),lt()}var vt=m('<div class="w-72"><img class="h-full"> <p> </p></div>');function Z(x,a){tt(a,!0);let g=et(a,"bgBack",3,"text-white");k(x,{get bgFront(){return a.bgFront},get bgBack(){return g()},padding:"p-4",translateY:"translate-y-[-0.75rem]",children:(r,u)=>{var i=vt(),b=l(i),d=e(b,2);w(d,"text-4xl font-extrabold text-white");var f=l(d,!0);t(d),t(i),v(()=>{X(b,"src",ct+a.image.src),X(b,"alt",a.image.alt),T(f,a.text)}),n(r,i)},$$slots:{default:!0}}),lt()}var mt=m('<li><div></div> <p class="pl-1 text-xs font-semibold text-gray-800"> </p></li>'),ft=m('<li><h3 class="pb-1 font-semibold"> </h3> <ul class="flex gap-6 pl-4"></ul></li>'),_t=m(`<main class="mx-auto max-w-[80rem] p-6"><h1 class="flex justify-center pb-6 text-4xl font-bold">Component Library</h1> <section><h2 class="pb-2 text-2xl font-bold">Colors</h2> <ul class="flex flex-col gap-4 pl-4"></ul></section> <section class="my-14"><h2 class="pb-5 text-2xl font-bold">MenuCard</h2> <div class="flex flex-col gap-6 xl:flex-row"><section class="flex gap-2"><!> <aside class="flex flex-col"><p class="text-xl font-bold">Props:</p> <ul class="pl-2 pt-2"><li><strong>text:</strong> ÜBEN</li> <li><strong>image:</strong> </li> <li><strong>bgFront:</strong> bg-kukuwi-red</li> <li><strong>bgBack:</strong> bg-kukuwi-red-dark</li></ul></aside></section> <section class="flex gap-2"><!> <aside class="flex flex-col"><p class="text-xl font-bold">Props:</p> <ul class="pl-2 pt-2"><li><strong>text:</strong> START</li> <li><strong>image:</strong> </li> <li><strong>bgFront:</strong> bg-kukuwi-blue</li> <li><strong>bgBack:</strong> bg-kukuwi-blue-dark</li></ul></aside></section></div></section> <section><h2 class="pb-2 text-2xl font-bold">Button3d</h2> <div class="flex flex-col gap-10 xl:flex-row"><section class="flex items-center"><ul class="flex flex-col gap-5 text-3xl font-bold text-white"><li><!></li> <li><!></li> <li><!></li></ul> <aside class="mr-20"><ul class="flex flex-col gap-1 pl-2 text-sm leading-4"><li><strong>bgFront:</strong><br>1. bg-green-500<br>2. bg-yellow-500<br>3.
							bg-red-500</li> <li><strong>bgBack:</strong><br>1. bg-green-600<br>2. bg-yellow-600<br>3. bg-red-600</li> <li><strong>padding:</strong> px-8 py-2</li> <li><strong>children:</strong><br>1. Level 1<br>2. Level 2<br>3. Level 3</li></ul></aside></section> <section class="flex items-center"><!> <aside><ul class="flex flex-col gap-1 pl-2 text-sm leading-4"><li><strong>bgFront:</strong> bg-kukuwi-blue</li> <li><strong>bgBack:</strong> bg-kukuwi-blue-dark</li> <li><strong>padding:</strong> px-8 py-2</li> <li><strong>children:</strong> </li></ul></aside></section></div></section></main>`);function Et(x){const a=[{title:"kukuwi-red",gradations:[{title:"light",bg:"bg-kukuwi-red-light"},{title:"DEFAULT",bg:"bg-kukuwi-red"},{title:"dark",bg:"bg-kukuwi-red-dark"}]},{title:"kukuwi-yellow",gradations:[{title:"light",bg:"bg-kukuwi-yellow-light"},{title:"DEFAULT",bg:"bg-kukuwi-yellow"},{title:"dark",bg:"bg-kukuwi-yellow-dark"}]},{title:"kukuwi-blue",gradations:[{title:"light",bg:"bg-kukuwi-blue-light"},{title:"DEFAULT",bg:"bg-kukuwi-blue"},{title:"dark",bg:"bg-kukuwi-blue-dark"}]}];var g=_t(),r=e(l(g),2),u=e(l(r),2);Q(u,5,()=>a,W,(s,c)=>{var o=ft(),B=l(o),gt=l(B,!0);t(B);var G=e(B,2);Q(G,5,()=>_(c).gradations,W,(ut,J)=>{var P=mt(),K=l(P),O=e(K,2),dt=l(O,!0);v(()=>T(dt,_(J).title.toUpperCase())),t(O),t(P),v(()=>w(K,`h-[4.5rem] w-24 rounded-lg ${_(J).bg}`)),n(ut,P)}),t(G),t(o),v(()=>T(gt,_(c).title)),n(s,o)}),t(u),t(r);var i=e(r,2),b=e(l(i),2),d=l(b),f=l(d);Z(f,{text:"ÜBEN",image:{src:"/images/Hut_2.png",alt:"Hut"},bgFront:"bg-kukuwi-red",bgBack:"bg-kukuwi-red-dark"});var $=e(f,2),A=e(l($),2),C=e(l(A),2),at=e(l(C),1,!0);at.nodeValue=" { src: '/images/Hut_2.png', alt: 'Hut' }",t(C),p(4),t(A),t($),t(d);var E=e(d,2),H=l(E);Z(H,{text:"START",image:{src:"/images/Pokal.png",alt:"Pokal"},bgFront:"bg-kukuwi-blue",bgBack:"bg-kukuwi-blue-dark"});var N=e(H,2),S=e(l(N),2),U=e(l(S),2),rt=e(l(U),1,!0);rt.nodeValue=" { src: '/images/Pokal.png', alt: 'Pokal' }",t(U),p(4),t(S),t(N),t(E),t(b),t(i);var D=e(i,2),I=e(l(D),2),h=l(I),V=l(h),y=l(V),it=l(y);k(it,{bgFront:"bg-green-500",bgBack:"bg-green-600",padding:"px-8 py-2",children:(s,c)=>{p();var o=L("Level 1");n(s,o)},$$slots:{default:!0}}),t(y);var F=e(y,2),st=l(F);k(st,{bgFront:"bg-yellow-500",bgBack:"bg-yellow-600",padding:"px-8 py-2",children:(s,c)=>{p();var o=L("Level 2");n(s,o)},$$slots:{default:!0}}),t(F);var Y=e(F,2),ot=l(Y);k(ot,{bgFront:"bg-red-500",bgBack:"bg-red-600",padding:"px-8 py-2",children:(s,c)=>{p();var o=L("Level 3");n(s,o)},$$slots:{default:!0}}),t(Y),t(V),p(2),t(h);var z=e(h,2),M=l(z);k(M,{bgFront:"bg-kukuwi-blue",bgBack:"bg-kukuwi-blue-dark",padding:"px-8 py-2",children:(s,c)=>{pt(s,{src:xt,color:"white",className:"size-24"})},$$slots:{default:!0}});var R=e(M,2),j=l(R),q=e(l(j),6),nt=e(l(q));nt.nodeValue=' <Icon src={FaSolidPlay} color="white" className="size-24" />',t(q),t(j),t(R),t(z),t(I),t(D),t(g),n(x,g)}export{Et as component};
