(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>p});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),s=t.n(c),u=new URL(t(123),t.b),d=i()(o()),l=s()(u);d.push([e.id,`* {\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    height: 100vh;\n    background: no-repeat center/100%  url(${l});\n}\n\n#content {\n    height: 90vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\nh1 {\n    font-size: 100px;\n    color: white;\n    text-align: center;\n}\n\nh2 {\n    font-size: 1.9em;\n    color: white;\n    margin: 0.6em 0.5em;\n}\n\np {\n    font-size: 70px;\n    color: rgb(9, 52, 88);\n    text-align: center;\n}\n\n.home, .about , .menu {\n    border: 3px gold solid;\n    background-image: linear-gradient(-180deg, #37AEE2 0%, #1E96C8 100%);\n    opacity: 0.9;\n    width: 80%;\n    height: 80%;\n}\n\nnav {\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n}\nbutton {\n    box-sizing: border-box;\n    font-size: 2em;\n    font-family: 'Courier New', Courier, monospace;\n    font-weight: 400;\n    margin: 0.5em 0.5em;\n    color: #FFFFFF;\n    background-image: linear-gradient(-180deg, #37AEE2 0%, #1E96C8 100%);\n    border-radius: .5rem;\n    width: 120px;\n    opacity: 0.9;\n    border: 0;\n    padding: 0.2rem 0.8rem;\n    cursor: pointer;\n}\n\n`,""]);const p=d},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var d=t(a[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},123:(e,n,t)=>{e.exports=t.p+"4f26474190bf35bf9700.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),s=t.n(c),u=t(56),d=t.n(u),l=t(540),p=t.n(l),f=t(113),m=t.n(f),h=t(208),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(h.A,v),h.A&&h.A.locals&&h.A.locals,document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=document.createElement("header"),n=document.createElement("nav"),t=document.createElement("h2");t.textContent="Code Club",n.appendChild(t),["Home","Menu","About"].forEach((e=>{const t=document.createElement("button");t.id=e,t.classList.add("btns"),t.textContent=e,n.appendChild(t)})),e.appendChild(n),document.body.appendChild(e);const r=document.createElement("div");r.id="content",document.body.appendChild(r)}();const e=document.querySelectorAll(".btns");console.log(e),e.forEach((e=>{e.addEventListener("click",(()=>{switch(e.id){case"Home":document.getElementById("content").innerHTML='<div class="home"><h1>Home</h1><p>Welcome to the Home page!</p></div>';break;case"Menu":document.getElementById("content").innerHTML='<div class="menu"><h1>Menu</h1><p>Here is our menu!</p></div>';break;case"About":document.getElementById("content").innerHTML='<div class="about"><h1>About</h1><p>About us information.</p></div>';break;default:console.warn("unknown btn")}}))}))}))})();