(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{259:function(t,e,n){var content=n(260);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("e8b41e5e",content,!1,{sourceMap:!1})},260:function(t,e,n){(e=n(59)(!1)).push([t.i,".theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}",""]),t.exports=e},278:function(t,e,n){var content=n(329);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("13f23914",content,!1,{sourceMap:!1})},279:function(t,e,n){"use strict";var strong=n(330),r=n(280);t.exports=n(331)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=strong.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return strong.def(r(this,"Map"),0===t?0:t,e)}},strong,!0)},280:function(t,e,n){var r=n(18);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},328:function(t,e,n){"use strict";n(278)},329:function(t,e,n){(e=n(59)(!1)).push([t.i,".songPage{font-size:20px}.songPage .v-list-item{padding:0;align-items:flex-start}.songPage .content{line-height:1.5!important}.songPage .content-withChords{line-height:2.5!important}.songPage .content span.chord{position:absolute;line-height:0;color:red}.songPage .content span.theme--dark{color:#f08080}.songPage .content span.chord-inline{color:red}",""]),t.exports=e},330:function(t,e,n){"use strict";var r=n(26).f,o=n(75),c=n(157),l=n(47),f=n(155),d=n(156),h=n(108),v=n(158),y=n(109),O=n(19),j=n(105).fastKey,m=n(280),w=O?"_s":"size",_=function(t,e){var n,r=j(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,h){var v=t((function(t,r){f(t,v,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[w]=0,null!=r&&d(r,n,t[h],t)}));return c(v.prototype,{clear:function(){for(var t=m(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[w]=0},delete:function(t){var n=m(this,e),r=_(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[w]--}return!!r},forEach:function(t){m(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!_(m(this,e),t)}}),O&&r(v.prototype,"size",{get:function(){return m(this,e)[w]}}),v},def:function(t,e,n){var r,o,c=_(t,e);return c?c.v=n:(t._l=c={i:o=j(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[w]++,"F"!==o&&(t._i[o]=c)),t},getEntry:_,setStrong:function(t,e,n){h(t,e,(function(t,n){this._t=m(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?v(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,v(1))}),n?"entries":"values",!n,!0),y(e)}}},331:function(t,e,n){"use strict";var r=n(10),o=n(4),c=n(28),l=n(157),meta=n(105),f=n(156),d=n(155),h=n(18),v=n(20),y=n(107),O=n(74),j=n(110);t.exports=function(t,e,n,m,w,_){var S=r[t],P=S,k=w?"set":"add",x=P&&P.prototype,C={},D=function(t){var e=x[t];c(x,t,"delete"==t||"has"==t?function(a){return!(_&&!h(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return _&&!h(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof P&&(_||x.forEach&&!v((function(){(new P).entries().next()})))){var E=new P,V=E[k](_?{}:-0,1)!=E,M=v((function(){E.has(1)})),T=y((function(t){new P(t)})),$=!_&&v((function(){for(var t=new P,e=5;e--;)t[k](e,e);return!t.has(-0)}));T||((P=e((function(e,n){d(e,P,t);var r=j(new S,e,P);return null!=n&&f(n,w,r[k],r),r}))).prototype=x,x.constructor=P),(M||$)&&(D("delete"),D("has"),w&&D("get")),($||V)&&D(k),_&&x.clear&&delete x.clear}else P=m.getConstructor(e,t,w,k),l(P.prototype,n),meta.NEED=!0;return O(P,t),C[t]=P,o(o.G+o.W+o.F*(P!=S),C),_||m.setStrong(P,t,w),P}},332:function(t,e,n){"use strict";n(33),n(23),n(13),n(3),n(29);var r=n(11),o=(n(259),n(103)),c=n(102);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(o.a).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:f({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},347:function(t,e,n){"use strict";n.r(e);n(44),n(30);var r=n(2),o=n(57),c={mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.useDarkTheme.get();case 2:n=e.sent,console.log("mounted useDarkTheme",n),t.$vuetify.theme.dark="true"===n;case 5:case"end":return e.stop()}}),e)})))()},fetch:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.store,r=t.params,n.dispatch("fetchUseDarkTheme"),n.dispatch("fetchFontScale"),n.dispatch("fetchSong",r.id);case 4:case"end":return e.stop()}}),e)})))()},computed:{fontScale:function(){return this.$store.getters.fontScale},song:function(){return this.$store.getters.song}},methods:{hasChords:function(t){return/\{/.test(t)},nl2br:function(t){var e="chord"+(o.a.useDarkTheme.get()?" theme--dark":"");return t=(t=(t=(t=t.replace(/\{_/g,"<span class='chord-inline'>")).replace(/\{/g,"<span class='"+e+"'>")).replace(/\}/g,"</span>")).replace(/([^>])\n/g,"$1<br/>")}}},l=(n(328),n(54)),f=n(106),d=n.n(f),h=n(349),v=n(350),y=(n(33),n(23),n(53),n(61),n(62),n(11)),O=(n(43),n(279),n(13),n(3),n(29),n(153),n(250),n(0)),j=n(235),m=n(9);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=["sm","md","lg","xl"],P=S.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),k=S.reduce((function(t,e){return t["offset"+Object(m.q)(e)]={type:[String,Number],default:null},t}),{}),x=S.reduce((function(t,e){return t["order"+Object(m.q)(e)]={type:[String,Number],default:null},t}),{}),C={col:Object.keys(P),offset:Object.keys(k),order:Object.keys(x)};function D(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var E=new Map,V=O.a.extend({name:"v-col",functional:!0,props:_(_(_(_({cols:{type:[Boolean,String,Number],default:!1}},P),{},{offset:{type:[String,Number],default:null}},k),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,o=(e.parent,"");for(var c in n)o+=String(n[c]);var l=E.get(o);return l||function(){var t,e;for(e in l=[],C)C[e].forEach((function(t){var r=n[t],o=D(e,t,r);o&&l.push(o)}));var r=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!r||!n.cols},Object(y.a)(t,"col-".concat(n.cols),n.cols),Object(y.a)(t,"offset-".concat(n.offset),n.offset),Object(y.a)(t,"order-".concat(n.order),n.order),Object(y.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),E.set(o,l)}(),t(n.tag,Object(j.a)(data,{class:l}),r)}}),M=n(352),T=n(271),$=n(272),B=n(252),L=n(234);function N(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function z(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?N(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):N(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var I=["sm","md","lg","xl"],R=["start","end","center"];function F(t,e){return I.reduce((function(n,r){return n[t+Object(m.q)(r)]=e(),n}),{})}var G=function(t){return[].concat(R,["baseline","stretch"]).includes(t)},J=F("align",(function(){return{type:String,default:null,validator:G}})),W=function(t){return[].concat(R,["space-between","space-around"]).includes(t)},A=F("justify",(function(){return{type:String,default:null,validator:W}})),H=function(t){return[].concat(R,["space-between","space-around","stretch"]).includes(t)},K=F("alignContent",(function(){return{type:String,default:null,validator:H}})),U={align:Object.keys(J),justify:Object.keys(A),alignContent:Object.keys(K)},Q={align:"align",justify:"justify",alignContent:"align-content"};function X(t,e,n){var r=Q[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var Y=new Map,Z=O.a.extend({name:"v-row",functional:!0,props:z(z(z({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:G}},J),{},{justify:{type:String,default:null,validator:W}},A),{},{alignContent:{type:String,default:null,validator:H}},K),render:function(t,e){var n=e.props,data=e.data,r=e.children,o="";for(var c in n)o+=String(n[c]);var l=Y.get(o);return l||function(){var t,e;for(e in l=[],U)U[e].forEach((function(t){var r=n[t],o=X(e,t,r);o&&l.push(o)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(y.a)(t,"align-".concat(n.align),n.align),Object(y.a)(t,"justify-".concat(n.justify),n.justify),Object(y.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),Y.set(o,l)}(),t(n.tag,Object(j.a)(data,{staticClass:"row",class:l}),r)}}),tt=n(332),et=n(277),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"songPage"},[n("v-app-bar",{attrs:{app:""}},[n("v-btn",{attrs:{icon:"",to:"/"}},[n("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.song.n+". "+t.song.title))])],1),t._v(" "),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"6"}},[n("v-list",[t._l(t.song.body,(function(e,i){return[n("v-list-item",{key:i,style:{fontSize:t.fontScale+"%"}},[n("v-subheader",[t._v(t._s("verse"==e.type?e.id+1+".":"Припев:"))]),t._v(" "),"verse"==e.type||null==e.repeatId?n("v-list-item-content",[n("span",{staticClass:"content",class:{"content-withChords":t.hasChords(e.content)},domProps:{innerHTML:t._s(t.nl2br(e.content))}})]):t._e()],1)]}))],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAppBar:h.a,VBtn:v.a,VCol:V,VContainer:M.a,VIcon:T.a,VList:$.a,VListItem:B.a,VListItemContent:L.a,VRow:Z,VSubheader:tt.a,VToolbarTitle:et.a})}}]);