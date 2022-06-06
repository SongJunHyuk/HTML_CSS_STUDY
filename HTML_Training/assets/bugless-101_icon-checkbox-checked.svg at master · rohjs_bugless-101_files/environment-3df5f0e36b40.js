(()=>{var ee=Object.defineProperty;var e=(T,r)=>ee(T,"name",{value:r,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["environment"],{24760:(T,r,i)=>{"use strict";var o=i(51012);window.addEventListener("error",o.LN),window.addEventListener("unhandledrejection",o.mT),window.location.hash==="#b00m"&&setTimeout(()=>{throw new Error("b00m")});var _=i(30523),u=i(50232);(0,u.nn)()},97261:(T,r,i)=>{"use strict";i.d(r,{S:()=>y});function o(p){const a=document.querySelectorAll(p);if(a.length>0)return a[a.length-1]}e(o,"queryLast");function _(){const p=o("meta[name=analytics-location]");return p?p.content:window.location.pathname}e(_,"pagePathname");function u(){const p=o("meta[name=analytics-location-query-strip]");let a="";p||(a=window.location.search);const c=o("meta[name=analytics-location-params]");c&&(a+=(a?"&":"?")+c.content);for(const E of document.querySelectorAll("meta[name=analytics-param-rename]")){const d=E.content.split(":",2);a=a.replace(new RegExp(`(^|[?&])${d[0]}($|=)`,"g"),`$1${d[1]}$2`)}return a}e(u,"pageQuery");function y(){return`${window.location.protocol}//${window.location.host}${_()+u()}`}e(y,"requestUri")},75488:(T,r,i)=>{"use strict";i.d(r,{C:()=>_,x:()=>o});const o=function(){return document.readyState==="interactive"||document.readyState==="complete"?Promise.resolve():new Promise(u=>{document.addEventListener("DOMContentLoaded",()=>{u()})})}(),_=function(){return document.readyState==="complete"?Promise.resolve():new Promise(u=>{window.addEventListener("load",u)})}()},51012:(T,r,i)=>{"use strict";i.d(r,{LN:()=>g,aJ:()=>m,cI:()=>n,eK:()=>O,mT:()=>w});var o=i(71692),_=i(70290),u=i(82918),y=i(50232),p=i(28382),a=i(97261);let c=!1,E=0;const d=Date.now();function g(s){s.error&&S(b(I(s.error)))}e(g,"reportEvent");async function w(s){if(!!s.promise)try{await s.promise}catch(v){S(b(I(v)))}}e(w,"reportPromiseRejectionEvent");function O(s,v={}){s&&s.name!=="AbortError"&&S(b(I(s),v))}e(O,"reportError");async function S(s){var v,x;if(!C())return;const D=(x=(v=document.head)==null?void 0:v.querySelector('meta[name="browser-errors-url"]'))==null?void 0:x.content;if(!!D){if(l(s.error.stacktrace)){c=!0;return}E++;try{await fetch(D,{method:"post",body:JSON.stringify(s)})}catch{}}}e(S,"report");function I(s){return{type:s.name,value:s.message,stacktrace:n(s)}}e(I,"formatError");function b(s,v={}){return Object.assign({error:s,sanitizedUrl:(0,a.S)()||window.location.href,readyState:document.readyState,referrer:(0,o.wP)(),timeSinceLoad:Math.round(Date.now()-d),user:m()||void 0},v)}e(b,"errorContext");function n(s){return(0,p.Q)(s.stack||"").map(v=>({filename:v.file||"",function:String(v.methodName),lineno:(v.lineNumber||0).toString(),colno:(v.column||0).toString()}))}e(n,"stacktrace");const t=/(chrome|moz|safari)-extension:\/\//;function l(s){return s.some(v=>t.test(v.filename)||t.test(v.function))}e(l,"isExtensionError");function m(){var s,v;const x=(v=(s=document.head)==null?void 0:s.querySelector('meta[name="user-login"]'))==null?void 0:v.content;return x||`anonymous-${(0,u.b)()}`}e(m,"pageUser");let A=!1;window.addEventListener("pageshow",()=>A=!1),window.addEventListener("pagehide",()=>A=!0),document.addEventListener(o.QE.ERROR,s=>{S(b({type:"SoftNavError",value:s.detail,stacktrace:n(new Error)}))});function C(){return!A&&!c&&E<10&&(0,y.Gb)()&&!(0,_.Z)(document)}e(C,"reportable"),typeof BroadcastChannel=="function"&&new BroadcastChannel("shared-worker-error").addEventListener("message",v=>{O(v.data.error)})},70290:(T,r,i)=>{"use strict";i.d(r,{Z:()=>o});function o(_){var u,y;const p=(y=(u=_.head)==null?void 0:u.querySelector('meta[name="expected-hostname"]'))==null?void 0:y.content;if(!p)return!1;const a=p.replace(/\.$/,"").split(".").slice(-2).join("."),c=_.location.hostname.replace(/\.$/,"").split(".").slice(-2).join(".");return a!==c}e(o,"detectProxySite")},31579:(T,r,i)=>{"use strict";i.d(r,{Z:()=>_});class o{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}}e(o,"NoOpStorage");function _(u,y={throwQuotaErrorsOnSet:!1},p=window){let a;try{a=p[u]}catch{a=new o}const{throwQuotaErrorsOnSet:c}=y;function E(w){try{return a.getItem(w)}catch{return null}}e(E,"getItem");function d(w,O){try{a.setItem(w,O)}catch(S){if(c&&S.message.toLowerCase().includes("quota"))throw S}}e(d,"setItem");function g(w){try{a.removeItem(w)}catch{}}return e(g,"removeItem"),{getItem:E,setItem:d,removeItem:g}}e(_,"safeStorage")},30855:(T,r,i)=>{"use strict";i.d(r,{LS:()=>u,cl:()=>y,rV:()=>_});var o=i(31579);const{getItem:_,setItem:u,removeItem:y}=(0,o.Z)("sessionStorage")},71692:(T,r,i)=>{"use strict";i.d(r,{Ak:()=>I,F2:()=>v,F6:()=>m,FP:()=>O,LD:()=>w,OE:()=>g,Po:()=>d,QE:()=>y,Rl:()=>C,Xk:()=>t,Ys:()=>l,aN:()=>s,wP:()=>A});var o=i(30855),_=i(97261),u=i(77552);const y=Object.freeze({INITIAL:"soft-nav:initial",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",START:"soft-nav:start",END:"soft-nav:end"}),p="soft-navigation-fail",a="soft-navigation-referrer",c="soft-navigation-marker",E="reload";function d(){return(0,o.rV)(c)==="1"}e(d,"inSoftNavigation");function g(){return Boolean(b())}e(g,"hasSoftNavFailure");function w(){performance.mark(c),(0,o.LS)(c,"1"),(0,o.LS)(a,(0,_.S)()||window.location.href)}e(w,"startSoftNav");function O(){(0,o.LS)(c,"0")}e(O,"endSoftNav");function S(){(0,o.LS)(c,"0"),(0,o.cl)(a),(0,o.cl)(p)}e(S,"clearSoftNav");function I(x){(0,o.LS)(p,x||E)}e(I,"setSoftNavFailReason");function b(){return(0,o.rV)(p)}e(b,"getSoftNavFailReason");let n=0;function t(){n+=1,document.dispatchEvent(new CustomEvent(y.SUCCESS,{detail:n}))}e(t,"softNavSucceeded");function l(){const x=b()||E;document.dispatchEvent(new CustomEvent(y.ERROR,{detail:x})),n=0,S(),(0,u.b)({turboFailureReason:"tracked_element_mismatch"})}e(l,"softNavFailed");function m(){document.dispatchEvent(new CustomEvent(y.INITIAL)),n=0,S()}e(m,"softNavInitial");function A(){return(0,o.rV)(a)||document.referrer}e(A,"getSoftNavReferrer");function C(){return performance.getEntriesByName(c).length===0?0:performance.measure(c,c).duration}e(C,"getDurationSinceLastSoftNav");function s(){document.dispatchEvent(new Event(y.START))}e(s,"beginProgressBar");function v(){document.dispatchEvent(new Event(y.END))}e(v,"completeProgressBar")},77552:(T,r,i)=>{"use strict";i.d(r,{b:()=>y});var o=i(70290),_=i(75488);let u=[];function y(d,g=!1){d.timestamp===void 0&&(d.timestamp=new Date().getTime()),d.loggedIn=E(),u.push(d),g?c():a()}e(y,"sendStats");let p=null;async function a(){await _.C,p==null&&(p=window.requestIdleCallback(c))}e(a,"scheduleSendStats");function c(){var d,g;if(p=null,!u.length||(0,o.Z)(document))return;const w=(g=(d=document.head)==null?void 0:d.querySelector('meta[name="browser-stats-url"]'))==null?void 0:g.content;if(!w)return;const O=JSON.stringify({stats:u});try{navigator.sendBeacon&&navigator.sendBeacon(w,O)}catch{}u=[]}e(c,"flushStats");function E(){var d,g;return!!((g=(d=document.head)==null?void 0:d.querySelector('meta[name="user-login"]'))==null?void 0:g.content)}e(E,"isLoggedIn"),document.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c)},30523:T=>{(function(){"use strict";var r=window,i=document;function o(u){var y=["MSIE ","Trident/","Edge/"];return new RegExp(y.join("|")).test(u)}e(o,"isMicrosoftBrowser");function _(){if("scrollBehavior"in i.documentElement.style&&r.__forceSmoothScrollPolyfill__!==!0)return;var u=r.HTMLElement||r.Element,y=468,p=o(r.navigator.userAgent)?1:0,a={scroll:r.scroll||r.scrollTo,scrollBy:r.scrollBy,elementScroll:u.prototype.scroll||E,scrollIntoView:u.prototype.scrollIntoView},c=r.performance&&r.performance.now?r.performance.now.bind(r.performance):Date.now;function E(t,l){this.scrollLeft=t,this.scrollTop=l}e(E,"scrollElement");function d(t){return .5*(1-Math.cos(Math.PI*t))}e(d,"ease");function g(t){if(t===null||typeof t!="object"||t.behavior===void 0||t.behavior==="auto"||t.behavior==="instant")return!0;if(typeof t=="object"&&t.behavior==="smooth")return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}e(g,"shouldBailOut");function w(t,l){if(l==="Y")return t.clientHeight+p<t.scrollHeight;if(l==="X")return t.clientWidth+p<t.scrollWidth}e(w,"hasScrollableSpace");function O(t,l){var m=r.getComputedStyle(t,null)["overflow"+l];return m==="auto"||m==="scroll"}e(O,"canOverflow");function S(t){var l=w(t,"Y")&&O(t,"Y"),m=w(t,"X")&&O(t,"X");return l||m}e(S,"isScrollable");function I(t){var l;do t=t.parentNode,l=t===i.body;while(l===!1&&S(t)===!1);return l=null,t}e(I,"findScrollableParent");function b(t){var l=c(),m,A,C,s=(l-t.startTime)/y;s=s>1?1:s,m=d(s),A=t.startX+(t.x-t.startX)*m,C=t.startY+(t.y-t.startY)*m,t.method.call(t.scrollable,A,C),(A!==t.x||C!==t.y)&&r.requestAnimationFrame(b.bind(r,t))}e(b,"step");function n(t,l,m){var A,C,s,v,x=c();t===i.body?(A=r,C=r.scrollX||r.pageXOffset,s=r.scrollY||r.pageYOffset,v=a.scroll):(A=t,C=t.scrollLeft,s=t.scrollTop,v=E),b({scrollable:A,method:v,startTime:x,startX:C,startY:s,x:l,y:m})}e(n,"smoothScroll"),r.scroll=r.scrollTo=function(){if(arguments[0]!==void 0){if(g(arguments[0])===!0){a.scroll.call(r,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:r.scrollX||r.pageXOffset,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:r.scrollY||r.pageYOffset);return}n.call(r,i.body,arguments[0].left!==void 0?~~arguments[0].left:r.scrollX||r.pageXOffset,arguments[0].top!==void 0?~~arguments[0].top:r.scrollY||r.pageYOffset)}},r.scrollBy=function(){if(arguments[0]!==void 0){if(g(arguments[0])){a.scrollBy.call(r,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:0,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:0);return}n.call(r,i.body,~~arguments[0].left+(r.scrollX||r.pageXOffset),~~arguments[0].top+(r.scrollY||r.pageYOffset))}},u.prototype.scroll=u.prototype.scrollTo=function(){if(arguments[0]!==void 0){if(g(arguments[0])===!0){if(typeof arguments[0]=="number"&&arguments[1]===void 0)throw new SyntaxError("Value couldn't be converted");a.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left:typeof arguments[0]!="object"?~~arguments[0]:this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top:arguments[1]!==void 0?~~arguments[1]:this.scrollTop);return}var t=arguments[0].left,l=arguments[0].top;n.call(this,this,typeof t=="undefined"?this.scrollLeft:~~t,typeof l=="undefined"?this.scrollTop:~~l)}},u.prototype.scrollBy=function(){if(arguments[0]!==void 0){if(g(arguments[0])===!0){a.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},u.prototype.scrollIntoView=function(){if(g(arguments[0])===!0){a.scrollIntoView.call(this,arguments[0]===void 0?!0:arguments[0]);return}var t=I(this),l=t.getBoundingClientRect(),m=this.getBoundingClientRect();t!==i.body?(n.call(this,t,t.scrollLeft+m.left-l.left,t.scrollTop+m.top-l.top),r.getComputedStyle(t).position!=="fixed"&&r.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):r.scrollBy({left:m.left,top:m.top,behavior:"smooth"})}}e(_,"polyfill"),T.exports={polyfill:_}})()},28382:(T,r,i)=>{"use strict";i.d(r,{Q:()=>_});var o="<unknown>";function _(b){var n=b.split(`
`);return n.reduce(function(t,l){var m=p(l)||c(l)||g(l)||I(l)||O(l);return m&&t.push(m),t},[])}e(_,"parse");var u=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,y=/\((\S*)(?::(\d+))(?::(\d+))\)/;function p(b){var n=u.exec(b);if(!n)return null;var t=n[2]&&n[2].indexOf("native")===0,l=n[2]&&n[2].indexOf("eval")===0,m=y.exec(n[2]);return l&&m!=null&&(n[2]=m[1],n[3]=m[2],n[4]=m[3]),{file:t?null:n[2],methodName:n[1]||o,arguments:t?[n[2]]:[],lineNumber:n[3]?+n[3]:null,column:n[4]?+n[4]:null}}e(p,"parseChrome");var a=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;function c(b){var n=a.exec(b);return n?{file:n[2],methodName:n[1]||o,arguments:[],lineNumber:+n[3],column:n[4]?+n[4]:null}:null}e(c,"parseWinjs");var E=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,d=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i;function g(b){var n=E.exec(b);if(!n)return null;var t=n[3]&&n[3].indexOf(" > eval")>-1,l=d.exec(n[3]);return t&&l!=null&&(n[3]=l[1],n[4]=l[2],n[5]=null),{file:n[3],methodName:n[1]||o,arguments:n[2]?n[2].split(","):[],lineNumber:n[4]?+n[4]:null,column:n[5]?+n[5]:null}}e(g,"parseGecko");var w=/^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;function O(b){var n=w.exec(b);return n?{file:n[3],methodName:n[1]||o,arguments:[],lineNumber:+n[4],column:n[5]?+n[5]:null}:null}e(O,"parseJSC");var S=/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;function I(b){var n=S.exec(b);return n?{file:n[2],methodName:n[1]||o,arguments:[],lineNumber:+n[3],column:n[4]?+n[4]:null}:null}e(I,"parseNode")},50232:(T,r,i)=>{"use strict";i.d(r,{nn:()=>Z,Gb:()=>G});function o(f){const h=new AbortController;return h.abort(f),h.signal}e(o,"abortsignal_abort_abortSignalAbort");function _(){return"abort"in AbortSignal&&typeof AbortSignal.abort=="function"}e(_,"isSupported");function u(){return AbortSignal.abort===o}e(u,"isPolyfilled");function y(){_()||(AbortSignal.abort=o)}e(y,"apply");function p(f){const h=new AbortController;return setTimeout(()=>h.abort(new DOMException("TimeoutError")),f),h.signal}e(p,"abortsignal_timeout_abortSignalTimeout");function a(){return"abort"in AbortSignal&&typeof AbortSignal.timeout=="function"}e(a,"abortsignal_timeout_isSupported");function c(){return AbortSignal.timeout===p}e(c,"abortsignal_timeout_isPolyfilled");function E(){a()||(AbortSignal.timeout=p)}e(E,"abortsignal_timeout_apply");class d extends Error{constructor(h,P,L={}){super(P);Object.defineProperty(this,"errors",{value:Array.from(h),configurable:!0,writable:!0}),L.cause&&Object.defineProperty(this,"cause",{value:L.cause,configurable:!0,writable:!0})}}e(d,"AggregateError");function g(){return typeof globalThis.AggregateError=="function"}e(g,"aggregateerror_isSupported");function w(){return globalThis.AggregateError===d}e(w,"aggregateerror_isPolyfilled");function O(){g()||(globalThis.AggregateError=d)}e(O,"aggregateerror_apply");const S=Reflect.getPrototypeOf(Int8Array)||{};function I(f){const h=this.length;return f=Math.trunc(f)||0,f<0&&(f+=h),f<0||f>=h?void 0:this[f]}e(I,"arrayLikeAt");function b(){return"at"in Array.prototype&&typeof Array.prototype.at=="function"&&"at"in String.prototype&&typeof String.prototype.at=="function"&&"at"in S&&typeof S.at=="function"}e(b,"arraylike_at_isSupported");function n(){return Array.prototype.at===I&&String.prototype.at===I&&S.at===I}e(n,"arraylike_at_isPolyfilled");function t(){if(!b()){const f={value:I,writable:!0,configurable:!0};Object.defineProperty(Array.prototype,"at",f),Object.defineProperty(String.prototype,"at",f),Object.defineProperty(S,"at",f)}}e(t,"arraylike_at_apply");function l(){const f=new Uint32Array(4);crypto.getRandomValues(f);let h=-1;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(P){h++;const L=f[h>>3]>>h%8*4&15;return(P==="x"?L:L&3|8).toString(16)})}e(l,"randomUUID");function m(){return typeof crypto=="object"&&"randomUUID"in crypto&&typeof crypto.randomUUID=="function"}e(m,"crypto_randomuuid_isSupported");function A(){return m()&&crypto.randomUUID===l}e(A,"crypto_randomuuid_isPolyfilled");function C(){m()||(crypto.randomUUID=l)}e(C,"crypto_randomuuid_apply");const s=EventTarget.prototype.addEventListener;function v(f,h,P){if(typeof P=="object"&&"signal"in P&&P.signal instanceof AbortSignal){if(P.signal.aborted)return;s.call(P.signal,"abort",()=>{this.removeEventListener(f,h,P)})}return s.call(this,f,h,P)}e(v,"addEventListenerWithAbortSignal");function x(){let f=!1;const h=e(()=>f=!0,"setSignalSupported");function P(){}e(P,"noop");const L=Object.create({},{signal:{get:h}});try{const R=new EventTarget;return R.addEventListener("test",P,L),R.removeEventListener("test",P,L),f}catch{return f}}e(x,"event_abortsignal_isSupported");function D(){return EventTarget.prototype.addEventListener===v}e(D,"event_abortsignal_isPolyfilled");function V(){typeof AbortSignal=="function"&&!x()&&(EventTarget.prototype.addEventListener=v)}e(V,"event_abortsignal_apply");const X=Object.prototype.hasOwnProperty;function j(f,h){if(f==null)throw new TypeError("Cannot convert undefined or null to object");return X.call(Object(f),h)}e(j,"object_hasown_objectHasOwn");function M(){return"hasOwn"in Object&&typeof Object.hasOwn=="function"}e(M,"object_hasown_isSupported");function te(){return Object.hasOwn===j}e(te,"object_hasown_isPolyfilled");function Y(){M()||Object.defineProperty(Object,"hasOwn",{value:j,configurable:!0,writable:!0})}e(Y,"object_hasown_apply");function U(f){return new Promise((h,P)=>{let L=!1;const R=Array.from(f),N=[];function J(k){L||(L=!0,h(k))}e(J,"resolveOne");function z(k){N.push(k),N.length===R.length&&P(new globalThis.AggregateError(N,"All Promises rejected"))}e(z,"rejectIfDone");for(const k of R)Promise.resolve(k).then(J,z)})}e(U,"promise_any_promiseAny");function B(){return"any"in Promise&&typeof Promise.any=="function"}e(B,"promise_any_isSupported");function ne(){return Promise.all===U}e(ne,"promise_any_isPolyfilled");function K(){B()||(Promise.any=U)}e(K,"promise_any_apply");const q=50;function $(f,h={}){const P=Date.now(),L=h.timeout||0,R=Object.defineProperty({didTimeout:!1,timeRemaining(){return Math.max(0,q-(Date.now()-P))}},"didTimeout",{get(){return Date.now()-P>L}});return window.setTimeout(()=>{f(R)})}e($,"requestidlecallback_requestIdleCallback");function W(f){clearTimeout(f)}e(W,"cancelIdleCallback");function F(){return typeof globalThis.requestIdleCallback=="function"}e(F,"requestidlecallback_isSupported");function re(){return globalThis.requestIdleCallback===$&&globalThis.cancelIdleCallback===W}e(re,"requestidlecallback_isPolyfilled");function H(){F()||(globalThis.requestIdleCallback=$,globalThis.cancelIdleCallback=W)}e(H,"requestidlecallback_apply");const Q=typeof Blob=="function"&&typeof PerformanceObserver=="function"&&typeof Intl=="object"&&typeof MutationObserver=="function"&&typeof URLSearchParams=="function"&&typeof WebSocket=="function"&&typeof IntersectionObserver=="function"&&typeof queueMicrotask=="function"&&typeof TextEncoder=="function"&&typeof TextDecoder=="function"&&typeof customElements=="object"&&typeof HTMLDetailsElement=="function"&&typeof AbortController=="function"&&typeof AbortSignal=="function"&&"entries"in FormData.prototype&&"toggleAttribute"in Element.prototype&&"replaceChildren"in Element.prototype&&"fromEntries"in Object&&"flatMap"in Array.prototype&&"trimEnd"in String.prototype&&"allSettled"in Promise&&"matchAll"in String.prototype&&"replaceAll"in String.prototype&&!0;function G(){return Q&&_()&&a()&&g()&&b()&&m()&&x()&&M()&&B()&&F()}e(G,"lib_isSupported");function oe(){return abortSignalAbort.isPolyfilled()&&abortSignalTimeout.isPolyfilled()&&aggregateError.isPolyfilled()&&arrayAt.isPolyfilled()&&cryptoRandomUUID.isPolyfilled()&&eventAbortSignal.isPolyfilled()&&objectHasOwn.isPolyfilled()&&promiseAny.isPolyfilled()&&requestIdleCallback.isPolyfilled()}e(oe,"lib_isPolyfilled");function Z(){y(),E(),O(),t(),C(),V(),Y(),K(),H()}e(Z,"lib_apply")},82918:(T,r,i)=>{"use strict";i.d(r,{b:()=>p});let o;function _(){return`${Math.round(Math.random()*(Math.pow(2,31)-1))}.${Math.round(Date.now()/1e3)}`}e(_,"generateClientId");function u(a){const c=`GH1.1.${a}`,E=Date.now(),d=new Date(E+1*365*86400*1e3).toUTCString();let{domain:g}=document;g.endsWith(".github.com")&&(g="github.com"),document.cookie=`_octo=${c}; expires=${d}; path=/; domain=${g}; secure; samesite=lax`}e(u,"setClientIdCookie");function y(){let a;const E=document.cookie.match(/_octo=([^;]+)/g);if(!E)return;let d=[0,0];for(const g of E){const[,w]=g.split("="),[,O,...S]=w.split("."),I=O.split("-").map(Number);I>d&&(d=I,a=S.join("."))}return a}e(y,"getClientIdFromCookie");function p(){try{const a=y();if(a)return a;const c=_();return u(c),c}catch{return o||(o=_()),o}}e(p,"getOrCreateClientId")}},T=>{var r=e(o=>T(T.s=o),"__webpack_exec__"),i=r(24760)}]);})();

//# sourceMappingURL=environment-a0bcefe18900.js.map