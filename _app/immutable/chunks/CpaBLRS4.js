import{a as y,t as M,b as D}from"./CmPotoyF.js";import{am as G,c as d,r as o,t as x,s as u,g as m,d as N,b as z,e as X,p as Y,n as Z,a as $}from"./6JMBiHYb.js";import{s as h}from"./B0IBxgL7.js";import{a as T,B as C,s as A}from"./qzfPYBVn.js";import{e as H,b as J}from"./DORJG-LQ.js";import{b as l,u as K}from"./CWcK6JqJ.js";import{I as O,F as Q}from"./bLbAya-w.js";import{i as U}from"./BJMztX48.js";import{g as W}from"./qfqbhri6.js";import{b as rr}from"./C0ubwFn-.js";function er(n,r,t,i,a){var s=()=>{i(t[n])};t.addEventListener(r,s),s(),(t===document.body||t===window||t===document)&&G(()=>{t.removeEventListener(r,s)})}var tr=M(`<div><div><div class="flex h-5/6 w-5/6 flex-row items-center justify-center rounded-full bg-gray-800


            "><div class="flex h-5/6 w-5/6 flex-row items-center justify-center rounded-full border-b-2
                            border-l-2 border-r-2
                            border-t-2 border-b-gray-300
                            border-l-gray-800 border-r-gray-800
                            border-t-gray-300 bg-gray-800"><div class="flex h-5/6 w-5/6 flex-row items-center justify-center rounded-full border-b-2
                            border-l-2 border-r-2
                            border-t-2 border-b-gray-300
                            border-l-gray-800 border-r-gray-800
                            border-t-gray-300 bg-gray-800"><div class="flex h-5/6 w-5/6 flex-row items-center justify-center rounded-full border-b-2
                            border-l-2 border-r-2
                            border-t-2 border-b-gray-300
                            border-l-gray-800 border-r-gray-800
                            border-t-gray-300 bg-gray-800"><div class="flex h-4/6 w-4/6 flex-row items-center justify-center rounded-full bg-red-800"><div class="flex h-1/6 w-1/6 flex-row items-center justify-center rounded-full bg-white"></div></div></div></div></div></div></div></div>`);function ar(n,r){let t=l(r,"spinning",3,!1),i=l(r,"height",3,"h-min-1/10 h-full");var a=tr(),s=d(a);o(a),x(()=>{T(a,`flex flex-row items-center justify-center ${i()??""}`),T(s,`flex h-full w-full flex-row items-center justify-center rounded-full bg-gray-600 ${(t()?"animate-spin-slow":"")??""}`)}),y(n,a)}var sr=M('<div class="fhd:text-3xl fhd:border-2 grid grid-cols-2 border border-gray-500 bg-blue-200 text-[0.6rem] font-medium lg:text-xs 2xl:text-base"><span class="fhd:border-2 fhd:p-1 border border-gray-500 p-[0.1rem]">Gehört</span> <span class="fhd:border-2 fhd:p-1 border border-gray-500 p-[0.1rem] text-center"> </span> <span class="fhd:border-2 fhd:p-1 border border-gray-500 p-[0.1rem] pr-6">Versuche</span> <span class="fhd:border-2 fhd:p-1 border border-gray-500 p-[0.1rem] text-center"> </span> <span class="fhd:border-2 fhd:p-1 border border-gray-500 p-[0.1rem]">Zeit</span> <span class="fhd:border-2 fhd:p-1 border border-gray-500 p-[0.1rem] text-center"> </span></div>');function dr(n,r){let t=l(r,"time",11,0),i=l(r,"tries",11,0),a=l(r,"repeats",11,0);var s=sr(),b=u(d(s),2),v=d(b,!0);o(b);var f=u(b,4),w=d(f,!0);o(f);var c=u(f,4),g=d(c,!0);o(c),o(s),x(()=>{h(v,a()),h(w,i()),h(g,t())}),y(n,s)}var or=M('<div class="fhd:w-72 wqhd:w-80 flex h-full w-24 flex-none flex-col items-center justify-around py-3 lg:w-28 lg:py-6 2xl:w-40"><div class="fhd:size-52 wqhd:size-72 size-16 lg:size-28 2xl:size-40"><!></div> <div class="flex flex-row items-stretch justify-evenly"><span class="fhd:text-3xl fhd:px-4 fhd:py-2 fhd:border-4 ml-1 h-fit w-full border-2 border-gray-500 bg-green-500 px-1 py-[0.125rem] text-xs font-bold text-white lg:text-sm 2xl:text-xl"> </span> <span class="fhd:text-3xl fhd:px-4 fhd:py-2 fhd:border-4 h-fit w-full border-2 border-gray-500 bg-green-500 px-1 py-[0.125rem] text-xs font-bold text-white lg:text-sm 2xl:text-xl"> </span></div> <div><!></div> <!> <audio></audio></div>');function hr(n,r){let t=l(r,"volume",3,.5),i=l(r,"trackPaused",15,!0),a=l(r,"time",7,0),s=l(r,"tries",7,0),b=l(r,"repeats",7,0),v=N(0),f=N(0);function w(){z(f,0),i(!1),K(b)}function c(e){if(isNaN(e))return"...";const I=Math.floor(e/60),P=Math.floor(e%60);return`${I}:${P<10?`0${P}`:P}`}var g=or(),k=d(g),E=d(k),L=X(()=>!i());ar(E,{get spinning(){return m(L)}}),o(k);var _=u(k,2),j=d(_),R=d(j,!0);x(()=>h(R,c(m(f)))),o(j);var F=u(j,2),S=d(F,!0);x(()=>h(S,c(m(v)))),o(F),o(_);var B=u(_,2),V=d(B);dr(V,{get time(){return a()},set time(e){a(e)},get repeats(){return b()},set repeats(e){b(e)},get tries(){return s()},set tries(e){s(e)}}),o(B);var q=u(B,2);C(q,{bgFront:"bg-kukuwi-blue",bgBack:"bg-kukuwi-blue-dark",padding:"px-4 wqhd:px-8 py-2",style:"mt-3",translateY:"translate-y-[-0.3rem] 2xl:translate-y-[-0.5rem]",onclick:()=>w(),children:(e,I)=>{O(e,{src:Q,color:"white",className:"fhd:w-32 fhd:h-28 2xl:w-24 2xl:h-14 lg:w-16 lg:h-10 w-8 h-5"})},$$slots:{default:!0}});var p=u(q,2);o(g),x(()=>{A(p,"src",r.trackSource),p.volume=t()}),H(p,()=>m(f),e=>z(f,e)),er("duration","durationchange",p,e=>z(v,e)),J(p,i),y(n,g)}function vr(n,r){Y(r,!1),U(),C(n,{bgFront:"bg-kukuwi-red",bgBack:"bg-kukuwi-red-dark",padding:"p-2",onclick:()=>W(`${rr}/`),onmouseup:()=>{},style:"w-16 h-16 text-white text-3xl font-bold",children:(t,i)=>{Z();var a=D("X");y(t,a)},$$slots:{default:!0}}),$()}export{hr as M,vr as R};
