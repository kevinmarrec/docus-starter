import v from"./TabsHeader.6e32fbef.js";import{f as b,D as c,b as f}from"./entry.a15c51fb.js";/* empty css                      *//* empty css                       */const r=(t,d)=>t.type&&t.type.tag&&t.type.tag===d,u=b({data(){return{activeTabIndex:0,counter:0}},render(){var i,o;const t=((o=(i=this.$slots)==null?void 0:i.default)==null?void 0:o.call(i))||[],d=t.filter(e=>r(e,"code-block")||r(e,"code")).map((e,p)=>{var a,n,s;return{label:((a=e==null?void 0:e.props)==null?void 0:a.filename)||((n=e==null?void 0:e.props)==null?void 0:n.label)||`${p}`,active:((s=e==null?void 0:e.props)==null?void 0:s.active)||!1,component:e}});return c("div",{class:{"code-group":!0,"first-tab":this.activeTabIndex===0}},[c(v,{ref:"tabs-header",activeTabIndex:this.activeTabIndex,tabs:d,"onUpdate:activeTabIndex":e=>this.activeTabIndex=e}),c("div",{class:"code-group-content",text:this.activeTabIndex},t.map((e,p)=>{var a,n;return c("div",{style:{display:p===this.activeTabIndex?"block":"none"},class:{"":!r(e,"code")}},[r(e,"code")?e:c("div",{class:{"preview-canvas":!0}},[((n=(a=e.children)==null?void 0:a.default)==null?void 0:n.call(a))||c("div")])])}))])}}),I=f(u,[["__scopeId","data-v-8844730b"]]);export{I as default};
