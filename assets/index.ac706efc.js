var oe=Object.defineProperty,re=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var C=(e,t,a)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))B.call(t,a)&&C(e,a,t[a]);if(N)for(var a of N(t))P.call(t,a)&&C(e,a,t[a]);return e},x=(e,t)=>re(e,le(t));var _=(e,t)=>{var a={};for(var r in e)B.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&N)for(var r of N(e))t.indexOf(r)<0&&P.call(e,r)&&(a[r]=e[r]);return a};var d=(e,t,a)=>(C(e,typeof t!="symbol"?t+"":t,a),a);import{j as I,c as p,m as g,u as h,r as i,a as ie,f as se,b as ce,d as M,e as de,I as ue,A as me,R as pe,g as he,h as ke}from"./vendor.e5795c61.js";const ve=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=a(o);fetch(o.href,l)}};ve();const _e="_playlist_kw8bu_1",ge="_title_kw8bu_23",fe="_head_kw8bu_33";var $={playlist:_e,title:ge,head:fe};const ye="_title_xynlk_1";var xe={title:ye};const n=I.exports.jsx,s=I.exports.jsxs,W=I.exports.Fragment,we=a=>{var r=a,{className:e}=r,t=_(r,["className"]);return n("div",x(u({className:e},t),{children:n("p",{className:xe.title,children:"Connection Error"})}))},be="_block_cfywl_1",Ne="_center_cfywl_9";var L={block:be,center:Ne};const F=o=>{var l=o,{children:e,className:t,childsCenter:a}=l,r=_(l,["children","className","childsCenter"]);return n("div",x(u({className:p(L.block,t,{[L.center]:a})},r),{children:e}))},Te="_loading_clven_1",Ve="_load_clven_1";var Se={loading:Te,load:Ve};const Y=({className:e})=>n("div",{className:p(Se.loading,e)}),Ce="_tracksBlock_diz2w_1";var $e={tracksBlock:Ce};const Ee="_track_1tc8r_1",Ie="_info_1tc8r_63",Me="_text_1tc8r_77",Ae="_active_1tc8r_95",Be="_trackBox_1tc8r_109";var f={track:Ee,info:Ie,text:Me,active:Ae,trackBox:Be};const Pe=({title:e,active:t,subtitle:a,onClick:r})=>s("button",{onClick:()=>r(),className:p(f.track,{[f.active]:t}),children:[n("div",{className:f.trackBox}),s("div",{className:f.info,children:[n("h2",{className:f.text,children:e}),n("h3",{className:f.text,children:a})]})]});class Le{constructor(){d(this,"audio",new Audio);d(this,"currentTrackVar",g(null));d(this,"isPlayingVar",g(!1));d(this,"canChangeTimeVar",g(!0));d(this,"volumeVar",g(.5));d(this,"currentTimeVar",g(0));d(this,"durationVar",g(0));d(this,"switchTrack",(t,a)=>{const r=this.currentTrackVar();if(!t||!r)return;const o=t.findIndex(l=>l.id===r.id);switch(a){case"NEXT":o===t.length-1?this.currentTrackVar(t[0]):this.currentTrackVar(t[o+1]);break;case"PREV":o===0?this.currentTrackVar(t[t.length-1]):this.currentTrackVar(t[o-1]);break}});d(this,"prevTrack",t=>this.switchTrack(t,"PREV"));d(this,"nextTrack",t=>this.switchTrack(t,"NEXT"));d(this,"toggleAudio",async()=>{if(this.audio.paused){this.isPlayingVar(!0);try{await this.audio.play()}catch(t){console.log(t)}}else this.isPlayingVar(!1),this.audio.pause()})}}const b=new Le,Fe=({data:e})=>{const{currentTrackVar:t}=b,a=h(t),r=o=>()=>t(o);return n("ul",{className:$e.tracksBlock,children:e.map(o=>n("li",{children:n(Pe,{active:o.id===(a==null?void 0:a.id),onClick:r(o),title:o.title,subtitle:o.author})},o.id))})},De="_button_3pli4_1";var Re={button:De};const Z=r=>{var o=r,{children:e,className:t}=o,a=_(o,["children","className"]);return n("button",x(u({className:p(Re.button,t)},a),{children:e}))},Ue={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"addTrack"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"title"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"author"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"file"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Upload"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"addTrack"},arguments:[{kind:"Argument",name:{kind:"Name",value:"title"},value:{kind:"Variable",name:{kind:"Name",value:"title"}}},{kind:"Argument",name:{kind:"Name",value:"author"},value:{kind:"Variable",name:{kind:"Name",value:"author"}}},{kind:"Argument",name:{kind:"Name",value:"file"},value:{kind:"Variable",name:{kind:"Name",value:"file"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"src"}},{kind:"Field",name:{kind:"Name",value:"author"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]},V={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetAllTracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getAllTracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"author"}},{kind:"Field",name:{kind:"Name",value:"src"}}]}}]}}]},qe="__lock_1up8e_1",ze="_modal_1up8e_9",Oe="_overlay_1up8e_41";var T={_lock:qe,modal:ze,overlay:Oe};const D=document.getElementById("modal"),je=({className:e,children:t,open:a,onClose:r})=>{const o=l=>{(l.key==="Esc"||l.key==="Escape")&&r()};return i.exports.useEffect(()=>{document.body.classList.add(T._lock)},[]),i.exports.useEffect(()=>{if(document.body.classList.toggle(T._lock),a)return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[a]),!a||!D?n(W,{}):ie.exports.createPortal(n(se,{children:n("div",{onClick:()=>r(),className:T.overlay,children:n("div",{onClick:l=>l.stopPropagation(),role:"dialog",className:p(T.modal,e),children:t})})}),D)},Xe="_form_1mtor_1",Ge="_btn_1mtor_15",Ke="_uploadTitle_1mtor_27";var E={form:Xe,btn:Ge,uploadTitle:Ke};const Qe="_input_uv6sf_1";var He={input:Qe};const R=l=>{var c=l,{inputState:e,setInputState:t,labelText:a,className:r}=c,o=_(c,["inputState","setInputState","labelText","className"]);return s("label",{children:[n("h3",{children:a}),n("input",u({required:!0,className:p(He.input,r),value:e,onChange:k=>t(k.target.value),type:"text"},o))]})},Je="_block_r92fe_1",We="_title_r92fe_17";var U={block:Je,title:We};const Ye=({title:e="Uploading track. Please wait.",className:t})=>s("div",{className:p(U.block,t),children:[n("p",{className:U.title,children:e}),n(Y,{})]}),Ze=({onSubmit:e})=>{const[t,a]=i.exports.useState(null),[r,o]=i.exports.useState(""),[l,c]=i.exports.useState(""),[k,{loading:te}]=ce(Ue),ne=S=>{var A;const y=(A=S.target.files)==null?void 0:A[0];y&&y.type.includes("audio/")?a(y):alert("Select audio/mpeg file")},ae=async S=>{S.preventDefault();try{await k({variables:{title:r,author:l,file:t},refetchQueries:[{query:V}]}),e(),c(""),o("")}catch(y){alert("An error occurred while uploading the track to the server"),console.log("Upload failed: ",y)}};return te?n(Ye,{}):s("form",{className:E.form,action:"",onSubmit:ae,children:[n("h1",{children:"Upload Track"}),n(R,{inputState:l,setInputState:c,labelText:"Author"}),n(R,{inputState:r,setInputState:o,labelText:"Title"}),s("label",{children:[n("h1",{className:E.uploadTitle,children:"Upload audio File"}),n("input",{required:!0,type:"file",accept:"audio/*",onChange:ne})]}),n(Z,{className:E.btn,type:"submit",children:"Upload Track"})]})},et="_uploadModal_16r2l_1";var tt={uploadModal:et};const nt=({isOpen:e,onClose:t})=>n(je,{className:tt.uploadModal,open:e,onClose:t,children:n(Ze,{onSubmit:t})}),at=({})=>{const{data:e,loading:t,error:a}=M(V),[r,o]=i.exports.useState(!1),l=()=>o(!1),c=()=>o(!0),k=e==null?void 0:e.getAllTracks;return a?n(F,{children:n(we,{})}):t||!k?n(F,{childsCenter:!0,children:n(Y,{})}):s("div",{className:$.playlist,children:[s("div",{className:$.head,children:[n("h1",{className:$.title,children:`Playlist: ${k.length}`}),n(Z,{onClick:c,children:"Add new track"})]}),n(Fe,{data:k}),n(nt,{isOpen:r,onClose:l})]})},ot="_player_s12o8_1",rt="_musicImage_s12o8_59";var q={player:ot,musicImage:rt};const lt="_rewindControls_11hra_1",it="_button_11hra_13",st="_toggleButton_11hra_73",ct="_toggleIcon_11hra_91",dt="_arrowIcon_11hra_99",ut="_inverse_11hra_107";var m={rewindControls:lt,button:it,toggleButton:st,toggleIcon:ct,arrowIcon:dt,inverse:ut};const mt=e=>i.exports.createElement("svg",u({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 485 485",style:{enableBackground:"new 0 0 485 485"},xmlSpace:"preserve",width:"1em",height:"1em"},e),i.exports.createElement("g",null,i.exports.createElement("path",{d:"M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5 s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485s125.671-25.225,171.474-71.026 C459.775,368.171,485,307.274,485,242.5S459.775,116.829,413.974,71.026z M242.5,455C125.327,455,30,359.673,30,242.5 S125.327,30,242.5,30S455,125.327,455,242.5S359.673,455,242.5,455z"}),i.exports.createElement("rect",{x:172.5,y:140,width:55,height:205}),i.exports.createElement("rect",{x:257.5,y:140,width:55,height:205}))),pt=e=>i.exports.createElement("svg",u({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 485 485",style:{enableBackground:"new 0 0 485 485"},xmlSpace:"preserve",width:"1em",height:"1em"},e),i.exports.createElement("g",null,i.exports.createElement("path",{d:"M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5 s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485s125.671-25.225,171.474-71.026 C459.775,368.171,485,307.274,485,242.5S459.775,116.829,413.974,71.026z M242.5,455C125.327,455,30,359.673,30,242.5 S125.327,30,242.5,30S455,125.327,455,242.5S359.673,455,242.5,455z"}),i.exports.createElement("polygon",{points:"181.062,336.575 343.938,242.5 181.062,148.425  "}))),z=e=>i.exports.createElement("svg",u({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 224.175 224.175",style:{enableBackground:"new 0 0 224.175 224.175"},xmlSpace:"preserve",width:"1em",height:"1em"},e),i.exports.createElement("g",null,i.exports.createElement("path",{d:"M185.513,0L185.513,0c-7.4,0-13.7,6.3-13.7,14.2v71.9L46.213,2.2c-2.1-1-4.7-2.1-7.9-2.1c-7.4,0-13.7,6.3-13.7,14.2V210 c0,11,12.6,17.8,21.5,11.5l125.6-83.4V210c-0.5,18.9,28.4,18.9,27.8,0V14.3C200.213,6.3,193.413,0,185.513,0z M52.513,183.7V39.9 l108.2,71.9L52.513,183.7z"}))),{prevTrack:ht,nextTrack:kt,toggleAudio:vt,isPlayingVar:_t}=b,gt=({})=>{const{data:e}=M(V),t=e==null?void 0:e.getAllTracks,a=h(_t);return s(W,{children:[n("button",{className:p(m.button,m.toggleButton),onClick:()=>vt(),children:a?n(mt,{className:m.toggleIcon}):n(pt,{className:m.toggleIcon})}),s("div",{className:m.rewindControls,children:[n("button",{className:m.button,onClick:()=>ht(t),children:n(z,{className:p(m.arrowIcon,m.inverse)})}),n("button",{className:m.button,onClick:()=>kt(t),children:n(z,{className:m.arrowIcon})})]})]})},ft="_box_1x3q1_1",yt="_title_1x3q1_19";var O={box:ft,title:yt};const{volumeVar:ee,audio:j}=b,xt=e=>{const t=+e.target.value/100;ee(t)},wt=({})=>{const e=h(ee),t=Math.round(e*100);return i.exports.useEffect(()=>{j.volume=e},[]),i.exports.useEffect(()=>{j.volume=e},[e]),s("div",{className:O.box,children:[s("p",{className:O.title,children:["Volume: ",t,"%"]}),n("input",{type:"range",value:t,onChange:a=>xt(a)})]})},bt="_box_1i7xp_1",Nt="_icon_1i7xp_25";var X={box:bt,icon:Nt};const Tt=e=>i.exports.createElement("svg",u({width:"1em",height:"1em",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},e),i.exports.createElement("path",{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"})),Vt=a=>{var r=a,{className:e}=r,t=_(r,["className"]);return n("div",x(u({className:p(X.box,e)},t),{children:n(Tt,{className:X.icon})}))},G=e=>e<10?`0${e}`:`${e}`,K=e=>{const t=Math.floor(e/60),a=Math.floor(e%60);return`${G(t)}:${G(a)}`},St="_info_px7rt_1",Ct="_box_px7rt_9",$t="_title_px7rt_23";var w={info:St,box:Ct,title:$t};const{currentTimeVar:Q,canChangeTimeVar:Et,audio:It,durationVar:Mt,currentTrackVar:At}=b,Bt=(e,t)=>Math.round(e*100/t)?Math.round(e*100/t):0,Pt=({})=>{const e=h(Et),t=h(Mt),a=h(At),r=l=>{if(e){const c=+l.target.value*t/100;Q(c),It.currentTime=c}},o=h(Q);return s("div",{className:w.info,children:[s("div",{className:w.box,children:[n("h2",{className:w.title,children:a==null?void 0:a.title}),n("p",{children:K(t)})]}),s("div",{className:w.box,children:[n("h3",{className:w.title,children:a==null?void 0:a.author}),n("p",{children:K(o)})]}),n("input",{type:"range",disabled:!e,onChange:r,value:Bt(o,t)})]})},Lt=200,{audio:v,durationVar:Ft,currentTrackVar:Dt,currentTimeVar:Rt,canChangeTimeVar:H,nextTrack:Ut,toggleAudio:J}=b,qt=({})=>{const e=h(Dt),{data:t}=M(V),a=t==null?void 0:t.getAllTracks,r=o=>{if(!!v.src)switch(o.code){case"Space":o.preventDefault(),J();break}};return i.exports.useEffect(()=>(window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)),[]),i.exports.useEffect(()=>{e&&(v.src=e.src,v.ontimeupdate=()=>Rt(v.currentTime),v.onloadeddata=()=>{setTimeout(()=>{H(!0)},Lt),Ft(v.duration)},v.onended=()=>{H(!1),Ut(a)},J())},[e]),e?s("div",{className:q.player,children:[n(gt,{}),n(Vt,{className:q.musicImage}),n(Pt,{}),n(wt,{})]}):null},zt=()=>s("div",{className:"container",children:[n(qt,{}),n("main",{children:n(at,{})})]}),Ot="https://eyes-closed-server.herokuapp.com/graphql",jt=de({uri:Ot}),Xt=new ue,Gt=new me({link:jt,cache:Xt});pe.render(n(he.StrictMode,{children:n(ke,{client:Gt,children:n(zt,{})})}),document.getElementById("root"));