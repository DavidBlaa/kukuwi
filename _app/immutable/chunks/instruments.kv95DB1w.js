import{G as t,I as i,J as o}from"./runtime.Dgcl8lwH.js";import{l as s}from"./utils.IflBIZZh.js";function b(m,a,u=a){var e,n,p=()=>{cancelAnimationFrame(e),m.paused||(e=requestAnimationFrame(p));var r=m.currentTime;n!==r&&u(n=r)};e=requestAnimationFrame(p),m.addEventListener("timeupdate",p),t(()=>{var r=Number(a());n!==r&&!isNaN(r)&&(m.currentTime=n=r)}),i(()=>cancelAnimationFrame(e))}function v(m,a,u=a){var e=a(),n=()=>{e!==m.paused&&u(e=m.paused)};s(m,["play","pause","canplay"],n,e==null),o(()=>{(e=!!a())!==m.paused&&(e?m.pause():m.play().catch(()=>{u(e=!0)}))})}function f(m,a,u=a){var e=()=>{u(m.volume)};a()==null&&e(),s(m,["volumechange"],e,!1),t(()=>{var n=Number(a());n!==m.volume&&!isNaN(n)&&(m.volume=n)})}const g=[{name:"Schlagzeug",category:"Schlaginstrumente",image:"Drum.svg",audios:["Drums - Funk 111 bpm.mp3","Drums - Funk 112 bpm.mp3","Drums - Funk 122 bpm.mp3","Drums - Jazz Break 125 bpm.mp3","Drums - Jazz Brushes 70 bpm.mp3","Drums - Rock 72 bpm.mp3"]},{name:"Banjo",category:"Zupfinstrumente",image:"Banjo.svg",audios:["Banjo-exotic-loop_100bpm_B_minor.mp3"]},{name:"Gitarre",category:"Zupfinstrumente",image:"Guitar.svg",audios:["Gt1 AfricanFunk Gm 120bpm.mp3","Gt1 Alternative Em 120bpm.mp3","Gt1 Blues Amaj 88bpm.mp3","Gt1 Chill Bm 108bpm.mp3","Gt1 Funk Cmaj 124bpm.mp3","Gt1 Punk Emaj 170bpm.mp3"]},{name:"Bass",category:"Zupfinstrumente",image:"Bass.svg",audios:["Bs1 AfricanFunk Gm 120bpm.mp3","Bs1 Alternative Em 120bpm.mp3","Bs1 Blues Amaj 88bpm.mp3","Bs1 Chill Bm 108bpm.mp3","Bs1 Funk Cmaj 124bpm.mp3","Bs1 Punk Emaj 170bpm.mp3"]},{name:"Trompete",category:"Blasinstrumente",image:"Trombone.svg",audios:["Trumpet 87bpm G minor.mp3","Trumpet 105bpm D minor.mp3","Trumpet Sax Sound Instrument.mp3","Trumpet Solo F Instrument.mp3"]},{name:"Violine",category:"Streichinstrumente",image:"Violin.svg",audios:["Violine 1.mp3"]},{name:"Saxophone",category:"Blasinstrumente",image:"Saxophone.svg",audios:["Sax 60bpm E minor.mp3"]},{name:"Flöte",category:"Blasinstrumente",image:"Flute.svg",audios:["Flute-vibey_150bpm.mp3"]}];export{f as a,v as b,b as c,g as i};