(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{315:function(t,e,n){var content=n(318);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("1930a9a0",content,!0,{sourceMap:!1})},316:function(t,e,n){var content=n(322);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("4d362520",content,!0,{sourceMap:!1})},317:function(t,e,n){"use strict";var r=n(315);n.n(r).a},318:function(t,e,n){(e=n(49)(!1)).push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}",""]),t.exports=e},320:function(t,e,n){"use strict";n.r(e);n(317);var r=n(11),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),this._v(" "),e("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),this._v(" "),e("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,n){"use strict";var r=n(316);n.n(r).a},322:function(t,e,n){(e=n(49)(!1)).push([t.i,".posts .list{margin-left:15px}",""]),t.exports=e},325:function(t,e,n){"use strict";n.r(e);n(30);var r=n(2),o={layout:"blog",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$axios,t.query,e.abrupt("return",{name:"World",title:"帖子"});case 2:case"end":return e.stop()}}),e)})))()},fetch:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,r=t.params,e.next=3,n.dispatch("getList",{pageQuery:r.id});case 3:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"帖子"}]}},computed:{list:function(){return this.$store.state.list}},mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),3500)}))},methods:{}},c=(n(321),n(11)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"posts"},[n("Logo"),t._v(" "),n("h1",[t._v("我是posts"+t._s(t.name))]),t._v(" "),n("div",{staticClass:"list"},t._l(t.list,(function(e){return n("p",{key:e.id},[n("nuxt-link",{attrs:{to:"/post/postList/10"}},[t._v(t._s(e.real_name))])],1)})),0),t._v(" "),n("nuxt-child",{attrs:{title:t.title}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:n(320).default})}}]);