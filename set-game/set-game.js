(e=>{var t={}
function n(r){if(t[r])return t[r].exports
var s=t[r]={i:r,l:0,exports:{}}
return e[r].call(s.exports,s,s.exports,n),s.l=1,s.exports}n.m=e,n.c=t,n.d=(e,t,r)=>{n.o(e,t)||Object.defineProperty(e,t,{enumerable:1,get:r})},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:1})},n.t=(e,t)=>{if(1&t&&(e=n(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var r=Object.create(null)
if(n.r(r),Object.defineProperty(r,"default",{enumerable:1,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,(t=>e[t]).bind(null,s))
return r},n.n=e=>{var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=(e,t)=>({}).hasOwnProperty.call(e,t),n.p="",n(n.s=18)})([(e,t,n)=>{var r=function(e){const t=typeof e
return null!=e&&("object"==t||"function"==t)}
function s(e){throw Error(e)}function o(e,t){for(var n=0;n<e.length;++n)t.call(e,e[n],n)}n.d(t,"g",()=>s),n.d(t,"e",()=>o),n.d(t,"n",()=>i),n.d(t,"o",()=>l),n.d(t,"q",()=>a),n.d(t,"p",()=>c),n.d(t,"s",()=>u),n.d(t,"l",()=>h),n.d(t,"m",()=>f),n.d(t,"r",()=>d),n.d(t,"i",()=>p),n.d(t,"k",()=>b),n.d(t,"a",()=>m),n.d(t,"d",()=>g),n.d(t,"b",()=>y),n.d(t,"c",()=>v),n.d(t,"h",()=>_),n.d(t,"j",()=>O),n.d(t,"f",()=>j)
const i=()=>Math.random().toString(32).substr(2),l=e=>Math.floor(Math.random()*e),a=e=>{const t=null==e?0:e.length
return t?e[l(t)]:void 0}
function c(e,t=null){for(var n=-1,r=e.length,s=0;++n<r;){for(;e[n+s]===t;)s++
s>0&&(e.splice(n,s),s=0)}return e}function u(e,t,n){var r=e[t]
e[t]=e[n],e[n]=r}function h(e,t,n){for(let r of t)n(e,r)
return e}function f(e,t,n,r){for(let s of t)for(let t of n)r(e,s,t)
return e}function d(e,...t){var n=0
return e.replace(/%[s|d]/g,()=>t[n++])}const p=(e,t)=>(t=Math.pow(10,t||0),""+Math.round(e*t)/t)
function b(e){try{return"string"==typeof e?JSON.parse(e):e}catch(e){}return{}}const m=(e,t,n=1,r=1)=>({get:e,set:t,enumerable:n,configurable:r}),g=(e,t=0,n=1,r=1)=>({value:e,writable:t,enumerable:n,configurable:r}),y=(e,t,n)=>Object.defineProperty(e,t,n),v=(e,t)=>Object.defineProperties(e,t)
function _(...e){return Object.assign(...e)}function O(e,...t){if(!t.length)return e
var n,s,o=t.shift()
if(r(e)&&r(o))for(n in o)r(s=o[n])?(e[n]||(e[n]={}),O(e[n],s)):Object.assign(e,{[n]:s})
return O(e,...t)}function j(e,t=0){for(var n=Array(e);e-- >0;)n[e]="function"==typeof t?t(e):t
return n}},(e,t,n)=>{n.d(t,"j",()=>r),n.d(t,"e",()=>s),n.d(t,"b",()=>o),n.d(t,"d",()=>l),n.d(t,"a",()=>c),n.d(t,"i",()=>u),n.d(t,"c",()=>h),n.d(t,"h",()=>f),n.d(t,"f",()=>d),n.d(t,"g",()=>p)
const r=window,s=r.document,o=s.body,i=r.getComputedStyle,l=r.customElements,a=s.location,c=~a.host.indexOf("localhost"),u=(a.pathname,a.protocol,a.hostname,a.port&&a.port,e=>s.createTextNode(e)),h=e=>s.createComment(e),f=e=>e&&e.nodeType,d=e=>"string"==typeof e?s.getElementById(e):e
function p(e,t){var n=e.currentStyle
return n?n[t]:i?i(e,null).getPropertyValue(t):e.style[t]}},(e,t,n)=>{n.d(t,"d",()=>s),n.d(t,"a",()=>o),n.d(t,"h",()=>a),n.d(t,"f",()=>c),n.d(t,"g",()=>u),n.d(t,"c",()=>h),n.d(t,"b",()=>f),n.d(t,"e",()=>d)
var r=n(0)
function s(e){"function"==typeof e&&"string"==typeof e._obv||Object(r.g)("expected an observable")}function o(e,t){e(t())
var n=e(t),r=t(e)
return()=>{n(),r()}}function i(e,t,n){for(var s,o=0,i=0;i<e.length;i++)"function"==typeof(s=e[i])?s(n,t):o++
o>11&&setTimeout(r.p,1,e)}function l(e,t){var n=e.indexOf(t)
~n&&(e[n]=null)}function a(e){if("function"==typeof e&&"value"===e._obv)return e
var t=e,n=[]
return s.gc=()=>Object(r.p)(n),Object(r.b)(s,"listeners",{get:s.gc}),s.set=e=>i(n,t,t=void 0===e?t:e),s.once=(e,t)=>{var n=s((t,r)=>{e(t,r),n()},t)
return n},s._obv="value",s
function s(e,r){return void 0===e?t:"function"!=typeof e?(t===e||i(n,t,t=e),e):(n.push(e),0,void 0===t||0==r||e(t),()=>{l(n,e),0})}}function c(e,t){if(e&&"object"===e._obv)return e
var n={},s={},o=[],i={_obv:Object(r.d)("object"),get:Object(r.d)((e,t)=>{for(var r,s=n,o=Array.isArray(e)?e:"string"==typeof e&&~e.indexOf(".")?e.split("."):[e];r=o.unshift();)void 0===(s=n[r])&&(s=n[r]={})
return s}),set:Object(r.d)(e=>{for(let t of o)s[t]&&e[t]&&s[t](e[t])})}
for(let n of Array.isArray(t)?t:Object.keys(e)){let t=e[n]
void 0!==t&&("value"===t._obv?(s[n]=t,o.push(n)):t._obv?i[n]=Object(r.d)(t):o.push(n))}for(let t of o)i[t]=Object(r.a)(()=>(s[t]||(s[t]=a(e[t])))(),e=>s[t](e))
return Object(r.c)(n,i),n}function u(e,t,n){return s(e),r._obv=e._obv,r
function r(r,s){return void 0===r?t(e()):"function"!=typeof r?e((n||t)(r)):e((e,n)=>{r(t(e,n))},s)}}function h(e,t){var n,o,a=1,c=e.length,u=Array(c),h=[],f=[]
for(let n=0;c>n;n++)"function"==typeof(o=e[n])?(s(o),f.push(o(e=>{var r=u[n]
u[n]=e,r!==e&&0==a&&d(t.apply(null,u))},a))):u[n]=o
return d._obv="value",d.gc=()=>Object(r.p)(h),Object(r.b)(d,"listeners",{get:d.gc}),d.cleanup=()=>{for(o of f)o()},n=t.apply(null,u),a=0,d
function d(e,r){return void 0===e?void 0===n?n=t.apply(null,u):n:"function"!=typeof e?(n===e||i(h,n,n=e),e):(h.push(e),0,0==r||e(n),()=>{l(h,e),0})}}function f(e,t){var n,r=e.length,s=Array(r)
for(let t=0;r>t;t++)s[t]="function"==typeof(n=e[t])?n():n
return t.apply(null,s)}function d(e,t=null){return"function"==typeof e&&(!t&&e._obv||e._obv===t)}},function(e,t,n){n.d(t,"d",()=>u),n.d(t,"a",()=>m),n.d(t,"b",()=>g),n.d(t,"c",()=>v)
var r=n(2)
const s=(e,t,n,r=0)=>(e.on||e.addEventListener).call(e,t,n,r),o=(e,t,n,r=0)=>(e.off||e.removeEventListener).call(e,t,n,r),i=(e,t,n)=>(e.dispatchEvent(new Event(t)),n),l=e=>e&&e.preventDefault()
function a(e,t,n,r,i,l){let a=t=>{r("function"==typeof n?n():n?e[n]:t)}
return s(e,t,a,l),i&&n&&a(),()=>o(e,t,a,l)}function c(e,t="value",n="keyup",r,i){return r="function"==typeof r?r:e=>13===e.which&&!e.shiftKey,a._obv="event",a
function a(a){return void 0===a?a:"function"!=typeof a?void 0:("function"==typeof i||(i=n=>r(n)?(a(e[t],n),l(n),1):0),s(e,n,i),()=>{o(e,n,i)})}}function u(e,t){return Object(r.d)(e),"function"!=typeof t&&error("update_fn should be a function which updates the obv value, eg. (v) => !v"),n=>e(t(e(),n))}function h(e,t="value",n="input"){return r._obv="attribute",r
function r(r,s){return void 0===r?e[t]:"function"!=typeof r?i(e,n,e[t]=r):a(e,n,t,r,s)}}function f(e,t="value",n="change"){const r=(n=e.selectedIndex)=>~n?e.options[n][t]:null,s=s=>{for(var o=e.options,l=0;l<o.length;l++)if(o[l][t]==s)return i(e,n,r(e.selectedIndex=l))}
return o._obv="select",o
function o(o,i){return void 0===o?e.options[e.selectedIndex][t]:"function"!=typeof o?s(o):a(e,n,r,o,i)}}function d(e,t,n){var r=0
const i=()=>r||val.call(e,r=1),l=()=>r&&val.call(e,r=0)
return a._obv="toggle",a
function a(a){return void 0===a?r:"function"!=typeof a?void 0:(s(e,t,i),s(e,n||t,l),()=>{o(e,t,i),o(e,n||t,l)})}}function p(e){return d(e,"mouseover","mouseout")}function b(e){return d(e,"focus","blur")}function m(e,t,n,r){s(e,t,n,r),this.push(()=>{o(e,t,n,r)})}function g(e,t,n){this.push(a(e,"click",0,n=>{Object(r.e)(t)?t(!t()):t.call(e,n)},0,n),a(e,"touchstart",0,n=>{l(n),Object(r.e)(t)?t(!t()):t.call(e,n)},0,n))}function y(e,t,n=1,r=0){this.push(a(e,"mouseup",0,()=>{t(r)}),a(e,"mousedown",0,()=>{t(n)}),a(e,"touchend",0,e=>{l(e),t(r)}),a(e,"touchstart",0,e=>{l(e),t(n)}))}function v(e,t){var n,s=this
for(n in t)((n,o)=>{switch(n){case"input":s.push(h(e,t[n+".attr"],t[n+".on"])(o))
break
case"hover":s.push(p(e)(o))
break
case"focus":s.push(b(e)(o))
break
case"select_label":n=f(e,"label"),s.push(Object(r.e)(o)?Object(r.a)(n,o):n(o))
break
case"select":case"select_value":n=f(e),s.push(Object(r.e)(o)?Object(r.a)(n,o):n(o))
break
case"boink":g.call(s,e,o)
break
case"press":y.call(s,e,o)
break
default:~n.indexOf(".")||("function"!=typeof o&&error("observer must be a function"),s.push(c(e,t[n+".attr"],t[n+".event"]||n,t[n+".valid"])(o)))}})(n,t[n])}},(e,t,n)=>{n.d(t,"b",()=>a),n.d(t,"a",()=>u),n.d(t,"c",()=>f)
var r=n(0),s=n(5),o=n(1),i=n(2),l=n(3)
function a(){return(function(e){let t
for(;null==(t=c.get(e))&&null!=(e=e.parentNode););return t})(o.e.getElementById("global_ctx")||f({_id:0,ERROR:"THIS IS THE GLOBAL CTX",o:{},h:s.a,s:s.b,v:i.h,t:i.g,c:i.c,m:l.d},e=>o.e.head.aC(Object(s.a)("meta#global_ctx"))))}const c=new Map
function u(e){let t=c.get(e)
t&&(t.cleanup(),c.delete(e))}let h=0
function f(e=a(),t,...n){"function"!=typeof t&&Object(r.g)("new_ctx is now called with a function which returns an element")
var s=[],i=Object.create(e,{_id:Object(r.d)(++h),o:Object(r.d)({}),_h:Object(r.d)(null,1),_s:Object(r.d)(null,1),h:Object(r.a)(()=>i._h||(i._h=e.h.context())),s:Object(r.a)(()=>i._s||(i._s=e.s.context())),cleanupFuncs:Object(r.d)(s),parent:Object(r.d)(e),cleanup:Object(r.d)(e=>{for(;e=s.pop();)e()
i._h&&i._h.cleanup(),i._s&&i._s.cleanup()})})
let l=t(i,...n)
return Array.isArray(l)&&Object(r.g)("this will assign a context to your element, so wrap these elements in a container element"),Object(o.h)(l)||null==l||Object(r.g)("you must return an element when creating a new context"),c.set(l,i),l}},function(e,t,n){n.d(t,"a",()=>p),n.d(t,"b",()=>b)
var r=n(2),s=n(3),o=n(4),i=n(0),l=n(1),a={s:"style",c:"className",class:"className",for:"htmlFor"},c={className:"class",htmlFor:"for"},u=["div"]
function h(e){var t=[]
function n(...n){var r
function s(s){var o,i,a,c
function h(t){var s,o=t.split(/([\.#]?[a-zA-Z0-9_:-]+)/)
for(s of(/^\.|#/.test(o[1])&&(r=e("div")),o))"string"==typeof s&&(a=s.length)&&(r?"."!==(c=s[0])&&"#"!==c||(i=s.substring(1,a))&&("."===c?r.classList.add(i):r.id=i):r=e(s,n))}if(!r&&"number"==typeof s&&s<u.length&&(s=h(u[s])),null!=s)if("string"==typeof s)r?r.aC(o=Object(l.i)(s)):h(s)
else if("number"==typeof s||"boolean"==typeof s||s instanceof Date||s instanceof RegExp)r.aC(o=Object(l.i)(s.toString()))
else if(Array.isArray(s))r.aC(s,t)
else if(Object(l.h)(s)||s instanceof l.j.Text)r.aC(o=s)
else if("object"==typeof s)for(c in s)f(r,c,s[c],t)
else"function"==typeof s&&(o=g(r,s,t))
return o}for(;n.length;)s(n.shift())
return r}return n.cleanupFuncs=t,n.cleanup=()=>{for(var e=0;e<t.length;e++)t[e]()},n}function f(e,t,n,r=[]){var o,l,u,h=a[t]||t
if("function"==typeof n)setTimeout(()=>{"boink"===h?s.c.call(r,e,{boink:n}):"press"===h?s.c.call(r,e,{press:n}):"hover"===h?s.c.call(r,e,{hover:n}):"focused"===h?s.c.call(r,e,{focus:n}):"selected"===h?s.c.call(r,e,{select:n}):"input"===h?s.c.call(r,e,{input:n}):"on"===h.substr(0,2)?s.a.call(r,e,h.substr(2),n,0):"before"===h.substr(0,6)?s.a.call(r,e,h.substr(6),n,1):(r.push(n(t=>{f(e,h,t,r)},1)),"INPUT"===(o=e.nodeName)&&s.c.call(r,e,{input:n}),"SELECT"===o&&s.c.call(r,e,"label"===h?{select_label:n}:{select:n}))},0)
else if("assign"===h||"extend"===h)Object.assign(e,n)
else if("data"===h)if("object"==typeof n)for(o in n)e.dataset[o]=n[o]
else Object(i.g)("data property should be passed as an object")
else if("multiple"===h)e.multiple=!!n
else if("contenteditable"===h)e.contentEditable=!!n
else if("autofocus"===h)setTimeout(()=>e.focus(),10)
else if("autoselect"===h)setTimeout(()=>{e.focus()
var t=[n[0]||0,n[1]||-1]
e.setSelectionRange.apply(e,t)},10)
else if("selected"===h)e.defaultSelected=!!n
else if("checked"===h)e.defaultChecked=!!n
else if("value"===h)e.defaultValue=e.value=n
else if("for"===h)e.htmlFor=n
else if("class"===h){if(n)if(l=e.classList,Array.isArray(n))for(o of n)o&&l.add(o)
else l.add(n)}else if((u="on"===h)||"before"===h){if("object"==typeof n)for(o in n)"function"==typeof(l=n[o])&&s.a.call(r,e,o,l,u?0:1)}else"html"===h?e.innerHTML=n:"observe"===h?setTimeout(s.c.bind(r,e,n),0):"style"===h?"string"==typeof n?e.style.cssText=n:(function(e,t,n=[]){if("object"==typeof t)for(var r in t)((t,r)=>{"function"==typeof r?n.push(r(n=>{e.style[t]="number"==typeof n&&"opacity"!==t?n+"px":n},1)):e.style[t]="number"==typeof r&&"opacity"!==t?r+"px":r})(r,t[r])
else e.setAttribute("style",t)})(e,n,r):~h.indexOf("-")?e.setAttribute(h,n):void 0!==n&&(~(u=h.indexOf(":"))?"xlink"===h.substr(0,u)?e.setAttributeNS("http://www.w3.org/1999/xlink",h.substr(++u),n):Object(i.g)("unknown namespace for attribute: "+h):e.namespaceURI?e.setAttribute(c[h]||h,n):e[h]=n)}var d={}
Object(i.b)(d,"define",Object(i.d)((e,t,n)=>{l.d.define(e,t),d[e]="number"==typeof n?n:Array.isArray(n)?n.length:t.length||0}))
var p=(function e(t){var n=h((e,t)=>{var n
return~e.indexOf("-")?void 0!==(n=d[e])?new(l.d.get(e))(...t.splice(0,n)):new(l.d.get(e)):l.e.createElement(e)})
t||p.cleanupFuncs.push(()=>n.cleanup())
n.context=e
return n})(1)
var b=(function e(t){var n=h(e=>l.e.createElementNS("http://www.w3.org/2000/svg",e))
t||b.cleanupFuncs.push(()=>n.cleanup())
n.context=e
return n})(1)
const m=(e,t,n)=>Object(l.h)(t)?t:Array.isArray(t)?(function(e,t,n){var r,s=l.e.createDocumentFragment(),o=t=>t===(e.activeElement||l.e.activeElement)
for(r of t)s.aC(m(e,r,n))
if("array"===t.observable){function i(n){var r,s,i,a,c=t.length
switch(n.type){case"unshift":for(r=n.values.length-1;r>=0;r--)e.insertBefore(Object(l.h)(i=n.values[r])?i:Object(l.i)(i),t[0])
break
case"push":for(r=0;r<n.values.length;r++)e.insertBefore(Object(l.h)(i=n.values[r])?i:Object(l.i)(i),t[t.length+n.values.length-r-1])
break
case"pop":e.removeChild(t[c-1])
break
case"shift":e.removeChild(t[0])
break
case"splice":if(0>(s=n.idx)&&(s+=c),n.remove)for(r=0;r<n.remove;r++)(i=t[s++])&&((a=n.add[r])?e.replaceChild(Object(l.h)(a)?a:Object(l.i)(a),i):e.removeChild(i))
if(n.add)for(r=0;r<n.add.length;r++)e.insertBefore(Object(l.h)(i=n.add[r])?i:Object(l.i)(i),t[s])
break
case"sort":for(r=0,a=n.orig;r<t.length;r++)i=t[r],r!==(s=a.indexOf(i))&&((o(i)||1===i.focused)&&(r=1),e.removeChild(i),e.insertBefore(i,t[r-1]),1===r&&(i.focus(),i.focused=0))
break
case"replace":i=n.val,a=n.old,(o(i)||1===i.focused)&&(r=1),o(a)&&(a.focused=1),e.replaceChild(i,a),1===r&&(i.focus(),i.focused=0)
break
case"insert":0>(r=n.idx)&&(r+=c),e.insertBefore(n.val,t[r])
break
case"reverse":for(r=0,s=+t.length/2;s>r;r++)t.emit("change",{type:"swap",from:r,to:t.length-r-1})
break
case"move":0>(r=n.from)&&(r+=c),0>(s=n.to)&&(s+=c),i=t[r],o(i)&&(r=1),e.insertBefore(i,t[s]),1===r&&i.focus()
break
case"swap":n.j=p("div.swap",i={s:{display:"none"}}),n.k=p("div.swap",i),0>(r=n.from)&&(r+=c),0>(s=n.to)&&(s+=c),a=t[r],i=t[s],o(i)?r=1:o(a)&&(r=2),e.replaceChild(n.j,a),e.replaceChild(n.k,i),e.replaceChild(i,n.j),e.replaceChild(a,n.k),1===r?i.focus():2===r&&a.focus()
break
case"remove":0>(r=n.idx)&&(r+=c),e.removeChild(t[r])
break
case"set":0>(r=n.idx)&&(r+=c),e.replaceChild(n.val,t[r])
break
case"empty":for(r=0;r<t.length;r++)e.removeChild(t[r])
break
default:console.log("unknown event",n)}}t.on("change",i),n.push(()=>{t.off("change",i)})}return s})(e,t,n):"function"==typeof t?Object(r.e)(t)?g(e,t,n):(()=>{for(;"function"==typeof t;)t=t.call(e,e)
return m(e,t,n)})():null==t?Object(l.c)("null"):Object(l.i)(t),g=(e,t,n=[])=>{var s,o,a,c
return"function"==typeof t?(Object(r.e)(t)?(e.aC(s=Object(l.c)("obv value")),e.aC(c=Object(l.c)("obv bottom")),n.push(t(t=>{if(a=m(e,t,n),Array.isArray(s))for(t of s)e.rC(t)
else s&&(s.parentNode===e?e.rC(s):Object(i.g)("obv unable to replace child node because parentNode has changed"))
e.iB(a,c),s=Array.isArray(t)?t:a}),()=>{e.rC(c)})):null!=(o=m(e,t,n))&&(s=e.aC(o,n)),s=m(e,s,n)):s=m(e,t,n),s},y=Node.prototype
y.iB=function(e,t,n){return this.insertBefore(g(this,e,n),t)},y.aC=function(e,t){return this.appendChild(Object(l.h)(e)?e:g(this,e,t))},y.rC=function(e){return this.removeChild(e)},y.rm=function(){return Object(o.a)(this),this.remove()},y.apply=function(e,t){for(let n in e)f(this,n,e[n],t)},y.empty=function(){for(var e;e=this.firstChild;)this.removeChild(e)},y.on=y.addEventListener,y.off=y.removeEventListener},(e,t,n)=>{n.r(t),n.d(t,"_px",()=>r),n.d(t,"px",()=>s),n.d(t,"obv_log",()=>o),n.d(t,"obv_debug",()=>i)
var r=e=>"string"==typeof e&&~e.indexOf("px")?e:e+"px",s=e=>transform(e,r),o=(e,t=e._obv,n="log")=>e(e=>console[n](t+":",e)),i=(e,t="")=>{let r=n(8)(t)
return e(e=>r(name+":",e))}},function(e,t,n){var r,s=n(0),o=n(2),i=n(1),l=i.j.requestAnimationFrame||i.j.mozRequestAnimationFrame||i.j.webkitRequestAnimationFrame||(r=0,e=>{var t,n=(new Date).getTime()
return r=n+(t=Math.max(0,16-(n-r))),setTimeout(()=>{e(n+t)},t)}),a=n(5)
function c(e,t){var n=0,r=e.length
if("number"==typeof r)for(;r>n;n++)t(e[n])
else t(e)}var u=function(e,t){function n(){var e,t,n=[]
this.add=e=>{n.push(e)},this.call=()=>{for(e=0,t=n.length;t>e;e++)n[e].call()},this.remove=r=>{var s=[]
for(e=0,t=n.length;t>e;e++)n[e]!==r&&s.push(n[e])
n=s},this.length=()=>n.length}c(e,e=>{!(function(e,t){if(e.resizedAttached)e.resizedAttached.add(t)
else{var r,s,o
e.resizedAttached=new n,e.resizedAttached.add(t)
var c,u,h,f,d="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;z-index:-1;visibility:hidden",p="position:absolute;left:0;top:0;transition:0s"
e.resizeSensor=Object(a.a)(".resize-sensor",{s:d},r=Object(a.a)(".resize-sensor-expand",{s:d},s=Object(a.a)("div",{s:p})),o=Object(a.a)(".resize-sensor-shrink",{s:d},Object(a.a)("div",{s:p+";width:200%;height:200%"}))),e.appendChild(e.resizeSensor),"static"==Object(i.g)(e,"position")&&(e.style.position="relative")
var b=e.offsetWidth,m=e.offsetHeight,g=()=>{s.style.width="100000px",s.style.height="100000px",r.scrollLeft=1e5,r.scrollTop=1e5,o.scrollLeft=1e5,o.scrollTop=1e5}
g()
var y=()=>{u=0,c&&(b=h,m=f,e.resizedAttached&&e.resizedAttached.call())},v=()=>{h=e.offsetWidth,f=e.offsetHeight,(c=h!=b||f!=m)&&!u&&(u=l(y)),g()}
r.addEventListener("scroll",v),o.addEventListener("scroll",v)}})(e,t)}),this.detach=t=>{u.detach(e,t)}}
u.detach=(e,t)=>{c(e,e=>{e.resizedAttached&&"function"==typeof t&&(e.resizedAttached.remove(t),e.resizedAttached.length())||e.resizeSensor&&(e.contains(e.resizeSensor)&&e.removeChild(e.resizeSensor),delete e.resizeSensor,delete e.resizedAttached)})}
var h=u,f=n(4)
function d(e,t,n,r,l,a,c){var u,d,p,b,m,g,y,v,_,O,j=Object(s.j)({},Object(s.k)(n),l)
i.a&&((u=i.b.style).background="#fff",u.fontFamily="Helvetica Neue,Helvetica,Arial,sans-serif",u.padding=u.margin=0),p="string"==typeof e?(u=Object(i.f)(e))&&u.id||e:Object(s.n)(),u={s:{position:"absolute",left:0,top:0,bottom:0,right:0,overflow:"hidden"}},"object"!=typeof t||Object(i.h)(t)||(u=Object(s.j)(u,t)),b=Object(f.b)(),e=Object(f.c)(b,({h:t}=b)=>(m=b,Object(i.h)(e)?e:t("div#"+p,u))),Object(i.h)(t)||(t=i.b),t.aC(e),i.j.GG=e._G=b,m.E=g={frame:e,body:i.e.body,win:i.j},u=screen.orientation,b.o.orientation=Object(o.h)(u.type.split("-").concat(u.angle)),u.onchange=e=>{b.o.orientation((u=e.target).type.split("-").concat(u.angle))},b.o.width=Object(o.h)(y=e.clientWidth||j.width||300),b.o.height=Object(o.h)(v=e.clientHeight||j.height||300),b.o.resize=Object(o.h)({width:y,height:v}),(_=Math.round(i.j.devicePixelRatio||1))>4&&(_=4),b.o.dpr=Object(o.h)(_),e._id=p,O=e.cleanup,e.cleanup=()=>{t=e.parentNode,d.disconnect(),d=null,t&&t.removeChild(e),"function"==typeof O&&O()},b.cleanupFuncs.push(e.cleanup),Object(s.h)(b,{C:j,G:b,E:g}),(t=>{function n(){var n,r,s=0
for(e.empty();n=i.b.childNodes[s];)"#"===n.nodeName[0]?i.b.rC(n):s++
"function"==typeof t&&(n=Object(f.c)(b,t))&&(e.aC(n),"function"==typeof c&&c(e,n)),r=new h(e,()=>{b.o.width(y=e.clientWidth),b.o.height(v=e.clientHeight),b.o.resize({width:y,height:v})}),b.cleanupFuncs.push(()=>r.detach())}i.e.body?setTimeout(n,1):i.j.addEventListener("DOMContentLoaded",n,0)})(a)}t.a=function(e,t={},n={}){d(e.name,null,t,0,{},t=>e(t))}},function(e,t,n){!(function(r){function s(){var e
try{e=t.storage.debug}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=Object({NODE_ENV:"development"}).DEBUG),e}(t=e.exports=n(10)).log=function(){return"object"==typeof console&&console.log&&function(){}.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors
if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return
var r="color: "+this.color
e.splice(1,0,r,"color: inherit")
var s=0,o=0
e[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(s++,"%c"===e&&(o=s))}),e.splice(o,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=s,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return 1
return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:(function(){try{return window.localStorage}catch(e){}})(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=e=>{try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(s())})(n(9))},function(e,t){var n,r,s=e.exports={}
function o(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0)
if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0)
try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}(()=>{try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}})()
var a,c=[],u=0,h=-1
function f(){u&&a&&(u=0,a.length?c=a.concat(c):h=-1,c.length&&d())}function d(){if(!u){var e=l(f)
u=1
for(var t=c.length;t;){for(a=c,c=[];++h<t;)a&&a[h].run()
h=-1,t=c.length}a=null,u=0,(function(e){if(r===clearTimeout)return clearTimeout(e)
if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e)
try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}})(e)}}function p(e,t){this.fun=e,this.array=t}function b(){}s.nextTick=function(e){var t=Array(arguments.length-1)
if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n]
c.push(new p(e,t)),1!==c.length||u||l(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=1,s.env={},s.argv=[],s.version="",s.versions={},s.on=b,s.addListener=b,s.once=b,s.off=b,s.removeListener=b,s.removeAllListeners=b,s.emit=b,s.prependListener=b,s.prependOnceListener=b,s.listeners=e=>[],s.binding=e=>{throw Error("process.binding is not supported")},s.cwd=()=>"/",s.chdir=e=>{throw Error("process.chdir is not supported")},s.umask=()=>0},(e,t,n)=>{var r
function s(e){function n(){if(n.enabled){var e=n,s=+new Date,o=s-(r||s)
e.diff=o,e.prev=r,e.curr=s,r=s
for(var i=Array(arguments.length),l=0;l<i.length;l++)i[l]=arguments[l]
i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O")
var a=0
i[0]=i[0].replace(/%([a-zA-Z%])/g,(n,r)=>{if("%%"===n)return n
a++
var s=t.formatters[r]
if("function"==typeof s){var o=i[a]
n=s.call(e,o),i.splice(a,1),a--}return n}),t.formatArgs.call(e,i),(n.log||t.log||console.log.bind(console)).apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=(function(e){var n,r=0
for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0
return t.colors[Math.abs(r)%t.colors.length]})(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=s.debug=s.default=s).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[]
for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,s=0;r>s;s++)n[s]&&("-"===(e=n[s].replace(/\*/g,".*?"))[0]?t.skips.push(RegExp("^"+e.substr(1)+"$")):t.names.push(RegExp("^"+e+"$")))},t.enabled=function(e){var n,r
for(n=0,r=t.skips.length;r>n;n++)if(t.skips[n].test(e))return 0
for(n=0,r=t.names.length;r>n;n++)if(t.names[n].test(e))return 1
return 0},t.humanize=n(11),t.names=[],t.skips=[],t.formatters={}},(e,t)=>{var n=1e3,r=60*n,s=60*r,o=24*s,i=365.25*o
function l(e,t,n){if(e>=t)return 1.5*t>e?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=(e,t)=>{t=t||{}
var a,c=typeof e
if("string"===c&&e.length>0)return(function(e){if((e+="").length>100)return
var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e)
if(!t)return
var l=parseFloat(t[1])
switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return l*i
case"days":case"day":case"d":return l*o
case"hours":case"hour":case"hrs":case"hr":case"h":return l*s
case"minutes":case"minute":case"mins":case"min":case"m":return l*r
case"seconds":case"second":case"secs":case"sec":case"s":return l*n
case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return l
default:return}})(e)
if("number"===c&&0==isNaN(e))return t.long?l(a=e,o,"day")||l(a,s,"hour")||l(a,r,"minute")||l(a,n,"second")||a+" ms":(function(e){if(e>=o)return Math.round(e/o)+"d"
if(e>=s)return Math.round(e/s)+"h"
if(e>=r)return Math.round(e/r)+"m"
if(e>=n)return Math.round(e/n)+"s"
return e+"ms"})(e)
throw Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},(e,t,n)=>{},(e,t,n)=>{},(e,t,n)=>{},(e,t,n)=>{},(e,t,n)=>{},,function(e,t,n){n.r(t)
var r=n(7),s=n(0)
var o=function(e,t){for(var n=e.length,r=t.length,s=Array(n+r),o=0;n>o;o++)s[o]=e[o]
for(var i=0;r>i;i++)s[o+i]=t[i]
return s}
function i(e,t){var n=this._drip||(this._drip={}),r=n.memoize||(n.memoize={}),s=n.delimeter&&Array.isArray(e)?e.join(n.delimeter):e,o=r[s],i=null
if(o){for(var a=0,c=o.length;c>a;a++)if(o[a][0]===t)return o[a][1]
i=l(s,t),o.push([t,i])}else i=l(s,t),r[s]=[[t,i]]
return i}function l(e,t){return function(){var n=[].slice.call(arguments),r=[e].concat(n)
t.emit.apply(t,r)}}var a={many(e,t,n){var r=this
return this.on(e,function s(){0==--t&&setTimeout(()=>{r.off(e,s)},0),n.apply(null,arguments)}),this},once(e,t){return this.many(e,1,t),this},hasListener(e,t){return t||"function"!=typeof e?t&&"function"==typeof e&&t==e?1:0===e.length?0:t&&e.indexOf(t)>-1?1:t?0:1:1},bindEvent(e,t){var n=i.call(this,e,t)
return this.on(e,n),this},unbindEvent(e,t){var n=i.call(this,e,t)
return this.off(e,n),this},proxyEvent(e,t,n){2===arguments.length&&(n=t,t=null)
var r=this._drip||{},s=r.delimeter?t?o(Array.isArray(t)?t:t.split(r.delimeter),[e]):e:t?t+":"+e:e
return n.addListener(e,i.call(this,s,this)),this},unproxyEvent(e,t,n){2===arguments.length&&(n=t,t=null)
var r=this._drip||{},s=r.delimeter?t?o(Array.isArray(t)?t:t.split(r.delimeter),[e]):e:t?t+":"+e:e
return n.removeListener(e,i.call(this,s,this)),this}},c=e=>{var t=class extends e{on(e,t){var n=this._events||(this._events={})
return n[e]?"function"==typeof n[e]?n[e]=[n[e],t]:n[e].push(t):n[e]=t,this}off(e,t){var n=arguments.length
if(!this._events||0===n)return this._events={},this
if(1===n)return this._events[e]=null,this
var r=this._events[e]
if(!r)return this
if("function"==typeof r&&r==t)this._events[e]=null
else{for(var s=0;s<r.length;s++)r[s]==t&&r.splice(s,1)
0===r.length?this._events[e]=null:1===r.length&&(this._events[e]=r[0])}return this}emit(e,t,n){this._events||(this._events={})
var r=this._events[e]
if(!r&&"error"===e)throw t||Error('Emitter "error" event without argument.')
if(!r)return 0
var s=arguments.length
if("function"==typeof r)if(1==s)r.call(this)
else if(2==s)r.call(this,t)
else if(3==s)r.call(this,t,n)
else{for(var o=s,i=Array(o-1),l=1;o>l;l++)i[l-1]=arguments[l]
r.apply(this,i)}else for(l=0;l<r.length;l++)if(1===s)r[l].call(this)
else if(2===s)r[l].call(this,t)
else if(3===s)r[l].call(this,t,n)
else{if(!i){i=Array(s-1)
for(var a=1;s>a;a++)i[a-1]=arguments[a]}r[l].apply(this,i)}return 1}hasListener(e,t){if(!this._events)return 0
var n=this._events[e]
return n?a.hasListener(n,t):0}listeners(e){if(!this._events)return[]
var t=this._events[e]
return t?"function"==typeof t?[t]:t:[]}}
return t.prototype.bindEvent=a.bindEvent,t.prototype.unbindEvent=a.unbindEvent,t.prototype.proxyEvent=a.proxyEvent,t.prototype.unproxyEvent=a.unproxyEvent,t.prototype.many=a.many,t.prototype.once=a.once,t},u=n(2),h=n(4)
const f=[].slice,d=e=>"[object Arguments]"=={}.toString.call(e),p=e=>"number"==typeof e&&e!=e,b=(e,t)=>0===e&&0===t?((e,t)=>1/e==1/t)(e,t):e===t?1:e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():p(e)?p(t):"object"!=typeof e&&"object"!=typeof t?e==t:(function(e,t){if(null==e||null==t||e.prototype!==t.prototype)return 0
if(d(e))return d(t)?(e=f.call(e),t=f.call(t),b(e,t)):0
try{var n,r,s=Object.keys(e),o=Object.keys(t)}catch(e){return 0}if(s.length!=o.length)return 0
for(s.sort(),o.sort(),r=s.length-1;r>=0;r--)if(s[r]!=o[r])return 0
for(r=s.length-1;r>=0;r--)if(n=s[r],!b(e[n],t[n]))return 0
return 1})(e,t)
var m=b
class g extends(c(Array)){static get[Symbol.species](){return Array}constructor(e){super(),this.observable="array",this._obv_len&&this._obv_len(this.length),Object(s.b)(this,"obv_len",Object(s.a)(()=>this._obv_len||(this._obv_len=Object(u.h)(this.length)))),Array.isArray(e)&&e.length&&super.push(...e)}pop(){if(this.length)return this.emit("change",{type:"pop"}),this._obv_len&&this._obv_len(this.length-1),super.pop()}push(...e){return e.length?(this.emit("change",{type:"push",values:e}),this._obv_len&&this._obv_len(this.length+e.length),super.push(...e)):this.length}reverse(){return this.length>1?(this.emit("change",{type:"reverse"}),super.reverse()):this}shift(){if(this.length)return this.emit("change",{type:"shift"}),this._obv_len&&this._obv_len(this.length-1),super.shift()}swap(e,t){this.emit("change",{type:"swap",from:e,to:t}),Object(s.s)(this,t,e)}sort(e){if(1>=this.length)return this
let t,n,r=0,o=this,i=o.length
for(;i>r;r++){for(n=r,t=r+1;i>t;t++)e(o[t],o[n])>0||(n=t)
n!==r&&(this.emit("change",{type:"swap",from:n,to:r}),Object(s.s)(o,r,n))}return this}shuffle(){for(let e=0,t=this.length;t>e;)this.swap(e,Math.floor(Math.random()*++e))}empty(){return this.length>0&&(this.emit("change",{type:"empty"}),this._obv_len&&this._obv_len(0),this.length=0),this}reset(e){return this.empty(),Array.isArray(e)&&this.push(...e),this}replace(e,t){return this.emit("change",{type:"replace",val:t,idx:e,old:this[e]}),super.splice(e,1,t),this}move(e,t){this.emit("change",{type:"move",from:e,to:t})
let n=super.splice(e,1)
return super.splice(t,0,n[0]),this}insert(e,t){return this.emit("change",{type:"insert",val:t,idx:e}),this._obv_len&&this._obv_len(this.length+1),super.splice(e,0,t),this}remove(e){if("number"!=typeof e){let t=this.indexOf(e)
if(!~t)return this
e=t}return this.emit("change",{type:"remove",idx:e}),this._obv_len&&this._obv_len(this.length-1),super.splice(e,1),this}splice(e,t,...n){return void 0!==e&&(void 0===t||+e<this.length&&+t>0)?(this.emit("change",{type:"splice",idx:e,remove:t,add:n}),this._obv_len&&this._obv_len(this.length+n.length-t),super.splice(e,t,...n)):[]}unshift(...e){return e.length?(this.emit("change",{type:"unshift",values:e}),this._obv_len&&this._obv_len(this.length+e.length),super.unshift(...e)):this.length}set(e,t){if(0>e&&(e+=this.length),!m(this[e],t))return this.emit("change",{type:"set",idx:e,val:t}),this[e]=t,this}}class y extends g{constructor(e,t,n,r={plain:1}){super(),this.fn="function"==typeof t?n=t:n
let s,o=this.fl=n.length
for(s in this.G=e,this.d=t instanceof g?t:t=new g(Array.isArray(t)?t:[]),e.cleanupFuncs.push(()=>{this.cleanup()}),this._d=[],3>o||(this._idx=[]),r.min&&(this.empty_fn="function"==typeof r.empty_fn?r.empty_fn:()=>"empty"),r)this[s]=r[s]
this.data(t)}data(e){let t=this
const n=t._onchange=e=>{let n,r,o,i,l,a=t._d.length,c=t.fl,u=e.type,h=+t.min||0
switch(u){case"swap":0>(o=e.from)&&(o+=a),0>(i=e.to)&&(i+=a),1>c||Object(s.s)(t._d,i,o),3>c||(t._idx[o](i),t._idx[i](o),Object(s.s)(t._idx,i,o)),Object(s.s)(t,i,o)
break
case"move":0>(o=e.from)&&(o+=a),0>(i=e.to)&&(i+=a),1>c||(n=t._d.splice(o,1),t._d.splice(i,0,n[0])),3>c||(n=t._idx.splice(o,1),t._idx.splice(i,0,n[0]),t._idx[o](i),t._idx[i](o)),n=super.splice(o,1),super.splice(i,0,n[0])
break
case"set":0>(o=e.idx)&&(o+=a),n=e.val,super[o]=n,1>c||t._d[o].set(n)
break
case"unshift":for(n of(o=0,n=Array(e.values.length),1>c||t._d.splice(0,0,...n),3>c||t._idx.splice(0,0,...n),e.values))super.unshift(t.fn_call(n,o++))
if(c>=3)for(;a>o;o++)t._idx[o](o)
h&&(o=h-a-n.length)>0&&super.splice(-o,o)
break
case"push":for(n of(i=a,o=a+e.values.length,r=[],1>c||(t._d.length=o),3>c||(t._idx.length=o),o=Math.min(o,h)-a,e.values))r.push(t.fn_call(n,a++))
o?super.splice(i,o,...r):super.push(...r)
break
case"splice":for(n of(0>(o=e.idx)&&(o+=a),i=e.remove,n=Array(l=e.add.length),1>c||t._d.splice(o,i,...n),3>c||t._idx.splice(o,i,...n),r))n.cleanup()
for(n of(r=[],a+=l-i,l=o,e.add))r.push(t.fn_call(n,l++))
if(c>=3)for(l=o;a>l;l++)t._idx[l](l)
super.splice(o,i,...r),h&&(0>(o=h-a)&&super.splice(o,-o),o>0&&super.push(...Object(s.f)(o,t.empty_fn)))
break
case"remove":if(0>(o=e.idx)&&(o+=a),1>c||t._d.splice(o,1),3>c||t._idx.splice(o,1),super.splice(o,1),a>h||super.push(t.empty_fn()),c>=3)for(a--;a>o;o++)t._idx[o](o)
break
case"replace":case"insert":if(0>(o=e.idx)&&(o+=a),i="replace"===u?1:0,1>c||t._d.splice(o,i,null),3>c||t._idx.splice(o,i,null),super.splice(o,i,t.fn_call(e.val,o)),i>0);else{if(c>=3)for(;a>=o;o++)t._idx[o](o)
a>h||super.pop()}break
case"sort":r=[],o=h-a,h&&o>0&&(n=super.splice(-o,o))
let f=e=>{r.push(e)}
for(n of(t.d.on("change",f),t.d.sort(e.compare),t.d.off("change",f),r))super.emit("change",n)
h&&o>0&&(n=super.splice(-o,0,...n))
break
case"empty":super.empty(),1>c||(t._d.length=0),3>c||(t._idx.length=0),h&&super.push(...Object(s.f)(h,t.empty_fn))
break
case"reverse":for(o=0;a>o;o++)t._idx[o](a-o-1)
a=0
case"shift":if(a)for(o=1;a>o;o++)t._idx[o](o-1)
case"pop":t._d[u](),t._idx[u](),super[u](),h&&a&&h>a&&super.push(t.empty_fn())}}
if(e instanceof g){let r=0,o=e.length,i=+t.min||0,l=[]
if(t.length>0&&t.empty(),o||i){for(;o>r;r++)l.push(t.fn_call(e[r],r))
if(i>o)for(;i>r;r++)l.push(t.empty_fn(r))
super.push(...l)}t._obv_len&&t._obv_len(o),t.d.off("change",n),t.d=e,Object(s.b)(t,"obv_len",Object(s.a)(()=>t.d.obv_len)),e.on("change",n)}return t.d}fn_call(e,t){let n,r,{fl:s,fn:o,G:i}=this
return 0===s?o():(n=this._d[t]||(this._d[t]=this.plain?e:"object"==typeof e?Object(u.f)(e):Object(u.h)(e)),1===s?o(n):2===s?Object(h.c)(this.G,o,n):(r=this._idx[t]||(this._idx[t]=Object(u.h)(t)),Object(h.c)(i,o,n,r)))}cleanup(){this._onchange({type:"empty"}),this.d.off("change",this._onchange)}}(()=>{let e=y.prototype
for(let t of["swap","move","set","unshift","push","splice","remove","replace","insert","sort","empty","pop","reverse","shift","setPath"])e[t]=function(){return this.d[t].apply(this.d,arguments)}})()
var v=n(3)
const _=(O=1,[["seconds",1e3],["minutes",60],["hours",60],["days",24],["weeks",7],["months",4.348],["years",12]].map(e=>(e[1]=O*=e[1],e)).reverse())
var O
function j(e){e=Math.abs(e)
var t=[]
return Object(s.e)(_,n=>{var r=n[1],s=e>0?Math.floor(e/r):0,o=n[0]
e-=s*r,t[o]=s,s>0&&t.push([o,s])}),t.ms=e,t}var w={en:{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal(e){var t=e%10
return e+(1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}}
function x(e,t,n,r,o){var i,l=w[o||"en"].relativeTime
return"function"==typeof l?l(t,n,e,r):(i=Object(s.r)(l[e],t))&&n?i:Object(s.r)(l[r?"future":"past"],i)}function k(e,t){var n=1
if(t%1!=0)throw new RangeError
for(;t--;)n*=e--
return n}function A(e,t){return t>e?0:k(e,t)/k(t,t)}function M(e,t){for(let n of Object.keys(t))Object.defineProperty(e,n,{value:t[n],configurable:"next"==n})}function T(e,t){Object.defineProperty(e,t,{writable:1})}function E(e){var t,n=[]
for(this.init();t=this.next();)n.push(e?e(t):t)
return this.init(),n}var L={toArray:E,map:E,forEach(e){var t
for(this.init();t=this.next();)e(t)
this.init()},filter(e){var t,n=[]
for(this.init();t=this.next();)e(t)&&n.push(t)
return this.init(),n},find(e){var t,n
for(this.init();t=this.next();)if(e(t)){n=t
break}return this.init(),n},lazyMap(e){return this._lazyMap=e,this},lazyFilter(e){if(Object.defineProperty(this,"next",{writable:1}),"function"!=typeof e)this.next=this._next
else{"function"!=typeof this._next&&(this._next=this.next)
var t=this._next.bind(this)
this.next=(()=>{for(var n;n=t();)if(e(n))return n
return n}).bind(this)}return Object.defineProperty(this,"next",{writable:0}),this}}
function C(e,t,n){if(t||(t=e.length),1>t||t>e.length||t%1!=0)throw new RangeError
var r=(1<<t)-1,s=A(e.length,t),o=1<<e.length,i=()=>s,l=Object.create(e.slice(),{length:{get:i}})
return T(l,"index"),M(l,{valueOf:i,init(){this.index=r},next(){if(this.index<o){for(var e=0,t=this.index,n=[];t;t>>>=1,e++)1&t&&(n[n.length]=this[e])
return this.index=(function(e){var t=e&-e,n=e+t
return n|((n&-n)/t>>1)-1})(this.index),"function"==typeof l._lazyMap?l._lazyMap(n):n}}}),M(l,L),l.init(),"function"==typeof n?l.map(n):l}const S="zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ")
function z(e){return 20>e?S[e]:Object(s.g)("not yet implemented")}function N(e={}){const t=e.min_solutions||1,n=e.max_solutions||100,r=e.num_symbols||9,o=e.sets||{},i=Object.keys(o),l=i.length,a=Object(s.l)({},i,(e,t)=>e[t]=o[t].length),c=i.reduce((e,t)=>e+a[t],0),u=C(i,l-1).map(e=>i.indexOf(e[0])>i.indexOf(e[1])?e:[e[1],e[0]])
e.sets&&l>=3||Object(s.g)("you must define `sets` with at least 3 properties")
const h=e=>e._str?e._str:e._str=i.map(t=>e[t]).join(" "),f=e=>e._str?e._str:e._str=e.map(h).sort().join(":")
function d(e,t=Object(s.l)({},i,(e,t)=>e[t]=Object(s.q)(o[t]))){let n=h(t)
if(null==e[n])return e[n]=t,e.push(t),(function(e,t,n=l){e.n2combos||(e.n2combos={})
for(let[r,s]of u){let o=t[r]+":"+t[s]
if((e.n2combos[o]=(e.n2combos[o]||0)+1)>n)return 1}return 0})(e,t)?p(e,t):t}function p(e,t){let n,r=h(t),s=e[r]
if(s&&~(n=e.indexOf(s))){e[r]=null,e.splice(n,1)
for(let[n,r]of u)e.n2combos[t[n]+":"+t[r]]--}}function b(e){if(e.prop_counts)return e.prop_counts
let t=Object(s.l)({},i,(e,t)=>e[t]={}),n=Object(s.m)(t,i,e,(e,t,n)=>{e[t][n[t]]=(e[t][n[t]]||0)+1})
return e.prop_counts=n}function m(e){let t=b(e)
for(let e of i)for(let n in t[e]){let r=t[e][n]
if(1!==r&&r!==l)return 0}return 1}function g(e){return(e.length>31?(function(e,t,n){if(t||(t=e.length),1>t||t>e.length||t%1!=0)throw new RangeError
var r=(function(e){for(var t=[],n=0;e>n;n++)t[n]=1
return t[0]=1,t})(t),s=A(e.length,t),o=e.length,i=()=>s,l=Object.create(e.slice(),{length:{get:i}})
return T(l,"index"),M(l,{valueOf:i,init(){this.index=r.concat()},next(){if(this.index.length<=o){for(var e=0,n=this.index,r=[],s=0;s<n.length;s++,e++)n[s]&&(r[r.length]=this[e])
return(function(e,t){var n=e,r=t,s=0
for(s=n.length-1;s>=0&&1==n[s];s--)r--
if(0==r){n[n.length]=1
for(var o=n.length-2;o>=0;o--)n[o]=t-1>o?1:0}else{var i=-1,l=-1
for(s=0;s<n.length;s++)if(0==n[s]&&-1!=i&&(l=s),1==n[s]&&(i=s),-1!=l&&-1!=i){n[l]=1,n[i]=0
break}r=t
for(s=n.length-1;s>=i;s--)1==n[s]&&r--
for(s=0;i>s;s++)n[s]=r>s?1:0}})(this.index,t),"function"==typeof l._lazyMap?l._lazyMap(r):r}}}),M(l,L),l.init(),"function"==typeof n?l.map(n):l})(e,l):C(e,l)).filter(m)}let y=4===r?(function(){const e=Object(s.l)({},i,(e,t)=>e[t]=Math.random()>.5?1:{})
let t=Object(s.f)(r).map(()=>Object(s.l)({},i,(t,n)=>{let r=e[n]
t[n]=1==r?t[n]||Object(s.q)(o[n]):o[n].find(e=>r[e]?0:r[e]=1)})),n=g(t)
return n.symbols=t,n})():(function(){let e=[],s=[]
for(let o=0;100>o&&(e.length<t||e.length>n||s.length!==r);o++)if(d(s),s.length>l){let t=3
for(e=s.solutions=g(s);e.length>n;){let n={},r=[]
console.warn(`too many solutions(${e.length})... going to trim ${t} of the most used symbols`)
for(let t=0;t<e.length;t++)for(let s=0;l>s;s++){let o=e[t][s],i=h(o);(n[i]=(n[i]||0)+1)>l&&(console.warn(`${i}: deleted (cannot be a part of more than ${l} solutions)`),r.push(o))}if(r.length<t){console.log("to_delete:",r.length,"->",t)
let e=[]
for(let t in n)e.push({k:t,n:n[t]})
e.sort((e,t)=>e.n>t.n),e.splice(0,t).forEach(e=>{let t,n=s[e.k]
n&&~(t=s.indexOf(n))&&(console.warn(`${e.k}: deleted (appears ${e.n} times in solutions)`),r.push(n))})}else console.log("to_delete:",r)
for(let e of r)p(s,e)
e=s.solutions=s.length>l?g(s):[]
break}}return e.symbols=s,e})(),v=y.symbols
return{PROPS:i,NUM_PROPS:l,NUM_PROP_THINGS:a,NUM_THINGS:c,NUM_SYMBOLS:r,solutions:y,symbols:v,get_set_errors(e){let t=[],n=b(e)
for(let e of i)for(let r in n[e]){let s=n[e][r],o=l
if(1!==s&&s!==o){let e=o-s
t.push(`${z(s)} ${s>1?"are":"is"} a ${r} and ${z(e)} ${e>1?"are":"is"} not`)}}return t},set_eq(e){const t=f(e)
return e=>f(e)===t},syb_eq(e){const t=h(e)
return e=>h(e)===t},set_str:f,syb_str:h}}const $=[{n:1,rows:1,row:[1]},{n:2,rows:2,row:[1,1]},{n:3,rows:2,row:[2,1]},{n:4,rows:2,row:[2,2]},{n:5,rows:2,row:[3,2]},{n:6,rows:2,row:[3,3]},{n:7,rows:3,row:[3,2,2]},{n:8,rows:3,row:[3,2,3]},{n:9,rows:3,row:[3,3,3]}].map(e=>{e.n
let t=[]
for(let n=0,r=e.rows;r>n;n++)for(let s=0,o=e.row[n];o>s;s++){let e=1/(r+1),i=1/(o+1),l=e*(n+1),a=i*(s+1),c=Math.min(e,i)
t.push({scale:c,x:a,y:l})}return t})
function P(e,t=100){let n=2*Math.PI/e,r=Math.PI/e,o=.45*t,i=0
return 3==e&&(i=t/10),Object(s.f)(e+1).map((e,t)=>{let s=t*n+r
return 0+o*Math.sin(s)+","+(i+o*Math.cos(s))}).join(" ")}function F(e,t,n={}){const{s:r}=e,o=60,i=Object(s.h)({"stroke-width":1},n.shape_opts)
let l={pink:{fill:"deeppink",stroke:"fuchsia"},purple:{fill:"purple",stroke:"pink"},aqua:{fill:"aqua",stroke:"aquamarine"},lime:{fill:"lime",stroke:"lawngreen"}}[t.colour]||{fill:"black",stroke:"brown"},a="circle"===t.shape?r("circle",Object(s.h)({r:48,x:o,y:o},l,i)):"triangle"===t.shape?r("g.triangle",r("polygon",Object(s.h)({points:P(3,120)},l,i))):"square"===t.shape?r("polygon",Object(s.h)({points:P(4,120)},l,i)):"pentagon"===t.shape?r("polygon",Object(s.h)({points:P(5,120)},l,i)):"hexagon"===t.shape?r("polygon",Object(s.h)({points:P(6,120)},l,i)):"-gon"===t.shape.substr(-4)?r("polygon",Object(s.h)({points:P(1*t.shape.split("-")[0],120)},l,i)):r("line",Object(s.h)({x1:24,y1:o,x2:96,y2:o,"stroke-width":12}),l),c=+t.count
c>9&&Object(s.g)("cannot symbols with more than 9 shapes atm")
let u=$[c-1]
if(u||Object(s.g)("no config for count:"+c),t.count>1){let e=[]
for(let t=0;c>t;t++){let n=u[t],r=a.cloneNode(1),s=1/Math.log(c+1)*.4
r.setAttribute("transform",`translate(${120*n.x} ${120*n.y}) scale(${s})`),e.push(r)}a=e}else{let e=u[0]
a.setAttribute("transform",`translate(${120*e.x} ${120*e.y}) scale(${2*e.scale})`)}return r("svg",Object(s.h)({viewBox:"0 0 120 120"},n),a)}n(12)
n(13)
const D={fast:"cubic-bezier(.33,.57,0,1)",impact:"cubic-bezier(.42,0,0,1)"}
n(14)
const I="selected"
function R(e,t,n,r,s){let o,i,l,a=new g,c=new g,u=[]
function f(){for(let e of u)e.classList.remove(I)
u.length=c.length=0}function d(e){return function(){var t,n=this.classList
if(~(t=c.findIndex(game.syb_eq(e)))?(c.splice(t,1),u.splice(t,1),n.remove(I)):(c.push(e),u.push(this),n.add(I)),c.length===o){let e=Array.from(c),t=game.get_set_errors(e)
if(game.stats.attempts++,t.length){game.stats.errors++
for(let e of t)toast_zone.toast(e,10)}else r(e)
setTimeout(f,500)}}}function p(e){let{symbols:t}=e
i!==t.length&&(i=t.length,o=e.NUM_PROPS,l=(function(e){let t,n,r,s,o=(function(e){let t=[]
for(let n=0;e>=n;n++)e%n==0&&t.push(n)
return t})(e),i=o.length,l=[]
for(t=0;i>t;t++)for(n=0;i>n;n++)(r=o[t])*(s=o[n])===e&&l.push([r,s])
return l})(i)),f(),s(),a.reset(t)}function b(e="shuffle"){"shuffle"===e?a.shuffle():a.sort((t,n)=>t[e]>n[e])}return function(r,s){let{symbols:o,syb_str:i}=s
return p(s),Object(h.c)(r,({h:s,c:o,t:c}=r)=>{const u=o([r.o.width,e,t],(e,t,n)=>Math.max(e-t-t-n,200)),h=o([r.o.height,n,e],(e,t,n)=>Math.max(e-t-n-n,200)),f=o([e],e=>e),m=o([n,e],(e,t)=>e+t),g=o([u],e=>e>1e3?40:e>600?30:20),v=o([h],e=>e>1e3?40:e>600?30:20),_=o([u,h],(e,t)=>{let n=e/t
return l.filter(([e,t])=>n>=1&&e>=t||1>=n&&t>=e).map(([e,t])=>({x:e,y:t,r:Math.abs(1-e/t)})).sort((e,t)=>e.r-t.r)[0]}),O=c(_,e=>e?e.x:2),j=c(_,e=>e?e.y:2),w=o([O,u,g],(e,t,n)=>Math.floor((t-n*(e-1))/e)),x=o([j,h,v],(e,t,n)=>Math.floor((t-n*(e-1))/e))
let k=new y(r,a,({h:e,c:t},n,s)=>{const o=t([O,s,g,w],(e,t,n,r)=>{let s=t%e
return r*s+n*s}),l=t([O,s,v,x],(e,t,n,r)=>{let s=Math.floor(t/e)
return r*s+n*s})
let a=i(n),c=F(r,n,{alt:a,width:w,height:x})
return e(".symbol",{style:{left:o,top:l,color:n.colour,width:w,height:x},boink:d(n)},e(".symbol-inner",c))}),A=s(".symbol-grid",{style:{width:u,height:h,left:f,top:m}},k)
return A.reset=p,A.sort=b,A})}}n(15)
function Y(e,t,n,r){const{h:o}=e
let i=(function(e={}){return e=Object(s.h)({autoclose:"autoclose",open:"open",closed:"closed",is_open:0,pinned:0},e),{open_briefly(t,n){return!e.pinned&&this.classList.contains(e.closed)?(setTimeout(()=>{this.classList.contains(e.autoclose)&&this.close(),n&&n()},1e3*t),this.classList.add(e.autoclose),this.open()):0},toggle(){return this.classList.toggle(e.closed),e.is_open=this.classList.toggle(e.open)},open(){return this.classList.add(e.open),this.classList.remove(e.closed),e.is_open=1},close(){return this.classList.remove(e.autoclose,e.open),this.classList.add(e.closed),e.is_open=0},pin(){return this.classList.remove(e.autoclose),e.pinned=!e.pinned},is_open:()=>e.is_open}})()
return o(".side-panel.closed",{boink:i.toggle,assign:i,style:t},o(".side-panel-title",{style:{width:t.height}},o("span",n)),o(".content",r))}var q=n(1)
const B=8,U=1/16777216,G=15,H=18,J=11
function W(e,t){const n=65535&(e>>>=0)
return((e-n)*(t>>>=0)>>>0)+n*t>>>0}class V{constructor(e=Date.now()){this.state=new Uint32Array(4),this.init(e),this.random=this.getFloat.bind(this)}getUint32(){return this.nextState(),this.state[3]+this.state[2]>>>0}getFloat(){return(this.getUint32()>>>8)*U}init(e){if(!Number.isInteger(e))throw new TypeError("seed must be an integer")
this.state[0]=e,this.state[1]=0,this.state[2]=0,this.state[3]=0
for(let e=1;B>e;e++)this.state[3&e]^=e+W(1812433253,this.state[e-1&3]^this.state[e-1&3]>>>30>>>0)>>>0
this.periodCertification()
for(let e=0;B>e;e++)this.nextState()}periodCertification(){0===this.state[0]&&0===this.state[1]&&0===this.state[2]&&0===this.state[3]&&(this.state[0]=88,this.state[1]=83,this.state[2]=65,this.state[3]=68)}nextState(){let e=this.state[0]
e^=e<<G,e^=e>>>H,e^=this.state[3]<<J,this.state[0]=this.state[1],this.state[1]=this.state[2],this.state[2]=this.state[3],this.state[3]=e}}n(16)
window.obv_log=n(6).obv_log,console.log("set-game:: development mode")
const Z=(function(e){const t=Object(u.h)(e)
Math.unpredictable=Math.random
let n=q.j.onhashchange=e=>{let n=location.hash
console.log("hash seed:",n),t(n?1*n.substr(1):0)}
return t(e=>{(e*=1)||(e=Math.floor(Math.random()*Number.MAX_SAFE_INTEGER)),console.info("seed:",e)
const t=new V(e)
history.pushState(null,null,"#"+e),Math.random=()=>t.getFloat()}),n(),t})(),X=[4,6,9,12,15,16,20,24,25,28,30,35,36,40,42,48]
Object(r.a)(function(e){const{G:t,E:n,h:r,v:o,t:i,c:l,m:a}=e
let c,f,d,p,b,m=n.frame
function _(){d.is_open()&&d.close(),c.clear()}v.b.call(r.cleanupFuncs,m,e=>{let t=e.path
t.includes(p)&&(_(),~t.findIndex(e=>"symbol"==e.className)&&(U.stats.boinks++,E(0))),t.includes(d)||t.includes(c)||t.includes(b)},1)
var O
const w=new g,k=o(3),A=o(3),M=o(4)
k(e=>w.min=e)
const T=o(40),E=o(0),L=o(20),C=i(o(0),e=>e?300:40),S=(function(e,t){const{h:n}=e
return(e,r=2,s="fast",o="whammy")=>{let i=n(".whammy",{style:{animation:`${o} ${r}s ${D[s]||s} 1 normal forwards`}},e)
return t.aC(i),r&&setTimeout(()=>{i.style.opacity=0,setTimeout(()=>i.rm(),1e3)},1e3*r),i}})(t,m)
c=(function(e,t){const{h:n}=e
let r=n(".toast-zone",{style:t}),o=[]
function i(e){let t=o.indexOf(e)
~t&&(o.splice(t,1),e.style.opacity=0,setTimeout(()=>r.rC(e),1e3))}return r.toast=(e,t=3,s="ease-in",l="toasted")=>{let a=n(".toast",{boink(){a.style.display="none"},style:{animation:`${l} .1s ${D[s]||s}`}},e)
return r.aC(a),o.push(a),t&&setTimeout(i,1e3*t,a),a},r.clear=()=>{Object(s.e)(o,i)},r})(t,{top:T})
const z=l([w.obv_len,k],(e,t)=>`${e} / ${t}`)
function $(e){if(!e)return
let n=w.findIndex(U.set_eq(e))
if(~n){let e=d.solutions[n]
e.classList.add("highlight"),d.open_briefly(2),setTimeout(()=>{e.classList.remove("highlight")},2e3),U.stats.duplicates++}else{let r=Date.now()
n=w.push(e)
let i=k()-n
i&&c.toast(`only ${i} to go..`)
const a=o(200),u=o(10),f=o(100),d=o(0),p=o(0),b=l([A,f,u],(e,t,n)=>e*t+(e+1)*n),g=l([f,u],(e,t)=>e+t),y=l([t.o.width,b,p],(e,t,n)=>n+(e-t)/2),v=l([t.o.height,g,d],(e,t,n)=>n+(e-t)/2)
let _=P(a,u,u,f,f)(t,e,0)
_.apply({c:"whammy flying-solution",style:{animation:"toasted .1s ease-in",top:v,left:y,width:b,height:g}}),m.aC(_),setTimeout(()=>{if(y(2*t.o.width()),0===i){S("YOU DID IT!")
let e=U.stats,t=e.success/e.attempts,n=(function(e,t={}){let n=Object(h.c)(void 0,e=>{let{h:n,v:r,t:s}=e
t.title=r(t.title||null),t.content=r(t.content(e)),t.footer=r(t.footer)
let o=0==t.close_button,i=n(".modal-background",{boink(e){e.target===i&&!t.no_background_close&&t.close()}},n(".modal",s(t.title,e=>e?n("h1.header",t.title,o?null:{style:{paddingRight:"40px"}},o?null:n(".modal-close",{boink:t.close},n("i.close"))):n(".headerless",o?null:n(".modal-close",{boink:t.close},n("i.close")))),n(".modal-content",t.content),s(t.footer,e=>e?n(".modal-footer",t.footer):null)))
return i})
return n.close=t.close=()=>{n.rm()},e.aC(n),n})(m,{close_button:0,content:({h:e})=>e("#game-over",e("h2","excellent!"),e("h5",e(".stat","symbols:"),e(".amount",M()),e(".stat","accuracy:"),e(".amount",Object(s.i)(100*t,2)+"%"),e(".stat","time to complete:"),e(".amount",(function(e,t){return j(e).map(([e,n])=>x("seconds"==e?n>1?"ss":"s":"minutes"==e?n>1?"mm":"m":"hours"==e?n>1?"hh":"h":"days"==e?n>1?"dd":"d":"months"==e?n>1?"MM":"M":"years"==e?n>1?"yy":"y":"?",n,1,1,t))})(r-U.dt_start).join(" "))),e(".button-container",e("button",{boink(){n.close(),G(U.level+1)}},"next level!")))})}setTimeout(()=>m.rC(_),2e3)},500),U.stats.success++}}function P(e,t,n,r,s){return(o,i,l)=>{let{h:a,t:c,c:u}=o
return a(".solution",{style:{height:e}},Array.isArray(i)?i.map((e,i)=>{const l=c(n,e=>e/2),h=u([t,r],(e,t)=>t*i+e+e*i)
let f=U.syb_str(e),d=F(o,e,{alt:f,width:r,height:s})
return a(".symbol-small",{style:{left:h,top:l,color:e.colour,width:r,height:s}},a(".symbol-inner",{style:{color:e.colour}},d))}):i)}}let I=(function(e,t){return function(n,r){return Object(h.c)(n,({h:r,m:s}=n)=>r(".title-bar",{style:{height:t}},r("h1","~SET~",{boink:s(e,e=>!e)})))}})(E,T),q=(function(e,t,n,r){return function(o,i,l){return Object(h.c)(o,o=>{let{h:a,v:c,c:h,t:f}=o
const d=c(220),p=h([e,d],(e,t)=>Math.floor(t/(e+e+e+e))),b=h([e,d,p],(e,t,n)=>Math.floor((t-n*(e+1))/e)),m=h([b],e=>e),g=c(10),v=c(60),_=h([o.o.height,t,m],(e,t,n)=>Math.min(e-200,t*n*1.5)),O=h([_,v,g],(e,t,n)=>n+t+e+n),j=h([o.o.height,O],(e,t)=>(e-t)/2),w=h([_],e=>e>1e3?40:e>600?30:20),x=h([m,w],(e,t)=>e+t),k=new y(o,i,r(x,p,w,b,m),{plain:1,min:t(),empty_fn:t=>a(".solution",{style:{height:x}},Object(s.f)(e()).map((e,t)=>{const n=w()/2+"px",r=Object(u.b)([p,b],(e,n)=>n*t+e+e*t)+"px"
return a(".symbol-small",{style:{left:r,top:n,width:b,height:m}})}))})
let A=Y(o,{height:O,top:j},n,[a(".header",a("div",n),a("div",`(${l.solutions.length} possible)`)),a(".sets-found",k)])
return A.solutions=k,window.solutions=k,A})}})(A,k,z,P),B=R(L,C,T,$,_)
b=I(t)
let U
function G(e=0){k(3),U=N({min_solutions:k(),max_solutions:5e3,num_symbols:M(X[e]),sets:{count:[1,2,3,4],colour:["pink","lime","purple","aqua"],shape:["circle","triangle","square","hexagon"]}}),O=U.PROPS,U.NUM_SYMBOLS,U.solutions.length,A(O.length),k(),U.level=e,U.dt_start=Date.now(),U.stats={boinks:0,success:0,errors:0,attempts:0,duplicates:0},p&&p.reset(U),w.empty()}return G(4),d=q(t,w,U),p=B(t,U),window.game=U,window.sets_found=w,window.toast_zone=c,window.title_bar=b,window.symbol_grid=p,window.side_panel=d,window.make_new_game=G,window.add_set=()=>{U.stats.attempts++,$(U.solutions[w.length])},Z(e=>{console.log("new seed!",e),G(U.level)}),r(".set-game",c,b,p,d,r(".seeder",{style:{display:i(E,e=>(setTimeout(()=>{f.focus(),f.select()},10),e?"":"none"))}},f=r("input",{type:"number",step:1,value:Z,onfocus(){this.select()}})))})}])
