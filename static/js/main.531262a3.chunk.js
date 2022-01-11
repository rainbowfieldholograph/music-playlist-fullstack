(this["webpackJsonpmusic-playlist"]=this["webpackJsonpmusic-playlist"]||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n,c,r=a(3),i=a.n(r),s=a(57),l=a.n(s),o=(a(114),a(115),a(32)),u=a.n(o),d=a(50),j=a(79),b=a.n(j),h=a(42),p=a(91),x=a(92),m=a(13),k=function(){function e(){Object(p.a)(this,e),this.tracks=[],this.currentTrack=null,this.playing=!1,this.isLoading=!0,this.volume=1,this.currentTime=0,this.duration=0,this.url="".concat("https://eyes-closed-server.herokuapp.com","/graphql"),Object(m.d)(this,{},{autoBind:!0})}return Object(x.a)(e,[{key:"setDuration",value:function(e){this.duration=e}},{key:"setCurrentTime",value:function(e){this.currentTime=e}},{key:"setVolume",value:function(e){this.volume=e}},{key:"setLoading",value:function(e){this.isLoading=e}},{key:"setTracks",value:function(e){this.tracks=e}},{key:"setPlaying",value:function(e){this.playing=e}},{key:"setCurrentTrack",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.currentTrack=e,this.setPlaying(t)}},{key:"addToTracks",value:function(e){this.tracks.push(e)}},{key:"prevTrack",value:function(){var e=this.tracks.indexOf(this.currentTrack);0===e?this.setCurrentTrack(this.tracks[this.tracks.length-1]):this.setCurrentTrack(this.tracks[e-1])}},{key:"nextTrack",value:function(){var e=this.tracks.indexOf(this.currentTrack);e===this.tracks.length-1?this.setCurrentTrack(this.tracks[0]):this.setCurrentTrack(this.tracks[e+1])}},{key:"handleEnd",value:function(){this.nextTrack()}}]),e}(),f=new k,_=a(43),O=a(70),v=a.n(O),g=a(35),y=a(93),T=a.n(y),N=a(2),C=function(){return Object(N.jsx)("div",{className:T.a.box,children:Object(N.jsx)(_.a,{style:{fontSize:"1.7rem"},icon:g.a,color:"black"})})},I=function(e){var t=e.toggleAudio,a=e.nextTrack,n=e.prevTrack,c=e.playing;return Object(N.jsxs)("div",{className:v.a.wrapper,children:[Object(N.jsx)("div",{className:v.a.musicImage,children:Object(N.jsx)(C,{})}),Object(N.jsx)(_.a,{className:"clickable",onClick:t,style:{fontSize:"2.5rem"},icon:c?g.b:g.c,color:"black"}),Object(N.jsxs)("div",{className:v.a.rewindControls,children:[Object(N.jsx)(_.a,{className:"clickable",style:{fontSize:"1.5rem"},icon:g.d,color:"black",onClick:n}),Object(N.jsx)(_.a,{className:"clickable",style:{fontSize:"1.5rem"},icon:g.e,color:"black",onClick:a})]})]})},P=a(36),w=a.n(P),B=function(e){var t=Math.floor(e/60),a=Math.floor(e%60),n=t<10?"0".concat(t):"".concat(t),c=a<10?"0".concat(a):"".concat(a);return"".concat(n,":").concat(c)},S=function(e){var t=e.track,a=e.duration,n=e.currentTime,c=e.handleProgress,r=e.canChangeTime;return Object(N.jsxs)("div",{className:w.a.info,children:[Object(N.jsxs)("div",{className:w.a.infoInnerBox,children:[Object(N.jsx)("h2",{className:w.a.title,children:null===t||void 0===t?void 0:t.title}),Object(N.jsx)("p",{children:B(a)})]}),Object(N.jsxs)("div",{className:w.a.infoInnerBox,children:[Object(N.jsx)("h3",{className:w.a.title,children:null===t||void 0===t?void 0:t.author}),Object(N.jsx)("p",{children:B(n)})]}),Object(N.jsx)("input",{className:w.a.progressBar,type:"range",disabled:!r,onChange:c,value:a?Math.round(100*n/a):0})]})},F=a(80),M=a.n(F),A=function(e){var t=e.volumeState,a=e.handleVolume;return Object(N.jsxs)("div",{className:M.a.box,children:[Object(N.jsxs)("p",{className:M.a.title,children:["Volume: ",Math.round(100*t),"%"]}),Object(N.jsx)("input",{className:"clickable",type:"range",value:Math.round(100*t),onChange:function(e){return a(e)}})]})},U=new Audio,L=!0,V=Object(h.a)((function(){var e=f.currentTime,t=f.duration,a=f.volume,n=f.playing,c=f.currentTrack,i=f.nextTrack,s=f.prevTrack,l=f.setCurrentTime,o=f.setDuration,j=f.setVolume,h=f.setPlaying,p=f.handleEnd;Object(r.useEffect)((function(){c&&(U.src=c.src,U.ontimeupdate=function(){return l(U.currentTime)},U.onloadeddata=function(){setTimeout((function(){L=!0}),200),o(U.duration)},U.onended=function(){L=!1,console.log("end"),p()},x())}),[c]);var x=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!U.paused){e.next=12;break}return h(!0),e.prev=2,e.next=5,U.play();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:e.next=14;break;case 12:h(!1),U.pause();case 14:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}}();return c?Object(N.jsxs)("div",{className:b.a.player,children:[Object(N.jsx)(I,{toggleAudio:x,nextTrack:i,prevTrack:s,playing:n}),Object(N.jsx)("div",{className:b.a.musicImage,children:Object(N.jsx)(C,{})}),Object(N.jsx)(S,{track:c,duration:t,currentTime:e,handleProgress:function(e){if(L){var a=e.target.value*t/100;U.currentTime=a,l(a)}},canChangeTime:L}),Object(N.jsx)(A,{volumeState:a,handleVolume:function(e){var t=e.target.value/100;j(t),U.volume=t}})]}):null})),q=V,W=a(29),D=a(81),E=a.n(D),H=function(){return Object(N.jsx)("div",{className:E.a.loadingWrapper,children:Object(N.jsx)("div",{className:E.a.loading})})},R=a(25),$=a.n(R),z=Object(h.a)((function(e){var t=e.track,a=e.index,n=f.tracks,c=f.setCurrentTrack,r=f.currentTrack,i=!1;return r&&(i=n[a].id===r.id),Object(N.jsxs)("button",{className:i?"".concat($.a.track," ").concat($.a.active):$.a.track,onClick:function(){return!i&&c(t)},children:[Object(N.jsx)("div",{className:$.a.trackBox}),Object(N.jsxs)("div",{className:$.a.info,children:[Object(N.jsx)("div",{className:$.a.innerBox,children:Object(N.jsx)("h2",{className:$.a.text,children:t.title})}),Object(N.jsx)("div",{className:$.a.innerBox,children:Object(N.jsx)("h3",{className:$.a.text,children:t.author})})]})]})})),K=a(45),Q=a.n(K),J=a(54),Y=a.n(J),G=a(142),Z=a(55),X=a.n(Z),ee=a(64),te=a(39),ae=Object(te.d)(n||(n=Object(ee.a)(["\n  mutation addTrack($title: String!, $author: String!, $file: Upload!) {\n    addTrack(title: $title, author: $author, file: $file) {\n      src\n      author\n      title\n      id\n    }\n  }\n"]))),ne=a(94),ce=a.n(ne),re=Object(r.memo)((function(e){var t=e.inputState,a=e.setInputState,n=e.label,c=e.id;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("label",{htmlFor:c,children:Object(N.jsx)("h3",{children:n})}),Object(N.jsx)("input",{id:c,required:!0,className:ce.a.input,value:t,onChange:function(e){return a(e.target.value)},type:"text"})]})})),ie=function(e){var t=e.setModal,a=f.addToTracks,n=Object(r.useState)(null),c=Object(W.a)(n,2),i=c[0],s=c[1],l=Object(r.useState)(""),o=Object(W.a)(l,2),j=o[0],b=o[1],h=Object(r.useState)(""),p=Object(W.a)(h,2),x=p[0],m=p[1],k=Object(G.a)(ae),_=Object(W.a)(k,2),O=_[0],v=_[1].loading,g=function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.target.files[0];case 2:(a=e.sent).type.includes("audio/")?s(a):alert("\u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 audio/mpeg \u0444\u0430\u0439\u043b");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(u.a.mark((function e(n){var c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,O({variables:{title:j,author:x,file:i}});case 4:c=e.sent,r=c.data.addTrack,a(r),t(!1),m(""),b(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),alert("Failed to upload track to server"),console.log("upload failed: ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return v?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("p",{className:X.a.loadingTitle,children:"Uploading track. Please wait."}),Object(N.jsx)(H,{})]}):Object(N.jsxs)("form",{action:"",onSubmit:y,children:[Object(N.jsx)("h1",{className:X.a.title,children:"Upload Track"}),Object(N.jsx)(re,{inputState:x,setInputState:m,id:"author",label:"Author"}),Object(N.jsx)(re,{inputState:j,setInputState:b,id:"title",label:"Title"}),Object(N.jsx)("label",{htmlFor:"file",children:Object(N.jsx)("h1",{className:X.a.uploadTitle,children:"Upload audio File"})}),Object(N.jsx)("input",{required:!0,id:"file",type:"file",accept:"audio/*",onChange:g}),Object(N.jsx)("button",{className:X.a.btn,type:"submit",children:"UPLOAD TRACK"})]})},se=Object(r.memo)((function(e){var t=e.modal,a=e.setModal;return Object(N.jsx)("div",{onClick:function(){return a(!t)},className:t?"".concat(Y.a.wrapper," ").concat(Y.a.active):Y.a.wrapper,children:Object(N.jsx)("div",{onClick:function(e){return e.stopPropagation()},className:Y.a.inner,children:Object(N.jsx)(ie,{setModal:a})})})})),le=a(98),oe=a.n(le),ue=function(){return Object(N.jsx)("div",{children:Object(N.jsx)("p",{className:oe.a.title,children:"Connection Error"})})},de=a(140),je=Object(te.d)(c||(c=Object(ee.a)(["\n  query GetAllTracks {\n    getAllTracks {\n      id\n      title\n      author\n      src\n    }\n  }\n"]))),be=a(83),he=a(101),pe=a(99),xe=a.n(pe),me=["children"],ke=function(e){var t=e.children,a=Object(he.a)(e,me);return Object(N.jsx)("div",Object(be.a)(Object(be.a)({className:xe.a.block},a),{},{children:t}))},fe=Object(h.a)((function(){var e=function(){var e=f.tracks,t=f.setTracks,a=Object(r.useState)(!0),n=Object(W.a)(a,2),c=n[0],i=n[1];return{tracks:e,loading:c,error:Object(de.a)(je,{onCompleted:function(e){var a=e.getAllTracks;t(a),i(!1)},onError:function(){i(!1)}}).error}}(),t=e.tracks,a=e.loading,n=e.error,c=Object(r.useState)(!1),i=Object(W.a)(c,2),s=i[0],l=i[1];return n?Object(N.jsx)(ke,{children:Object(N.jsx)(ue,{})}):a?Object(N.jsx)(ke,{children:Object(N.jsx)(H,{})}):Object(N.jsxs)("section",{className:Q.a.playlist,children:[Object(N.jsxs)("div",{className:Q.a.buttonFlex,children:[Object(N.jsx)("h1",{className:Q.a.title,children:"Playlist: ".concat(t.length)}),Object(N.jsx)("button",{onClick:function(){return l(!s)},className:Q.a.btn,children:"Add new track"})]}),Object(N.jsx)("ul",{className:Q.a.tracksBlock,children:t.map((function(e,t){return Object(N.jsx)("li",{children:Object(N.jsx)(z,{track:e,index:t})},e.id)}))}),Object(N.jsx)(se,{modal:s,setModal:l})]})})),_e=a(77),Oe=a(141),ve=a(138),ge=a.n(ve),ye="".concat("https://eyes-closed-server.herokuapp.com","/graphql"),Te=ge()({uri:ye}),Ne=new _e.a({link:Te,cache:new Oe.a}),Ce=a(139),Ie=function(){return Object(N.jsx)(Ce.a,{client:Ne,children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)(q,{}),Object(N.jsx)(fe,{})]})})};l.a.render(Object(N.jsx)(i.a.StrictMode,{children:Object(N.jsx)(Ie,{})}),document.getElementById("root"))},25:function(e,t,a){e.exports={track:"TrackItem_track__3LYD_",info:"TrackItem_info__118GQ",innerBox:"TrackItem_innerBox__3RNeS",text:"TrackItem_text__y_TSm",active:"TrackItem_active__7VtsK",trackBox:"TrackItem_trackBox__1yviC"}},36:function(e,t,a){e.exports={infoInnerBox:"PlayerInfo_infoInnerBox__CA33a",title:"PlayerInfo_title__1dhf_",progressBar:"PlayerInfo_progressBar__gTYRB",info:"PlayerInfo_info__2CWh0"}},45:function(e,t,a){e.exports={playlist:"Playlist_playlist__DiTB8",title:"Playlist_title__1qWQt",buttonFlex:"Playlist_buttonFlex__2qN5e",btn:"Playlist_btn__1oBuZ",tracksBlock:"Playlist_tracksBlock__248lk"}},54:function(e,t,a){e.exports={wrapper:"UploadModal_wrapper__3IbaA",active:"UploadModal_active__2IZWV",inner:"UploadModal_inner__1j2BK"}},55:function(e,t,a){e.exports={title:"UploadForm_title__2UCv_",btn:"UploadForm_btn__1mmdx",uploadTitle:"UploadForm_uploadTitle__3LP8o",loadingTitle:"UploadForm_loadingTitle__2HzFS"}},70:function(e,t,a){e.exports={wrapper:"PlayerControls_wrapper__1whfD",rewindControls:"PlayerControls_rewindControls__23MjQ",musicImage:"PlayerControls_musicImage__1xbwf"}},79:function(e,t,a){e.exports={player:"Player_player__2J1pR",musicImage:"Player_musicImage__1onlQ"}},80:function(e,t,a){e.exports={box:"PlayerVolume_box__WdveR",title:"PlayerVolume_title__2HAlh"}},81:function(e,t,a){e.exports={loadingWrapper:"Loading_loadingWrapper__2RyLW",loading:"Loading_loading__2H61H",load:"Loading_load__2vrnk"}},93:function(e,t,a){e.exports={box:"PlayerMusicImage_box__1vKHq"}},94:function(e,t,a){e.exports={input:"FormInput_input__1lY7-"}},98:function(e,t,a){e.exports={title:"ErrorBlock_title__2a20F"}},99:function(e,t,a){e.exports={block:"FullHeightBlock_block__2_NaL"}}},[[132,1,2]]]);
//# sourceMappingURL=main.531262a3.chunk.js.map