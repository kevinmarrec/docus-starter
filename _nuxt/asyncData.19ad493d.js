import{a6 as v,i as y,a7 as _,B as x,S as w,a8 as D,R as b,u as C}from"./entry.a15c51fb.js";const O=()=>null;function M(...s){var m;const l=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(l);let[t,f,a={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof f!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");a.server=a.server??!0,a.default=a.default??O,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0;const e=v(),u=()=>e.isHydrating?e.payload.data[t]:e.static.data[t],d=()=>u()!==void 0;e._asyncData[t]||(e._asyncData[t]={data:y(u()??((m=a.default)==null?void 0:m.call(a))??null),pending:y(!d()),error:y(e.payload._errors[t]?_(e.payload._errors[t]):null)});const n={...e._asyncData[t]};n.refresh=n.execute=(i={})=>{if(e._asyncDataPromises[t]){if(i.dedupe===!1)return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if(i._initial&&d())return u();n.pending.value=!0;const o=new Promise((r,c)=>{try{r(f(e))}catch(P){c(P)}}).then(r=>{if(o.cancelled)return e._asyncDataPromises[t];a.transform&&(r=a.transform(r)),a.pick&&(r=k(r,a.pick)),n.data.value=r,n.error.value=null}).catch(r=>{var c;if(o.cancelled)return e._asyncDataPromises[t];n.error.value=r,n.data.value=C(((c=a.default)==null?void 0:c.call(a))??null)}).finally(()=>{o.cancelled||(n.pending.value=!1,e.payload.data[t]=n.data.value,n.error.value&&(e.payload._errors[t]=_(n.error.value)),delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=o,e._asyncDataPromises[t]};const h=()=>n.refresh({_initial:!0}),g=a.server!==!1&&e.payload.serverRendered;{const i=x();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const r=i._nuxtOnBeforeMountCbs;i&&(w(()=>{r.forEach(c=>{c()}),r.splice(0,r.length)}),D(()=>r.splice(0,r.length)))}g&&e.isHydrating&&d()?n.pending.value=!1:i&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?i._nuxtOnBeforeMountCbs.push(h):a.immediate&&h(),a.watch&&b(a.watch,()=>n.refresh());const o=e.hook("app:data:refresh",r=>{if(!r||r.includes(t))return n.refresh()});i&&D(o)}const p=Promise.resolve(e._asyncDataPromises[t]).then(()=>n);return Object.assign(p,n),p}async function A(s){const l=s?Array.isArray(s)?s:[s]:void 0;await v().hooks.callHookParallel("app:data:refresh",l)}function k(s,l){const t={};for(const f of l)t[f]=s[f];return t}export{A as r,M as u};
