(()=>{"use strict";var e,n,t,o={823:(e,n,t)=>{var o=t(526),r=t(470),a=t(397),s=t(277),l=t(701),i=t.n(l),c=t(236),A=t.n(c),u=t(80),p=t.n(u),d=t(850),m=t.n(d),f=t(182),v=t.n(f),h=t(213),y=t.n(h),C=t(797),g={};function b(e,n,t,o,r,a,s){try{var l=e[a](s),i=l.value}catch(e){return void t(e)}l.done?n(i):Promise.resolve(i).then(o,r)}function x(e){return E.apply(this,arguments)}function E(){var e;return e=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return function*(){const o={method:n};t&&(o.headers={"Content-Type":"application/json"},o.body=JSON.stringify(t));const r=P();r&&(o.headers=o.headers||{},o.headers.Authorization="Bearer ".concat(r));const a=yield fetch(e,o);if(a.ok)return a.json();throw new Error("Bad Request")}()},E=function(){var n=this,t=arguments;return new Promise((function(o,r){var a=e.apply(n,t);function s(e){b(a,o,r,s,l,"next",e)}function l(e){b(a,o,r,s,l,"throw",e)}s(void 0)}))},E.apply(this,arguments)}g.styleTagTransform=y(),g.setAttributes=m(),g.insert=p().bind(null,"head"),g.domAPI=A(),g.insertStyleElement=v(),i()(C.Z,g),C.Z&&C.Z.locals&&C.Z.locals;const w="/api/users";function S(e,n,t,o,r,a,s){try{var l=e[a](s),i=l.value}catch(e){return void t(e)}l.done?n(i):Promise.resolve(i).then(o,r)}function B(){return(e=function*(e){const n=yield function(e){return x(w,"POST",e)}(e);return localStorage.setItem("token",n),k()},B=function(){var n=this,t=arguments;return new Promise((function(o,r){var a=e.apply(n,t);function s(e){S(a,o,r,s,l,"next",e)}function l(e){S(a,o,r,s,l,"throw",e)}s(void 0)}))}).apply(this,arguments);var e}function P(){const e=localStorage.getItem("token");return e?JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3?(localStorage.removeItem("token"),null):e:null}function k(){const e=P();return e?JSON.parse(atob(e.split(".")[1])).user:null}var O=t(634),N={};N.styleTagTransform=y(),N.setAttributes=m(),N.insert=p().bind(null,"head"),N.domAPI=A(),N.insertStyleElement=v(),i()(O.Z,N);const Z=O.Z&&O.Z.locals?O.Z.locals:void 0,I=function(e){let{pexelsData:n,setPexelsData:t}=e;return(0,o.useEffect)((()=>{fetch("http://localhost:8011/pexels").then((e=>{if(!e.ok)throw new Error("HTTP error! Status: ".concat(e.status));return e.json()})).then((e=>{t(e)})).catch((e=>{console.error("Error fetching Pexels data:",e)}))}),[]),o.createElement("div",null,0===n.length?o.createElement("p",null,"Loading..."):n.map((e=>o.createElement("div",{key:e.id},o.createElement("section",{className:Z.videoSection},e.duration&&o.createElement("video",{controls:!0,autoPlay:!0,loop:!0,className:Z.video},o.createElement("source",{src:e.video_files[0].link,type:"video/mp4"})," ","Your browser does not support the video tag."))))))};var _=t(934),j={};function T(e){let{user:n,setUser:t,pexelsData:r,setPexelsData:a}=e;return console.log(n),o.createElement("div",{className:"home-screen"},o.createElement("h1",null,"What's Your Style?"),o.createElement("div",{className:"pexels-content"},o.createElement(I,{pexelsData:r,setPexelsData:a})))}j.styleTagTransform=y(),j.setAttributes=m(),j.insert=p().bind(null,"head"),j.domAPI=A(),j.insertStyleElement=v(),i()(_.Z,j),_.Z&&_.Z.locals&&_.Z.locals;var U=t(141),M={};M.styleTagTransform=y(),M.setAttributes=m(),M.insert=p().bind(null,"head"),M.domAPI=A(),M.insertStyleElement=v(),i()(U.Z,M);const J=U.Z&&U.Z.locals?U.Z.locals:void 0;var Q=t(526);function G(e,n,t,o,r,a,s){try{var l=e[a](s),i=l.value}catch(e){return void t(e)}l.done?n(i):Promise.resolve(i).then(o,r)}function Y(e){let{user:n,setUser:t}=e;const[r,s]=(0,o.useState)(null),[l,i]=(0,o.useState)("");return(0,o.useEffect)((()=>{const e=function(){var e,n=(e=function*(){try{const e=yield k();s(e)}catch(e){i("Could Not Find Account Information")}},function(){var n=this,t=arguments;return new Promise((function(o,r){var a=e.apply(n,t);function s(e){G(a,o,r,s,l,"next",e)}function l(e){G(a,o,r,s,l,"throw",e)}s(void 0)}))});return function(){return n.apply(this,arguments)}}();e()}),[n]),Q.createElement("div",{className:J.portalcontainer},r&&r.isLoggedIn?Q.createElement("div",{className:J.loggedin},Q.createElement(a.rU,{to:"/account",className:"userlink"},"Hey, ",r.name),Q.createElement(a.rU,{to:"/favorites",className:"favbtn"},"likes"),Q.createElement(a.rU,{to:"/cart",className:J.cartbtn},"cart")):Q.createElement("div",{className:J.notloggedin},Q.createElement(a.rU,{to:"/login",className:"loginbtn"},"Login/Signup"),Q.createElement(a.rU,{to:"/cart",className:J.cartbtn},"Cart")))}var F=t(309),W={};W.styleTagTransform=y(),W.setAttributes=m(),W.insert=p().bind(null,"head"),W.domAPI=A(),W.insertStyleElement=v(),i()(F.Z,W);const q=F.Z&&F.Z.locals?F.Z.locals:void 0;var H=t(673),D={};D.styleTagTransform=y(),D.setAttributes=m(),D.insert=p().bind(null,"head"),D.domAPI=A(),D.insertStyleElement=v(),i()(H.Z,D);const K=H.Z&&H.Z.locals?H.Z.locals:void 0;var R=t(526);function z(){return R.createElement("div",{className:"animate__animated animate__tada animate__slow"},R.createElement("div",{className:K.Logo},R.createElement("div",null,"Shukea")))}var L=t(526);function V(e){let{AboutUs:n,Shop:t,Jobs:o}=e;return L.createElement("main",{className:q.NavBar},L.createElement("div",null,L.createElement(z,null),L.createElement(a.rU,{to:"/HomeScreen",className:"aboutBtn"},"About Us"),L.createElement(a.rU,{to:"/HomeScreen",className:"shopBtn"},"Shop"),L.createElement(a.rU,{to:"/HomeScreen",className:"jobsBtn"},"Jobs")))}function X(e,n,t,o,r,a,s){try{var l=e[a](s),i=l.value}catch(e){return void t(e)}l.done?n(i):Promise.resolve(i).then(o,r)}function $(e){return function(){var n=this,t=arguments;return new Promise((function(o,r){var a=e.apply(n,t);function s(e){X(a,o,r,s,l,"next",e)}function l(e){X(a,o,r,s,l,"throw",e)}s(void 0)}))}}function ee(){const[e,n]=(0,o.useState)([]),[t,r]=(0,o.useState)(k()),[a,l]=(0,o.useState)(null);function i(){return i=$((function*(){const e={username:"guestuser",email:Math.round(1e12*Math.random())+"@guest.com",password:"guestpassword"};localStorage.setItem("guestuser",e.email);const n=yield function(e){return B.apply(this,arguments)}(e);r(n),console.log("Guest user created",n)})),i.apply(this,arguments)}return(0,s.s0)(),(0,s.TH)(),(0,o.useEffect)((()=>{t||function(){i.apply(this,arguments)}()}),[]),(0,o.useEffect)((()=>{function e(){return e=$((function*(){const e=yield x("".concat("/api/orders","/cart"));l(e)})),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),o.createElement("main",null,o.createElement(V,null),o.createElement(Y,null),o.createElement(s.Z5,null,o.createElement(s.AW,{path:"/ikea",element:o.createElement(T,{user:t,setUser:r,pexelsData:e,setPexelsData:n})}),o.createElement(s.AW,{path:"/*",element:o.createElement(s.Fg,{to:"/ikea"})})))}var ne=t(526);(0,r.s)(document.getElementById("app")).render(ne.createElement(o.StrictMode,null,ne.createElement(a.VK,null,ne.createElement(ee,null))))},673:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(864),r=t.n(o),a=t(352),s=t.n(a)()(r());s.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),s.locals={};const l=s},309:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(864),r=t.n(o),a=t(352),s=t.n(a)()(r());s.push([e.id,".QpVD3qAS0nYBtoQqAYoe{position:absolute;top:0;right:0;padding:.5rem;display:felx;flex-direction:row;justify-content:space-between}main{color:#ff0;margin:0 .5rem;font-weight:500}div{color:blue;margin:0 .5rem;font-weight:500}div:hover{cursor:crosshair}","",{version:3,sources:["webpack://./src/components/NavBar/NavBar.module.scss"],names:[],mappings:"AAAA,sBACI,iBAAA,CACA,KAAA,CACA,OAAA,CACA,aAAA,CACA,YAAA,CACA,kBAAA,CACA,6BAAA,CAGJ,KACI,UAAA,CACA,cAAA,CACA,eAAA,CAGJ,IACI,UAAA,CACA,cAAA,CACA,eAAA,CAGJ,UACI,gBAAA",sourcesContent:[".NavBar {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 0.5rem;\n    display: felx;\n    flex-direction: row;\n    justify-content: space-between;\n}\n\nmain {\n    color: yellow;\n    margin: 0 0.5rem;\n    font-weight: 500;\n}\n\ndiv { \n    color: blue;\n    margin: 0 0.5rem;\n    font-weight: 500;\n}\n\ndiv:hover {\n    cursor: crosshair\n}"],sourceRoot:""}]),s.locals={NavBar:"QpVD3qAS0nYBtoQqAYoe"};const l=s},634:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(864),r=t.n(o),a=t(352),s=t.n(a)()(r());s.push([e.id,'section{background-color:#fff;padding:20px;margin:50px 20px 20px 20px;border:1px solid #ccc}section video{width:100%;max-width:800px;display:block;margin:0 auto;border:1px solid #ddd}section h1{font-size:24px;color:#000;margin-bottom:10px}section p{font-size:16px;color:#333;margin-bottom:20px}body{font-family:"Arial",sans-serif;background-color:#f5f5f5}',"",{version:3,sources:["webpack://./src/components/Pexels/PexelsContent.module.scss"],names:[],mappings:"AAKA,QACE,qBAAA,CACA,YAAA,CACA,0BAAA,CACA,qBAAA,CAGA,cACE,UAAA,CACA,eAAA,CACA,aAAA,CACA,aAAA,CACA,qBAAA,CAIF,WACE,cAAA,CACA,UAvBY,CAwBZ,kBAAA,CAGF,UACE,cAAA,CACA,UAAA,CACA,kBAAA,CAOJ,KACE,8BApCU,CAqCV,wBAAA",sourcesContent:["$primary-color: #000000;\n$secondary-color: #ff6b00;\n$body-font: 'Arial', sans-serif;\n\n\nsection {\n  background-color: white;\n  padding: 20px;\n  margin: 50px 20px 20px 20px;\n  border: 1px solid #ccc;\n  \n \n  video {\n    width: 100%;\n    max-width: 800px;\n    display: block;\n    margin: 0 auto;\n    border: 1px solid #ddd;\n  }\n\n\n  h1 {\n    font-size: 24px;\n    color: $primary-color;\n    margin-bottom: 10px;\n  }\n\n  p {\n    font-size: 16px;\n    color: #333;\n    margin-bottom: 20px;\n  }\n\n \n}\n\n\nbody {\n  font-family: $body-font;\n  background-color: #f5f5f5;\n}\n\n\n"],sourceRoot:""}]),s.locals={};const l=s},141:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(864),r=t.n(o),a=t(352),s=t.n(a)()(r());s.push([e.id,".ZwNhM6v1FQIi1EH_OyOe{display:flex;justify-content:space-evenly}.ZwNhM6v1FQIi1EH_OyOe .liKyWqdgAPxKYEuWF0yT{display:flex;justify-content:space-evenly}.ZwNhM6v1FQIi1EH_OyOe .QNGME6RGnfPrSJlmbrMa{display:flex;width:10vmin;justify-content:space-evenly}.ZwNhM6v1FQIi1EH_OyOe .TIJQh045RWXXzyQmbruJ{display:flex}","",{version:3,sources:["webpack://./src/components/UserPortal/UserPortal.module.scss"],names:[],mappings:"AAAA,sBACI,YAAA,CACA,4BAAA,CAGA,4CACI,YAAA,CACA,4BAAA,CAGJ,4CACI,YAAA,CACA,YAAA,CACA,4BAAA,CAGJ,4CACI,YAAA",sourcesContent:[".portalcontainer {\n    display:flex;\n    justify-content: space-evenly;\n}\n\n    .portalcontainer .loggedin {\n        display:flex;\n        justify-content: space-evenly;\n    }\n\n    .portalcontainer .notloggedin {\n        display:flex;\n        width: 10vmin;\n        justify-content: space-evenly;\n    }\n\n    .portalcontainer .cartbtn {\n        display: flex;\n    }"],sourceRoot:""}]),s.locals={portalcontainer:"ZwNhM6v1FQIi1EH_OyOe",loggedin:"liKyWqdgAPxKYEuWF0yT",notloggedin:"QNGME6RGnfPrSJlmbrMa",cartbtn:"TIJQh045RWXXzyQmbruJ"};const l=s},797:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(864),r=t.n(o),a=t(352),s=t.n(a)()(r());s.push([e.id,".ncLgupkhPNit1w0VMAKq{height:100%}","",{version:3,sources:["webpack://./src/pages/App/App.module.scss"],names:[],mappings:"AAAA,sBACI,WAAA",sourcesContent:[".App {\n    height: 100%;\n  }"],sourceRoot:""}]),s.locals={App:"ncLgupkhPNit1w0VMAKq"};const l=s},934:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(864),r=t.n(o),a=t(352),s=t.n(a)()(r());s.push([e.id,"div{display:flex;flex-wrap:wrap;justify-content:center;padding:0px}div h1{font-size:2.5rem;color:#333;margin-bottom:20px;margin-top:50rem;width:100%}div .lXVcQtMJkWrfFGLIyTcM{flex-basis:calc(50% - 5px)}","",{version:3,sources:["webpack://./src/pages/HomeScreen/HomeScreen.module.scss"],names:[],mappings:"AAAA,IACI,YAAA,CACA,cAAA,CACA,sBAAA,CACA,WAAA,CAEA,OACE,gBAAA,CACA,UAAA,CACA,kBAAA,CACA,gBAAA,CACA,UAAA,CAGF,0BACE,0BAAA",sourcesContent:["div {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center; \n    padding: 0px;\n  \n    h1 {\n      font-size: 2.5rem;\n      color: #333;\n      margin-bottom: 20px;\n      margin-top: 50rem;\n      width: 100%; \n    }\n  \n    .pexels-content {\n      flex-basis: calc(50% - 5px); \n    }\n  }"],sourceRoot:""}]),s.locals={"pexels-content":"lXVcQtMJkWrfFGLIyTcM"};const l=s}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var t=r[e]={id:e,exports:{}};return o[e](t,t.exports,a),t.exports}a.m=o,e=[],a.O=(n,t,o,r)=>{if(!t){var s=1/0;for(A=0;A<e.length;A++){for(var[t,o,r]=e[A],l=!0,i=0;i<t.length;i++)(!1&r||s>=r)&&Object.keys(a.O).every((e=>a.O[e](t[i])))?t.splice(i--,1):(l=!1,r<s&&(s=r));if(l){e.splice(A--,1);var c=o();void 0!==c&&(n=c)}}return n}r=r||0;for(var A=e.length;A>0&&e[A-1][2]>r;A--)e[A]=e[A-1];e[A]=[t,o,r]},a.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return a.d(n,{a:n}),n},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var r=Object.create(null);a.r(r);var s={};n=n||[null,t({}),t([]),t(t)];for(var l=2&o&&e;"object"==typeof l&&!~n.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((n=>s[n]=()=>e[n]));return s.default=()=>e,a.d(r,s),r},a.d=(e,n)=>{for(var t in n)a.o(n,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={768:0};a.O.j=n=>0===e[n];var n=(n,t)=>{var o,r,[s,l,i]=t,c=0;if(s.some((n=>0!==e[n]))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(i)var A=i(a)}for(n&&n(t);c<s.length;c++)r=s[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(A)},t=self.webpackChunkbig_poppa_code_react_starter_kit=self.webpackChunkbig_poppa_code_react_starter_kit||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),a.nc=void 0;var s=a.O(void 0,[885],(()=>a(823)));s=a.O(s)})();
//# sourceMappingURL=App.3be79134d58a687ac495d75897dd20d7.js.map