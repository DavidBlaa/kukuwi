import"./disclose-version.Bg9kRutz.js";import{C as ie,b as ne,h as k,H as q,I as se,W as oe,am as J,Z as ue,_ as P,$ as L,e as M,ar as N,X as K,c as Q,Y as _e,F as U,as as fe,at as de,al as ve,au as ce,d as be,D as xe,ai as me,ap as ge,ad as he,P as W,av as pe,aw as ye,ax as we,ag as Ee,p as X,g as R,y as H,r as A,s as D,a as F,o as y,v as Z}from"./runtime.Buz-Ab-H.js";import{d as $,e as ke}from"./utils.eJbWBJJ3.js";import{a as I,t as C}from"./template.ByiHjxH9.js";import{s as S,b as Te,a as Ae}from"./instruments.CVYOVaCU.js";import{p as m,a as Ie,i as j}from"./props.CZg9-NLD.js";import{a as Ce}from"./store._s3TlCSQ.js";import{s as O}from"./attributes.D7pF87Us.js";import{b as V}from"./paths.D-zkjI5B.js";function ee(u,e){return e}function Me(u,e,a,r){for(var o=[],_=e.length,l=0;l<_;l++)de(e[l].e,o,!0);var v=_>0&&o.length===0&&a!==null;if(v){var c=a.parentNode;ve(c),c.append(a),r.clear(),w(u,e[0].prev,e[_-1].next)}ce(o,()=>{for(var b=0;b<_;b++){var t=e[b];v||(r.delete(t.k),w(u,t.prev,t.next)),be(t.e,!v)}})}function ae(u,e,a,r,o,_=null){var l=u,v={flags:e,items:new Map,first:null};{var c=u;l=k?q(xe(c)):c.appendChild(ie())}k&&se();var b=null,t=!1;ne(()=>{var d=a(),i=oe(d)?d:d==null?[]:J(d),n=i.length;if(t&&n===0)return;t=n===0;let x=!1;if(k){var g=l.data===ue;g!==(n===0)&&(l=P(),q(l),L(!1),x=!0)}if(k){for(var h=null,s,f=0;f<n;f++){if(M.nodeType===8&&M.data===me){l=M,x=!0,L(!1);break}var T=i[f],E=r(T,f);s=te(M,v,h,null,T,E,f,o,e),v.items.set(E,s),h=s}n>0&&q(P())}if(!k){var p=ge;He(i,v,l,o,e,(p.f&N)!==0,r)}_!==null&&(n===0?b?K(b):b=Q(()=>_(l)):b!==null&&_e(b,()=>{b=null})),x&&L(!0),a()}),k&&(l=M)}function He(u,e,a,r,o,_,l){var v=u.length,c=e.items,b=e.first,t=b,d,i=null,n=[],x=[],g,h,s,f;for(f=0;f<v;f+=1){if(g=u[f],h=l(g,f),s=c.get(h),s===void 0){var T=t?t.e.nodes_start:a;i=te(T,e,i,i===null?e.first:i.next,g,h,f,r,o),c.set(h,i),n=[],x=[],t=i.next;continue}if(Ne(s,g,f),s.e.f&N&&K(s.e),s!==t){if(d!==void 0&&d.has(s)){if(n.length<x.length){var E=x[0],p;i=E.prev;var G=n[0],B=n[n.length-1];for(p=0;p<n.length;p+=1)z(n[p],E,a);for(p=0;p<x.length;p+=1)d.delete(x[p]);w(e,G.prev,B.next),w(e,i,G),w(e,B,E),t=E,i=B,f-=1,n=[],x=[]}else d.delete(s),z(s,t,a),w(e,s.prev,s.next),w(e,s,i===null?e.first:i.next),w(e,i,s),i=s;continue}for(n=[],x=[];t!==null&&t.k!==h;)(_||!(t.e.f&N))&&(d??(d=new Set)).add(t),x.push(t),t=t.next;if(t===null)continue;s=t}n.push(s),i=s,t=s.next}if(t!==null||d!==void 0){for(var Y=d===void 0?[]:J(d);t!==null;)(_||!(t.e.f&N))&&Y.push(t),t=t.next;var re=Y.length;if(re>0){var le=v===0?a:null;Me(e,Y,le,c)}}U.first=e.first&&e.first.e,U.last=i&&i.e}function Ne(u,e,a,r){fe(u.v,e),u.i=a}function te(u,e,a,r,o,_,l,v,c){var b=(c&ye)!==0,t=(c&we)===0,d=b?t?he(o):W(o):o,i=c&pe?W(l):l,n={i,v:d,k:_,a:null,e:null,prev:a,next:r};try{return n.e=Q(()=>v(u,d,i),k),n.e.prev=a&&a.e,n.e.next=r&&r.e,a===null?e.first=n:(a.next=n,a.e.next=n.e),r!==null&&(r.prev=n,r.e.prev=n.e),n}finally{}}function z(u,e,a){for(var r=u.next?u.next.e.nodes_start:a,o=e?e.e.nodes_start:a,_=u.e.nodes_start;_!==r;){var l=Ee(_);o.before(_),_=l}}function w(u,e,a){e===null?u.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}var Re=C("<div></div>"),De=(u,e)=>e(!0),Se=(u,e)=>e(!1),Be=C(`<div class="flex flex-col justify-end items-center w-full h-full"><div class="flex flex-col-reverse justify-center w-4/6 lg:w-1/3 h-full mb-5 rounded-2xl"></div> <button class="w-5/6 lg:w-3/5 aspect-square bg-amber-500 rounded-full cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_8px_0_0_#b07209,0_13px_0_0_#1b70f841]
    border-[1px]
    "><span class="flex flex-col justify-center items-center h-full text-white font-bold text-6xl pb-3">+</span></button> <button class="w-5/6 lg:w-3/5 aspect-square bg-amber-500  rounded-full cursor-pointer select-none mt-5
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_8px_0_0_#b07209,0_13px_0_0_#1b70f841]
    border-[1px]
    "><span class="flex flex-col justify-center items-center h-full text-white font-bold text-6xl pb-3">-</span></button></div>`);function Je(u,e){X(e,!0);let a=m(e,"sound_level_float",15);const r=Ie(Array(10).fill(!1));let o=40;for(let t=0;t<o/10;(t+=1)-1)r[t]=!0;function _(t){if(t){if(o>=100)return;o+=10,r[o/10-1]=!0,a(o/100)}else{if(o<=0)return;r[o/10-1]=!1,o-=10,a(o/100)}}var l=Be(),v=R(l);ae(v,21,()=>r,ee,(t,d)=>{var i=Re();H(()=>S(i,`${(y(d)?"bg-green-500":"bg-green-100")??""} w-full h-full border-2 lg:border-4 border-gray-500`)),I(t,i)}),A(v);var c=D(v,2);c.__click=[De,_];var b=D(c,2);b.__click=[Se,_],A(l),I(u,l),F()}$(["click"]);var Ye=C("<p> </p>"),qe=C("<audio></audio>"),Le=C('<div class="flex h-full flex-col"><!> <button><img class="flex flex-col items-center justify-center rounded-xl p-2 lg:p-0"> <!></button></div>');function Oe(u,e){X(e,!0);let a=m(e,"is_active",7),r=m(e,"paused",7,!0),o=m(e,"active_color_top",3,"bg-blue-400"),_=m(e,"active_color_bottom",3,"[box-shadow:0_10px_0_0_#4e81bf,0_15px_0_0_#1b70f841]"),l=m(e,"passiv_color_top",3,"bg-blue-100"),v=m(e,"passiv_color_bottom",3,"[box-shadow:0_10px_0_0_#b0b1b5,0_15px_0_0_#1b70f841]"),c=m(e,"use_audio",3,!0),b=m(e,"use_header",3,!0),t=m(e,"volume",7,.5);function d(s=!1){a(!a()),s||r(!r())}var i=Le(),n=R(i);j(n,b,s=>{var f=Ye(),T=R(f,!0);A(f),H(()=>{S(f,`flex w-fit flex-col items-start justify-center px-1 text-xs lg:text-xl ${(a()?o():l())??""} mb-1 rounded-sm font-bold`),Ce(T,e.name)}),I(s,f)});var x=D(n,2);x.__mouseup=function(...s){var f;(f=e.onmouseup)==null||f.apply(this,s)};var g=R(x),h=D(g,2);return j(h,c,s=>{var f=qe();H(()=>O(f,"src",e.audio_url)),ke("ended",f,()=>d(!0)),Te(f,r),Ae(f,t),I(s,f)}),A(x),A(i),H(()=>{S(x,`flex h-full flex-col items-center justify-center ${(a()?o():l())??""} order-[1px] cursor-pointer select-none
    rounded-lg transition-all
    duration-150 active:translate-y-2
    active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] ${(a()?_():v())??""}
    border-b-[1px] border-white`),O(g,"alt",e.name),O(g,"src",e.img_url)}),I(u,i),F({handle_music_tile_click:d})}$(["mouseup"]);var Ve=C("<div></div>");function Ke(u,e){X(e,!0);let a=m(e,"grid_layout",3,"grid-cols-6 lg:grid-cols-5");var r=Ve();ae(r,21,()=>e.instruments,ee,(o,_,l)=>{var v=Z(()=>V+"/images/instruments/"+y(_).image),c=Z(()=>e.use_tile_sounds?"audio"in y(_)?`${V}/audios/${y(_).audio}`:`${V}/audios/${y(_).audios[0]}`:"");Oe(o,{get img_url(){return y(v)},get is_active(){return e.active_tile_list[l]},get use_audio(){return e.use_tile_sounds},get audio_url(){return y(c)},get name(){return y(_).name},use_header:!0,get paused(){return e.pause_tile_list[l]},onmouseup:()=>e.onmouseup(!1,l),get volume(){return e.sound_level_float}})}),A(r),H(()=>S(r,`
        grid
        ${a()??""}
        h-full
        w-full
        items-stretch
        gap-5
				p-3
				lg:gap-x-12
        lg:gap-y-20`)),I(u,r),F()}export{Ke as M,Je as S};
