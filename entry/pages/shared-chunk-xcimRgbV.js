import{u as e,g as t,o as r,r as a,c as o,w as s}from"./vendor-chunk-BuTDzeVp.js";function n(t){return"function"==typeof t?t():e(t)}const u="undefined"!=typeof window&&"undefined"!=typeof document;"undefined"!=typeof WorkerGlobalScope&&(globalThis,WorkerGlobalScope);const c=Object.prototype.toString,p=()=>{};function i(e){var t;const r=n(e);return null!=(t=null==r?void 0:r.$el)?t:r}const l=u?window:void 0;function d(...e){let a,o,u,d;if("string"==typeof e[0]||Array.isArray(e[0])?([o,u,d]=e,a=l):[a,o,u,d]=e,!a)return p;Array.isArray(o)||(o=[o]),Array.isArray(u)||(u=[u]);const v=[],f=()=>{v.forEach((e=>e())),v.length=0},y=s((()=>[i(a),n(d)]),(([e,t])=>{if(f(),!e)return;const r=(a=t,"[object Object]"===c.call(a)?{...t}:t);var a;v.push(...o.flatMap((t=>u.map((a=>((e,t,r,a)=>(e.addEventListener(t,r,a),()=>e.removeEventListener(t,r,a)))(e,t,a,r))))))}),{immediate:!0,flush:"post"}),m=()=>{y(),f()};var h;return h=m,t()&&r(h),m}function v(e={}){const{touch:t=!0,drag:r=!0,capture:s=!1,initialValue:n=!1,window:u=l}=e,c=a(n),p=a(null);if(!u)return{pressed:c,sourceType:p};const v=e=>()=>{c.value=!0,p.value=e},f=()=>{c.value=!1,p.value=null},y=o((()=>i(e.target)||u));return d(y,"mousedown",v("mouse"),{passive:!0,capture:s}),d(u,"mouseleave",f,{passive:!0,capture:s}),d(u,"mouseup",f,{passive:!0,capture:s}),r&&(d(y,"dragstart",v("mouse"),{passive:!0,capture:s}),d(u,"drop",f,{passive:!0,capture:s}),d(u,"dragend",f,{passive:!0,capture:s})),t&&(d(y,"touchstart",v("touch"),{passive:!0,capture:s}),d(u,"touchend",f,{passive:!0,capture:s}),d(u,"touchcancel",f,{passive:!0,capture:s})),{pressed:c,sourceType:p}}export{v as u};
