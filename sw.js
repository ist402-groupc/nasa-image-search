if(!self.define){let e,t={};const i=(i,n)=>(i=new URL(i+".js",n).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let s={};const f=e=>i(e,r),c={module:{uri:r},exports:s,require:f};t[r]=Promise.all(n.map((e=>c[e]||f(e)))).then((e=>(o(...e),s)))}}define(["./workbox-8738f3ab"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"a0686553.js",revision:"e87f2e9826fb826c1107da7ff7618182"},{url:"index.html",revision:"03ce732002d3872dc477f45346f100a8"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
