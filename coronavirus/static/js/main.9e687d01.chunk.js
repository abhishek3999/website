(this.webpackJsonpcovid19app=this.webpackJsonpcovid19app||[]).push([[0],{11:function(e,t,a){e.exports={container:"Cards_container__7q33K",card:"Cards_card__1isxe",infected:"Cards_infected__3n_ul",recovered:"Cards_recovered__1S8eC",deaths:"Cards_deaths__1AoNr"}},201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(66),o=a.n(c),s=a(5),l=a.n(s),u=a(13),i=a(67),d=a(68),m=a(79),f=a(77),p=function(){return r.a.createElement("h1",null,"Corona Virus - World Stats")},v=a(215),h=a(217),E=a(216),b=a(218),x=a(11),_=a.n(x),y=a(28),g=a.n(y),C=a(29),O=a.n(C),S=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return console.log(a),a?r.a.createElement("div",{className:_.a.container},r.a.createElement(v.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(v.a,{item:!0,component:h.a,xs:12,md:3,className:O()(_.a.card,_.a.infected)},r.a.createElement(E.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(v.a,{item:!0,component:h.a,xs:12,md:3,className:O()(_.a.card,_.a.recovered)},r.a.createElement(E.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of recovered cases of COVID-19"))),r.a.createElement(v.a,{item:!0,component:h.a,xs:12,md:3,className:O()(_.a.card,_.a.deaths)},r.a.createElement(E.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of deaths cases of COVID-19"))))):"Loading..."},w=a(78),D=a(40),j=a.n(D),k="https://covid19.mathdro.id/api",N=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,n,r,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get(k);case 3:return t=e.sent,a=t.data,n=a.confirmed,r=a.recovered,c=a.deaths,o=a.lastUpdate,e.abrupt("return",{confirmed:n,recovered:r,deaths:c,lastUpdate:o});case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(k,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),B=a(73),V=a(75),A=a.n(V),U=function(){var e=Object(n.useState)([]),t=Object(w.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]);var o=a.length?r.a.createElement(B.a,{data:{labels:a.map((function(e){return e.date})),datasets:[{data:a.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:a.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:A.a.container},o)},J=function(){return r.a.createElement("h1",null,"Country Picker - Coming Soon")},q=a(76),G=a.n(q),K=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{}},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return r.a.createElement("div",{className:G.a.container},r.a.createElement(p,null),r.a.createElement(S,{data:e}),r.a.createElement(J,null),r.a.createElement(U,null))}}]),a}(r.a.Component);o.a.render(r.a.createElement(K,null),document.getElementById("root"))},75:function(e,t,a){e.exports={container:"Chart_container__2IXE4"}},76:function(e,t,a){e.exports={container:"App_container__3GvSO"}},81:function(e,t,a){e.exports=a(201)}},[[81,1,2]]]);
//# sourceMappingURL=main.9e687d01.chunk.js.map