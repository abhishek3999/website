(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{101:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(20),o=a.n(c),i=a(11),s=a(12),l=a(14),m=a(13),u=a(15),p=a(26),d=a(1),h=a.n(d),f=a(35);f.a.initialize("UA-110410381-1");var g=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.sendPageView(this.context.router.history.location),this.context.router.history.listen(this.sendPageView)}},{key:"sendPageView",value:function(e){f.a.set({page:e.pathname}),f.a.pageview(e.pathname)}},{key:"render",value:function(){return this.props.children}}]),t}(r.a.Component);g.contextTypes={router:h.a.object};var b=g,E=a(9),v=a(23),y=a(106),x=v.a.create("content"),N=function(e){var t=e.tag,a=e.className,n=Object(E.a)(e,["tag","className"]),c=x.b(a);return r.a.createElement(t,Object.assign({className:c},n))};N.defaultProps={tag:y.a};var k=N,O=function(e){var t=e.children,a=Object(E.a)(e,["children"]);return r.a.createElement("main",Object.assign({className:"cr-app bg-light"},a),r.a.createElement(k,{fluid:!0},t))},S=a(107),j=a(108),w=a(109),C=function(e){return r.a.createElement("a",Object.assign({href:"https://nuggetsnetwork.com/Products/moviesui",target:"_blank",rel:"noopener noreferrer"},e))},P=function(){return r.a.createElement(S.a,null,r.a.createElement(j.a,{navbar:!0},r.a.createElement(w.a,null,"2018 Reduction theme, source on ",r.a.createElement(C,null,"Github"))))},z=a(21),I=a(47),D=(a(19),a(120)),A=function(e){var t=e.notificationsData;return t&&t.length&&t.map(function(e){var t=e.id,a=e.avatar,n=e.message,c=e.date;return r.a.createElement(D.a,{key:t,className:"pb-2"},r.a.createElement(D.a,{left:!0,className:"align-self-center pr-3"},r.a.createElement(z.a,{tag:D.a,object:!0,src:a,alt:"Avatar"})),r.a.createElement(D.a,{body:!0,middle:!0,className:"align-self-center"},n),r.a.createElement(D.a,{right:!0,className:"align-self-center"},r.a.createElement("small",{className:"text-muted"},c)))})};A.defaultProps={notificationsData:[]};var L=A,B=a(8),R=a(103),T=a(38),_=function(){return r.a.createElement(R.a,{inline:!0,className:"cr-search-form",onSubmit:function(e){return e.preventDefault()}},r.a.createElement(B.D,{size:"20",className:"cr-search-form__icon-search text-secondary"}),r.a.createElement(T.a,{type:"search",className:"cr-search-form__input",placeholder:"Search..."}))},W=a(46),U=a.n(W),M=a(49),q=a.n(M),J=a(50),G=a.n(J),V=a(30),F=a.n(V),H=a(51),K=a.n(H),Q=[{id:1,avatar:U.a,message:"David sent you a message",date:"3 min ago"},{id:2,avatar:q.a,message:"Jane mentioned you here",date:"1 hour ago"},{id:3,avatar:G.a,message:"Clark sent a pull request",date:"yesterday"},{id:4,avatar:F.a,message:"Alicia signed up",date:"3 days ago"},{id:5,avatar:K.a,message:"Keith shared this article",date:"a week ago"}],X=a(52),Y=a(67),Z=a(121),$=a(122),ee=a(123),te=a(116),ae=a(117),ne=v.a.create("header"),re=Object(X.a)({size:"md",color:"primary",style:{top:-10,right:-10,display:"inline-flex",justifyContent:"center",alignItems:"center"},children:r.a.createElement("small",null,"5")})(B.u),ce=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isOpenNotificationPopover:!1,isNotificationConfirmed:!1,isOpenUserCardPopover:!1},a.toggleNotificationPopover=function(){a.setState({isOpenNotificationPopover:!a.state.isOpenNotificationPopover}),a.state.isNotificationConfirmed||a.setState({isNotificationConfirmed:!0})},a.toggleUserCardPopover=function(){a.setState({isOpenUserCardPopover:!a.state.isOpenUserCardPopover})},a.handleSidebarControlButton=function(e){e.preventDefault(),e.stopPropagation(),document.querySelector(".cr-sidebar").classList.toggle("cr-sidebar--open")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.isNotificationConfirmed;return r.a.createElement(S.a,{light:!0,expand:!0,className:ne.b("bg-white")},r.a.createElement(j.a,{navbar:!0,className:"mr-2"},r.a.createElement(Y.a,{outline:!0,onClick:this.handleSidebarControlButton},r.a.createElement(B.g,{size:25}))),r.a.createElement(j.a,{navbar:!0},r.a.createElement(_,null)),r.a.createElement(j.a,{navbar:!0,className:ne.e("nav-right")},r.a.createElement(w.a,{className:"d-inline-flex"},r.a.createElement(Z.a,{id:"Popover1",className:"position-relative"},e?r.a.createElement(B.v,{size:25,className:"text-secondary can-click",onClick:this.toggleNotificationPopover}):r.a.createElement(re,{size:25,className:"text-secondary can-click animated swing infinite",onClick:this.toggleNotificationPopover})),r.a.createElement($.a,{placement:"bottom",isOpen:this.state.isOpenNotificationPopover,toggle:this.toggleNotificationPopover,target:"Popover1"},r.a.createElement(ee.a,null,r.a.createElement(L,{notificationsData:Q})))),r.a.createElement(w.a,null,r.a.createElement(Z.a,{id:"Popover2"},r.a.createElement(z.a,{onClick:this.toggleUserCardPopover,className:"can-click"})),r.a.createElement($.a,{placement:"bottom-end",isOpen:this.state.isOpenUserCardPopover,toggle:this.toggleUserCardPopover,target:"Popover2",className:"p-0 border-0",style:{minWidth:250}},r.a.createElement(ee.a,{className:"p-0 border-light"},r.a.createElement(I.c,{title:"Jane",subtitle:"jane@jane.com",text:"Last updated 3 mins ago",className:"border-light"},r.a.createElement(te.a,{flush:!0},r.a.createElement(ae.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(B.x,null)," Profile"),r.a.createElement(ae.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(B.n,null)," Stats"),r.a.createElement(ae.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(B.t,null)," Messages"),r.a.createElement(ae.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(B.F,null)," Settings"),r.a.createElement(ae.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(B.l,null)," Help"),r.a.createElement(ae.a,{tag:"button",action:!0,className:"border-light"},r.a.createElement(B.i,null)," Signout"))))))))}}]),t}(r.a.Component),oe=a(65),ie=function(e){var t=e.component,a=e.layout,n=Object(E.a)(e,["component","layout"]);return r.a.createElement(oe.a,Object.assign({},n,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},se=a(61),le=a.n(se),me={NotificationItem:{DefaultStyle:{display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:"4px",fontSize:"14px"},success:{borderTop:0,backgroundColor:"#45b649",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},error:{borderTop:0,backgroundColor:"#f85032",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},warning:{borderTop:0,backgroundColor:"#ffd700",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0},info:{borderTop:0,background:"linear-gradient(to right, #6a82fb, #fc5c7d)",WebkitBoxShadow:0,MozBoxShadow:0,boxShadow:0}},Title:{DefaultStyle:{margin:0,padding:0,paddingRight:5,color:"#fff",display:"inline-flex",fontSize:20,fontWeight:"bold"}},MessageWrapper:{DefaultStyle:{display:"block",color:"#fff",width:"100%"}},Dismiss:{DefaultStyle:{display:"inline-flex",justifyContent:"center",alignItems:"center",fontFamily:"inherit",fontSize:20,color:"#f2f2f2",position:"relative",margin:0,padding:0,background:"none",borderRadius:0,opacity:1,width:20,height:20,textAlign:"initial",float:"none",top:"unset",right:"unset",lineHeight:"inherit"}},Action:{DefaultStyle:{background:"#fff",borderRadius:"2px",padding:"6px 20px",fontWeight:"bold",margin:"10px 0 0 0",border:0},success:{backgroundColor:"#45b649",color:"#fff"},error:{backgroundColor:"#f85032",color:"#fff"},warning:{backgroundColor:"#ffd700",color:"#fff"},info:{backgroundColor:"#00c9ff",color:"#fff"}},ActionWrapper:{DefaultStyle:{margin:0,padding:0}}},ue=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleContentClick=function(e){!t.isSidebarOpen()||"xs"!==a.props.breakpoint&&"sm"!==a.props.breakpoint&&"md"!==a.props.breakpoint||a.openSidebar("close")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.breakpoint;t!==this.props.breakpoint&&this.checkBreakpoint(t)}},{key:"componentDidMount",value:function(){var e=this;this.checkBreakpoint(this.props.breakpoint),setTimeout(function(){e.notificationSystem&&e.notificationSystem.addNotification({title:r.a.createElement(B.m,null),message:"Welome to Reduction Admin!",level:"info"})},1500),setTimeout(function(){e.notificationSystem&&e.notificationSystem.addNotification({title:r.a.createElement(B.r,null),message:"Reduction is carefully designed template powered by React and Bootstrap4!",level:"info"})},2500)}},{key:"checkBreakpoint",value:function(e){switch(e){case"xs":case"sm":case"md":return this.openSidebar("close");case"lg":case"xl":default:return this.openSidebar("open")}}},{key:"openSidebar",value:function(e){if("open"===e)return document.querySelector(".cr-sidebar").classList.add("cr-sidebar--open");document.querySelector(".cr-sidebar").classList.remove("cr-sidebar--open")}},{key:"render",value:function(){var e=this,t=this.props.children;return r.a.createElement("main",{className:"cr-app bg-light"},r.a.createElement(je,null),r.a.createElement(k,{fluid:!0,onClick:this.handleContentClick},r.a.createElement(ce,null),t,r.a.createElement(P,null)),r.a.createElement(le.a,{dismissible:!1,ref:function(t){return e.notificationSystem=t},style:me}))}}],[{key:"isSidebarOpen",value:function(){return document.querySelector(".cr-sidebar").classList.contains("cr-sidebar--open")}}]),t}(r.a.Component),pe=a(28),de=a(31),he=a.n(de),fe=a(44),ge=a.n(fe),be=a(62),Ee=a(130),ve=a(124),ye={backgroundImage:'url("'.concat(ge.a,'")'),backgroundSize:"cover",backgroundRepeat:"no-repeat"},xe=[{to:"/buttons",name:"buttons",exact:!1,Icon:B.B},{to:"/button-groups",name:"button groups",exact:!1,Icon:B.k},{to:"/forms",name:"forms",exact:!1,Icon:B.f},{to:"/input-groups",name:"input groups",exact:!1,Icon:B.P},{to:"/dropdowns",name:"dropdowns",exact:!1,Icon:B.b},{to:"/badges",name:"badges",exact:!1,Icon:B.J},{to:"/alerts",name:"alerts",exact:!1,Icon:B.u},{to:"/progress",name:"progress",exact:!1,Icon:B.d},{to:"/modals",name:"modals",exact:!1,Icon:B.O}],Ne=[{to:"/typography",name:"typography",exact:!1,Icon:B.K},{to:"/tables",name:"tables",exact:!1,Icon:B.c}],ke=[{to:"/login",name:"login / signup",exact:!1,Icon:B.a},{to:"/login-modal",name:"login modal",exact:!1,Icon:B.N}],Oe=[{to:"/",name:"dashboard",exact:!0,Icon:B.h},{to:"/cards",name:"cards",exact:!1,Icon:B.Q},{to:"/charts",name:"charts",exact:!1,Icon:B.n},{to:"/widgets",name:"widgets",exact:!1,Icon:B.R}],Se=v.a.create("sidebar"),je=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isOpenComponents:!0,isOpenContents:!0,isOpenPages:!0},a.handleClick=function(e){return function(){a.setState(function(t){var a=t["isOpen".concat(e)];return Object(pe.a)({},"isOpen".concat(e),!a)})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("aside",{className:Se.b(),"data-image":ge.a},r.a.createElement("div",{className:Se.e("background"),style:ye}),r.a.createElement("div",{className:Se.e("content")},r.a.createElement(S.a,null,r.a.createElement(C,{className:"navbar-brand d-flex"},r.a.createElement("img",{src:he.a,width:"40",height:"30",className:"pr-2",alt:""}),r.a.createElement("span",{className:"text-white"},"Reduction ",r.a.createElement(be.a,null)))),r.a.createElement(j.a,{vertical:!0},Oe.map(function(e,t){var a=e.to,n=e.name,c=e.exact,o=e.Icon;return r.a.createElement(w.a,{key:t,className:Se.e("nav-item")},r.a.createElement(Z.a,{id:"navItem-".concat(n,"-").concat(t),className:"text-uppercase",tag:Ee.a,to:a,activeClassName:"active",exact:c},r.a.createElement(o,{className:Se.e("nav-item-icon")}),r.a.createElement("span",{className:""},n)))}),r.a.createElement(w.a,{className:Se.e("nav-item"),onClick:this.handleClick("Components")},r.a.createElement(Z.a,{className:Se.e("nav-item-collapse")},r.a.createElement("div",{className:"d-flex"},r.a.createElement(B.j,{className:Se.e("nav-item-icon")}),r.a.createElement("span",{className:" align-self-start"},"Components")),r.a.createElement(B.o,{className:Se.e("nav-item-icon"),style:{padding:0,transform:this.state.isOpenComponents?"rotate(0deg)":"rotate(-90deg)",transitionDuration:"0.3s",transitionProperty:"transform"}}))),r.a.createElement(ve.a,{isOpen:this.state.isOpenComponents},xe.map(function(e,t){var a=e.to,n=e.name,c=e.exact,o=e.Icon;return r.a.createElement(w.a,{key:t,className:Se.e("nav-item")},r.a.createElement(Z.a,{id:"navItem-".concat(n,"-").concat(t),className:"text-uppercase",tag:Ee.a,to:a,activeClassName:"active",exact:c},r.a.createElement(o,{className:Se.e("nav-item-icon")}),r.a.createElement("span",{className:""},n)))})),r.a.createElement(w.a,{className:Se.e("nav-item"),onClick:this.handleClick("Contents")},r.a.createElement(Z.a,{className:Se.e("nav-item-collapse")},r.a.createElement("div",{className:"d-flex"},r.a.createElement(B.E,{className:Se.e("nav-item-icon")}),r.a.createElement("span",{className:""},"Contents")),r.a.createElement(B.o,{className:Se.e("nav-item-icon"),style:{padding:0,transform:this.state.isOpenContents?"rotate(0deg)":"rotate(-90deg)",transitionDuration:"0.3s",transitionProperty:"transform"}}))),r.a.createElement(ve.a,{isOpen:this.state.isOpenContents},Ne.map(function(e,t){var a=e.to,n=e.name,c=e.exact,o=e.Icon;return r.a.createElement(w.a,{key:t,className:Se.e("nav-item")},r.a.createElement(Z.a,{id:"navItem-".concat(n,"-").concat(t),className:"text-uppercase",tag:Ee.a,to:a,activeClassName:"active",exact:c},r.a.createElement(o,{className:Se.e("nav-item-icon")}),r.a.createElement("span",{className:""},n)))})),r.a.createElement(w.a,{className:Se.e("nav-item"),onClick:this.handleClick("Pages")},r.a.createElement(Z.a,{className:Se.e("nav-item-collapse")},r.a.createElement("div",{className:"d-flex"},r.a.createElement(B.w,{className:Se.e("nav-item-icon")}),r.a.createElement("span",{className:""},"Pages")),r.a.createElement(B.o,{className:Se.e("nav-item-icon"),style:{padding:0,transform:this.state.isOpenPages?"rotate(0deg)":"rotate(-90deg)",transitionDuration:"0.3s",transitionProperty:"transform"}}))),r.a.createElement(ve.a,{isOpen:this.state.isOpenPages},ke.map(function(e,t){var a=e.to,n=e.name,c=e.exact,o=e.Icon;return r.a.createElement(w.a,{key:t,className:Se.e("nav-item")},r.a.createElement(Z.a,{id:"navItem-".concat(n,"-").concat(t),className:"text-uppercase",tag:Ee.a,to:a,activeClassName:"active",exact:c},r.a.createElement(o,{className:Se.e("nav-item-icon")}),r.a.createElement("span",{className:""},n)))})))))}}]),t}(r.a.Component),we=a(125),Ce=function(e){var t=e.color,a=void 0===t?"primary":t;return r.a.createElement("div",{className:"cr-page-spinner"},r.a.createElement(we.a,{color:a}))},Pe=a(126),ze=a(127),Ie=a(110),De=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleAuthState=function(e){e===p.a?a.props.history.push("/login"):a.props.history.push("/signup")},a.handleLogoClick=function(){a.props.history.push("/")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(Pe.a,{style:{height:"100vh",justifyContent:"center",alignItems:"center"}},r.a.createElement(ze.a,{md:6,lg:4},r.a.createElement(Ie.a,{body:!0},r.a.createElement(p.c,{authState:this.props.authState,onChangeAuthState:this.handleAuthState,onLogoClick:this.handleLogoClick}))))}}]),t}(r.a.Component),Ae=a(63),Le=a.n(Ae),Be=a(128),Re=a(131),Te=a(129),_e=(a(101),r.a.lazy(function(){return a.e(14).then(a.bind(null,463))})),We=r.a.lazy(function(){return a.e(12).then(a.bind(null,452))}),Ue=r.a.lazy(function(){return a.e(18).then(a.bind(null,453))}),Me=r.a.lazy(function(){return a.e(7).then(a.bind(null,467))}),qe=r.a.lazy(function(){return a.e(15).then(a.bind(null,461))}),Je=r.a.lazy(function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,464))}),Ge=r.a.lazy(function(){return Promise.all([a.e(0),a.e(16)]).then(a.bind(null,468))}),Ve=r.a.lazy(function(){return Promise.all([a.e(0),a.e(4),a.e(5)]).then(a.bind(null,460))}),Fe=r.a.lazy(function(){return a.e(8).then(a.bind(null,456))}),He=r.a.lazy(function(){return a.e(19).then(a.bind(null,465))}),Ke=r.a.lazy(function(){return a.e(9).then(a.bind(null,462))}),Qe=r.a.lazy(function(){return a.e(10).then(a.bind(null,466))}),Xe=r.a.lazy(function(){return a.e(13).then(a.bind(null,457))}),Ye=r.a.lazy(function(){return a.e(17).then(a.bind(null,458))}),Ze=r.a.lazy(function(){return a.e(20).then(a.bind(null,459))}),$e=r.a.lazy(function(){return a.e(11).then(a.bind(null,469))}),et=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(Be.a,{basename:"/".concat("https://nuggetsnetwork.com/Products/moviesui".split("/").pop())},r.a.createElement(b,null,r.a.createElement(Re.a,null,r.a.createElement(ie,{exact:!0,path:"/login",layout:O,component:function(e){return r.a.createElement(De,Object.assign({},e,{authState:p.a}))}}),r.a.createElement(ie,{exact:!0,path:"/signup",layout:O,component:function(e){return r.a.createElement(De,Object.assign({},e,{authState:p.b}))}}),r.a.createElement(ue,{breakpoint:this.props.breakpoint},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(Ce,null)},r.a.createElement(oe.a,{exact:!0,path:"/",component:Ve}),r.a.createElement(oe.a,{exact:!0,path:"/login-modal",component:We}),r.a.createElement(oe.a,{exact:!0,path:"/buttons",component:qe}),r.a.createElement(oe.a,{exact:!0,path:"/cards",component:Je}),r.a.createElement(oe.a,{exact:!0,path:"/widgets",component:$e}),r.a.createElement(oe.a,{exact:!0,path:"/typography",component:Ze}),r.a.createElement(oe.a,{exact:!0,path:"/alerts",component:_e}),r.a.createElement(oe.a,{exact:!0,path:"/tables",component:Ye}),r.a.createElement(oe.a,{exact:!0,path:"/badges",component:Ue}),r.a.createElement(oe.a,{exact:!0,path:"/button-groups",component:Me}),r.a.createElement(oe.a,{exact:!0,path:"/dropdowns",component:Fe}),r.a.createElement(oe.a,{exact:!0,path:"/progress",component:Xe}),r.a.createElement(oe.a,{exact:!0,path:"/modals",component:Qe}),r.a.createElement(oe.a,{exact:!0,path:"/forms",component:He}),r.a.createElement(oe.a,{exact:!0,path:"/input-groups",component:Ke}),r.a.createElement(oe.a,{exact:!0,path:"/charts",component:Ge}))),r.a.createElement(Te.a,{to:"/"}))))}}]),t}(r.a.Component),tt=Le()(function(e){var t=e.width;return t<575?{breakpoint:"xs"}:576<t&&t<767?{breakpoint:"sm"}:768<t&&t<991?{breakpoint:"md"}:992<t&&t<1199?{breakpoint:"lg"}:t>1200?{breakpoint:"xl"}:{breakpoint:"xs"}})(et);o.a.render(r.a.createElement(tt,null),document.getElementById("root"))},19:function(e,t,a){"use strict";var n=a(25),r=a(1),c=a.n(r);t.a=Object(n.a)({},c.a,{ID:c.a.oneOfType([c.a.string,c.a.number]).isRequired,component:c.a.oneOfType([c.a.string,c.a.func]),date:c.a.oneOfType([c.a.instanceOf(Date),c.a.string])})},21:function(e,t,a){"use strict";var n=a(25),r=a(9),c=a(2),o=a.n(c),i=(a(19),a(4)),s=a.n(i),l=a(30),m=function(e){var t=e.rounded,a=e.circle,c=e.src,i=e.size,l=e.tag,m=e.className,u=e.style,p=Object(r.a)(e,["rounded","circle","src","size","tag","className","style"]),d=s()({"rounded-circle":a,rounded:t},m);return o.a.createElement(l,Object.assign({src:c,style:Object(n.a)({width:i,height:i},u),className:d},p))};m.defaultProps={tag:"img",rounded:!1,circle:!0,size:40,src:a.n(l).a,style:{}},t.a=m},23:function(e,t,a){"use strict";var n,r=a(4),c=a.n(r),o=(n="cr",{create:function(e){var t=e;return"string"===typeof n&&(t="".concat(n,"-").concat(e)),{b:function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return c()(t,a)},e:function(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return c()("".concat(t,"__").concat(e),n)},m:function(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),r=1;r<a;r++)n[r-1]=arguments[r];return c()("".concat(t,"--").concat(e),n)}}}});t.a=o},26:function(e,t,a){"use strict";a.d(t,"a",function(){return E}),a.d(t,"b",function(){return v});var n=a(11),r=a(12),c=a(14),o=a(13),i=a(15),s=a(31),l=a.n(s),m=a(2),u=a.n(m),p=a(103),d=a(36),h=a(37),f=a(38),g=a(67),b=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).changeAuthState=function(e){return function(t){t.preventDefault(),a.props.onChangeAuthState(e)}},a.handleSubmit=function(e){e.preventDefault()},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"renderButtonText",value:function(){var e=this.props.buttonText;return!e&&this.isLogin?"Login":!e&&this.isSignup?"Signup":e}},{key:"render",value:function(){var e=this.props,t=e.showLogo,a=e.usernameLabel,n=e.usernameInputProps,r=e.passwordLabel,c=e.passwordInputProps,o=e.confirmPasswordLabel,i=e.confirmPasswordInputProps,s=e.children,m=e.onLogoClick;return u.a.createElement(p.a,{onSubmit:this.handleSubmit},t&&u.a.createElement("div",{className:"text-center pb-4"},u.a.createElement("img",{src:l.a,className:"rounded",style:{width:60,height:60,cursor:"pointer"},alt:"logo",onClick:m})),u.a.createElement(d.a,null,u.a.createElement(h.a,{for:a},a),u.a.createElement(f.a,n)),u.a.createElement(d.a,null,u.a.createElement(h.a,{for:r},r),u.a.createElement(f.a,c)),this.isSignup&&u.a.createElement(d.a,null,u.a.createElement(h.a,{for:o},o),u.a.createElement(f.a,i)),u.a.createElement(d.a,{check:!0},u.a.createElement(h.a,{check:!0},u.a.createElement(f.a,{type:"checkbox"})," ",this.isSignup?"Agree the terms and policy":"Remember me")),u.a.createElement("hr",null),u.a.createElement(g.a,{size:"lg",className:"bg-gradient-theme-left border-0",block:!0,onClick:this.handleSubmit},this.renderButtonText()),u.a.createElement("div",{className:"text-center pt-1"},u.a.createElement("h6",null,"or"),u.a.createElement("h6",null,this.isSignup?u.a.createElement("a",{href:"#login",onClick:this.changeAuthState(E)},"Login"):u.a.createElement("a",{href:"#signup",onClick:this.changeAuthState(v)},"Signup"))),s)}},{key:"isLogin",get:function(){return this.props.authState===E}},{key:"isSignup",get:function(){return this.props.authState===v}}]),t}(u.a.Component),E="LOGIN",v="SIGNUP";b.defaultProps={authState:"LOGIN",showLogo:!0,usernameLabel:"Email",usernameInputProps:{type:"email",placeholder:"your@email.com"},passwordLabel:"Password",passwordInputProps:{type:"password",placeholder:"your password"},confirmPasswordLabel:"Confirm Password",confirmPasswordInputProps:{type:"password",placeholder:"confirm your password"},onLogoClick:function(){}},t.c=b},30:function(e,t,a){e.exports=a.p+"static/media/100_4.978e51b5.jpg"},31:function(e,t,a){e.exports=a.p+"static/media/logo_200.b175e1c4.png"},44:function(e,t,a){e.exports=a.p+"static/media/sidebar-4.80d4a4e5.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/100_1.1f7beca5.jpg"},47:function(e,t,a){"use strict";var n=a(9),r=a(2),c=a.n(r),o=a(19),i=a(4),s=a.n(i),l=a(110),m=a(111),u=a(112),p=a(113),d=a(114),h=a(21),f=function(e){var t=e.avatar,a=e.avatarSize,r=e.title,o=e.subtitle,i=e.text,f=e.children,g=e.className,b=Object(n.a)(e,["avatar","avatarSize","title","subtitle","text","children","className"]),E=s()("bg-gradient-theme",g);return c.a.createElement(l.a,Object.assign({inverse:!0,className:E},b),c.a.createElement(m.a,{className:"d-flex justify-content-center align-items-center flex-column"},c.a.createElement(h.a,{src:t,size:a,className:"mb-2"}),c.a.createElement(u.a,null,r),c.a.createElement(p.a,null,o),c.a.createElement(d.a,null,c.a.createElement("small",null,i))),f)};f.defaultProps={avatarSize:80};var g=f,b=a(115),E=a(67),v=function(e){var t=e.color,a=e.header,r=e.avatar,o=e.avatarSize,i=e.name,u=e.date,p=e.text,f=e.className,g=e.buttonProps,v=Object(n.a)(e,["color","header","avatar","avatarSize","name","date","text","className","buttonProps"]),y="bg-".concat(t),x=s()(y,f);return c.a.createElement(l.a,Object.assign({inverse:!0,className:x},v),a&&"string"===typeof a?c.a.createElement(b.a,{className:y},a):a,c.a.createElement(m.a,{className:"d-flex flex-wrap flex-column align-items-center justify-content-center"},c.a.createElement(h.a,{size:o,src:r}),c.a.createElement(d.a,{className:"text-center"},c.a.createElement("strong",{className:"d-block"},i),c.a.createElement("small",{className:"text-muted"},u)),c.a.createElement(d.a,{className:"text-center"},p),c.a.createElement(E.a,Object.assign({color:"primary"},g))))};v.defaultProps={color:"gradient-secondary",avatarSize:60};var y=v,x=a(118),N=a(119),k=a(116),O=a(117),S=a(36),j=a(37),w=a(38),C=(o.a.arrayOf(o.a.shape({id:o.a.ID,title:o.a.string,done:o.a.bool})),function(e){var t=e.todos,a=Object(n.a)(e,["todos"]);return c.a.createElement(k.a,Object.assign({flush:!0},a),t.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,a=e.title,n=e.done;return c.a.createElement(O.a,{key:t,className:"border-0"},c.a.createElement(S.a,{check:!0},c.a.createElement(j.a,{check:!0},c.a.createElement(w.a,{type:"checkbox",checked:n,readOnly:!0}),n?c.a.createElement("strike",null,a):c.a.createElement("span",null,a))))}),c.a.createElement(E.a,{block:!0},"Add"))});C.defaultProps={todos:[]};var P=C,z=a(60),I=function(e){var t=e.image,a=e.title,r=e.subtitle,o=e.todos,i=Object(n.a)(e,["image","title","subtitle","todos"]);return c.a.createElement(l.a,i,c.a.createElement("div",{className:"position-relative"},c.a.createElement(x.a,{src:t}),c.a.createElement(N.a,{className:"bg-dark",style:{opacity:.2}},c.a.createElement(u.a,{className:"text-white"},a),c.a.createElement(d.a,{className:"text-white"},r))),c.a.createElement(P,{todos:o}))};I.defaultProps={image:a.n(z).a,title:"Tasks",subtitle:"Due soon..."};var D=I;a.d(t,"c",function(){return g}),a.d(t,"a",function(){return y}),a.d(t,"b",function(){return D})},49:function(e,t,a){e.exports=a.p+"static/media/100_2.82e7c41e.jpg"},50:function(e,t,a){e.exports=a.p+"static/media/100_3.6e25d86d.jpg"},51:function(e,t,a){e.exports=a.p+"static/media/100_5.fd533725.jpg"},52:function(e,t,a){"use strict";var n=a(25),r=a(9),c=a(2),o=a.n(c),i=a(4),s=a.n(i),l=a(104),m={"top-right":{top:-3,right:-3},"top-left":{top:-3,left:-3},"bottom-left":{bottom:-3,left:-3},"bottom-right":{bottom:-3,right:-3}},u={xs:{width:10,height:10},sm:{width:15,height:15},md:{width:20,height:20},lg:{width:25,height:25},xl:{width:30,height:30}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.position,a=void 0===t?"bottom-right":t,c=e.size,i=void 0===c?"sm":c,p=e.style,d=void 0===p?{}:p,h=e.className,f=Object(r.a)(e,["position","size","style","className"]);return function(e){return function(t){var c=t.tag,p=void 0===c?"div":c,g=Object(r.a)(t,["tag"]);return o.a.createElement(p,{className:"d-inline-block position-relative"},o.a.createElement(e,g),o.a.createElement(l.a,Object.assign({className:s()("position-absolute",h),style:Object(n.a)({},m[a],u[i],{borderRadius:"50%",border:"2px solid #fff"},d)},f)))}}}},60:function(e,t,a){e.exports=a.p+"static/media/background_1920-2.c54eef50.jpg"},70:function(e,t,a){e.exports=a(102)}},[[70,2,3]]]);
//# sourceMappingURL=main.b5052b03.chunk.js.map