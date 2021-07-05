/*! For license information please see index.a4af9572.js.LICENSE.txt */
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){(function(n){var o,r;window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),r=Math.max(0,16-(o-e)),a=window.setTimeout((function(){t(o+r)}),r);return e=o+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),r=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(o=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},o=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,r=-1,a="",i=n.charCodeAt(0);++r<o;){if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=1<=t&&t<=31||127==t||0===r&&48<=t&&t<=57||1===r&&48<=t&&t<=57&&45===i?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+a},r=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(t,n,o){0===t&&document.body.focus(),o||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},i=function(t,n,o,r){if(n.emitEvents&&"function"==typeof e.CustomEvent){var a=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:r}});document.dispatchEvent(a)}};return function(c,u){var s,l,d,f,m={cancelScroll:function(e){cancelAnimationFrame(f),f=null,e||i("scrollCancel",s)},animateScroll:function(o,c,u){m.cancelScroll();var l=n(s||t,u||{}),h="[object Number]"===Object.prototype.toString.call(o),p=h||!o.tagName?null:o;if(h||p){var g=e.pageYOffset;l.header&&!d&&(d=document.querySelector(l.header));var v,y,w,b,S,E,A,O,M=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n}(d),x=h?o:function(t,n,o,a){var i=0;if(t.offsetParent)for(;i+=t.offsetTop,t=t.offsetParent;);return i=Math.max(i-n-o,0),a&&(i=Math.min(i,r()-e.innerHeight)),i}(p,M,parseInt("function"==typeof l.offset?l.offset(o,c):l.offset,10),l.clip),q=x-g,C=r(),I=0,F=(v=q,w=(y=l).speedAsDuration?y.speed:Math.abs(v/1e3*y.speed),y.durationMax&&w>y.durationMax?y.durationMax:y.durationMin&&w<y.durationMin?y.durationMin:parseInt(w,10)),L=function(t){var n,r,u;b||(b=t),I+=t-b,E=g+q*(r=S=1<(S=0===F?0:I/F)?1:S,"easeInQuad"===(n=l).easing&&(u=r*r),"easeOutQuad"===n.easing&&(u=r*(2-r)),"easeInOutQuad"===n.easing&&(u=r<.5?2*r*r:(4-2*r)*r-1),"easeInCubic"===n.easing&&(u=r*r*r),"easeOutCubic"===n.easing&&(u=--r*r*r+1),"easeInOutCubic"===n.easing&&(u=r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1),"easeInQuart"===n.easing&&(u=r*r*r*r),"easeOutQuart"===n.easing&&(u=1- --r*r*r*r),"easeInOutQuart"===n.easing&&(u=r<.5?8*r*r*r*r:1-8*--r*r*r*r),"easeInQuint"===n.easing&&(u=r*r*r*r*r),"easeOutQuint"===n.easing&&(u=1+--r*r*r*r*r),"easeInOutQuint"===n.easing&&(u=r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r),n.customEasing&&(u=n.customEasing(r)),u||r),e.scrollTo(0,Math.floor(E)),function(t,n){var r=e.pageYOffset;if(t==n||r==n||(g<n&&e.innerHeight+r)>=C)return m.cancelScroll(!0),a(o,n,h),i("scrollStop",l,o,c),!(f=b=null)}(E,x)||(f=e.requestAnimationFrame(L),b=t)};0===e.pageYOffset&&e.scrollTo(0,0),A=o,O=l,h||history.pushState&&O.updateURL&&history.pushState({smoothScroll:JSON.stringify(O),anchor:A.id},document.title,A===document.documentElement?"#top":"#"+A.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?a(o,Math.floor(x),!1):(i("scrollStart",l,o,c),m.cancelScroll(!0),e.requestAnimationFrame(L))}}},h=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(l=t.target.closest(c))&&"a"===l.tagName.toLowerCase()&&!t.target.closest(s.ignore)&&l.hostname===e.location.hostname&&l.pathname===e.location.pathname&&/#/.test(l.href)){var n,r;try{n=o(decodeURIComponent(l.hash))}catch(t){n=o(l.hash)}if("#"===n){if(!s.topOnEmptyHash)return;r=document.documentElement}else r=document.querySelector(n);(r=r||"#top"!==n?r:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(s),m.animateScroll(r,l))}},p=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(s)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(o(history.state.anchor)))||m.animateScroll(t,null,{updateURL:!1})}};return m.destroy=function(){s&&(document.removeEventListener("click",h,!1),e.removeEventListener("popstate",p,!1),m.cancelScroll(),f=d=l=s=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";m.destroy(),s=n(t,u||{}),d=s.header?document.querySelector(s.header):null,document.addEventListener("click",h,!1),s.updateURL&&s.popstate&&e.addEventListener("popstate",p,!1)}(),m}}(r)}.apply(t,[]))||(e.exports=o)}).call(this,n(3))},function(e,t,n){"use strict";n.r(t);n(2);var o,r,a,i=n(0);new(n.n(i).a)('a[href*="#"]');o=document.querySelector(".burger"),r=document.querySelector(".nav__box"),a=document.querySelectorAll(".nav__box li"),o.addEventListener("click",(function(){r.classList.toggle("nav-active"),a.forEach((function(e,t){e.style.animation?e.style.animation="":e.style.animation="navLinkFade 0.5s ease forwards ".concat(t/7+.3,"s")})),o.classList.toggle("toggle")}));var c=document.querySelectorAll(".div__header"),u=document.querySelector(".achievements"),s={root:null,threshold:1,rootMargin:""};window.matchMedia("(max-width: 560px)").matches&&(s.threshold=0,s.rootMargin="-150px"),new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(console.log(e),c.forEach((function(e){!function t(){var n=+e.getAttribute("data-target"),o=+e.innerText,r=n/500;o<n?(e.innerText=Math.ceil(o+r),setTimeout(t,1)):o.innerText=n}()})))}))}),s).observe(u)},function(e,t,n){},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);