(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(6),c=n.n(r),i=n(7),s=n(8),a=n(12),u=n(13),l=(n(23),n(2)),d=n(3),h=n(5),b=n(4),f=n(1),j=function(e){var t=e.name,n=e.email,o=e.id;return Object(f.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(f.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:t}),Object(f.jsx)("p",{children:n})]})]})},p=function(e){var t=e.robots;return Object(f.jsx)("div",{children:t.map((function(e,n){return Object(f.jsx)(j,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},g=function(e){e.searchfield;var t=e.searchChange;return Object(f.jsx)("div",{className:"pa2",children:Object(f.jsx)("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},v=function(e){return Object(f.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},O=(n(25),"CHANGE_SEARCH_FIELD"),w="REQUEST_ROBOTS_PENDING",m="REQUEST_ROBOTS_SUCCESS",y="REQUEST_ROBOTS_FAIL",x=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==e.count}},{key:"render",value:function(){return console.log("CouterButton"),Object(f.jsxs)("button",{color:this.props.color,onClick:this.updateCount,children:["Count: ",this.state.count]})}}]),n}(o.Component),C=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return console.log("Header"),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(f.jsx)(x,{color:"red"})]})}}]),n}(o.Component),k=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,r=e.isPending,c=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r?Object(f.jsx)("h1",{children:"Loading"}):Object(f.jsxs)("div",{className:"tc",children:[Object(f.jsx)(C,{}),Object(f.jsx)(g,{searchChange:n}),Object(f.jsx)(v,{children:Object(f.jsx)(p,{robots:c})})]})}}]),n}(o.Component),R=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:O,payload:n}));var n},onRequestRobots:function(){return e((function(e){try{e({type:w}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:m,payload:t})}))}catch(t){e({type:y,payload:t})}}))}}}))(k),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(26);var N={searchField:""},P={isPending:!1,robots:[],error:""},U=Object(a.createLogger)(),W=Object(s.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case O:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case w:return Object.assign({},e,{isPending:!0});case m:return Object.assign({},e,{robots:t.payload,isPending:!1});case y:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),F=Object(s.c)(W,Object(s.a)(u.a,U));c.a.render(Object(f.jsx)(i.a,{store:F,children:Object(f.jsx)(R,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):E(t,e)}))}}(),reportWebVitals()}},[[27,1,2]]]);
//# sourceMappingURL=main.4174e873.chunk.js.map