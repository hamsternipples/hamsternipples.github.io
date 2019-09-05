(e=>{var t={}
function n(r){if(t[r])return t[r].exports
var o=t[r]={i:r,l:0,exports:{}}
return e[r].call(o.exports,o,o.exports,n),o.l=1,o.exports}n.m=e,n.c=t,n.d=(e,t,r)=>{n.o(e,t)||Object.defineProperty(e,t,{enumerable:1,get:r})},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:1})},n.t=(e,t)=>{if(1&t&&(e=n(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var r=Object.create(null)
if(n.r(r),Object.defineProperty(r,"default",{enumerable:1,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,(t=>e[t]).bind(null,o))
return r},n.n=e=>{var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=(e,t)=>({}).hasOwnProperty.call(e,t),n.p="",n(n.s=17)})([(e,t,n)=>{var r=function(e){const t=typeof e
return null!=e&&("object"==t||"function"==t)}
function o(e){throw Error(e)}function i(e,t){for(var n=0;n<e.length;++n)t.call(e,e[n],n)}n.d(t,"g",()=>o),n.d(t,"e",()=>i),n.d(t,"n",()=>c),n.d(t,"o",()=>s),n.d(t,"q",()=>a),n.d(t,"p",()=>l),n.d(t,"s",()=>u),n.d(t,"l",()=>f),n.d(t,"m",()=>d),n.d(t,"r",()=>h),n.d(t,"i",()=>p),n.d(t,"k",()=>b),n.d(t,"a",()=>v),n.d(t,"d",()=>g),n.d(t,"b",()=>m),n.d(t,"c",()=>y),n.d(t,"h",()=>j),n.d(t,"j",()=>O),n.d(t,"f",()=>w)
const c=()=>Math.random().toString(32).substr(2),s=e=>Math.floor(Math.random()*e),a=e=>{const t=null==e?0:e.length
return t?e[s(t)]:void 0}
function l(e,t=null){for(var n=-1,r=e.length,o=0;++n<r;){for(;e[n+o]===t;)o++
o>0&&(e.splice(n,o),o=0)}return e}function u(e,t,n){var r=e[t]
e[t]=e[n],e[n]=r}function f(e,t,n){for(let r of t)n(e,r)
return e}function d(e,t,n,r){for(let o of t)for(let t of n)r(e,o,t)
return e}function h(e,...t){var n=0
return e.replace(/%[s|d]/g,()=>t[n++])}const p=(e,t)=>(t=Math.pow(10,t||0),""+Math.round(e*t)/t)
function b(e){try{return"string"==typeof e?JSON.parse(e):e}catch(e){}return{}}const v=(e,t,n=1,r=1)=>({get:e,set:t,enumerable:n,configurable:r}),g=(e,t=0,n=1,r=1)=>({value:e,writable:t,enumerable:n,configurable:r}),m=(e,t,n)=>Object.defineProperty(e,t,n),y=(e,t)=>Object.defineProperties(e,t)
function j(...e){return Object.assign(...e)}function O(e,...t){if(!t.length)return e
var n,o,i=t.shift()
if(r(e)&&r(i))for(n in i)r(o=i[n])?(e[n]||(e[n]={}),O(e[n],o)):Object.assign(e,{[n]:o})
return O(e,...t)}function w(e,t=0){for(var n=Array(e);e-- >0;)n[e]="function"==typeof t?t(e):t
return n}},(e,t,n)=>{n.d(t,"j",()=>r),n.d(t,"e",()=>o),n.d(t,"b",()=>i),n.d(t,"d",()=>s),n.d(t,"a",()=>l),n.d(t,"i",()=>u),n.d(t,"c",()=>f),n.d(t,"h",()=>d),n.d(t,"f",()=>h),n.d(t,"g",()=>p)
const r=window,o=r.document,i=o.body,c=r.getComputedStyle,s=r.customElements,a=o.location,l=~a.host.indexOf("localhost"),u=(a.pathname,a.protocol,a.hostname,a.port&&a.port,e=>o.createTextNode(e)),f=e=>o.createComment(e),d=e=>e&&e.nodeType,h=e=>"string"==typeof e?o.getElementById(e):e
function p(e,t){var n=e.currentStyle
return n?n[t]:c?c(e,null).getPropertyValue(t):e.style[t]}},(e,t,n)=>{n.d(t,"d",()=>o),n.d(t,"a",()=>i),n.d(t,"h",()=>a),n.d(t,"f",()=>l),n.d(t,"g",()=>u),n.d(t,"c",()=>f),n.d(t,"b",()=>d),n.d(t,"e",()=>h)
var r=n(0)
function o(e){"function"==typeof e&&"string"==typeof e._obv||Object(r.g)("expected an observable")}function i(e,t){e(t())
var n=e(t),r=t(e)
return()=>{n(),r()}}function c(e,t,n){for(var o,i=0,c=0;c<e.length;c++)"function"==typeof(o=e[c])?o(n,t):i++
i>11&&setTimeout(r.p,1,e)}function s(e,t){var n=e.indexOf(t)
~n&&(e[n]=null)}function a(e){if("function"==typeof e&&"value"===e._obv)return e
var t=e,n=[]
return o.gc=()=>Object(r.p)(n),Object(r.b)(o,"listeners",{get:o.gc}),o.set=e=>c(n,t,t=void 0===e?t:e),o.once=(e,t)=>{var n=o((t,r)=>{e(t,r),n()},t)
return n},o._obv="value",o
function o(e,r){return void 0===e?t:"function"!=typeof e?(t===e||c(n,t,t=e),e):(n.push(e),0,void 0===t||0==r||e(t),()=>{s(n,e),0})}}function l(e,t){if(e&&"object"===e._obv)return e
var n={},o={},i=[],c={_obv:Object(r.d)("object"),get:Object(r.d)((e,t)=>{for(var r,o=n,i=Array.isArray(e)?e:"string"==typeof e&&~e.indexOf(".")?e.split("."):[e];r=i.unshift();)void 0===(o=n[r])&&(o=n[r]={})
return o}),set:Object(r.d)(e=>{for(let t of i)o[t]&&e[t]&&o[t](e[t])})}
for(let n of Array.isArray(t)?t:Object.keys(e)){let t=e[n]
void 0!==t&&("value"===t._obv?(o[n]=t,i.push(n)):t._obv?c[n]=Object(r.d)(t):i.push(n))}for(let t of i)c[t]=Object(r.a)(()=>(o[t]||(o[t]=a(e[t])))(),e=>o[t](e))
return Object(r.c)(n,c),n}function u(e,t,n){return o(e),r._obv=e._obv,r
function r(r,o){return void 0===r?t(e()):"function"!=typeof r?e((n||t)(r)):e((e,n)=>{r(t(e,n))},o)}}function f(e,t){var n,i,a=1,l=e.length,u=Array(l),f=[],d=[]
for(let n=0;l>n;n++)"function"==typeof(i=e[n])?(o(i),d.push(i(e=>{var r=u[n]
u[n]=e,r!==e&&0==a&&h(t.apply(null,u))},a))):u[n]=i
return h._obv="value",h.gc=()=>Object(r.p)(f),Object(r.b)(h,"listeners",{get:h.gc}),h.cleanup=()=>{for(i of d)i()},n=t.apply(null,u),a=0,h
function h(e,r){return void 0===e?void 0===n?n=t.apply(null,u):n:"function"!=typeof e?(n===e||c(f,n,n=e),e):(f.push(e),0,0==r||e(n),()=>{s(f,e),0})}}function d(e,t){var n,r=e.length,o=Array(r)
for(let t=0;r>t;t++)o[t]="function"==typeof(n=e[t])?n():n
return t.apply(null,o)}function h(e,t=null){return"function"==typeof e&&(!t&&e._obv||e._obv===t)}},function(e,t,n){n.d(t,"d",()=>u),n.d(t,"a",()=>v),n.d(t,"b",()=>g),n.d(t,"c",()=>y)
var r=n(2)
const o=(e,t,n,r=0)=>(e.on||e.addEventListener).call(e,t,n,r),i=(e,t,n,r=0)=>(e.off||e.removeEventListener).call(e,t,n,r),c=(e,t,n)=>(e.dispatchEvent(new Event(t)),n),s=e=>e&&e.preventDefault()
function a(e,t,n,r,c,s){let a=t=>{r("function"==typeof n?n():n?e[n]:t)}
return o(e,t,a,s),c&&n&&a(),()=>i(e,t,a,s)}function l(e,t="value",n="keyup",r,c){return r="function"==typeof r?r:e=>13===e.which&&!e.shiftKey,a._obv="event",a
function a(a){return void 0===a?a:"function"!=typeof a?void 0:("function"==typeof c||(c=n=>r(n)?(a(e[t],n),s(n),1):0),o(e,n,c),()=>{i(e,n,c)})}}function u(e,t){return Object(r.d)(e),"function"!=typeof t&&error("update_fn should be a function which updates the obv value, eg. (v) => !v"),n=>e(t(e(),n))}function f(e,t="value",n="input"){return r._obv="attribute",r
function r(r,o){return void 0===r?e[t]:"function"!=typeof r?c(e,n,e[t]=r):a(e,n,t,r,o)}}function d(e,t="value",n="change"){const r=(n=e.selectedIndex)=>~n?e.options[n][t]:null,o=o=>{for(var i=e.options,s=0;s<i.length;s++)if(i[s][t]==o)return c(e,n,r(e.selectedIndex=s))}
return i._obv="select",i
function i(i,c){return void 0===i?e.options[e.selectedIndex][t]:"function"!=typeof i?o(i):a(e,n,r,i,c)}}function h(e,t,n){var r=0
const c=()=>r||val.call(e,r=1),s=()=>r&&val.call(e,r=0)
return a._obv="toggle",a
function a(a){return void 0===a?r:"function"!=typeof a?void 0:(o(e,t,c),o(e,n||t,s),()=>{i(e,t,c),i(e,n||t,s)})}}function p(e){return h(e,"mouseover","mouseout")}function b(e){return h(e,"focus","blur")}function v(e,t,n,r){o(e,t,n,r),this.push(()=>{i(e,t,n,r)})}function g(e,t,n){this.push(a(e,"click",0,n=>{Object(r.e)(t)?t(!t()):t.call(e,n)},0,n),a(e,"touchstart",0,n=>{s(n),Object(r.e)(t)?t(!t()):t.call(e,n)},0,n))}function m(e,t,n=1,r=0){this.push(a(e,"mouseup",0,()=>{t(r)}),a(e,"mousedown",0,()=>{t(n)}),a(e,"touchend",0,e=>{s(e),t(r)}),a(e,"touchstart",0,e=>{s(e),t(n)}))}function y(e,t){var n,o=this
for(n in t)((n,i)=>{switch(n){case"input":o.push(f(e,t[n+".attr"],t[n+".on"])(i))
break
case"hover":o.push(p(e)(i))
break
case"focus":o.push(b(e)(i))
break
case"select_label":n=d(e,"label"),o.push(Object(r.e)(i)?Object(r.a)(n,i):n(i))
break
case"select":case"select_value":n=d(e),o.push(Object(r.e)(i)?Object(r.a)(n,i):n(i))
break
case"boink":g.call(o,e,i)
break
case"press":m.call(o,e,i)
break
default:~n.indexOf(".")||("function"!=typeof i&&error("observer must be a function"),o.push(l(e,t[n+".attr"],t[n+".event"]||n,t[n+".valid"])(i)))}})(n,t[n])}},(e,t,n)=>{n.d(t,"b",()=>a),n.d(t,"a",()=>u),n.d(t,"c",()=>d)
var r=n(0),o=n(5),i=n(1),c=n(2),s=n(3)
function a(){return(function(e){let t
for(;null==(t=l.get(e))&&null!=(e=e.parentNode););return t})(i.e.getElementById("global_ctx")||d({_id:0,ERROR:"THIS IS THE GLOBAL CTX",o:{},h:o.a,s:o.b,v:c.h,t:c.g,c:c.c,m:s.d},e=>i.e.head.aC(Object(o.a)("meta#global_ctx"))))}const l=new Map
function u(e){let t=l.get(e)
t&&(t.cleanup(),l.delete(e))}let f=0
function d(e=a(),t,...n){"function"!=typeof t&&Object(r.g)("new_ctx is now called with a function which returns an element")
var o=[],c=Object.create(e,{_id:Object(r.d)(++f),o:Object(r.d)({}),_h:Object(r.d)(null,1),_s:Object(r.d)(null,1),h:Object(r.a)(()=>c._h||(c._h=e.h.context())),s:Object(r.a)(()=>c._s||(c._s=e.s.context())),cleanupFuncs:Object(r.d)(o),parent:Object(r.d)(e),cleanup:Object(r.d)(e=>{for(;e=o.pop();)e()
c._h&&c._h.cleanup(),c._s&&c._s.cleanup()})})
let s=t(c,...n)
return Array.isArray(s)&&Object(r.g)("this will assign a context to your element, so wrap these elements in a container element"),Object(i.h)(s)||null==s||Object(r.g)("you must return an element when creating a new context"),l.set(s,c),s}},function(e,t,n){n.d(t,"a",()=>p),n.d(t,"b",()=>b)
var r=n(2),o=n(3),i=n(4),c=n(0),s=n(1),a={s:"style",c:"className",class:"className",for:"htmlFor"},l={className:"class",htmlFor:"for"},u=["div"]
function f(e){var t=[]
function n(...n){var r
function o(o){var i,c,a,l
function f(t){var o,i=t.split(/([\.#]?[a-zA-Z0-9_:-]+)/)
for(o of(/^\.|#/.test(i[1])&&(r=e("div")),i))"string"==typeof o&&(a=o.length)&&(r?"."!==(l=o[0])&&"#"!==l||(c=o.substring(1,a))&&("."===l?r.classList.add(c):r.id=c):r=e(o,n))}if(!r&&"number"==typeof o&&o<u.length&&(o=f(u[o])),null!=o)if("string"==typeof o)r?r.aC(i=Object(s.i)(o)):f(o)
else if("number"==typeof o||"boolean"==typeof o||o instanceof Date||o instanceof RegExp)r.aC(i=Object(s.i)(o.toString()))
else if(Array.isArray(o))r.aC(o,t)
else if(Object(s.h)(o)||o instanceof s.j.Text)r.aC(i=o)
else if("object"==typeof o)for(l in o)d(r,l,o[l],t)
else"function"==typeof o&&(i=g(r,o,t))
return i}for(;n.length;)o(n.shift())
return r}return n.cleanupFuncs=t,n.cleanup=()=>{for(var e=0;e<t.length;e++)t[e]()},n}function d(e,t,n,r=[]){var i,s,u,f=a[t]||t
if("function"==typeof n)setTimeout(()=>{"boink"===f?o.c.call(r,e,{boink:n}):"press"===f?o.c.call(r,e,{press:n}):"hover"===f?o.c.call(r,e,{hover:n}):"focused"===f?o.c.call(r,e,{focus:n}):"selected"===f?o.c.call(r,e,{select:n}):"input"===f?o.c.call(r,e,{input:n}):"on"===f.substr(0,2)?o.a.call(r,e,f.substr(2),n,0):"before"===f.substr(0,6)?o.a.call(r,e,f.substr(6),n,1):(r.push(n(t=>{d(e,f,t,r)},1)),"INPUT"===(i=e.nodeName)&&o.c.call(r,e,{input:n}),"SELECT"===i&&o.c.call(r,e,"label"===f?{select_label:n}:{select:n}))},0)
else if("assign"===f||"extend"===f)Object.assign(e,n)
else if("data"===f)if("object"==typeof n)for(i in n)e.dataset[i]=n[i]
else Object(c.g)("data property should be passed as an object")
else if("multiple"===f)e.multiple=!!n
else if("contenteditable"===f)e.contentEditable=!!n
else if("autofocus"===f)setTimeout(()=>e.focus(),10)
else if("autoselect"===f)setTimeout(()=>{e.focus()
var t=[n[0]||0,n[1]||-1]
e.setSelectionRange.apply(e,t)},10)
else if("selected"===f)e.defaultSelected=!!n
else if("checked"===f)e.defaultChecked=!!n
else if("value"===f)e.defaultValue=e.value=n
else if("for"===f)e.htmlFor=n
else if("class"===f){if(n)if(s=e.classList,Array.isArray(n))for(i of n)i&&s.add(i)
else s.add(n)}else if((u="on"===f)||"before"===f){if("object"==typeof n)for(i in n)"function"==typeof(s=n[i])&&o.a.call(r,e,i,s,u?0:1)}else"html"===f?e.innerHTML=n:"observe"===f?setTimeout(o.c.bind(r,e,n),0):"style"===f?"string"==typeof n?e.style.cssText=n:(function(e,t,n=[]){if("object"==typeof t)for(var r in t)((t,r)=>{"function"==typeof r?n.push(r(n=>{e.style[t]="number"==typeof n&&"opacity"!==t?n+"px":n},1)):e.style[t]="number"==typeof r&&"opacity"!==t?r+"px":r})(r,t[r])
else e.setAttribute("style",t)})(e,n,r):~f.indexOf("-")?e.setAttribute(f,n):void 0!==n&&(~(u=f.indexOf(":"))?"xlink"===f.substr(0,u)?e.setAttributeNS("http://www.w3.org/1999/xlink",f.substr(++u),n):Object(c.g)("unknown namespace for attribute: "+f):e.namespaceURI?e.setAttribute(l[f]||f,n):e[f]=n)}var h={}
Object(c.b)(h,"define",Object(c.d)((e,t,n)=>{s.d.define(e,t),h[e]="number"==typeof n?n:Array.isArray(n)?n.length:t.length||0}))
var p=(function e(t){var n=f((e,t)=>{var n
return~e.indexOf("-")?void 0!==(n=h[e])?new(s.d.get(e))(...t.splice(0,n)):new(s.d.get(e)):s.e.createElement(e)})
t||p.cleanupFuncs.push(()=>n.cleanup())
n.context=e
return n})(1)
var b=(function e(t){var n=f(e=>s.e.createElementNS("http://www.w3.org/2000/svg",e))
t||b.cleanupFuncs.push(()=>n.cleanup())
n.context=e
return n})(1)
const v=(e,t,n)=>Object(s.h)(t)?t:Array.isArray(t)?(function(e,t,n){var r,o=s.e.createDocumentFragment(),i=t=>t===(e.activeElement||s.e.activeElement)
for(r of t)o.aC(v(e,r,n))
if("array"===t.observable){function c(n){var r,o,c,a,l=t.length
switch(n.type){case"unshift":for(r=n.values.length-1;r>=0;r--)e.insertBefore(Object(s.h)(c=n.values[r])?c:Object(s.i)(c),t[0])
break
case"push":for(r=0;r<n.values.length;r++)e.insertBefore(Object(s.h)(c=n.values[r])?c:Object(s.i)(c),t[t.length+n.values.length-r-1])
break
case"pop":e.removeChild(t[l-1])
break
case"shift":e.removeChild(t[0])
break
case"splice":if(0>(o=n.idx)&&(o+=l),n.remove)for(r=0;r<n.remove;r++)(c=t[o++])&&((a=n.add[r])?e.replaceChild(Object(s.h)(a)?a:Object(s.i)(a),c):e.removeChild(c))
if(n.add)for(r=0;r<n.add.length;r++)e.insertBefore(Object(s.h)(c=n.add[r])?c:Object(s.i)(c),t[o])
break
case"sort":for(r=0,a=n.orig;r<t.length;r++)c=t[r],r!==(o=a.indexOf(c))&&((i(c)||1===c.focused)&&(r=1),e.removeChild(c),e.insertBefore(c,t[r-1]),1===r&&(c.focus(),c.focused=0))
break
case"replace":c=n.val,a=n.old,(i(c)||1===c.focused)&&(r=1),i(a)&&(a.focused=1),e.replaceChild(c,a),1===r&&(c.focus(),c.focused=0)
break
case"insert":0>(r=n.idx)&&(r+=l),e.insertBefore(n.val,t[r])
break
case"reverse":for(r=0,o=+t.length/2;o>r;r++)t.emit("change",{type:"swap",from:r,to:t.length-r-1})
break
case"move":0>(r=n.from)&&(r+=l),0>(o=n.to)&&(o+=l),c=t[r],i(c)&&(r=1),e.insertBefore(c,t[o]),1===r&&c.focus()
break
case"swap":n.j=p("div.swap",c={s:{display:"none"}}),n.k=p("div.swap",c),0>(r=n.from)&&(r+=l),0>(o=n.to)&&(o+=l),a=t[r],c=t[o],i(c)?r=1:i(a)&&(r=2),e.replaceChild(n.j,a),e.replaceChild(n.k,c),e.replaceChild(c,n.j),e.replaceChild(a,n.k),1===r?c.focus():2===r&&a.focus()
break
case"remove":0>(r=n.idx)&&(r+=l),e.removeChild(t[r])
break
case"set":0>(r=n.idx)&&(r+=l),e.replaceChild(n.val,t[r])
break
case"empty":for(r=0;r<t.length;r++)e.removeChild(t[r])
break
default:console.log("unknown event",n)}}t.on("change",c),n.push(()=>{t.off("change",c)})}return o})(e,t,n):"function"==typeof t?Object(r.e)(t)?g(e,t,n):(()=>{for(;"function"==typeof t;)t=t.call(e,e)
return v(e,t,n)})():null==t?Object(s.c)("null"):Object(s.i)(t),g=(e,t,n=[])=>{var o,i,a,l
return"function"==typeof t?(Object(r.e)(t)?(e.aC(o=Object(s.c)("obv value")),e.aC(l=Object(s.c)("obv bottom")),n.push(t(t=>{if(a=v(e,t,n),Array.isArray(o))for(t of o)e.rC(t)
else o&&(o.parentNode===e?e.rC(o):Object(c.g)("obv unable to replace child node because parentNode has changed"))
e.iB(a,l),o=Array.isArray(t)?t:a}),()=>{e.rC(l)})):null!=(i=v(e,t,n))&&(o=e.aC(i,n)),o=v(e,o,n)):o=v(e,t,n),o},m=Node.prototype
m.iB=function(e,t,n){return this.insertBefore(g(this,e,n),t)},m.aC=function(e,t){return this.appendChild(Object(s.h)(e)?e:g(this,e,t))},m.rC=function(e){return this.removeChild(e)},m.rm=function(){return Object(i.a)(this),this.remove()},m.apply=function(e,t){for(let n in e)d(this,n,e[n],t)},m.empty=function(){for(var e;e=this.firstChild;)this.removeChild(e)},m.on=m.addEventListener,m.off=m.removeEventListener},(e,t,n)=>{n.r(t),n.d(t,"_px",()=>r),n.d(t,"px",()=>o),n.d(t,"obv_log",()=>i),n.d(t,"obv_debug",()=>c)
var r=e=>"string"==typeof e&&~e.indexOf("px")?e:e+"px",o=e=>transform(e,r),i=(e,t=e._obv,n="log")=>e(e=>console[n](t+":",e)),c=(e,t="")=>{let r=n(8)(t)
return e(e=>r(name+":",e))}},function(e,t,n){var r,o=n(0),i=n(2),c=n(1),s=c.j.requestAnimationFrame||c.j.mozRequestAnimationFrame||c.j.webkitRequestAnimationFrame||(r=0,e=>{var t,n=(new Date).getTime()
return r=n+(t=Math.max(0,16-(n-r))),setTimeout(()=>{e(n+t)},t)}),a=n(5)
function l(e,t){var n=0,r=e.length
if("number"==typeof r)for(;r>n;n++)t(e[n])
else t(e)}var u=function(e,t){function n(){var e,t,n=[]
this.add=e=>{n.push(e)},this.call=()=>{for(e=0,t=n.length;t>e;e++)n[e].call()},this.remove=r=>{var o=[]
for(e=0,t=n.length;t>e;e++)n[e]!==r&&o.push(n[e])
n=o},this.length=()=>n.length}l(e,e=>{!(function(e,t){if(e.resizedAttached)e.resizedAttached.add(t)
else{var r,o,i
e.resizedAttached=new n,e.resizedAttached.add(t)
var l,u,f,d,h="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;z-index:-1;visibility:hidden",p="position:absolute;left:0;top:0;transition:0s"
e.resizeSensor=Object(a.a)(".resize-sensor",{s:h},r=Object(a.a)(".resize-sensor-expand",{s:h},o=Object(a.a)("div",{s:p})),i=Object(a.a)(".resize-sensor-shrink",{s:h},Object(a.a)("div",{s:p+";width:200%;height:200%"}))),e.appendChild(e.resizeSensor),"static"==Object(c.g)(e,"position")&&(e.style.position="relative")
var b=e.offsetWidth,v=e.offsetHeight,g=()=>{o.style.width="100000px",o.style.height="100000px",r.scrollLeft=1e5,r.scrollTop=1e5,i.scrollLeft=1e5,i.scrollTop=1e5}
g()
var m=()=>{u=0,l&&(b=f,v=d,e.resizedAttached&&e.resizedAttached.call())},y=()=>{f=e.offsetWidth,d=e.offsetHeight,(l=f!=b||d!=v)&&!u&&(u=s(m)),g()}
r.addEventListener("scroll",y),i.addEventListener("scroll",y)}})(e,t)}),this.detach=t=>{u.detach(e,t)}}
u.detach=(e,t)=>{l(e,e=>{e.resizedAttached&&"function"==typeof t&&(e.resizedAttached.remove(t),e.resizedAttached.length())||e.resizeSensor&&(e.contains(e.resizeSensor)&&e.removeChild(e.resizeSensor),delete e.resizeSensor,delete e.resizedAttached)})}
var f=u,d=n(4)
function h(e,t,n,r,s,a,l){var u,h,p,b,v,g,m,y,j,O,w=Object(o.j)({},Object(o.k)(n),s)
c.a&&((u=c.b.style).background="#fff",u.fontFamily="Helvetica Neue,Helvetica,Arial,sans-serif",u.padding=u.margin=0),p="string"==typeof e?(u=Object(c.f)(e))&&u.id||e:Object(o.n)(),u={s:{position:"absolute",left:0,top:0,bottom:0,right:0,overflow:"hidden"}},"object"!=typeof t||Object(c.h)(t)||(u=Object(o.j)(u,t)),b=Object(d.b)(),e=Object(d.c)(b,({h:t}=b)=>(v=b,Object(c.h)(e)?e:t("div#"+p,u))),Object(c.h)(t)||(t=c.b),t.aC(e),c.j.GG=e._G=b,v.E=g={frame:e,body:c.e.body,win:c.j},u=screen.orientation,b.o.orientation=Object(i.h)(u.type.split("-").concat(u.angle)),u.onchange=e=>{b.o.orientation((u=e.target).type.split("-").concat(u.angle))},b.o.width=Object(i.h)(m=e.clientWidth||w.width||300),b.o.height=Object(i.h)(y=e.clientHeight||w.height||300),b.o.resize=Object(i.h)({width:m,height:y}),(j=Math.round(c.j.devicePixelRatio||1))>4&&(j=4),b.o.dpr=Object(i.h)(j),e._id=p,O=e.cleanup,e.cleanup=()=>{t=e.parentNode,h.disconnect(),h=null,t&&t.removeChild(e),"function"==typeof O&&O()},b.cleanupFuncs.push(e.cleanup),Object(o.h)(b,{C:w,G:b,E:g}),(t=>{function n(){var n,r,o=0
for(e.empty();n=c.b.childNodes[o];)"#"===n.nodeName[0]?c.b.rC(n):o++
"function"==typeof t&&(n=Object(d.c)(b,t))&&(e.aC(n),"function"==typeof l&&l(e,n)),r=new f(e,()=>{b.o.width(m=e.clientWidth),b.o.height(y=e.clientHeight),b.o.resize({width:m,height:y})}),b.cleanupFuncs.push(()=>r.detach())}c.e.body?setTimeout(n,1):c.j.addEventListener("DOMContentLoaded",n,0)})(a)}t.a=function(e,t={},n={}){h(e.name,null,t,0,{},t=>e(t))}},function(e,t,n){!(function(r){function o(){var e
try{e=t.storage.debug}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=Object({NODE_ENV:"development"}).DEBUG),e}(t=e.exports=n(10)).log=function(){return"object"==typeof console&&console.log&&function(){}.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors
if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return
var r="color: "+this.color
e.splice(1,0,r,"color: inherit")
var o=0,i=0
e[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(o++,"%c"===e&&(i=o))}),e.splice(i,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=o,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return 1
return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:(function(){try{return window.localStorage}catch(e){}})(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=e=>{try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(o())})(n(9))},function(e,t){var n,r,o=e.exports={}
function i(){throw Error("setTimeout has not been defined")}function c(){throw Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0)
if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0)
try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}(()=>{try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(e){r=c}})()
var a,l=[],u=0,f=-1
function d(){u&&a&&(u=0,a.length?l=a.concat(l):f=-1,l.length&&h())}function h(){if(!u){var e=s(d)
u=1
for(var t=l.length;t;){for(a=l,l=[];++f<t;)a&&a[f].run()
f=-1,t=l.length}a=null,u=0,(function(e){if(r===clearTimeout)return clearTimeout(e)
if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e)
try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}})(e)}}function p(e,t){this.fun=e,this.array=t}function b(){}o.nextTick=function(e){var t=Array(arguments.length-1)
if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n]
l.push(new p(e,t)),1!==l.length||u||s(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=1,o.env={},o.argv=[],o.version="",o.versions={},o.on=b,o.addListener=b,o.once=b,o.off=b,o.removeListener=b,o.removeAllListeners=b,o.emit=b,o.prependListener=b,o.prependOnceListener=b,o.listeners=e=>[],o.binding=e=>{throw Error("process.binding is not supported")},o.cwd=()=>"/",o.chdir=e=>{throw Error("process.chdir is not supported")},o.umask=()=>0},(e,t,n)=>{var r
function o(e){function n(){if(n.enabled){var e=n,o=+new Date,i=o-(r||o)
e.diff=i,e.prev=r,e.curr=o,r=o
for(var c=Array(arguments.length),s=0;s<c.length;s++)c[s]=arguments[s]
c[0]=t.coerce(c[0]),"string"!=typeof c[0]&&c.unshift("%O")
var a=0
c[0]=c[0].replace(/%([a-zA-Z%])/g,(n,r)=>{if("%%"===n)return n
a++
var o=t.formatters[r]
if("function"==typeof o){var i=c[a]
n=o.call(e,i),c.splice(a,1),a--}return n}),t.formatArgs.call(e,c),(n.log||t.log||console.log.bind(console)).apply(e,c)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=(function(e){var n,r=0
for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0
return t.colors[Math.abs(r)%t.colors.length]})(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[]
for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;r>o;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(RegExp("^"+e.substr(1)+"$")):t.names.push(RegExp("^"+e+"$")))},t.enabled=function(e){var n,r
for(n=0,r=t.skips.length;r>n;n++)if(t.skips[n].test(e))return 0
for(n=0,r=t.names.length;r>n;n++)if(t.names[n].test(e))return 1
return 0},t.humanize=n(11),t.names=[],t.skips=[],t.formatters={}},(e,t)=>{var n=1e3,r=60*n,o=60*r,i=24*o,c=365.25*i
function s(e,t,n){if(e>=t)return 1.5*t>e?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=(e,t)=>{t=t||{}
var a,l=typeof e
if("string"===l&&e.length>0)return(function(e){if((e+="").length>100)return
var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e)
if(!t)return
var s=parseFloat(t[1])
switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*c
case"days":case"day":case"d":return s*i
case"hours":case"hour":case"hrs":case"hr":case"h":return s*o
case"minutes":case"minute":case"mins":case"min":case"m":return s*r
case"seconds":case"second":case"secs":case"sec":case"s":return s*n
case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s
default:return}})(e)
if("number"===l&&0==isNaN(e))return t.long?s(a=e,i,"day")||s(a,o,"hour")||s(a,r,"minute")||s(a,n,"second")||a+" ms":(function(e){if(e>=i)return Math.round(e/i)+"d"
if(e>=o)return Math.round(e/o)+"h"
if(e>=r)return Math.round(e/r)+"m"
if(e>=n)return Math.round(e/n)+"s"
return e+"ms"})(e)
throw Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},,,,,,function(e,t,n){n.r(t)
var r=n(7),o=n(4),i=(n(2),n(6)),c=n(0)
let s=0,a=0,l={c:[],init(){this.value=e=>{if("function"==typeof e&&"value"===e._obv)return e
var t=e,n=[]
return r.gc=()=>Object(c.p)(n),Object(c.b)(r,"listeners",{get:r.gc}),r.set=e=>emit(n,t,t=void 0===e?t:e),r.once=(e,t)=>{var n=r((t,r)=>{e(t,r),n()},t)
return n},r._obv="value",r
function r(e,r){return void 0===e?t:"function"!=typeof e?(t===e||emit(n,t,t=e),e):(n.push(e),s++,void 0===t||0==r||e(t),this.c.push(()=>{remove(n,e),s--}))}},this.compute=(e,t,n=0)=>{var r,o,i=1,s=e.length,l=Array(s),u=[],f=[]
for(let n=0;s>n;n++)"function"==typeof(o=e[n])?(ensure_obv(o),f.push(o(e=>{var r=l[n]
l[n]=e,r!==e&&0==i&&d(t.apply(null,l))},i))):l[n]=o
return r=t.apply(null,l),d._obv="value",d.gc=()=>Object(c.p)(u),Object(c.b)(d,"listeners",{get:d.gc}),d.cleanup=()=>{for(o of f)o()},i=0,d
function d(e,t){return void 0===e?r:"function"!=typeof e?(r===e||emit(u,r,r=e),e):(u.push(e),a++,void 0===r||0==t||e(r),this.c.push(()=>{remove(u,e),a--}))}}}}
Object(r.a)(function(e){const{G:t,h:n,c:r,t:c,v:u}=e
return(e=>{function t(){let e={value:s,compute:a}
return console.log(e),e}const n={myArrowFunction:null,init(){this.myArrowFunction=()=>{console.log(this)}}}
n.init(),n.myArrowFunction(),(0,n.myArrowFunction)(),l.init()
const r=l.value,o=r(10)
r(20),r(30)
t()
const u=c(o,e=>10*e)
t()
Object(i.obv_log)(u,"n11")
t()
const f=c(o,e=>10*e)
t()
Object(i.obv_log)(f,"n12")
t()})(Object(o.c)(t,"test1")),n("div","hello booble-bobble")})}])
