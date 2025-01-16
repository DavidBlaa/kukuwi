import"./disclose-version.Bg9kRutz.js";import{p as X,t as L,g as s,r as x,a as Y,b as l,u as W,f as z,c as I,s as F,d as _,e as pe}from"./runtime.BFcw_75_.js";import{a as S,t as T,c as ve}from"./template.B-ObnXcP.js";import{i as J}from"./if.BqcDyKEL.js";import{e as Z,i as $}from"./each.CJS3MHhM.js";import{b as _e,p as g}from"./props.073RLZyP.js";import{o as ye}from"./index-client.Bxs-rmcU.js";import{b as K}from"./paths.BYIt9VTK.js";import{d as xe}from"./render.DJfPp5iK.js";import{a as Q,B as he}from"./Button3d.SKqD834h.js";import{a as be,b as Ie,G as ge}from"./GIF.CBnT-_EP.js";import{M as we}from"./MusicControl.3aIXGhEd.js";import{p as Ue}from"./patternLevels.BRSVCcvJ.js";import{R as ke}from"./ResetButton.zKCvaKH5.js";function Se(r){var t=new m(r),u=t.readChunk();if(u.id!="MThd")throw"Bad MIDI file.  Expected 'MHdr', got: '"+u.id+"'";for(var c=Be(u.data),o=[],i=0;!t.eof()&&i<c.numTracks;i++){var e=t.readChunk();if(e.id!="MTrk")throw"Bad MIDI file.  Expected 'MTrk', got: '"+e.id+"'";var d=Pe(e.data);o.push(d)}return{header:c,tracks:o}}function Be(r){var t=new m(r),u=t.readUInt16(),c=t.readUInt16(),o={format:u,numTracks:c},i=t.readUInt16();return i&32768?(o.framesPerSecond=256-(i>>8),o.ticksPerFrame=i&255):o.ticksPerBeat=i,o}function Pe(r){for(var t=new m(r),u=[];!t.eof();){var c=i();u.push(c)}return u;var o;function i(){var e={};e.deltaTime=t.readVarInt();var d=t.readUInt8();if((d&240)===240)if(d===255){e.meta=!0;var w=t.readUInt8(),n=t.readVarInt();switch(w){case 0:if(e.type="sequenceNumber",n!==2)throw"Expected length for sequenceNumber event is 2, got "+n;return e.number=t.readUInt16(),e;case 1:return e.type="text",e.text=t.readString(n),e;case 2:return e.type="copyrightNotice",e.text=t.readString(n),e;case 3:return e.type="trackName",e.text=t.readString(n),e;case 4:return e.type="instrumentName",e.text=t.readString(n),e;case 5:return e.type="lyrics",e.text=t.readString(n),e;case 6:return e.type="marker",e.text=t.readString(n),e;case 7:return e.type="cuePoint",e.text=t.readString(n),e;case 32:if(e.type="channelPrefix",n!=1)throw"Expected length for channelPrefix event is 1, got "+n;return e.channel=t.readUInt8(),e;case 33:if(e.type="portPrefix",n!=1)throw"Expected length for portPrefix event is 1, got "+n;return e.port=t.readUInt8(),e;case 47:if(e.type="endOfTrack",n!=0)throw"Expected length for endOfTrack event is 0, got "+n;return e;case 81:if(e.type="setTempo",n!=3)throw"Expected length for setTempo event is 3, got "+n;return e.microsecondsPerBeat=t.readUInt24(),e;case 84:if(e.type="smpteOffset",n!=5)throw"Expected length for smpteOffset event is 5, got "+n;var U=t.readUInt8(),B={0:24,32:25,64:29,96:30};return e.frameRate=B[U&96],e.hour=U&31,e.min=t.readUInt8(),e.sec=t.readUInt8(),e.frame=t.readUInt8(),e.subFrame=t.readUInt8(),e;case 88:if(e.type="timeSignature",n!=2&&n!=4)throw"Expected length for timeSignature event is 4 or 2, got "+n;return e.numerator=t.readUInt8(),e.denominator=1<<t.readUInt8(),n===4?(e.metronome=t.readUInt8(),e.thirtyseconds=t.readUInt8()):(e.metronome=36,e.thirtyseconds=8),e;case 89:if(e.type="keySignature",n!=2)throw"Expected length for keySignature event is 2, got "+n;return e.key=t.readInt8(),e.scale=t.readUInt8(),e;case 127:return e.type="sequencerSpecific",e.data=t.readBytes(n),e;default:return e.type="unknownMeta",e.data=t.readBytes(n),e.metatypeByte=w,e}}else if(d==240){e.type="sysEx";var n=t.readVarInt();return e.data=t.readBytes(n),e}else if(d==247){e.type="endSysEx";var n=t.readVarInt();return e.data=t.readBytes(n),e}else throw"Unrecognised MIDI event type byte: "+d;else{var p;if(d&128)p=t.readUInt8(),o=d;else{if(o===null)throw"Running status byte encountered before status byte";p=d,d=o,e.running=!0}var C=d>>4;switch(e.channel=d&15,C){case 8:return e.type="noteOff",e.noteNumber=p,e.velocity=t.readUInt8(),e;case 9:var h=t.readUInt8();return e.type=h===0?"noteOff":"noteOn",e.noteNumber=p,e.velocity=h,h===0&&(e.byte9=!0),e;case 10:return e.type="noteAftertouch",e.noteNumber=p,e.amount=t.readUInt8(),e;case 11:return e.type="controller",e.controllerType=p,e.value=t.readUInt8(),e;case 12:return e.type="programChange",e.programNumber=p,e;case 13:return e.type="channelAftertouch",e.amount=p,e;case 14:return e.type="pitchBend",e.value=p+(t.readUInt8()<<7)-8192,e;default:throw"Unrecognised MIDI event type: "+C}}}}function m(r){this.buffer=r,this.bufferLen=this.buffer.length,this.pos=0}m.prototype.eof=function(){return this.pos>=this.bufferLen};m.prototype.readUInt8=function(){var r=this.buffer[this.pos];return this.pos+=1,r};m.prototype.readInt8=function(){var r=this.readUInt8();return r&128?r-256:r};m.prototype.readUInt16=function(){var r=this.readUInt8(),t=this.readUInt8();return(r<<8)+t};m.prototype.readInt16=function(){var r=this.readUInt16();return r&32768?r-65536:r};m.prototype.readUInt24=function(){var r=this.readUInt8(),t=this.readUInt8(),u=this.readUInt8();return(r<<16)+(t<<8)+u};m.prototype.readInt24=function(){var r=this.readUInt24();return r&8388608?r-16777216:r};m.prototype.readUInt32=function(){var r=this.readUInt8(),t=this.readUInt8(),u=this.readUInt8(),c=this.readUInt8();return(r<<24)+(t<<16)+(u<<8)+c};m.prototype.readBytes=function(r){var t=this.buffer.slice(this.pos,this.pos+r);return this.pos+=r,t};m.prototype.readString=function(r){var t=this.readBytes(r);return String.fromCharCode.apply(null,t)};m.prototype.readVarInt=function(){for(var r=0;!this.eof();){var t=this.readUInt8();if(t&128)r+=t&127,r<<=7;else return r+t}return r};m.prototype.readChunk=function(){var r=this.readString(4),t=this.readUInt32(),u=this.readBytes(t);return{id:r,length:t,data:u}};var Te=Se,Ee=Te,Ce=T("<div></div>"),Me=T("<button></button>");function Fe(r,t){X(t,!0);let u=_e(t,"active",11,!1);const c=g([]);for(const[i,e]of t.pattern_array.entries())e?i%16<=3||8<=i%16&&i%16<=11?c.push("bg-green-600"):c.push("bg-green-700"):i%16<=3||8<=i%16&&i%16<=11?c.push("bg-gray-300"):c.push("bg-gray-400");var o=Me();o.__mouseup=function(...i){var e;(e=t.onmouseup)==null||e.apply(this,i)},Z(o,21,()=>c,$,(i,e)=>{var d=Ce();L(()=>Q(d,`h-full ${s(e)??""} border border-black`)),S(i,d)}),x(o),L(()=>Q(o,` grid h-full w-full grid-cols-16 flex-row border-4 ${(u()?"border-blue-600 shadow-2xl shadow-blue-600 ":"border-gray-500")??""} rounded`)),S(r,o),Y()}xe(["mouseup"]);const Re=[{midi_src:"2_Custom2.mid",audio_src:"2_Custom2.wav",instrument_type:"drum",n_instruments:2},{midi_src:"2_Custom3.mid",audio_src:"2_Custom3.wav",instrument_type:"drum",n_instruments:2},{midi_src:"2_Elektro1.mid",audio_src:"2_Elektro 1.wav",instrument_type:"drum",n_instruments:2},{midi_src:"2_Elektro2.mid",audio_src:"2_Elektro 2.wav",instrument_type:"drum",n_instruments:2},{midi_src:"2_HipHop1.mid",audio_src:"2_Hip Hop 1.wav",instrument_type:"drum",n_instruments:2},{midi_src:"2_HipHop2.mid",audio_src:"2_Hip Hop 2.wav",instrument_type:"drum",n_instruments:2},{midi_src:"2_Techno_1.mid",audio_src:"2_Techno 1.wav",instrument_type:"drum",n_instruments:2},{midi_src:"2_Techno_2.mid",audio_src:"2_Techno 2.wav",instrument_type:"drum",n_instruments:2},{midi_src:"3_AmenBreaks.mid",audio_src:"3_Amen Breaks.wav",instrument_type:"drum",n_instruments:3},{midi_src:"3_Custom1.mid",audio_src:"3_Custom 1.wav",instrument_type:"drum",n_instruments:3},{midi_src:"3_Rock1.mid",audio_src:"3_Rock 1.wav",instrument_type:"drum",n_instruments:3},{midi_src:"3_Rumba.mid",audio_src:"3_Rumba.wav",instrument_type:"drum",n_instruments:3},{midi_src:"3_SiberianNights.mid",audio_src:"3_Siberian Nights.wav",instrument_type:"drum",n_instruments:3},{midi_src:"3_SonClave.mid",audio_src:"3_Son Clave.wav",instrument_type:"drum",n_instruments:3},{midi_src:"4_FunkyDrummer.mid",audio_src:"4_Funky Drummer.wav",instrument_type:"drum",n_instruments:3},{midi_src:"4_House1.mid",audio_src:"4_House 1.wav",instrument_type:"drum",n_instruments:4},{midi_src:"4_House2.mid",audio_src:"4_House 2.wav",instrument_type:"drum",n_instruments:4},{midi_src:"4_Rock2.mid",audio_src:"4_Rock 2.wav",instrument_type:"drum",n_instruments:4}];var Ne=T('<div class="h-full w-full basis-1/6"><!></div>'),He=T('<p class="px-6 py-3">Raten</p>'),De=T('<div class="absolute left-0 top-0"><!></div>'),Ge=T('<div class="flex h-full w-full flex-col items-center justify-center bg-blue-300"><div class="bg-s h-11/12 border-12 ml-2 flex w-11/12 flex-row justify-evenly rounded-2xl border-8 bg-gray-600 p-5"><div class="flex basis-9/12 flex-col items-center justify-evenly"><!></div> <div class="flex basis-1/6 flex-col items-center"><div class="h-5/6"><!></div> <!></div></div> <!></div> <div class="absolute left-3 top-0 m-2 mt-4"><!></div>',1);function $e(r,t){X(t,!0);const u=g([]);let c=_(0),o=_(-1),i=_(!1),e=_("4_Rock 2.wav"),d=_(!1),w=_(!0),n=_(!1),U=_(!1),B=_(0),p=_(!0),C=0,h=_(0);const ee=async(a,f)=>{const v=await(await fetch(K+"/midis/"+a)).arrayBuffer(),b=new Uint8Array(v),j=Ee(b),E=24,P={},M=[];let q=0;for(const k of j.tracks[0])q+=k.deltaTime,k.type==="noteOn"&&(k.noteNumber in P||(P[k.noteNumber]=[]),P[k.noteNumber].push(q));for(const[,k]of Object.entries(P))for(let G=0;G<16;G++)M.push(k.includes(G*E));u.push({pattern:M,selected:!1,index:f})};ye(()=>{const a="drum",f=Ue[t.difficulty-1].rows,y=be(Re.filter(v=>v.instrument_type===a&&v.n_instruments===f),3);l(c,g(Ie(y))),l(e,g(y[s(c)].audio_src));for(const[v,b]of y.entries())ee(b.midi_src,v);l(i,!0),se(),l(w,!1),W(h)});function te(a){s(o)!=a&&(l(o,g(a)),u.forEach(f=>{f.selected=f.index===a}))}function re(){l(U,s(c)===s(o)),l(p,!1),l(w,!0),l(d,!0),l(n,!1)}function ne(){const a=ae();t.handleNextRound(a),l(d,!1)}function ae(){let a=0;return s(U)&&(a+=1e4,a+=Math.max(-236*s(B)+8e3,2e3*.9^s(B)),a+=Math.max(-1234*s(h)+5e3,2e3*.9^s(h))),a}function se(){setInterval(()=>{s(p)&&W(B)},1e3)}var O=Ge(),R=z(O),N=I(R),H=I(N),ie=I(H);{var oe=a=>{var f=ve(),y=z(f);Z(y,17,()=>u,$,(v,b,j)=>{var E=Ne(),P=I(E);Fe(P,{get pattern_array(){return s(b).pattern},onmouseup:()=>te(s(b).index),get active(){return s(b).selected},set active(M){s(b).selected=M}}),x(E),S(v,E)}),S(a,f)};J(ie,a=>{s(i)&&a(oe)})}x(H);var A=F(H,2),D=I(A),ue=I(D),de=pe(()=>K+"/audios/pattern_sounds/"+s(e));we(ue,{get repeats(){return s(h)},get time(){return s(B)},get trackSource(){return s(de)},get tries(){return C},get volume(){return t.volume},get trackPaused(){return s(w)},set trackPaused(a){l(w,g(a))}}),x(D);var ce=F(D,2);he(ce,{style:"mt-3 text-3xl",onmousedown:()=>re(),bgFront:"bg-amber-500",bgBack:"bg-amber-700",children:(a,f)=>{var y=He();S(a,y)},$$slots:{default:!0}}),x(A),x(N);var me=F(N,2);{var fe=a=>{var f=De(),y=I(f);ge(y,{onclick:ne,get GIFButtonTextSuccess(){return t.GIFButtonTextSuccess},get GIFButtonTextFailure(){return t.GIFButtonTextFailure},get volume(){return t.volume},get success(){return s(U)},set success(v){l(U,g(v))},get gifSoundPaused(){return s(n)},set gifSoundPaused(v){l(n,g(v))}}),x(f),S(a,f)};J(me,a=>{s(d)&&a(fe)})}x(R);var V=F(R,2),le=I(V);ke(le,{}),x(V),S(r,O),Y()}export{$e as P};