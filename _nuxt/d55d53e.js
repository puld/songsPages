(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{248:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(236),o=n(9),c=Object(o.e)("v-toolbar__title"),l=Object(o.e)("v-toolbar__items");r.a},262:function(t,e,n){var content=n(303);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("13f23914",content,!1,{sourceMap:!1})},263:function(t,e,n){"use strict";var strong=n(304),r=n(264);t.exports=n(305)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=strong.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return strong.def(r(this,"Map"),0===t?0:t,e)}},strong,!0)},264:function(t,e,n){var r=n(18);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},302:function(t,e,n){"use strict";n(262)},303:function(t,e,n){(e=n(58)(!1)).push([t.i,".songPage{font-size:20px}.songPage .v-list-item{padding:0;align-items:flex-start}.songPage .content{line-height:1.5!important}.songPage .content-withChords{line-height:2.5!important}.songPage .content span.chord{position:absolute;line-height:0;color:red}.songPage .content span.chord-inline{color:red}",""]),t.exports=e},304:function(t,e,n){"use strict";var r=n(26).f,o=n(74),c=n(156),l=n(46),f=n(154),d=n(155),v=n(107),h=n(157),y=n(108),O=n(19),j=n(104).fastKey,_=n(264),m=O?"_s":"size",w=function(t,e){var n,r=j(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){f(t,h,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[m]=0,null!=r&&d(r,n,t[v],t)}));return c(h.prototype,{clear:function(){for(var t=_(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[m]=0},delete:function(t){var n=_(this,e),r=w(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[m]--}return!!r},forEach:function(t){_(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!w(_(this,e),t)}}),O&&r(h.prototype,"size",{get:function(){return _(this,e)[m]}}),h},def:function(t,e,n){var r,o,c=w(t,e);return c?c.v=n:(t._l=c={i:o=j(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[m]++,"F"!==o&&(t._i[o]=c)),t},getEntry:w,setStrong:function(t,e,n){v(t,e,(function(t,n){this._t=_(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?h(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,h(1))}),n?"entries":"values",!n,!0),y(e)}}},305:function(t,e,n){"use strict";var r=n(10),o=n(4),c=n(28),l=n(156),meta=n(104),f=n(155),d=n(154),v=n(18),h=n(20),y=n(106),O=n(73),j=n(109);t.exports=function(t,e,n,_,m,w){var P=r[t],S=P,C=m?"set":"add",k=S&&S.prototype,x={},E=function(t){var e=k[t];c(k,t,"delete"==t||"has"==t?function(a){return!(w&&!v(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return w&&!v(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof S&&(w||k.forEach&&!h((function(){(new S).entries().next()})))){var D=new S,V=D[C](w?{}:-0,1)!=D,M=h((function(){D.has(1)})),B=y((function(t){new S(t)})),L=!w&&h((function(){for(var t=new S,e=5;e--;)t[C](e,e);return!t.has(-0)}));B||((S=e((function(e,n){d(e,S,t);var r=j(new P,e,S);return null!=n&&f(n,m,r[C],r),r}))).prototype=k,k.constructor=S),(M||L)&&(E("delete"),E("has"),m&&E("get")),(L||V)&&E(C),w&&k.clear&&delete k.clear}else S=_.getConstructor(e,t,m,C),l(S.prototype,n),meta.NEED=!0;return O(S,t),x[t]=S,o(o.G+o.W+o.F*(S!=P),x),w||_.setStrong(S,t,m),S}},306:function(t,e,n){var content=n(307);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("e8b41e5e",content,!1,{sourceMap:!1})},307:function(t,e,n){(e=n(58)(!1)).push([t.i,".theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}",""]),t.exports=e},328:function(t,e,n){"use strict";n.r(e);n(43),n(31);var r=n(2),o={fetch:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.store,r=t.params,n.dispatch("fetchSong",r.id);case 2:case"end":return e.stop()}}),e)})))()},computed:{song:function(){return this.$store.getters.song}},methods:{hasChords:function(t){return/\{/.test(t)},nl2br:function(t){return t=(t=(t=(t=t.replace(/\{_/g,"<span class='chord-inline'>")).replace(/\{/g,"<span class='chord'>")).replace(/\}/g,"</span>")).replace(/([^>])\n/g,"$1<br/>")}}},c=(n(302),n(53)),l=n(105),f=n.n(l),d=n(331),v=n(332),h=(n(33),n(23),n(52),n(60),n(61),n(11)),y=(n(42),n(263),n(13),n(3),n(29),n(152),n(246),n(0)),O=n(234),j=n(9);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=["sm","md","lg","xl"],P=w.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),S=w.reduce((function(t,e){return t["offset"+Object(j.q)(e)]={type:[String,Number],default:null},t}),{}),C=w.reduce((function(t,e){return t["order"+Object(j.q)(e)]={type:[String,Number],default:null},t}),{}),k={col:Object.keys(P),offset:Object.keys(S),order:Object.keys(C)};function x(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var E=new Map,D=y.a.extend({name:"v-col",functional:!0,props:m(m(m(m({cols:{type:[Boolean,String,Number],default:!1}},P),{},{offset:{type:[String,Number],default:null}},S),{},{order:{type:[String,Number],default:null}},C),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,o=(e.parent,"");for(var c in n)o+=String(n[c]);var l=E.get(o);return l||function(){var t,e;for(e in l=[],k)k[e].forEach((function(t){var r=n[t],o=x(e,t,r);o&&l.push(o)}));var r=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!r||!n.cols},Object(h.a)(t,"col-".concat(n.cols),n.cols),Object(h.a)(t,"offset-".concat(n.offset),n.offset),Object(h.a)(t,"order-".concat(n.order),n.order),Object(h.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),E.set(o,l)}(),t(n.tag,Object(O.a)(data,{class:l}),r)}}),V=n(333),M=n(258),B=n(259),L=n(247),N=n(232);function $(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var z=["sm","md","lg","xl"],T=["start","end","center"];function F(t,e){return z.reduce((function(n,r){return n[t+Object(j.q)(r)]=e(),n}),{})}var G=function(t){return[].concat(T,["baseline","stretch"]).includes(t)},R=F("align",(function(){return{type:String,default:null,validator:G}})),J=function(t){return[].concat(T,["space-between","space-around"]).includes(t)},W=F("justify",(function(){return{type:String,default:null,validator:J}})),A=function(t){return[].concat(T,["space-between","space-around","stretch"]).includes(t)},H=F("alignContent",(function(){return{type:String,default:null,validator:A}})),K={align:Object.keys(R),justify:Object.keys(W),alignContent:Object.keys(H)},Q={align:"align",justify:"justify",alignContent:"align-content"};function U(t,e,n){var r=Q[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var X=new Map,Y=y.a.extend({name:"v-row",functional:!0,props:I(I(I({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:G}},R),{},{justify:{type:String,default:null,validator:J}},W),{},{alignContent:{type:String,default:null,validator:A}},H),render:function(t,e){var n=e.props,data=e.data,r=e.children,o="";for(var c in n)o+=String(n[c]);var l=X.get(o);return l||function(){var t,e;for(e in l=[],K)K[e].forEach((function(t){var r=n[t],o=U(e,t,r);o&&l.push(o)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(h.a)(t,"align-".concat(n.align),n.align),Object(h.a)(t,"justify-".concat(n.justify),n.justify),Object(h.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),X.set(o,l)}(),t(n.tag,Object(O.a)(data,{staticClass:"row",class:l}),r)}}),Z=(n(306),n(102)),tt=n(101);function et(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function nt(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?et(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):et(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var ot=Object(tt.a)(Z.a).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:nt({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}}),it=n(248),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"songPage"},[n("v-app-bar",{attrs:{app:"",color:"green"}},[n("v-btn",{attrs:{icon:"",to:"/"}},[n("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.song.n+". "+t.song.title))])],1),t._v(" "),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"9",md:"7",lg:"4"}},[n("v-list",[t._l(t.song.body,(function(e,i){return[n("v-list-item",{key:i},[n("v-subheader",[t._v(t._s("verse"==e.type?e.id+1+".":"Припев:"))]),t._v(" "),"verse"==e.type||null==e.repeatId?n("v-list-item-content",[n("span",{staticClass:"content",class:{"content-withChords":t.hasChords(e.content)},domProps:{innerHTML:t._s(t.nl2br(e.content))}})]):t._e()],1)]}))],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VAppBar:d.a,VBtn:v.a,VCol:D,VContainer:V.a,VIcon:M.a,VList:B.a,VListItem:L.a,VListItemContent:N.a,VRow:Y,VSubheader:ot,VToolbarTitle:it.a})}}]);