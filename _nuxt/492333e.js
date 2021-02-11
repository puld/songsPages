(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(n,e,t){"use strict";t(23);var r={data:function(){return{title:null}},watch:{$route:function(n){this.title=n.name}}},o=t(38),component=Object(o.a)(r,(function(){var n=this.$createElement,e=this._self._c||n;return e("v-app",[e("v-main",[e("nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports},125:function(n,e,t){n.exports=t(126)},168:function(n,e,t){"use strict";t.r(e);t(16);var r=t(2),o=t(31),c=t(40);e.default=function(){return new o.a.Store({state:{songs:[],song:{},hasSong:!1},getters:{songs:function(n){return n.songs},song:function(n){return n.song},hasSong:function(n){return n.hasSong}},mutations:{setSongs:function(n,e){n.songs=e},setSong:function(n,e){n.song=e},setHasSong:function(n,e){n.hasSong=e}},actions:{fetchSongs:function(n){return Object(r.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.commit,console.log("fetchSongs"),!$nuxt.isOnline){e.next=15;break}return e.next=5,c.a.countSongs();case 5:if(e.sent){e.next=15;break}return e.prev=7,e.next=10,c.a.updateDB();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(7),console.warn(e.t0);case 15:return e.t1=t,e.next=18,c.a.getSongs();case 18:e.t2=e.sent,(0,e.t1)("setSongs",e.t2);case 20:case"end":return e.stop()}}),e,null,[[7,12]])})))()},fetchSong:function(n,e){return Object(r.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.commit,t.t0=r,t.next=4,c.a.getSong(e);case 4:t.t1=t.sent,(0,t.t0)("setSong",t.t1);case 6:case"end":return t.stop()}}),t)})))()},fetchHasSong:function(n,e){return Object(r.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.commit,t.t0=r,t.next=4,c.a.hasSong(e);case 4:t.t1=t.sent,(0,t.t0)("setHasSong",t.t1);case 6:case"end":return t.stop()}}),t)})))()}}})}},40:function(n,e,t){"use strict";t(22),t(12),t(16);var r,o=t(2),c=t(169),f=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;e.a={getDb:function(){return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n,e){if(r)return n(r);var t=f.open("songsdb",1);t.onerror=function(n){console.log("Error opening db",n),e("Error")},t.onsuccess=function(e){r=e.target.result,n(r)},t.onupgradeneeded=function(n){n.target.result.createObjectStore("songs",{keyPath:"n"})}})));case 1:case"end":return n.stop()}}),n)})))()},countSongs:function(){var n=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getDb();case 2:return t=e.sent,e.abrupt("return",new Promise((function(n,e){var r=t.transaction(["songs"],"readonly").objectStore("songs").count();r.onerror=function(n){e()},r.onsuccess=function(e){console.log("count songs",r.result),n(r.result)}})));case 4:case"end":return e.stop()}}),e)})))()},getSongs:function(){var n=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getDb();case 2:return t=e.sent,e.abrupt("return",new Promise((function(n){var e=t.transaction(["songs"],"readonly");e.oncomplete=function(){n(o)};var r=e.objectStore("songs"),o=[];r.openCursor().onsuccess=function(n){var cursor=n.target.result;cursor&&(o.push(cursor.value),cursor.continue())}})));case 4:case"end":return e.stop()}}),e)})))()},getSong:function(n){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getDb();case 2:return r=t.sent,t.abrupt("return",new Promise((function(e,t){var o=r.transaction(["songs"],"readonly").objectStore("songs").get(parseInt(n));o.onerror=function(n){t()},o.onsuccess=function(n){e(o.result)}})));case 4:case"end":return t.stop()}}),t)})))()},hasSong:function(n){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getDb();case 2:return r=t.sent,t.abrupt("return",new Promise((function(e,t){var o=r.transaction(["songs"],"readonly").objectStore("songs").count(parseInt(n));o.onerror=function(n){t()},o.onsuccess=function(n){e(!!o.result)}})));case 4:case"end":return t.stop()}}),t)})))()},addSong:function(data){var n=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getDb();case 2:return t=e.sent,e.abrupt("return",new Promise((function(n){var e=t.transaction(["songs"],"readwrite");e.oncomplete=function(){n()},e.objectStore("songs").put(data)})));case 4:case"end":return e.stop()}}),e)})))()},hasDBStorage:function(){var n=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getDb();case 2:return t=e.sent,e.abrupt("return",new Promise((function(n,e){var r=t.transaction(["songs"],"readonly"),o=!0;try{r.objectStore("songs")}catch(n){o=!1}console.log("has",o),n(o)})));case 4:case"end":return e.stop()}}),e)})))()},updateDB:function(){var n=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){var r=$nuxt.$options.router.history.base+"/songs.json";c.get(r+"?"+Date.now()).then(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=regeneratorRuntime.keys(r.data);case 1:if((t.t1=t.t0()).done){t.next=7;break}return i=t.t1.value,t.next=5,n.addSong(r.data[i]);case 5:t.next=1;break;case 7:console.log("update db"),e();case 9:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()).catch((function(n){t(n)}))})));case 1:case"end":return e.stop()}}),e)})))()}}}},[[125,5,1,6]]]);