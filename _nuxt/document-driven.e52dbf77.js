import C from"./DocumentDrivenEmpty.15a51b2e.js";import L from"./ContentRenderer.ff6b141c.js";import h from"./DocumentDrivenNotFound.207193a9.js";import{a6 as F,f as m,aA as k,J as x,aB as D,v as R,u as o,aC as d,aD as B,aE as i,T as E,D as N,H as g,ae as w,o as c,e as A,k as p,w as l,c as _}from"./entry.3cf4d765.js";import"./ContentRendererMarkdown.c2cdb1b8.js";import"./ButtonLink.3e030426.js";import"./ContentSlot.19ba978d.js";/* empty css                       *//* empty css                                   */const T=m({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(s,t){const n=await d[s.name]().then(e=>e.default||e);return()=>N(n,t.attrs,t.slots)}}),j=m({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(s,t){const n=k("_route"),e=n===x()?D():n,a=R(()=>o(s.name)??e.meta.layout??"default");return()=>{const u=a.value&&a.value in d,r=e.meta.layoutTransition??B;return i(E,u&&r,{default:()=>i(T,u&&{key:a.value,name:a.value,...t.attrs},t.slots).default()}).default()}}}),$={class:"document-driven-page"},z=m({__name:"document-driven",setup(s){const{page:t,layout:n}=g();return t.value,w(t),(e,a)=>{const u=C,r=L,f=h,v=j;return c(),A("div",$,[p(v,{name:o(n)||"default"},{default:l(()=>[o(t)?(c(),_(r,{key:o(t)._id,value:o(t)},{empty:l(({value:y})=>[p(u,{value:y},null,8,["value"])]),_:1},8,["value"])):(c(),_(f,{key:1}))]),_:1},8,["name"])])}}});export{z as default};
