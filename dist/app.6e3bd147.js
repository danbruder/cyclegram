webpackJsonp([0,2],{"2twT":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n("U7vG"),o=r(a),l=n("O27J"),u=n("QRk2"),s=r(u);(0,l.render)(o.default.createElement(s.default,null),document.querySelector("#app"))},0:function(e,t,n){n("+prg"),e.exports=n("2twT")},QRk2:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var u=n("U7vG"),s=r(u),i=n("B1JX"),c=n("RovJ");n("RwrE");var f=n("qB3s"),d=r(f),p=n("fLuc"),m=r(p),h=n("MYHW"),y=r(h),j=n("9f7D"),b=r(j),v=n("5PUG"),E=r(v),g=n("eaSD"),w=r(g),_=n("HKDR"),O=r(_),C=n("uHpD"),L=r(C),F=function(e){function t(){var n,r,l;a(this,t);for(var u=arguments.length,s=Array(u),i=0;i<u;i++)s[i]=arguments[i];return n=r=o(this,e.call.apply(e,[this].concat(s))),r.state={isLoggedIn:!1,user:{}},l=n,o(r,l)}return l(t,e),t.prototype.componentDidMount=function(){var e=this;d.default.authenticate().then(function(t){var n=t.data;e.setState({isLoggedIn:!0,user:n})}).catch(function(){e.setState({isLoggedIn:!1})})},t.prototype.handleLogOut=function(){var e=this;d.default.logout().then(function(){e.setState({isLoggedIn:!1,user:{}})})},t.prototype.handleLogIn=function(e,t){var n=this;return d.default.authenticate({type:"local",email:e,password:t}).then(function(e){var t=e.data;n.setState({isLoggedIn:!0,user:t})})},t.prototype.render=function(){var e=this.state,t=e.isLoggedIn;e.user;return s.default.createElement(i.BrowserRouter,null,s.default.createElement("div",{className:"container"},s.default.createElement(m.default,{isLoggedIn:t,handleLogOut:this.handleLogOut.bind(this)}),s.default.createElement(c.Container,null,t?s.default.createElement(L.default,{isLoggedIn:t,exact:!0,path:"/",component:w.default}):s.default.createElement(i.Route,{exact:!0,path:"/",component:E.default}),s.default.createElement(L.default,{isLoggedIn:t,path:"/upload",component:O.default}),s.default.createElement(i.Route,{path:"/login",component:b.default,handleLogIn:this.handleLogIn.bind(this)}),s.default.createElement(i.Route,{path:"/signup",component:y.default,handleLogIn:this.handleLogIn.bind(this)}))))},t}(s.default.Component);t.default=F,e.exports=t.default},RwrE:function(e,t){},qB3s:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n("jjx8"),o=r(a),l=n("ciwQ"),u=r(l),s=n("v0re"),i=r(s),c=n("DmT9"),f=r(c),d=n("bwQI"),p=r(d),m=(0,f.default)("https://perpetual-phone.gomix.me");t.default=(0,o.default)().configure((0,u.default)()).configure((0,i.default)(m)).configure((0,p.default)({storage:window.localStorage})),e.exports=t.default},1:function(e,t){},fLuc:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var u=n("U7vG"),s=r(u),i=n("B1JX"),c=n("RovJ"),f=n("qB3s");r(f);n("Gh7B");var d=function(e){function t(n){return a(this,t),o(this,e.call(this,n))}return l(t,e),t.prototype._handleLogOut=function(){this.props.handleLogOut()},t.prototype.render=function(){var e=this.props.isLoggedIn;return s.default.createElement("div",{className:"main-menu"},s.default.createElement(c.Menu,{secondary:!0},s.default.createElement(c.Menu.Item,{name:"home"},s.default.createElement("h2",null,s.default.createElement(i.Link,{to:"/"},s.default.createElement(c.Icon,{name:"motorcycle"}),s.default.createElement("span",{className:"title"},"CycleGram")))),s.default.createElement(c.Menu.Menu,{position:"right"},e&&s.default.createElement(c.Menu.Item,{name:"upload"},s.default.createElement(i.Link,{to:"/upload"},"Upload")),e&&s.default.createElement(c.Menu.Item,{name:"logout"},s.default.createElement("a",{href:"javascript:void(0)",onClick:this._handleLogOut.bind(this)},"Logout")),!e&&s.default.createElement(c.Menu.Item,{name:"login"},s.default.createElement(i.Link,{to:"/login"},"Login")),!e&&s.default.createElement(c.Menu.Item,{name:"login"},s.default.createElement(i.Link,{to:"/signup"},"Signup")))))},t}(u.Component);t.default=d,e.exports=t.default},Gh7B:function(e,t){},uHpD:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n("U7vG"),c=r(i),f=n("B1JX"),d=n("qB3s"),p=(r(d),function(e){function t(){return o(this,t),l(this,e.apply(this,arguments))}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.component,n=a(e,["component"]),r=this.props.isLoggedIn;return c.default.createElement(f.Route,s({},n,{render:function(e){return r?c.default.createElement(t,e):c.default.createElement(f.Redirect,{to:{pathname:"/login",state:{from:e.location}}})}}))},t}(i.Component));t.default=p,e.exports=t.default},"9f7D":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var u=n("U7vG"),s=r(u),i=n("qB3s"),c=(r(i),n("B1JX")),f=n("RovJ"),d=function(e){function t(){var n,r,l;a(this,t);for(var u=arguments.length,s=Array(u),i=0;i<u;i++)s[i]=arguments[i];return n=r=o(this,e.call.apply(e,[this].concat(s))),r.state={isLoggedIn:!1},l=n,o(r,l)}return l(t,e),t.prototype.handleSubmit=function(e,t){var n=this,r=t.formData;e.preventDefault(),this.props.handleLogIn(r.email,r.password).then(function(){return n.props.push("/")})},t.prototype.render=function(){var e=this.state.isLoggedIn;return e?s.default.createElement(c.Redirect,{to:{pathname:"/",state:{from:this.props.location}}}):s.default.createElement(f.Container,{text:!0},s.default.createElement(f.Form,{onSubmit:this.handleSubmit.bind(this)},s.default.createElement(f.Form.Field,null,s.default.createElement("label",null,"Email"),s.default.createElement("input",{name:"email",placeholder:"First Name"})),s.default.createElement(f.Form.Field,null,s.default.createElement("label",null,"Pass"),s.default.createElement("input",{name:"password",placeholder:"Last Name"})),s.default.createElement(f.Button,{type:"submit"},"Submit")))},t}(s.default.Component);t.default=d,e.exports=t.default},"5PUG":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var u=n("U7vG"),s=r(u),i=n("qB3s"),c=(r(i),n("B1JX"),n("RovJ"),function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return s.default.createElement("div",{className:"container"},"Home")},t}(s.default.Component));t.default=c,e.exports=t.default},eaSD:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n("U7vG"),i=r(s),c=n("qB3s"),f=r(c),d=n("RovJ");n("KHIg");var p=n("PJh5"),m=r(p),h=function(e){function t(){var n,r,l;a(this,t);for(var u=arguments.length,s=Array(u),i=0;i<u;i++)s[i]=arguments[i];return n=r=o(this,e.call.apply(e,[this].concat(s))),r.state={posts:[],page:0},l=n,o(r,l)}return l(t,e),t.prototype.componentDidMount=function(){var e=this;this.getPage=this.getPage.bind(this),this.handleLoadMore=this.handleLoadMore.bind(this),this.getPage(0),f.default.service("posts").on("created",function(t){console.log("created",t);var n=[t];e.setState({posts:n.concat(e.state.posts)})})},t.prototype.getPage=function(e){var t=this,n=this.state.posts,r=25;f.default.service("posts").find({query:{$sort:{createdAt:-1},$limit:r,$skip:r*e}}).then(function(e){t.setState({posts:n.concat(e.data)})})},t.prototype.handleLoadMore=function(){this.getPage(this.state.page+1)},t.prototype.renderCard=function(e){var t=e.imageSrc,n=e.description,r=e.key,a=e.createdAt,o=e.user;return i.default.createElement(d.Card,{fluid:!0,centered:!0,key:r},i.default.createElement(d.Card.Content,null,i.default.createElement(d.Card.Header,null," ",o&&o.email?o.email:""," ")),i.default.createElement(d.Image,{src:t}),i.default.createElement(d.Card.Content,null,i.default.createElement(d.Card.Meta,null,i.default.createElement("span",{className:"date"}," ",(0,m.default)(a).fromNow()," ")),i.default.createElement(d.Card.Description,null,n)),i.default.createElement(d.Card.Content,{extra:!0},i.default.createElement("a",null,i.default.createElement(d.Icon,{name:"comments"}),"22 comments")))},t.prototype.render=function(){var e=this,t=this.state.posts;return i.default.createElement("div",{className:"container feed-cards"},t&&t[0]&&t.map(function(t,n){return e.renderCard(u({},t,{key:n}))}),i.default.createElement(d.Button,{secondary:!0,type:"submit",onClick:this.handleLoadMore},"Load More"))},t}(i.default.Component);t.default=h,e.exports=t.default},KHIg:function(e,t){},2:function(e,t,n){function r(e){return n(a(e))}function a(e){return o[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var o={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./uz":"XU1s","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=2},HKDR:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var u=n("U7vG"),s=r(u),i=(n("B1JX"),n("KTM0")),c=r(i),f=n("GG98"),d=r(f),p=n("RovJ"),m=n("qB3s"),h=r(m);n("bI0w");var y="ko9eaxls",j="https://api.cloudinary.com/v1_1/dylrswykj/upload",b=function(e){function t(){var n,r,l;a(this,t);for(var u=arguments.length,s=Array(u),i=0;i<u;i++)s[i]=arguments[i];return n=r=o(this,e.call.apply(e,[this].concat(s))),r.state={uploadedFileCloudinaryUrl:"",uploadedFile:null},l=n,o(r,l)}return l(t,e),t.prototype.handleSubmit=function(e,t){var n=this,r=t.formData;e.preventDefault();var a=h.default.service("posts");a.create({imageSrc:this.state.uploadedFileCloudinaryUrl,description:r.description}).then(function(e){n.props.push("/")}).catch(function(e){return console.error(e)})},t.prototype.onImageDrop=function(e){var t=this,n=e[0];this.setState({uploadedFile:n});var r=d.default.post(j).field("upload_preset",y).field("file",n);r.end(function(e,n){e&&console.error(e),""!==n.body.secure_url&&t.setState({uploadedFileCloudinaryUrl:n.body.secure_url})})},t.prototype.render=function(){return s.default.createElement(p.Container,{text:!0},s.default.createElement("div",{className:"container uploads"},s.default.createElement(p.Card,null,s.default.createElement(p.Card.Content,null,s.default.createElement(p.Card.Description,null),""===this.state.uploadedFileCloudinaryUrl?s.default.createElement(c.default,{multiple:!1,accept:"image/*",onDrop:this.onImageDrop.bind(this),className:"drop"},"Drop image here or click to browse"):s.default.createElement("div",null,s.default.createElement("p",null,this.state.uploadedFile.name),s.default.createElement(p.Image,{src:this.state.uploadedFileCloudinaryUrl})))),s.default.createElement(p.Form,{onSubmit:this.handleSubmit.bind(this)},s.default.createElement(p.Form.TextArea,{name:"description",label:"Details",placeholder:"Anything else we should know?",rows:"3"}),s.default.createElement(p.Button,{primary:!0,type:"submit"},"Submit"))))},t}(u.Component);t.default=b,e.exports=t.default},bI0w:function(e,t){},MYHW:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var u=n("U7vG"),s=r(u),i=n("qB3s"),c=r(i),f=n("RovJ"),d=n("KTM0"),p=r(d),m=n("GG98"),h=r(m),y="ko9eaxls",j="https://api.cloudinary.com/v1_1/dylrswykj/upload",b=function(e){function t(){var n,r,l;a(this,t);for(var u=arguments.length,s=Array(u),i=0;i<u;i++)s[i]=arguments[i];return n=r=o(this,e.call.apply(e,[this].concat(s))),r.state={uploadedFileCloudinaryUrl:"",uploadedFile:null},l=n,o(r,l)}return l(t,e),t.prototype.handleSubmit=function(e,t){var n=this,r=t.formData;e.preventDefault(),c.default.service("users").create({email:r.email,password:r.password,firstName:r.first_name,lastName:r.last_name,avatarSrc:this.state.uploadedFileCloudinaryUrl}).then(function(){return n.props.handleLogIn(r.email,r.password).then(function(){return n.props.push("/")})})},t.prototype.onImageDrop=function(e){var t=this,n=e[0];this.setState({uploadedFile:n});var r=h.default.post(j).field("upload_preset",y).field("file",n);r.end(function(e,n){e&&console.error(e),""!==n.body.secure_url&&t.setState({uploadedFileCloudinaryUrl:n.body.secure_url})})},t.prototype.render=function(){return s.default.createElement("div",{className:"container"},s.default.createElement(f.Form,{onSubmit:this.handleSubmit.bind(this)},s.default.createElement(f.Form.Field,null,s.default.createElement("label",null,"First name"),s.default.createElement("input",{name:"first_name",placeholder:"first name"})),s.default.createElement(f.Form.Field,null,s.default.createElement("label",null,"Last name"),s.default.createElement("input",{name:"last_name",placeholder:"last name"})),s.default.createElement(f.Form.Field,null,s.default.createElement("label",null,"Email"),s.default.createElement("input",{name:"email",placeholder:"Email"})),s.default.createElement(f.Form.Field,null,s.default.createElement("label",null,"Pass"),s.default.createElement("input",{name:"password",placeholder:"Password"})),s.default.createElement("div",null,""===this.state.uploadedFileCloudinaryUrl?s.default.createElement(p.default,{multiple:!1,accept:"image/*",onDrop:this.onImageDrop.bind(this)},s.default.createElement("p",null,"Drop an image or click to select a file to upload.")):s.default.createElement("div",null,s.default.createElement("p",null,this.state.uploadedFile.name),s.default.createElement("img",{src:this.state.uploadedFileCloudinaryUrl}))),s.default.createElement(f.Button,{type:"submit"},"Signup")))},t}(s.default.Component);t.default=b,e.exports=t.default}});
//# sourceMappingURL=app.6e3bd147.js.map