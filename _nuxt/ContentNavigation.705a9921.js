import{f as u,af as c,v as l,K as d,H as f,ag as v,C as _,al as g,D as e,x as y}from"./entry.a15c51fb.js";import{u as h}from"./asyncData.19ad493d.js";/* empty css                       *//* empty css                                   *//* empty css                      *//* empty css                   *//* empty css                           *//* empty css                            *//* empty css                  *//* empty css                         *//* empty css                         *//* empty css                    *//* empty css                           *//* empty css                            *//* empty css                      *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                     *//* empty css                    *//* empty css                    *//* empty css                   *//* empty css                        *//* empty css                       *//* empty css                    *//* empty css                    *//* empty css                       *//* empty css                    *//* empty css                    *//* empty css                  *//* empty css                    *//* empty css                      *//* empty css                       *//* empty css                      *//* empty css                     *//* empty css                 *//* empty css                    *//* empty css                     *//* empty css                        *//* empty css                           *//* empty css                      *//* empty css                 *//* empty css                     *//* empty css                       *//* empty css                                     *//* empty css                                    *//* empty css                                *//* empty css                               *//* empty css                    */const Ct=u({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(m){const{query:t}=c(m),r=l(()=>{var o;return typeof((o=t.value)==null?void 0:o.params)=="function"?t.value.params():t.value});if(!r.value&&d("dd-navigation").value){const{navigation:o}=f();return{navigation:o}}const{data:p}=await h(`content-navigation-${v(r.value)}`,()=>g(r.value));return{navigation:p}},render(m){const t=_(),{navigation:r}=m,p=i=>e(y,{to:i._path},()=>i.title),o=(i,n)=>e("ul",n?{"data-level":n}:null,i.map(a=>a.children?e("li",null,[p(a),o(a.children,n+1)]):e("li",null,p(a)))),s=i=>o(i,0);return t!=null&&t.default?t.default({navigation:r,...this.$attrs}):s(r)}});export{Ct as default};
