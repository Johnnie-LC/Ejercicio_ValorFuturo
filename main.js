(()=>{"use strict";var n={424:(n,e,o)=>{o.d(e,{Z:()=>c});var r=o(81),t=o.n(r),a=o(645),i=o.n(a)()(t());i.push([n.id,"/* :root {\n  --color1: #120907;\n  --color2: #122435;\n  --color3: #12587f;\n  --color4: #1f98d1;\n  --color5: #20d5d8;\n} */\n\n/* :root {\n  --color1: #120f11;\n  --color2: #123b54;\n  --color3: #20b2d8;\n  --color4: #20dab8;\n  --color5: #f6eda9;\n} */\n/* :root {\n  --color1: #122958;\n  --color2: #854696;\n  --color3: #08dbff;\n  --color4: #0fffa2;\n  --color5: #fffb7c;\n} */\n\n/* :root {\n  --color1: #12331b;\n  --color2: #0a6e96;\n  --color3: #ff669d;\n  --color4: #ffac92;\n  --color5: #fff48e;\n} */\n\n:root {\n  --color1: #1d1d17;\n  --color2: #3e4d67;\n  --color3: #0cba0a;\n  --color4: #edff24;\n  --color5: #fffbb6;\n}\n* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: var(--color1);\n  color: var(--color5);\n}\n\nmain {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nh1 {\n  font-size: 2.5rem;\n  color: var(--color4);\n  /* font-family: 'Fuzzy Bubbles', cursive; */\n  font-family: 'Orbitron', sans-serif;\n  /* font-family: 'Roboto', sans-serif; */\n  /* font-family: 'Shadows Into Light', cursive; */\n}\nsection {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px;\n  border-radius: 20px;\n  border: 2px solid var(--color3);\n  background-color: var(--color2);\n}\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\ndiv {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 10px;\n  /* padding: 10px; */\n}\nlabel {\n  width: 200px;\n  margin: 10px;\n  font-family: 'Orbitron', sans-serif;\n  font-size: 1.1rem;\n  font-weight: bold;\n  padding: 10px;\n}\n\ninput {\n  border: 2px solid rgba(255, 255, 255, 0);\n  background-color: rgba(255, 255, 255, 0);\n  color: var(--color5);\n  font-family: 'Orbitron', sans-serif;\n  transition: 200ms ease-in-out all;\n}\n\ninput[type='number'] {\n  font-size: 1rem;\n  padding: 10px;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.2);\n  width: calc(100% - 260px);\n  outline: 0;\n}\n\ninput:focus {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.button {\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  padding: 10px;\n  width: 90%;\n  margin: 10px;\n  margin-top: 30px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 1.2rem;\n  outline: 0;\n}\n.button:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.value {\n  width: 90%;\n  font-size: 1.8rem;\n  background-color: rgba(0, 255, 0, 0.1);\n  color: var(--color4);\n  text-align: center;\n  display: block;\n  border-radius: 5px;\n  margin-top: 20px;\n}\n\ninput[type='number'].invalidateForm {\n  border: 3px solid rgba(255, 0, 0, 0.5);\n  background-color: rgba(255, 0, 0, 0.2);\n}\ninput[type='number'].validateForm {\n  /* border: 3px solid rgba(12, 186, 10, 1); */\n  background-color: rgba(12, 186, 10, 0.1);\n}\np {\n  display: none;\n  transition: 200ms ease-in-out all;\n}\n.invalidate {\n  font-family: 'Roboto';\n  display: block;\n  color: rgba(255, 0, 0, 0.9);\n  background-color: rgba(0, 0, 0, 0.3);\n  padding: 5px 10px;\n  border-radius: 10px;\n}\n\n@media (max-width: 600px) {\n  h1 {\n    font-size: 2rem;\n  }\n  div {\n    flex-direction: column;\n  }\n  label {\n    width: 100%;\n  }\n  input[type='number'] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 320px) {\n  * {\n    font-size: 12px;\n  }\n\n  h1 {\n    font-size: 1.8rem;\n  }\n}\n@media (max-height: 800px) {\n  main {\n    height: 100%;\n    margin: 40px auto;\n  }\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var o="",r=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),r&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=n(e),r&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(n,o,r,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),t&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=t):d[4]="".concat(t)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function o(n){for(var o=-1,r=0;r<e.length;r++)if(e[r].identifier===n){o=r;break}return o}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var l=n[c],s=r.base?l[0]+r.base:l[0],d=a[s]||0,p="".concat(s," ").concat(d);a[s]=d+1;var u=o(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=t(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function t(n,e){var o=e.domAPI(e);return o.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;o.update(n=e)}else o.remove()}}n.exports=function(n,t){var a=r(n=n||[],t=t||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=o(a[i]);e[c].references--}for(var l=r(n,t),s=0;s<a.length;s++){var d=o(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},569:n=>{var e={};n.exports=function(n,o){var r=function(n){if(void 0===e[n]){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(o)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,o)=>{n.exports=function(n){var e=o.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(o){!function(n,e,o){var r="";o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {"));var t=void 0!==o.layer;t&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,t&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,o)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function o(r){var t=e[r];if(void 0!==t)return t.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,o),a.exports}o.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return o.d(e,{a:e}),e},o.d=(n,e)=>{for(var r in e)o.o(e,r)&&!o.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},o.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=o(379),e=o.n(n),r=o(795),t=o.n(r),a=o(569),i=o.n(a),c=o(565),l=o.n(c),s=o(216),d=o.n(s),p=o(589),u=o.n(p),f=o(424),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=t(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=document.getElementById("form"),b=document.getElementById("vp"),g=document.getElementById("vp-info-error"),h=document.getElementById("ip"),x=document.getElementById("ip-info-error"),y=document.getElementById("ntp"),w=document.getElementById("ntp-info-error"),I=document.getElementById("value"),E={vp:!1,ip:!1,ntp:!1},k=/^[1-9]+[0-9]*$/,L=/^0\.\d*$/,z=/^[1-9]+[0-9]*$/,F=(n,e,o,r)=>{n.test(r.value)?(e.classList.remove("invalidateForm"),e.classList.add("validateForm"),o.classList.remove("invalidate"),E[e.id]=!0,console.log(`field.${e}`,E[e.id])):(e.classList.remove("validateForm"),e.classList.add("invalidateForm"),o.classList.add("invalidate"),E[e.id]=!1,console.log(`field.${e.id}`,E[e.id]))};v.addEventListener("keyup",(n=>{switch(n.target.id){case"vp":F(k,b,g,n.target);break;case"ip":F(L,h,x,n.target);break;case"ntp":F(z,y,w,n.target)}})),v.addEventListener("submit",(n=>{if(n.preventDefault(),E.vp&&E.ip&&E.ntp){const n=parseInt(b.value)*Math.pow(1+parseFloat(h.value),parseInt(y.value));I.innerText=n.toFixed(4).toString()}}))})()})();