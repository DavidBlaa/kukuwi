import"./disclose-version.Bg9kRutz.js";import{p as T,c as w,t as B,r as x,s as y,a as j,g as n,f as C,e as L}from"./runtime.CZ9FTCjY.js";import{a as v,t as m,n as K}from"./template.59v4eae5.js";import{e as G,i as I}from"./each.DtNqRUmb.js";import{B as F,s as N,a as O}from"./Button3d.m6NmrmoK.js";import{b as o,p as Q}from"./props.F0d141VS.js";import{s as U,f as W}from"./render.CnbXUuAN.js";import{i as A}from"./if.Cjoa_S9E.js";import{s as S}from"./attributes.WQXmvGh0.js";import{b as X}from"./instruments.CWOVrmnv.js";import"./legacy.kkaBD5aU.js";import{b as z}from"./paths.CvbAItr6.js";import{R as Y}from"./ResetButton.DtAm73JK.js";var Z=m("<div></div>"),$=m('<p class="absolute inset-x-0 bottom-2 text-6xl font-bold text-white">+</p>'),ee=m('<p class="absolute inset-x-0 bottom-2 text-6xl font-bold text-white">-</p>'),te=m('<div class="flex h-full w-full flex-col items-center justify-end"><div class="mb-5 flex h-full w-4/6 flex-col-reverse justify-center rounded-2xl lg:w-1/3"></div> <!> <!></div>');function ye(f,e){T(e,!0);let a=o(e,"volume",15);const l=Q(Array(10).fill(!1));let t=a()*100;for(let r=0;r<t/10;r++)l[r]=!0;function i(r){if(r){if(t>=100)return;t+=10,l[t/10-1]=!0,a(t/100)}else{if(t<=0)return;l[t/10-1]=!1,t-=10,a(t/100)}}var s=te(),c=w(s);G(c,21,()=>l,I,(r,_)=>{var d=Z();B(()=>N(d,`${(n(_)?"bg-green-500":"bg-green-100")??""} h-full w-full border-2 border-gray-500 lg:border-4`)),v(r,d)}),x(c);var u=y(c,2);F(u,{bgFront:"bg-amber-500",bgBack:"bg-amber-700",onmouseup:()=>{},onclick:()=>i(!0),style:"rounded-full size-16 mb-3",padding:"relative size-16 rounded-full",children:(r,_)=>{var d=$();v(r,d)},$$slots:{default:!0}});var g=y(u,2);F(g,{bgFront:"bg-amber-500",bgBack:"bg-amber-700",onmouseup:()=>{},onclick:()=>i(!1),style:"rounded-full size-16 mb-3",padding:"relative size-16 rounded-full",children:(r,_)=>{var d=ee();v(r,d)},$$slots:{default:!0}}),x(s),v(f,s),j()}var re=K('<svg xmlns="http://www.w3.org/2000/svg" role="img"><image width="100%" height="100%" preserveAspectRatio="xMidyMid meet"></image></svg>');function oe(f,e){let a=o(e,"viewBox",8,"0 0 48 48"),l=o(e,"className",8,""),t=o(e,"src",8);var i=re(),s=w(i);x(i),B(()=>{S(i,"viewBox",a()),O(i,`icon p-2 sm:p-3 md:p-4 lg:p-5 ${l()}`),S(s,"href",t())}),v(f,i)}var ae=m("<p> </p>"),le=m("<audio></audio>"),ie=m("<!> <!>",1),se=m('<div class="flex h-full flex-col"><!> <!></div>');function ue(f,e){T(e,!0);let a=o(e,"is_active",7),l=o(e,"paused",7,!0),t=o(e,"active_color_top",3,"bg-blue-400"),i=o(e,"active_color_bottom",3,"[box-shadow:0_10px_0_0_#4e81bf,0_15px_0_0_#1b70f841]"),s=o(e,"passiv_color_top",3,"bg-blue-100"),c=o(e,"passiv_color_bottom",3,"[box-shadow:0_10px_0_0_#b0b1b5,0_15px_0_0_#1b70f841]"),u=o(e,"use_audio",3,!0),g=o(e,"use_header",3,!0),r=o(e,"volume",3,.5);function _(b=!1){a(!a()),b||l(!l())}var d=se(),P=w(d);{var V=b=>{var p=ae(),k=w(p,!0);x(p),B(()=>{N(p,`flex w-fit flex-col items-start justify-center px-1 text-xs lg:text-xl ${(a()?t():s())??""} mb-1 rounded-sm font-bold`),U(k,e.name)}),v(b,p)};A(P,b=>{g()&&b(V)})}var q=y(P,2),D=L(()=>a()?t():s()),E=L(()=>a()?i():c());return F(q,{get onmouseup(){return e.onmouseup},get bgFront(){return n(D)},get bgBack(){return n(E)},children:(b,p)=>{var k=ie(),R=C(k);oe(R,{get src(){return e.img_url},className:""});var H=y(R,2);{var J=M=>{var h=le();B(()=>{S(h,"src",e.audio_url),h.volume=r()}),W("ended",h,()=>_(!0)),X(h,l),v(M,h)};A(H,M=>{u()&&M(J)})}v(b,k)},$$slots:{default:!0}}),x(d),v(f,d),j({handle_music_tile_click:_})}var de=m('<div></div> <div class="absolute left-6 top-0 m-3 mt-10"><!></div>',1);function ke(f,e){T(e,!0);let a=o(e,"grid_layout",3,"grid-cols-4");var l=de(),t=C(l);G(t,21,()=>e.instruments,I,(c,u,g)=>{var r=L(()=>z+"/icons/instruments/"+n(u).image),_=L(()=>e.useTileSounds?"audio"in n(u)?`${z}/audios/${n(u).audio}`:`${z}/audios/${n(u).audios[0]}`:"");ue(c,{get img_url(){return n(r)},get is_active(){return e.activeTileList[g]},get use_audio(){return e.useTileSounds},get audio_url(){return n(_)},get name(){return n(u).name},use_header:!0,get paused(){return e.pauseTileList[g]},onmouseup:()=>e.onmouseup(!1,g),get volume(){return e.volume}})}),x(t);var i=y(t,2),s=w(i);Y(s,{}),x(i),B(()=>N(t,`
        grid
        ${a()??""}
        h-full
        w-full
        items-stretch
        gap-5
		p-3
		lg:gap-x-12
        lg:gap-y-20`)),v(f,l),j()}export{ke as M,ye as S};
