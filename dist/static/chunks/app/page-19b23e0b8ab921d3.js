(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2994:function(t,e,n){Promise.resolve().then(n.bind(n,6295))},4081:function(t,e,n){"use strict";n.r(e),n.d(e,{PostContext:function(){return i},PostProvider:function(){return r}});var o=n(7437),s=n(2265);let i=(0,s.createContext)(),r=t=>{let{children:e}=t,[n,r]=(0,s.useState)([{id:1,title:"Post 1",description:"Description of Post 1"}]),[c,a]=(0,s.useState)([]),[l,u]=(0,s.useState)(""),[d,x]=(0,s.useState)("Charan123"),[h,f]=(0,s.useState)(1),[g,_]=(0,s.useState)(1),[p,j]=(0,s.useState)("Easy"),[m,v]=(0,s.useState)(0),[b,y]=(0,s.useState)(1);return(0,o.jsx)(i.Provider,{value:{totCorrect:m,setTotCorrect:v,studentId:h,setStdId:t=>{f(t)},user:c,setUsr:t=>{a(t),console.log(t)},examId:g,setExmId:t=>{_(t)},userType:l,setUsrType:t=>{u(t)},rnd:d,changeRnd:t=>{x(t)},rndDisplay:()=>{console.log("Rnd : "+d)},examLevel:p,setExamLevel:j},children:(0,o.jsx)("div",{children:e})})}},4377:function(t,e,n){"use strict";n.d(e,{Vz:function(){return r},tU:function(){return a},x4:function(){return i},y5:function(){return c}});var o=n(9222);let s="http://localhost:5234/api/Concept/",i=async t=>{let e=JSON.stringify(t),n=await o.Z.post("".concat(s,"LoginUser"),e,{headers:{"Content-Type":"application/json"}});return n.data},r=async()=>{let t="".concat(s,"VlcTestList");console.log(t);try{let e=await fetch(t);if(!e.ok)throw Error("Failed to Load Center List");let n=await e.json();return n=n.test,console.log(n.test),n}catch(t){console.log("Failed to Load Test List",t)}},c=async(t,e,n)=>{let o="".concat(s,"TestQuestions?testid=").concat(t,"&lvl=").concat(e,"&studentid=").concat(n);console.log(o);try{let t=await fetch(o);if(!t.ok)throw Error("Failed to Load Center List");let e=await t.json();return e=e.test,console.log(e.test),e}catch(t){console.log("Failed to Load Test List",t)}},a=async t=>{let e=await fetch("".concat(s,"UpdateVlcAns"),{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});return await e.json()}},6295:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var o=n(7437),s=n(2265),i=n(4081),r=n(4377),c=n(6820),a=n.n(c),l=n(2159),u=n.n(l),d=n(9150),x=n(5391),h=n(4033),f=n(1396),g=n.n(f);function _(){let{rnd:t}=(0,s.useContext)(i.PostContext),e=(0,s.useRef)(null),n=(0,s.useRef)(null),{studentId:c,setStdId:l,user:f,setUsr:_,userType:p,setUsrType:j}=(0,s.useContext)(i.PostContext),m=(0,h.useRouter)(),v=async()=>{var t,o;console.log("login click");let s={user:null===(t=e.current)||void 0===t?void 0:t.value,Password:null===(o=n.current)||void 0===o?void 0:o.value},i=await (0,r.x4)(s);if(!1===i.existuser){a().fire({title:"Invalid login Details!",icon:"error",confirmButtonText:"Clsoe"});return}l(i.user.id),j("student"),_(i.user),m.push("/testlist")};return(0,o.jsx)("div",{className:"".concat(u().maindiv),children:(0,o.jsx)("section",{className:"".concat(u().section),children:(0,o.jsx)("div",{className:"".concat(u().loginbox),children:(0,o.jsxs)("form",{action:"",children:[(0,o.jsx)("h2",{className:"".concat(u().h2," font-bold"),children:"Login"}),(0,o.jsxs)("div",{className:"".concat(u().inputbox),children:[(0,o.jsx)("span",{className:"".concat(u().icon),children:(0,o.jsx)(d.nf1,{})}),(0,o.jsx)("input",{type:"text",ref:e,required:!0}),(0,o.jsx)("label",{children:"User"})]}),(0,o.jsxs)("div",{className:"".concat(u().inputbox),children:[(0,o.jsx)("span",{className:"".concat(u().icon),children:(0,o.jsx)(x.z85,{})}),(0,o.jsx)("input",{type:"password",ref:n,required:!0}),(0,o.jsx)("label",{children:"Password"})]}),(0,o.jsxs)("div",{className:"".concat(u().rememberforgot),children:[(0,o.jsxs)("label",{children:[(0,o.jsx)("input",{type:"checkbox"})," Remember me"]}),(0,o.jsx)(g(),{href:"/forget",children:"Forgot Password"})]}),(0,o.jsx)("button",{className:"".concat(u().button),type:"button",onClick:v,children:"Login"}),(0,o.jsx)("div",{className:"".concat(u().registerlink),children:(0,o.jsxs)("p",{children:["Don't have an account? ",(0,o.jsx)(g(),{href:"/register",children:"Register"})]})})]})})})})}function p(){return(0,o.jsx)(_,{})}n(8158)},8158:function(t,e,n){"use strict";n(7437),n(2265)},2159:function(t){t.exports={maindiv:"login_maindiv__Tewro",section:"login_section__xmaU5",animateBg:"login_animateBg__ctOe9",loginbox:"login_loginbox__LuMDv",h2:"login_h2__Gg7LS",inputbox:"login_inputbox__kl55z",icon:"login_icon__5EaH6",rememberforgot:"login_rememberforgot__ndCT7",button:"login_button__8nR0v",registerlink:"login_registerlink__59VlK"}}},function(t){t.O(0,[929,712,958,396,228,971,596,744],function(){return t(t.s=2994)}),_N_E=t.O()}]);