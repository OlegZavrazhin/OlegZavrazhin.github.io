(function(e){function t(t){for(var n,a,o=t[0],u=t[1],i=t[2],l=0,f=[];l<o.length;l++)a=o[l],c[a]&&f.push(c[a][0]),c[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(f.length)f.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==c[o]&&(n=!1)}n&&(s.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},c={app:0},s=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-121afeb4":"e72e787a"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-121afeb4":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise(function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-121afeb4":"e56a7c2d"}[e]+".css",c=u.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var i=s[o],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===c))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){i=f[o],l=i.getAttribute("data-href");if(l===n||l===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||c,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],p.parentNode.removeChild(p),r(s)},p.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(p)}).then(function(){a[e]=0}));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise(function(t,r){n=c[e]=[t,r]});t.push(n[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(e),i=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=c[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");s.type=n,s.request=a,r[1](s)}c[e]=void 0}};var f=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var p=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"203f":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper__table-wrap"},[r("table",{staticClass:"wrapper__table",class:{wrapper__table_no_clicks:e.currentGame.done||!e.currentGame.turn},on:{click:function(t){return e.setPlayerSign(e.currentGame.turn,t)}}},e._l(e.currentGame.rows,function(t,n){return r("tr",{key:n,staticClass:"wrapper__row"},e._l(t.cells,function(t,n){return r("td",{key:n,staticClass:"wrapper__cell"},["cross"===t.value?r("Cross"):e._e(),"circle"===t.value?r("CircleComponent"):e._e()],1)}),0)}),0),e.currentGame.turn?e._e():r("Popup",{attrs:{title:"Start A New Game?"}},[r("div",{staticClass:"row center-xs"},[r("div",{staticClass:"col-xs-12 col-md-6"},[r("button",{staticClass:"btn btn-primary wrapper__btn wrapper__btn_first",attrs:{type:"button"},on:{click:function(t){return e.chooseTurn("circle")}}},[e._v("\n                    Start with circles\n                ")])]),r("div",{staticClass:"col-xs-12 col-md-6"},[r("button",{staticClass:"btn btn-primary wrapper__btn",attrs:{type:"button"},on:{click:function(t){return e.chooseTurn("cross")}}},[e._v("\n                    Start with crosses\n                ")])])])])],1)},a=[],c=(r("8e6e"),r("ac6a"),r("456d"),r("96cf"),r("3b8d")),s=r("bd86"),o=(r("c5f6"),r("2f62")),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{staticClass:"cross",attrs:{height:"100",width:"100",viewBox:"0 0 100 100"}},[r("line",{staticClass:"cross__line cross__line_first",staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"5"},attrs:{x1:"0",y1:"0",x2:"100",y2:"100",preserveAspectRatio:"xMinYMin meet"}}),r("line",{staticClass:"cross__line cross__line_second",staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"5"},attrs:{x1:"100",y1:"0",x2:"0",y2:"100",preserveAspectRatio:"xMinYMin meet"}})])},i=[],l={name:"Cross"},f=l,p=(r("ddc2"),r("2877")),m=Object(p["a"])(f,u,i,!1,null,"914417a0",null),d=m.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{staticClass:"circle",attrs:{height:"105",width:"105",viewBox:"0 0 105 105"}},[r("circle",{staticClass:"circle-component",attrs:{cx:"52.5",cy:"52.5",r:"50",stroke:"rgb(0,0,0)","stroke-width":"5",fill:"none",preserveAspectRatio:"xMinYMin meet"}})])},v=[],b={name:"CircleComponent"},g=b,w=(r("4191"),Object(p["a"])(g,h,v,!1,null,"752f38a2",null)),_=w.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"popup"},[""!==e.title?r("h3",{staticClass:"popup__title"},[e._v(e._s(e.title))]):e._e(),e._t("default")],2)},O=[],G={name:"Popup",props:{title:{type:String,default:"",required:!1}}},x=G,j=(r("65f8"),Object(p["a"])(x,y,O,!1,null,"17ae7ad8",null)),D=j.exports;function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(r,!0).forEach(function(t){Object(s["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var k={name:"WrapperTable",components:{Cross:d,CircleComponent:_,Popup:D},props:{routeId:{type:Number,default:0,required:!1,validator:function(e){return"number"===typeof e}}},computed:S({},Object(o["c"])(["currentGameState"]),{currentGame:function(){return this.routeId?this.currentGameState(this.routeId):this.currentGameState()}}),methods:S({},Object(o["b"])(["changeTurnAndValue","checkWinner","chooseTurn","prepareGameData"]),{setPlayerSign:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=r.target,a=n.closest("tr").rowIndex,c=n.cellIndex,e.next=5,this.changeTurnAndValue({turn:t,rowIndex:a,cellIndex:c});case 5:this.checkWinner({turn:t,rowIndex:a,cellIndex:c});case 6:case"end":return e.stop()}},e,this)}));function t(t,r){return e.apply(this,arguments)}return t}()}),created:function(){0===this.currentGame.rows.length&&this.prepareGameData()}},P=k,T=(r("afb7"),Object(p["a"])(P,n,a,!1,null,"77dce220",null));t["a"]=T.exports},"3b14":function(e,t,r){},"3fda":function(e,t,r){},4191:function(e,t,r){"use strict";var n=r("7f4a"),a=r.n(n);a.a},"465a":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},c=[],s=(r("034f"),r("2877")),o={},u=Object(s["a"])(o,a,c,!1,null,null,null),i=u.exports,l=(r("ab8b"),r("fd03"),r("96cf"),r("3b8d")),f=(r("6c7b"),r("7514"),r("2f62")),p=r("0178"),m=r.n(p);n["a"].use(f["a"]);var d={currentGame:{id:null,turn:null,done:!1,date:null,arrayWithStates:null,winner:null,rows:[]},gameData:[]},h={currentGameState:function(e){return function(t){return t?e.gameData.find(function(e){return e.id===t}):e.currentGame}},lastItemGameData:function(e){return e.gameData[e.gameData.length-1]},gameData:function(e){return e.gameData}},v={changeTurnAndValue:function(e,t){var r=e.commit,n=t.turn,a=t.rowIndex,c=t.cellIndex;return new Promise(function(e){var t=n,s="cross"===n?"circle":"cross";r("setValue",{rowIndex:a,cellIndex:c,value:t}),r("changeTurnToAnother",s),e(s)})},checkWinner:function(e,t){var r=e.commit,n=e.state,a=t.turn,c=t.rowIndex,s=t.cellIndex,o=3,u=2*o+2,i=n.currentGame.arrayWithStates?n.currentGame.arrayWithStates:new Array(u).fill(0),l="circle"===a?-1:1;if(i[c]+=l,i[s+o]+=l,c===s)switch(i[6]+=l,c){case 1:i[7]+=l}0===c&&2===s&&(i[7]+=l),2===c&&0===s&&(i[7]+=l),r("setArrayWithStates",i);var f=i.indexOf(-3),p=i.indexOf(3);if(f>-1||p>-1){r("setDate"),r("setDoneTrue");var m=f>-1?"circle":"cross";r("setWinner",m)}},chooseTurn:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.dispatch,e.next=3,a("prepareGameData");case 3:n("setTurn",r),n("setDoneFalse");case 5:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}(),prepareGameData:function(e){var t=e.commit;t("setEmptyGame")},saveGame:function(e){var t=e.commit,r=e.getters;return new Promise(function(e){t("addGameData");var n=r["lastItemGameData"].id;e(n)})},saveAndGoNext:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){var r,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,n=t.dispatch,e.next=3,n("saveGame");case 3:a=e.sent,a&&r("setEmptyGame");case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},b={changeTurnToAnother:function(e,t){n["a"].set(e.currentGame,"turn",t)},setValue:function(e,t){var r=t.rowIndex,n=t.cellIndex,a=t.value;e.currentGame.rows[r].cells[n].value||(e.currentGame=m.a.set(e.currentGame,"rows."+r+".cells."+n+".value",a))},setArrayWithStates:function(e,t){n["a"].set(e.currentGame,"arrayWithStates",t)},setDoneTrue:function(e){n["a"].set(e.currentGame,"done",!0)},setDoneFalse:function(e){n["a"].set(e.currentGame,"done",!1)},setDate:function(e){n["a"].set(e.currentGame,"date",new Date)},setTurn:function(e,t){n["a"].set(e.currentGame,"turn",t)},setEmptyGame:function(e){n["a"].set(e.currentGame,"id",null),n["a"].set(e.currentGame,"turn",null),n["a"].set(e.currentGame,"done",!1),n["a"].set(e.currentGame,"date",null),n["a"].set(e.currentGame,"arrayWithStates",null),n["a"].set(e.currentGame,"winner",null);for(var t=0;t<3;t++)e.currentGame.rows.splice(t,1,{cells:[{value:null},{value:null},{value:null}]})},addGameData:function(e){var t=Object.assign({},e.currentGame,{id:e.gameData.length+1}),r=JSON.parse(JSON.stringify(t));e.gameData.push(r)},setWinner:function(e,t){n["a"].set(e.currentGame,"winner",t)}},g=new f["a"].Store({state:d,getters:h,actions:v,mutations:b}),w=r("8c4f"),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"row center-xs"},[r("div",{staticClass:"col-xs-12 col-md-8 col-lg-6"},[r("div",{staticClass:"box"},[r("Wrapper")],1)])])])},y=[],O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[r("header",{staticClass:"wrapper__header"},[r("transition",{attrs:{name:"slide-fade"}},[e.currentGame.done?r("button",{staticClass:"btn btn-primary wrapper__btn",attrs:{type:"button"},on:{click:e.saveAndGoNext}},[e._v("\n                Save And Play Again\n            ")]):e.currentGame.turn?r("p",[e._v("\n                Turn: "+e._s(e.currentGame.turn)+"\n            ")]):e._e()])],1),r("WrapperTable"),r("GameData")],1)},G=[],x=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.gameData&&e.gameData.length>0?r("ol",{staticClass:"game-data"},e._l(e.gameData,function(t){return r("li",{key:t.id},[r("p",[r("strong",[e._v("Winner: ")]),r("span",{staticClass:"game-data__winner"},[e._v(e._s(t.winner))])]),r("p",[r("strong",[e._v("Date: ")]),e._v(e._s(t.date))]),r("p",[r("strong",[e._v("See details: ")]),r("router-link",{attrs:{to:"/games/"+t.id}},[e._v("Link")])],1)])}),0):e._e()},D=[],C={name:"GameData",computed:Object(f["c"])(["gameData"])},S=C,k=(r("fac0"),Object(s["a"])(S,j,D,!1,null,"0a18eb9f",null)),P=k.exports,T=r("203f");function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(r,!0).forEach(function(t){Object(x["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var I={name:"Wrapper",components:{GameData:P,WrapperTable:T["a"]},data:function(){return{}},computed:E({},Object(f["c"])(["currentGameState"]),{currentGame:function(){return this.currentGameState()}}),methods:E({},Object(f["b"])(["saveAndGoNext"]))},W=I,N=(r("59ff"),Object(s["a"])(W,O,G,!1,null,"2acfbfef",null)),M=N.exports,R={name:"home",components:{Wrapper:M}},$=R,B=Object(s["a"])($,_,y,!1,null,null,null),L=B.exports;n["a"].use(w["a"]);var V=new w["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:L},{path:"/games/:id",name:"game-detail",component:function(){return r.e("chunk-121afeb4").then(r.bind(null,"381f"))}}]});n["a"].config.productionTip=!1,new n["a"]({store:g,router:V,render:function(e){return e(i)}}).$mount("#app")},"59ff":function(e,t,r){"use strict";var n=r("3b14"),a=r.n(n);a.a},"64a9":function(e,t,r){},"65f8":function(e,t,r){"use strict";var n=r("d214"),a=r.n(n);a.a},"7f4a":function(e,t,r){},afb7:function(e,t,r){"use strict";var n=r("f3d2"),a=r.n(n);a.a},d214:function(e,t,r){},ddc2:function(e,t,r){"use strict";var n=r("465a"),a=r.n(n);a.a},f3d2:function(e,t,r){},fac0:function(e,t,r){"use strict";var n=r("3fda"),a=r.n(n);a.a}});
//# sourceMappingURL=app.8ffe8a41.js.map