var se=Object.defineProperty,le=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var V=(t,e,n)=>e in t?se(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))P.call(e,n)&&V(t,n,e[n]);if(N)for(var n of N(e))D.call(e,n)&&V(t,n,e[n]);return t},_=(t,e)=>le(t,ce(e));var p=(t,e)=>{var n={};for(var r in t)P.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&N)for(var r of N(t))e.indexOf(r)<0&&D.call(t,r)&&(n[r]=t[r]);return n};var d=(t,e,n)=>(V(t,typeof e!="symbol"?e+"":e,n),n);import{j as A,c as m,m as v,u as h,r as l,a as ie,f as de,b as ue,d as I,e as me,I as pe,A as he,R as ke,g as _e,h as ve}from"./vendor.e5795c61.js";const ge=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};ge();const xe="_playlist_192kl_1",ye="_title_192kl_23",we="_head_192kl_33",fe="_search_192kl_45";var b={playlist:xe,title:ye,head:we,search:fe};const Ne="_title_xynlk_1";var be={title:Ne};const a=A.exports.jsx,c=A.exports.jsxs,L=A.exports.Fragment,Ce=n=>{var r=n,{className:t}=r,e=p(r,["className"]);return a("div",_(u({className:t},e),{children:a("p",{className:be.title,children:"Connection Error"})}))},Te="_block_cfywl_1",Se="_center_cfywl_9";var z={block:Te,center:Se};const R=o=>{var s=o,{children:t,className:e,childsCenter:n}=s,r=p(s,["children","className","childsCenter"]);return a("div",_(u({className:m(z.block,e,{[z.center]:n})},r),{children:t}))},Ve="_loading_clven_1",Ee="_load_clven_1";var $e={loading:Ve,load:Ee};const ee=({className:t})=>a("div",{className:m($e.loading,t)}),Me="_tracksBlock_diz2w_1";var Ae={tracksBlock:Me};const Ie="_track_wmtb5_1",Le="_info_wmtb5_63",Be="_text_wmtb5_77",Fe="_active_wmtb5_97",Pe="_trackBox_wmtb5_111";var g={track:Ie,info:Le,text:Be,active:Fe,trackBox:Pe};const De=({title:t,active:e,subtitle:n,onClick:r})=>c("button",{onClick:()=>r(),className:m(g.track,{[g.active]:e}),children:[a("div",{className:g.trackBox}),c("div",{className:g.info,children:[a("p",{className:g.text,children:t}),a("p",{className:g.text,children:n})]})]});class ze{constructor(){d(this,"DISABLE_TIME",200);d(this,"DEFAULT_VOLUME",.2);d(this,"audio",new Audio);d(this,"currentTrackVar",v(null));d(this,"isPlayingVar",v(!1));d(this,"canChangeTimeVar",v(!0));d(this,"volumeVar",v(this.DEFAULT_VOLUME));d(this,"currentTimeVar",v(0));d(this,"durationVar",v(0));d(this,"switchTrack",(e,n)=>{const r=this.currentTrackVar();if(!e||!r)return;const o=e.findIndex(s=>s.id===r.id);switch(n){case"NEXT":o===e.length-1?this.currentTrackVar(e[0]):this.currentTrackVar(e[o+1]);break;case"PREV":o===0?this.currentTrackVar(e[e.length-1]):this.currentTrackVar(e[o-1]);break}});d(this,"prevTrack",e=>this.switchTrack(e,"PREV"));d(this,"nextTrack",e=>this.switchTrack(e,"NEXT"));d(this,"toggleAudio",async()=>{if(this.audio.paused){this.isPlayingVar(!0);try{await this.audio.play()}catch(e){console.log(e)}}else this.isPlayingVar(!1),this.audio.pause()});d(this,"initializeAudio",(e,n)=>{this.audio.src=e,this.audio.ontimeupdate=()=>this.currentTimeVar(this.audio.currentTime),this.audio.onloadeddata=()=>{setTimeout(()=>{this.canChangeTimeVar(!0)},this.DISABLE_TIME),this.durationVar(this.audio.duration)},this.audio.onended=()=>{this.canChangeTimeVar(!1),this.nextTrack(n)},this.audio.volume=this.volumeVar()})}}const f=new ze,Re=({data:t})=>{const{currentTrackVar:e}=f,n=h(e),r=o=>()=>e(o);return a("ul",{className:Ae.tracksBlock,children:t.map(o=>a("li",{children:a(De,{active:o.id===(n==null?void 0:n.id),onClick:r(o),title:o.title,subtitle:o.author})},o.id))})},Ue={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"addTrack"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"title"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"author"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"file"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Upload"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"addTrack"},arguments:[{kind:"Argument",name:{kind:"Name",value:"title"},value:{kind:"Variable",name:{kind:"Name",value:"title"}}},{kind:"Argument",name:{kind:"Name",value:"author"},value:{kind:"Variable",name:{kind:"Name",value:"author"}}},{kind:"Argument",name:{kind:"Name",value:"file"},value:{kind:"Variable",name:{kind:"Name",value:"file"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"src"}},{kind:"Field",name:{kind:"Name",value:"author"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]},T={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetAllTracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getAllTracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"author"}},{kind:"Field",name:{kind:"Name",value:"src"}}]}}]}}]},je="_button_j5v6t_1";var Oe={button:je};const te=r=>{var o=r,{children:t,className:e}=o,n=p(o,["children","className"]);return a("button",_(u({className:m(Oe.button,e)},n),{children:t}))},qe="__lock_1up8e_1",Xe="_modal_1up8e_9",Ge="_overlay_1up8e_41";var C={_lock:qe,modal:Xe,overlay:Ge};const U=document.getElementById("modal"),Ke=({className:t,children:e,open:n,onClose:r})=>{const o=s=>{(s.key==="Esc"||s.key==="Escape")&&r()};return l.exports.useEffect(()=>{document.body.classList.add(C._lock)},[]),l.exports.useEffect(()=>{if(document.body.classList.toggle(C._lock),n)return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[n]),!n||!U?a(L,{}):ie.exports.createPortal(a(de,{children:a("div",{onClick:()=>r(),className:C.overlay,children:a("div",{onClick:s=>s.stopPropagation(),role:"dialog",className:m(C.modal,t),children:e})})}),U)},Qe="_form_1nwa0_1",He="_btn_1nwa0_13",Je="_fileInput_1nwa0_29";var E={form:Qe,btn:He,fileInput:Je};const We="_input_uv6sf_1";var Ye={input:We};const j=s=>{var i=s,{inputState:t,setInputState:e,labelText:n,className:r}=i,o=p(i,["inputState","setInputState","labelText","className"]);return c("label",{children:[a("h3",{children:n}),a("input",u({required:!0,className:m(Ye.input,r),value:t,onChange:k=>e(k.target.value),type:"text"},o))]})},Ze="_block_r92fe_1",et="_title_r92fe_17";var O={block:Ze,title:et};const tt=({title:t="Uploading track. Please wait.",className:e})=>c("div",{className:m(O.block,e),children:[a("p",{className:O.title,children:t}),a(ee,{})]}),nt="_label_1io4c_1",at="_input_1io4c_63";var q={label:nt,input:at};const ot=o=>{var s=o,{text:t,className:e,style:n}=s,r=p(s,["text","className","style"]);return c("label",{className:m(e,q.label),style:n,children:[t,a("input",u({className:q.input,type:"file",accept:"audio/*"},r))]})},rt=({onSubmit:t})=>{var B;const[e,n]=l.exports.useState(null),[r,o]=l.exports.useState(""),[s,i]=l.exports.useState(""),[k,{loading:ae}]=ue(Ue),oe=S=>{var F;const x=(F=S.target.files)==null?void 0:F[0];x&&x.type.includes("audio/")?n(x):alert("Select audio/mpeg file")},re=async S=>{S.preventDefault();try{await k({variables:{title:r,author:s,file:e},refetchQueries:[{query:T}]}),t(),i(""),o("")}catch(x){alert("An error occurred while uploading the file to the server"),console.log("Upload failed: ",x)}};return ae?a(tt,{}):c("form",{className:E.form,action:"",onSubmit:re,children:[a("h1",{children:"Upload audio file"}),a(j,{inputState:s,setInputState:i,labelText:"Author"}),a(j,{inputState:r,setInputState:o,labelText:"Title"}),a(ot,{text:(B=e==null?void 0:e.name)!=null?B:"Chose Audio File",className:E.fileInput,required:!0,onChange:oe}),a(te,{className:E.btn,type:"submit",children:"Upload"})]})},st="_uploadModal_16r2l_1";var lt={uploadModal:st};const ct=({isOpen:t,onClose:e})=>a(Ke,{className:lt.uploadModal,open:t,onClose:e,children:a(rt,{onSubmit:e})}),it=({})=>{const[t,e]=l.exports.useState(!1);return c(L,{children:[a(te,{onClick:()=>e(!0),children:"Add new track"}),a(ct,{isOpen:t,onClose:()=>e(!1)})]})},dt="_wrapper_1w3ed_1",ut="_icon_1w3ed_29",mt="_input_1w3ed_39";var $={wrapper:dt,icon:ut,input:mt};const pt=t=>l.exports.createElement("svg",u({fill:"currentColor",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 501.984 501.984",style:{enableBackground:"new 0 0 501.984 501.984"},xmlSpace:"preserve",width:"1em",height:"1em"},t),l.exports.createElement("g",null,l.exports.createElement("path",{d:"M491.796,438.532L344.031,290.768c-12.194-12.195-15.791-30.451-9.163-46.511c9.052-21.934,13.449-45.194,13.069-69.134 c-0.732-46.107-19.126-89.197-51.792-121.332C263.483,21.662,220.097,3.967,173.979,3.967 c-45.889,0-89.187,17.709-121.919,49.864C19.372,85.944,0.895,128.836,0.032,174.605c-0.886,46.929,16.841,91.34,49.913,125.052 c33.054,33.692,77.085,52.255,123.983,52.269c0.017,0,0.034,0,0.052,0c26.246,0,51.474-5.702,74.983-16.949 c16.476-7.882,36.098-4.62,48.832,8.114l144.722,144.72c6.581,6.581,15.332,10.206,24.639,10.206 c9.306,0,18.057-3.625,24.64-10.207C505.381,474.224,505.381,452.118,491.796,438.532z M477.654,473.668 c-2.805,2.804-6.533,4.348-10.498,4.348c-3.965,0-7.693-1.544-10.497-4.348l-144.721-144.72 c-11.937-11.936-27.961-18.224-44.258-18.224c-9.261,0-18.611,2.032-27.348,6.211c-20.795,9.948-43.116,14.991-66.352,14.991 c-0.015,0-0.033,0-0.047,0c-41.486-0.012-80.449-16.446-109.712-46.275C34.94,255.803,19.244,216.5,20.027,174.982 C21.598,91.712,90.66,23.967,173.979,23.967c84.983,0,152.611,66.535,153.96,151.473c0.336,21.2-3.552,41.786-11.56,61.187 c-9.72,23.554-4.418,50.356,13.509,68.283l147.765,147.763C483.441,458.462,483.441,467.88,477.654,473.668z"}),l.exports.createElement("path",{d:"M173.98,54.652c-67.985,0-123.295,55.31-123.295,123.295s55.31,123.295,123.295,123.295s123.295-55.31,123.295-123.295 S241.965,54.652,173.98,54.652z M173.98,281.242c-56.957,0-103.295-46.338-103.295-103.295 c0-56.957,46.338-103.295,103.295-103.295s103.295,46.338,103.295,103.295S230.937,281.242,173.98,281.242z"}),l.exports.createElement("path",{d:"M207.418,91.691c-10.661-4.135-21.911-6.232-33.438-6.232c-50.998,0-92.487,41.489-92.487,92.487 c0,16.034,4.17,31.835,12.06,45.695c1.844,3.239,5.222,5.055,8.7,5.055c1.676,0,3.376-0.423,4.939-1.312 c4.799-2.732,6.475-8.838,3.743-13.638c-6.176-10.85-9.441-23.229-9.441-35.8c0-39.969,32.518-72.487,72.487-72.487 c9.043,0,17.859,1.642,26.204,4.879c5.15,1.996,10.942-0.559,12.94-5.707C215.122,99.482,212.567,93.689,207.418,91.691z"}),l.exports.createElement("path",{d:"M237.497,110.721c-4.013-3.794-10.342-3.615-14.136,0.399c-3.793,4.013-3.615,10.343,0.399,14.136 c5.491,5.19,10.119,11.167,13.755,17.765c1.823,3.306,5.241,5.175,8.767,5.175c1.631,0,3.287-0.401,4.818-1.243 c4.836-2.666,6.597-8.748,3.931-13.585C250.395,124.955,244.496,117.335,237.497,110.721z"}))),ht=({className:t,value:e,onChange:n})=>c("label",{className:m($.wrapper,t),children:[a("input",{value:e,onChange:n,placeholder:"Search...",id:"",type:"search",className:m($.input)}),a(pt,{className:$.icon})]}),kt=(t,e)=>t.toLowerCase().includes(e.toLowerCase()),_t=({})=>{const{data:t,loading:e,error:n}=I(T),r=t==null?void 0:t.getAllTracks,[o,s]=l.exports.useState(""),i=l.exports.useMemo(()=>r==null?void 0:r.filter(k=>kt(k.title,o)),[o]);return n?a(R,{children:a(Ce,{})}):e||!r?a(R,{childsCenter:!0,children:a(ee,{})}):c("div",{className:b.playlist,children:[c("div",{className:b.head,children:[a("h1",{className:b.title,children:`Playlist: ${r.length}`}),a(it,{})]}),a(ht,{className:b.search,value:o,onChange:k=>s(k.target.value)}),a(Re,{data:i!=null?i:r})]})},vt="_player_s12o8_1",gt="_musicImage_s12o8_59";var X={player:vt,musicImage:gt};const xt="_rewindControls_12tjy_1",yt="_toggle_12tjy_27",wt="_arrow_12tjy_35",ft="_inverse_12tjy_43";var y={rewindControls:xt,toggle:yt,arrow:wt,inverse:ft};const Nt=t=>l.exports.createElement("svg",u({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 485 485",style:{enableBackground:"new 0 0 485 485"},xmlSpace:"preserve",width:"1em",height:"1em"},t),l.exports.createElement("g",null,l.exports.createElement("path",{d:"M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5 s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485s125.671-25.225,171.474-71.026 C459.775,368.171,485,307.274,485,242.5S459.775,116.829,413.974,71.026z M242.5,455C125.327,455,30,359.673,30,242.5 S125.327,30,242.5,30S455,125.327,455,242.5S359.673,455,242.5,455z"}),l.exports.createElement("rect",{x:172.5,y:140,width:55,height:205}),l.exports.createElement("rect",{x:257.5,y:140,width:55,height:205}))),bt=t=>l.exports.createElement("svg",u({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 485 485",style:{enableBackground:"new 0 0 485 485"},xmlSpace:"preserve",width:"1em",height:"1em"},t),l.exports.createElement("g",null,l.exports.createElement("path",{d:"M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5 s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485s125.671-25.225,171.474-71.026 C459.775,368.171,485,307.274,485,242.5S459.775,116.829,413.974,71.026z M242.5,455C125.327,455,30,359.673,30,242.5 S125.327,30,242.5,30S455,125.327,455,242.5S359.673,455,242.5,455z"}),l.exports.createElement("polygon",{points:"181.062,336.575 343.938,242.5 181.062,148.425  "}))),G=t=>l.exports.createElement("svg",u({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 224.175 224.175",style:{enableBackground:"new 0 0 224.175 224.175"},xmlSpace:"preserve",width:"1em",height:"1em"},t),l.exports.createElement("g",null,l.exports.createElement("path",{d:"M185.513,0L185.513,0c-7.4,0-13.7,6.3-13.7,14.2v71.9L46.213,2.2c-2.1-1-4.7-2.1-7.9-2.1c-7.4,0-13.7,6.3-13.7,14.2V210 c0,11,12.6,17.8,21.5,11.5l125.6-83.4V210c-0.5,18.9,28.4,18.9,27.8,0V14.3C200.213,6.3,193.413,0,185.513,0z M52.513,183.7V39.9 l108.2,71.9L52.513,183.7z"}))),Ct="_button_18l9v_1",Tt="_icon_18l9v_57";var K={button:Ct,icon:Tt};const M=r=>{var o=r,{SvgIcon:t,className:e}=o,n=p(o,["SvgIcon","className"]);return a("button",_(u({className:m(K.button,e)},n),{children:a(t,{className:K.icon})}))},{prevTrack:St,nextTrack:Vt,toggleAudio:Et,isPlayingVar:$t}=f,Mt=({})=>{const{data:t}=I(T),e=t==null?void 0:t.getAllTracks,n=h($t),r=o=>o?Nt:bt;return c(L,{children:[a(M,{className:y.toggle,onClick:()=>Et(),SvgIcon:r(n)}),c("div",{className:y.rewindControls,children:[a(M,{SvgIcon:G,className:m(y.arrow,y.inverse),onClick:()=>St(e)}),a(M,{SvgIcon:G,className:y.arrow,onClick:()=>Vt(e)})]})]})},At="_box_1o90y_1",It="_title_1o90y_19";var Q={box:At,title:It};const{volumeVar:ne,audio:Lt}=f,Bt=t=>{const e=+t.target.value/100;ne(e)},Ft=({})=>{const t=h(ne),e=Math.round(t*100);return l.exports.useEffect(()=>{Lt.volume=t},[t]),c("div",{className:Q.box,children:[c("p",{className:Q.title,children:["Volume: ",e,"%"]}),a("input",{type:"range",value:e,onChange:Bt})]})},Pt="_box_1i7xp_1",Dt="_icon_1i7xp_25";var H={box:Pt,icon:Dt};const zt=t=>l.exports.createElement("svg",u({width:"1em",height:"1em",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},t),l.exports.createElement("path",{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"})),Rt=n=>{var r=n,{className:t}=r,e=p(r,["className"]);return a("div",_(u({className:m(H.box,t)},e),{children:a(zt,{className:H.icon})}))},J=t=>t<10?`0${t}`:`${t}`,W=t=>{const e=Math.floor(t/60),n=Math.floor(t%60);return`${J(e)}:${J(n)}`},Ut="_info_px7rt_1",jt="_box_px7rt_9",Ot="_title_px7rt_23";var w={info:Ut,box:jt,title:Ot};const{currentTimeVar:Y,canChangeTimeVar:qt,audio:Xt,durationVar:Gt,currentTrackVar:Kt}=f,Qt=(t,e)=>Math.round(t*100/e)?Math.round(t*100/e):0,Ht=({})=>{const t=h(qt),e=h(Gt),n=h(Kt),r=s=>{if(t){const i=+s.target.value*e/100;Y(i),Xt.currentTime=i}},o=h(Y);return c("div",{className:w.info,children:[c("div",{className:w.box,children:[a("h2",{className:w.title,children:n==null?void 0:n.title}),a("p",{children:W(e)})]}),c("div",{className:w.box,children:[a("h3",{className:w.title,children:n==null?void 0:n.author}),a("p",{children:W(o)})]}),a("input",{type:"range",disabled:!t,onChange:r,value:Qt(o,e)})]})},{audio:Jt,currentTrackVar:Wt,toggleAudio:Z,initializeAudio:Yt}=f,Zt=({})=>{const t=h(Wt),{data:e}=I(T),n=e==null?void 0:e.getAllTracks,r=o=>{if(!!Jt.src)switch(o.code){case"Space":Z();break}};return l.exports.useEffect(()=>(window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)),[]),l.exports.useEffect(()=>{t&&(Yt(t.src,n),Z())},[t]),t?c("div",{className:X.player,children:[a(Mt,{}),a(Rt,{className:X.musicImage}),a(Ht,{}),a(Ft,{})]}):null},en=()=>c("div",{className:"container",children:[a(Zt,{}),a("main",{children:a(_t,{})})]}),tn="https://eyes-closed-server.herokuapp.com/graphql",nn=me({uri:tn}),an=new pe,on=new he({link:nn,cache:an});ke.render(a(_e.StrictMode,{children:a(ve,{client:on,children:a(en,{})})}),document.getElementById("root"));
