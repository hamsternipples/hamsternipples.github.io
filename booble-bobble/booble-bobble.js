!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";var r=function(e){const t=typeof e;return null!=e&&("object"==t||"function"==t)};function o(e){throw new Error(e)}function i(e){e&&console.log("entering the debugger. reason:\n    "+e)}n.d(t,"f",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"m",function(){return c}),n.d(t,"n",function(){return u}),n.d(t,"p",function(){return a}),n.d(t,"o",function(){return s}),n.d(t,"q",function(){return f}),n.d(t,"k",function(){return l}),n.d(t,"l",function(){return d}),n.d(t,"j",function(){return b}),n.d(t,"b",function(){return h}),n.d(t,"e",function(){return p}),n.d(t,"c",function(){return v}),n.d(t,"d",function(){return y}),n.d(t,"h",function(){return g}),n.d(t,"g",function(){return j}),n.d(t,"i",function(){return m});const c=()=>Math.random().toString(32).substr(2),u=e=>Math.floor(Math.random()*e),a=e=>{const t=null==e?0:e.length;return t?e[u(t)]:void 0};function s(e,t=null){for(var n=-1,r=e.length,o=0;++n<r;){for(;e[n+o]===t;)o++;o>0&&(e.splice(n,o),o=0)}return e}function f(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function l(e,t,n){for(let r of t)n(e,r);return e}function d(e,t,n,r){for(let o of t)for(let t of n)r(e,o,t);return e}function b(e){try{return"string"==typeof e?JSON.parse(e):e}catch(e){}return{}}const h=(e,t,n=!0,r=!0)=>({get:e,set:t,enumerable:n,configurable:r}),p=(e,t=!1,n=!0,r=!0)=>({value:e,writable:t,enumerable:n,configurable:r}),v=(e,t,n)=>Object.defineProperty(e,t,n),y=(e,t)=>Object.defineProperties(e,t);function g(...e){return Object.assign({},...e)}function j(...e){return Object.assign(...e)}function m(e,...t){if(!t.length)return e;var n,o,i=t.shift();if(r(e)&&r(i))for(n in i)r(o=i[n])?(e[n]||(e[n]={}),m(e[n],o)):Object.assign(e,{[n]:o});return m(e,...t)}window.empty_array=function(e,t=0){var n=Array(e);for(;e-- >0;)n[e]=t;return n}},function(e,t,n){"use strict";n.d(t,"j",function(){return r}),n.d(t,"e",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"d",function(){return u}),n.d(t,"a",function(){return s}),n.d(t,"i",function(){return f}),n.d(t,"c",function(){return l}),n.d(t,"h",function(){return d}),n.d(t,"f",function(){return b}),n.d(t,"g",function(){return h});const r=window,o=r.document,i=o.body,c=r.getComputedStyle,u=r.customElements,a=o.location,s=~a.host.indexOf("localhost"),f=(a.pathname,a.protocol,a.hostname,a.port&&a.port,e=>o.createTextNode(e)),l=e=>o.createComment(e),d=e=>e&&e.nodeType,b=e=>"string"==typeof e?o.getElementById(e):e;function h(e,t){var n=e.currentStyle;return n?n[t]:c?c(e,null).getPropertyValue(t):e.style[t]}},function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"h",function(){return a}),n.d(t,"e",function(){return s}),n.d(t,"g",function(){return f}),n.d(t,"f",function(){return d}),n.d(t,"b",function(){return b}),n.d(t,"d",function(){return h});var r=n(0);function o(e){"function"==typeof e&&"string"==typeof e._obv||Object(r.f)("expected an observable")}function i(e,t){e(t());var n=e(t),r=t(e);return()=>{n(),r()}}function c(e,t,n){for(var o,i=0,c=0;c<e.length;c++)"function"==typeof(o=e[c])?o(n,t):i++;i>11&&setTimeout(r.o,1,e)}function u(e,t){var n=e.indexOf(t);~n&&(e[n]=null)}function a(e){if("function"==typeof e&&"value"===e._obv)return e;var t=e,n=[];return o.gc=()=>(Object(r.o)(n),n),Object(r.c)(o,"listeners",{get:o.gc}),o.set=e=>c(n,t,t=void 0===e?t:e),o.once=(e,t)=>{var n=o((t,r)=>{e(t,r),n()},t);return n},o._obv="value",o;function o(e,r){return void 0===e?t:"function"!=typeof e?(t===e||c(n,t,t=e),e):(n.push(e),void 0===t||!1===r||e(t),()=>{u(n,e)})}}function s(e,t){if(e&&"object"===e._obv)return e;var n={},o={},i=[],c={_obv:Object(r.e)("object"),get:Object(r.e)((e,t)=>{for(var r,o=n,i=Array.isArray(e)?e:"string"==typeof e&&~e.indexOf(".")?e.split("."):[e];r=i.unshift();)void 0===(o=n[r])&&(o=n[r]={});return o}),set:Object(r.e)(e=>{for(let t of i)o[t]&&e[t]&&o[t](e[t])})};for(let n of Array.isArray(t)?t:Object.keys(e)){let t=e[n];void 0!==t&&("value"===t._obv?(o[n]=t,i.push(n)):t._obv?c[n]=Object(r.e)(t):i.push(n))}for(let t of i)c[t]=Object(r.b)(()=>(o[t]||(o[t]=a(e[t])))(),e=>o[t](e));return Object(r.d)(n,c),n}function f(e,t,n){return o(e),r._obv="value",r;function r(r,o){return void 0===r?t(e()):"function"!=typeof r?e((n||t)(r)):e((e,n)=>{r(t(e,n))},o)}}var l=e=>"string"==typeof e&&~e.indexOf("px")?e:e+"px",d=e=>f(e,l);function b(e,t,n=!1){var i,a,s=!0,f=e.length,l=new Array(f),d=[],b=[];for(let n=0;n<f;n++)"function"==typeof(a=e[n])?(o(a),b.push(a(e=>{var r=l[n];l[n]=e,r!==e&&!1===s&&h(t.apply(null,l))},s))):l[n]=a;return i=t.apply(null,l),h._obv="value",h.gc=()=>(Object(r.o)(d),d),Object(r.c)(h,"listeners",{get:h.gc}),s=!1,h;function h(e,t){return void 0===e?i:"function"!=typeof e?(i===e||c(d,i,i=e),e):(d.push(e),void 0===i||!1===t||e(i),()=>{for(a of(u(d,e),b))a()})}}function h(e,t=null){return"function"==typeof e&&(!t&&e._obv||e._obv===t)}},function(e,t,n){"use strict";var r=n(2);const o=(e,t,n,r=!1)=>(e.on||e.addEventListener).call(e,t,n,r),i=(e,t,n,r=!1)=>(e.off||e.removeListener||e.removeEventListener).call(e,t,n,r),c=(e,t,n)=>(e.dispatchEvent(new Event(t)),n),u=e=>e&&e.preventDefault();function a(e,t,n,r,c){let u=t=>{r("function"==typeof n?n():n?e[n]:t)};return o(e,t,u),c&&n&&u(),()=>i(e,t,u)}function s(e,t="value",n="keyup",r,c){return r="function"==typeof r?r:e=>13===e.which&&!e.shiftKey,a._obv="event",a;function a(a){return void 0===a?a:"function"!=typeof a?void 0:("function"==typeof c||(c=n=>!!r(n)&&(a(e[t],n),u(n),!0)),o(e,n,c),()=>{i(e,n,c)})}}function f(e,t="value",n="input"){return r._obv="attribute",r;function r(r,o){return void 0===r?e[t]:"function"!=typeof r?c(e,n,e[t]=r):a(e,n,t,r,o)}}function l(e,t="value",n="change"){const r=(n=e.selectedIndex)=>~n?e.options[n][t]:null,o=o=>{for(var i=e.options,u=0;u<i.length;u++)if(i[u][t]==o)return c(e,n,r(e.selectedIndex=u))};return i._obv="select",i;function i(i,c){return void 0===i?e.options[e.selectedIndex][t]:"function"!=typeof i?o(i):a(e,n,r,i,c)}}function d(e,t,n){var r=!1;const c=()=>r||val.call(e,r=!0),u=()=>r&&val.call(e,r=!1);return a._obv="toggle",a;function a(a){return void 0===a?r:"function"!=typeof a?void 0:(o(e,t,c),o(e,n||t,u),()=>{i(e,t,c),i(e,n||t,u)})}}function b(e){return d(e,"mouseover","mouseout")}function h(e){return d(e,"focus","blur")}function p(e,t,n,r){o(e,t,n,r),this.push(()=>{i(e,t,n,r)})}function v(e,t){var n,o=this;for(n in t)((n,i)=>{switch(n){case"input":o.push(f(e,t[n+".attr"],t[n+".on"])(i));break;case"hover":o.push(b(e)(i));break;case"focus":o.push(h(e)(i));break;case"select_label":n=l(e,"label"),o.push(Object(r.d)(i)?Object(r.a)(n,i):n(i));break;case"select":case"select_value":n=l(e),o.push(Object(r.d)(i)?Object(r.a)(n,i):n(i));break;case"boink":o.push(a(e,"click",!1,t=>{Object(r.d)(i)?i(!i()):i.call(e,t)}),a(e,"touchstart",!1,t=>{u(t),Object(r.d)(i)?i(!i()):i.call(e,t)}));break;case"press":o.push(a(e,"mouseup",!1,()=>{i(!1)}),a(e,"mousedown",!1,()=>{i(!0)}),a(e,"touchend",!1,e=>{u(e),i(!1)}),a(e,"touchstart",!1,e=>{u(e),i(!0)}));break;default:~n.indexOf(".")||("function"!=typeof i&&error("observer must be a function"),o.push(s(e,t[n+".attr"],t[n+".event"]||n,t[n+".valid"])(i)))}})(n,t[n])}var y=n(0),g=n(1);n.d(t,"a",function(){return C}),n.d(t,"b",function(){return k});var j={s:"style",c:"className",class:"className",for:"htmlFor"},m={className:"class",htmlFor:"for"},O=[];function x(e){var t=[];function n(...n){var r;function o(o){var i,c,u,a;const s=t=>{var o,i=t.split(/([\.#]?[a-zA-Z0-9_:-]+)/);for(o of(/^\.|#/.test(i[1])&&(r=e("div")),i))"string"==typeof o&&(u=o.length)&&(r?"."!==(a=o[0])&&"#"!==a||(c=o.substring(1,u))&&("."===a?r.classList.add(c):r.id=c):r=e(o,n))};if(!r&&"number"==typeof o&&o<O.length&&(r=s(O[o])),null!=o)if("string"==typeof o)r?r.aC(i=Object(g.i)(o)):s(o);else if("number"==typeof o||"boolean"==typeof o||o instanceof Date||o instanceof RegExp)r.aC(i=Object(g.i)(o.toString()));else if(Array.isArray(o))r.aC(o,t);else if(Object(g.h)(o)||o instanceof g.j.Text)r.aC(i=o);else if("object"==typeof o)for(a in o)w(r,a,o[a],t);else"function"==typeof o&&(i=z(r,o,t));return i}for(;n.length;)o(n.shift());return r}return n.cleanupFuncs=t,n.cleanup=()=>{for(var e=0;e<t.length;e++)t[e]()},n}function w(e,t,n,r=[]){var o,i,c,u=j[t]||t;if("function"==typeof n)setTimeout(()=>{"boink"===u?v.call(r,e,{boink:n}):"press"===u?v.call(r,e,{press:n}):"hover"===u?v.call(r,e,{hover:n}):"focused"===u?v.call(r,e,{focus:n}):"selected"===u?v.call(r,e,{select:n}):"input"===u?v.call(r,e,{input:n}):"on"===u.substr(0,2)?p.call(r,e,u.substr(2),n,!1):"before"===u.substr(0,6)?p.call(r,e,u.substr(6),n,!0):(r.push(n(t=>{w(e,u,t,r)},1)),"INPUT"===(o=e.nodeName)&&v.call(r,e,{input:n}),"SELECT"===o&&v.call(r,e,"label"===u?{select_label:n}:{select:n}))},0);else if("assign"===u||"extend"===u)Object.assign(e,n);else if("data"===u)if("object"==typeof n)for(o in n)e.dataset[o]=n[o];else Object(y.f)("data property should be passed as an object");else if("multiple"===u)e.multiple=!!n;else if("contenteditable"===u)e.contentEditable=!!n;else if("autofocus"===u)setTimeout(()=>e.focus(),10);else if("autoselect"===u)setTimeout(()=>{e.focus();var t=[n[0]||0,n[1]||-1];e.setSelectionRange.apply(e,t)},10);else if("selected"===u)e.defaultSelected=!!n;else if("checked"===u)e.defaultChecked=!!n;else if("value"===u)e.defaultValue=e.value=n;else if("for"===u)e.htmlFor=n;else if("class"===u){if(n)if(i=e.classList,Array.isArray(n))for(o of n)o&&i.add(o);else i.add(n)}else if((c="on"===u)||"before"===u){if("object"==typeof n)for(o in n)"function"==typeof(i=n[o])&&p.call(r,e,o,i,!c)}else"html"===u?e.innerHTML=n:"observe"===u?setTimeout(v.bind(r,e,n),0):"style"===u?"string"==typeof n?e.style.cssText=n:function(e,t,n=[]){if("object"==typeof t)for(var r in t)((t,r)=>{"function"==typeof r?(e.style[t]=r(),n.push(r(n=>{e.style[t]=n}))):e.style[t]=r})(r,t[r]);else e.setAttribute("style",t)}(e,n,r):~u.indexOf("-")?e.setAttribute(u,n):void 0!==n&&(~(c=u.indexOf(":"))?"xlink"===u.substr(0,c)?e.setAttributeNS("http://www.w3.org/1999/xlink",u.substr(++c),n):Object(y.f)("unknown namespace for attribute: "+u):e.namespaceURI?e.setAttribute(m[u]||u,n):e[u]=n)}var _={};Object(y.c)(_,"define",Object(y.e)((e,t,n)=>{g.d.define(e,t),_[e]="number"==typeof n?n:Array.isArray(n)?n.length:t.length||0}));var C=function e(t){var n=x((e,t)=>{var n;return~e.indexOf("-")?void 0!==(n=_[e])?new(g.d.get(e))(...t.splice(0,n)):new(g.d.get(e)):g.e.createElement(e)});t||C.cleanupFuncs.push(()=>n.cleanup());n.context=e;return n}(1);var k=function e(t){var n=x(e=>g.e.createElementNS("http://www.w3.org/2000/svg",e));t||k.cleanupFuncs.push(()=>n.cleanup());n.context=e;return n}(1);const A=(e,t,n)=>Object(g.h)(t)?t:Array.isArray(t)?function(e,t,n){var r,o=g.e.createDocumentFragment(),i=t=>t===(e.activeElement||g.e.activeElement);for(r of t)o.aC(A(e,r,n));if("array"===t.observable){function c(n){var r,o,c,u;switch(n.type){case"unshift":for(r=n.values.length-1;r>=0;r--)e.insertBefore(Object(g.h)(c=n.values[r])?c:Object(g.i)(c),t[0]);break;case"push":for(r=0;r<n.values.length;r++)e.insertBefore(Object(g.h)(c=n.values[r])?c:Object(g.i)(c),t[t.length+n.values.length-r-1]);break;case"pop":e.removeChild(t[t.length-1]);break;case"shift":e.removeChild(t[0]);break;case"splice":if(o=n.idx,n.remove)for(r=0;r<n.remove;r++)e.removeChild(t[o+r]);if(n.add)for(r=0;r<n.add.length;r++)e.insertBefore(Object(g.h)(c=n.add[r])?c:Object(g.i)(c),t[o]);break;case"sort":for(r=0,u=n.orig;r<t.length;r++)c=t[r],r!==(o=u.indexOf(c))&&((i(c)||1===c.focused)&&(r=1),e.removeChild(c),e.insertBefore(c,t[r-1]),1===r&&(c.focus(),c.focused=0));break;case"replace":c=n.val,u=n.old,(i(c)||1===c.focused)&&(r=1),i(u)&&(u.focused=1),e.replaceChild(c,u),1===r&&(c.focus(),c.focused=0);break;case"insert":e.insertBefore(n.val,t[n.idx]);break;case"reverse":for(r=0,o=+t.length/2;r<o;r++)t.emit("change",{type:"swap",from:r,to:t.length-r-1});break;case"move":c=t[n.from],i(c)&&(r=1),e.insertBefore(c,t[n.to]),1===r&&c.focus();break;case"swap":n.j=C("div.swap",c={s:{display:"none"}}),n.k=C("div.swap",c),u=t[n.from],c=t[n.to],i(c)?r=1:i(u)&&(r=2),e.replaceChild(n.j,u),e.replaceChild(n.k,c),e.replaceChild(c,n.j),e.replaceChild(u,n.k),1===r?c.focus():2===r&&u.focus();break;case"remove":e.removeChild(t[n.idx]);break;case"set":e.replaceChild(n.val,t[n.idx]);break;case"empty":for(r=0;r<t.length;r++)e.removeChild(t[r]);break;default:console.log("unknown event",n)}}t.on("change",c),n.push(()=>{t.off("change",c)})}return o}(e,t,n):"function"==typeof t?Object(r.d)(t)?z(e,t,n):(()=>{for(;"function"==typeof t;)t=t.call(e,e);return A(e,t,n)})():null==t?Object(g.c)("null"):Object(g.i)(t),z=(e,t,n=[])=>{var o,i,c,u;return"function"==typeof t?(Object(r.d)(t)?(e.aC(o=Object(g.c)("obv value")),e.aC(u=Object(g.c)("obv bottom")),n.push(t(t=>{if(c=A(e,t,n),Array.isArray(o))for(t of o)e.rC(t);else o&&(o.parentNode===e?e.rC(o):Object(y.f)("obv unable to replace child node because parentNode has changed"));e.iB(c,u),o=Array.isArray(t)?t:c}),()=>{e.rC(u)})):null!=(i=A(e,t,n))&&(o=e.aC(i,n)),o=A(e,o,n)):o=A(e,t,n),o};Node.prototype.iB=function(e,t,n){return this.insertBefore(z(this,e,n),t)},Node.prototype.aC=function(e,t){return this.appendChild(z(this,e,t))},Node.prototype.rC=function(e){return this.removeChild(e)},Node.prototype.rm=function(){return this.parentNode.removeChild(this)},Node.prototype.apply=function(e,t){for(let n in e)w(this,n,e[n],t);return this}},function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(0),o=n(3);const i=()=>c({h:o.a,s:o.b},"global");function c(e=i(),t=Object(r.m)()){var n=[],o=[],c=Object.create(e,{_ns:Object(r.e)(t),_ctx:Object(r.e)(o),_h:Object(r.e)(null,!0),_s:Object(r.e)(null,!0),h:Object(r.b)(()=>c._h||(c._h=e.h.context())),s:Object(r.b)(()=>c._s||(c._s=e.s.context())),cleanupFuncs:Object(r.e)(n),parent:Object(r.e)(e),cleanup:Object(r.e)(e=>{for(;e=o.pop();)e.cleanup();for(;e=n.pop();)e();c._h&&c._h.cleanup(),c._s&&c._s.cleanup()})});return"global"===t&&void 0!==e._ctx&&Object(r.a)("when creating the global context,  `_ctx` property should not be defined. (it's automatically created to store named subcontexts)"),"global"!==t&&e._ctx[t]&&Object(r.a)("parent context already has a subcontext with this name registered"),"global"!==t&&(e._ctx.push(c),e._ctx[t]=c),c}},function(e,t,n){"use strict";var r,o=n(0),i=n(2),c=n(1),u=c.j.requestAnimationFrame||c.j.mozRequestAnimationFrame||c.j.webkitRequestAnimationFrame||(r=0,function(e){var t,n=(new Date).getTime();return t=Math.max(0,16-(n-r)),r=n+t,setTimeout(function(){e(n+t)},t)}),a=n(3);function s(e,t){var n=0,r=e.length;if("number"==typeof r)for(;n<r;n++)t(e[n]);else t(e)}var f=function(e,t){function n(){var e,t,n=[];this.add=function(e){n.push(e)},this.call=function(){for(e=0,t=n.length;e<t;e++)n[e].call()},this.remove=function(r){var o=[];for(e=0,t=n.length;e<t;e++)n[e]!==r&&o.push(n[e]);n=o},this.length=function(){return n.length}}s(e,function(e){!function(e,t){if(e.resizedAttached)e.resizedAttached.add(t);else{var r,o,i;e.resizedAttached=new n,e.resizedAttached.add(t);var s,f,l,d,b="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;z-index:-1;visibility:hidden",h="position:absolute;left:0;top:0;transition:0s";e.resizeSensor=Object(a.a)(".resize-sensor",{s:b},r=Object(a.a)(".resize-sensor-expand",{s:b},o=Object(a.a)("div",{s:h})),i=Object(a.a)(".resize-sensor-shrink",{s:b},Object(a.a)("div",{s:h+";width:200%;height:200%"}))),e.appendChild(e.resizeSensor),"static"==Object(c.g)(e,"position")&&(e.style.position="relative");var p=e.offsetWidth,v=e.offsetHeight,y=function(){o.style.width="100000px",o.style.height="100000px",r.scrollLeft=1e5,r.scrollTop=1e5,i.scrollLeft=1e5,i.scrollTop=1e5};y();var g=function(){f=0,s&&(p=l,v=d,e.resizedAttached&&e.resizedAttached.call())},j=function(){l=e.offsetWidth,d=e.offsetHeight,(s=l!=p||d!=v)&&!f&&(f=u(g)),y()};r.addEventListener("scroll",j),i.addEventListener("scroll",j)}}(e,t)}),this.detach=function(t){f.detach(e,t)}};f.detach=function(e,t){s(e,function(e){e.resizedAttached&&"function"==typeof t&&(e.resizedAttached.remove(t),e.resizedAttached.length())||e.resizeSensor&&(e.contains(e.resizeSensor)&&e.removeChild(e.resizeSensor),delete e.resizeSensor,delete e.resizedAttached)})};var l=f,d=n(4);function b(e,t,n,r,u,s,f){var b,h,p,v,y,g,j,m,O,x,w=Object(o.i)({},Object(o.j)(n),u);return c.a&&((b=c.b.style).background="#fff",b.fontFamily="Helvetica Neue,Helvetica,Arial,sans-serif",b.padding=b.margin=0),p="string"==typeof e?(b=Object(c.f)(e))&&b.id||e:Object(o.m)(),b={s:{position:"absolute",left:0,top:0,bottom:0,right:0,overflow:"hidden"}},"object"!=typeof t||Object(c.h)(t)||(b=Object(o.i)(b,t)),e=Object(c.h)(e)?e:Object(a.a)("div#"+p,b),Object(c.h)(t)||(t=c.b),t.aC(e),c.j.G=v=e._G=Object(d.a)(void 0,p),v.E=y={frame:e,body:c.e.body,win:c.j},b=screen.orientation,v.orientation=Object(i.h)(b.type.split("-").concat(b.angle)),b.onchange=function(e){v.orientation((b=e.target).type.split("-").concat(b.angle))},v.width=Object(i.h)(g=e.clientWidth||w.width||300),v.height=Object(i.h)(j=e.clientHeight||w.height||300),v.resize=Object(i.h)({width:g,height:j}),(m=Math.round(c.j.devicePixelRatio||1))>4&&(m=4),v.dpr=Object(i.h)(m),e._id=p,x=e.cleanup,e.cleanup=()=>{t=e.parentNode,h.disconnect(),h=null,t&&t.removeChild(e),"function"==typeof x&&x()},v.cleanupFuncs.push(e.cleanup),O={C:w,G:v,E:y,v:i.h,t:i.g,c:i.b,h:v.h,s:v.s},function(t){function n(){for(var n,r,o=0;n=e.firstChild;)e.removeChild(n);for(;n=c.b.childNodes[o];)"#"===n.nodeName[0]?c.b.removeChild(n):o++;"function"==typeof t&&(n=t(O))&&(e.aC(n),"function"==typeof f&&f(e,n)),r=new l(e,()=>{v.width(g=e.clientWidth),v.height(j=e.clientHeight),v.resize({width:g,height:j})}),v.cleanupFuncs.push(()=>r.detach())}c.e.body?setTimeout(n,1):c.j.addEventListener("DOMContentLoaded",n,!1)}(s),O}t.a=function(e,t={},n={}){b(e.name,null,t,0,{},t=>e(t))}},,function(e,t,n){"use strict";n.r(t);var r=n(5);Object(r.a)(function(e){const{G:t,h:n,c:r,t:o,v:i}=e;return n("div","hello booble-bobble")})}]);