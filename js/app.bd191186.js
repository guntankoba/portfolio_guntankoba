(function(t){function e(e){for(var n,c,i=e[0],s=e[1],l=e[2],u=0,v=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&v.push(a[c][0]),a[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);f&&f(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,c=1;c<r.length;c++){var s=r[c];0!==a[s]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"dccdf5c4"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=n);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(t);var l=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(u);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}a[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var f=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"06f8":function(t,e,r){},"08cb":function(t,e,r){},2255:function(t,e,r){t.exports=r.p+"img/tori.fc4f8c7b.png"},3412:function(t,e,r){},"39b4":function(t,e,r){"use strict";var n=r("8d97"),a=r.n(n);a.a},"471b":function(t,e,r){"use strict";var n=r("06f8"),a=r.n(n);a.a},7686:function(t,e,r){"use strict";var n=r("c562"),a=r.n(n);a.a},"85ec":function(t,e,r){},8974:function(t,e,r){},"8d97":function(t,e,r){},a7a4:function(t,e,r){"use strict";var n=r("08cb"),a=r.n(n);a.a},c562:function(t,e,r){},ca96:function(t,e,r){"use strict";var n=r("3412"),a=r.n(n);a.a},cbef:function(t,e,r){"use strict";var n=r("8974"),a=r.n(n);a.a},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Portfolio",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},o=[],c=r("d4ec"),i=r("99de"),s=r("7e84"),l=r("262e"),u=r("9ab4"),f=r("60a3"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"portfolio"},[r("header-bar"),r("div",{staticClass:"body"},[r("div",{staticClass:"top"},[r("div",{staticClass:"top-items"},[r("div",{attrs:{id:"top"}},[r("h1",[t._v(" guntankoba")]),t._v(" がんたんの色々が入ってるサイトです。 ちまちま改修しながら作ってるのでデザインなどもまだです 適当に見ていってください。"),r("br"),r("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.handleScroll,expression:"handleScroll"}],staticClass:"scroll-test"},[r("p",[t._v("スクロール位置で文字拡大するscroll-directive")])])])])]),r("profile"),r("work"),r("contact")],1)],1)},b=[],p=r("bee2"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{directives:[{name:"scroll",rawName:"v-scroll",value:t.handleScroll,expression:"handleScroll"},{name:"show",rawName:"v-show",value:t.overScroll,expression:"overScroll"}],staticClass:"header"},[r("ul",{attrs:{id:"header-bar"}},[r("li",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".top",expression:"'.top'"}],staticClass:"button"},[t._v("Top")]),r("li",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".profile",expression:"'.profile'"}],staticClass:"button"},[t._v("Profile")]),r("li",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".work",expression:"'.work'"}],staticClass:"button"},[t._v("Work")]),r("li",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".contact",expression:"'.contact'"}],staticClass:"button"},[t._v("Contact")]),r("li",{staticClass:"button"},[t._v(t._s(t.positionScroll))])])])},h=[],m={inserted:function(t,e){var r=function r(n){e.value(n,t)&&window.removeEventListener("scroll",r)};window.addEventListener("scroll",r)}},O=m,j=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(i["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.el="#app",t.positionScroll=window.scrollY,t.overScroll=!0,t}return Object(l["a"])(e,t),Object(p["a"])(e,[{key:"handleScroll",value:function(t,e){this.positionScroll=window.scrollY,window.scrollY>400?this.overScroll=!1:this.overScroll=!0}}]),e}(f["c"]);j=Object(u["a"])([Object(f["a"])({directives:{scroll:O}})],j);var w=j,_=w,y=(r("471b"),r("2877")),C=Object(y["a"])(_,d,h,!1,null,"619e1dfc",null),g=C.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile"},[n("img",{staticClass:"icon",attrs:{alt:"Icon",src:r("2255")}}),n("div",{staticClass:"item"},[n("h2",[t._v("Name : がんたん")]),t._v(" 面白いもの,新しいもの,独自性のあるものが好きでOY旅団というゲームサークルで 同人ゲーム製作に務める。"),n("br"),t._v(" リンク（OY旅団）"),n("br"),t._v(" 担当はイラスト（2Dillust, dot）、UI"),n("br"),t._v(" 普段は普通の会社員。 開発希望で入ったのになんやかんやで営業や企画も担当してる"),n("br"),t._v(" 好きな言語はPython"),n("br"),t._v(" その他使える、好きな技術：javascript, Vue.js, AWS, tensorflow, chainer photoshop, illustrator... ")])])}],S=function(t){function e(){return Object(c["a"])(this,e),Object(i["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(f["c"]);S=Object(u["a"])([f["a"]],S);var E=S,P=E,$=(r("7686"),Object(y["a"])(P,k,x,!1,null,"5121bb0e",null)),Y=$.exports,N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"work"},[t._m(0),t._m(1),r("div",{staticClass:"work--body"},[r("work-item"),r("work-item"),r("work-item")],1)])},T=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"work--head"},[t._v(" Portforio"),r("br")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",[t._v(" 修正中なのでとりあえずここ見てください"),r("br"),r("a",{attrs:{href:"https://www.oy-brigade.work/"}},[t._v("OY旅団")])])}],A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"work--item"},[r("div",{staticClass:"work--title"},[t._v(" "+t._s(t.title)+" ")]),r("div",{staticClass:"work--body"},[t._v(" "+t._s(t.body)+" ")])])},W=[],L=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(i["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.title="Noisers",t.body="2018年にOY旅団により開発されたゲーム",t}return Object(l["a"])(e,t),e}(f["c"]);L=Object(u["a"])([f["a"]],L);var M=L,q=M,I=(r("cbef"),Object(y["a"])(q,A,W,!1,null,"7b3fb856",null)),H=I.exports,J=function(t){function e(){return Object(c["a"])(this,e),Object(i["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(f["c"]);J=Object(u["a"])([Object(f["a"])({components:{WorkItem:H}})],J);var V=J,z=V,B=(r("a7a4"),Object(y["a"])(z,N,T,!1,null,"2977beee",null)),D=B.exports,U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contact"},[r("div",{staticClass:"contact--title"},[t._v(" Contact ")]),r("div",{staticClass:"contact--body"},[r("div",{staticClass:"contact--item"},[r("a",{attrs:{href:"https://twitter.com/guntankoba"}},[r("font-awesome-icon",{attrs:{icon:["fab","twitter-square"]}})],1)]),r("div",{staticClass:"contact--item"},[r("a",{attrs:{href:"https://github.com/guntankoba"}},[r("font-awesome-icon",{attrs:{icon:["fab","github-square"]}})],1)])])])},F=[],G=function(t){function e(){return Object(c["a"])(this,e),Object(i["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(f["c"]);G=Object(u["a"])([f["a"]],G);var K=G,Q=K,R=(r("ca96"),Object(y["a"])(Q,U,F,!1,null,"753d6a06",null)),X=R.exports,Z=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(i["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.el="#app",t}return Object(l["a"])(e,t),Object(p["a"])(e,[{key:"handleScroll",value:function(t,e){return window.scrollY>300&&e.setAttribute("style","font-size: 50px"),window.scrollY>1e3}}]),e}(f["c"]);Object(u["a"])([Object(f["b"])()],Z.prototype,"msg",void 0),Z=Object(u["a"])([Object(f["a"])({components:{HeaderBar:g,Profile:Y,Work:D,Contact:X},directives:{scroll:O}})],Z);var tt=Z,et=tt,rt=(r("39b4"),Object(y["a"])(et,v,b,!1,null,"0e22c86e",null)),nt=rt.exports,at=function(t){function e(){return Object(c["a"])(this,e),Object(i["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(f["c"]);at=Object(u["a"])([Object(f["a"])({components:{Portfolio:nt}})],at);var ot=at,ct=ot,it=(r("034f"),Object(y["a"])(ct,a,o,!1,null,null,null)),st=it.exports,lt=(r("d3b7"),r("8c4f")),ut=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ft=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("h1",[t._v("This is an home page")])])}],vt={},bt=Object(y["a"])(vt,ut,ft,!1,null,null,null),pt=bt.exports;n["a"].use(lt["a"]);var dt=[{path:"/",name:"Home",component:pt},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],ht=new lt["a"]({mode:"history",base:"",routes:dt}),mt=ht,Ot=r("ecee"),jt=r("ad3d"),wt=r("f2d1");Ot["c"].add(wt["a"],wt["c"],wt["b"]),n["a"].config.productionTip=!1,n["a"].component("font-awesome-icon",jt["a"]);var _t=r("f13c");n["a"].use(_t),new n["a"]({router:mt,render:function(t){return t(st)}}).$mount("#app")}});
//# sourceMappingURL=app.bd191186.js.map