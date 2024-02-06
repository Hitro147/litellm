(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{88102:function(e,t,l){Promise.resolve().then(l.bind(l,27680))},27680:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return M}});var r=l(3827),s=l(64090),n=l(80588);let a=async(e,t,l)=>{try{if(console.log("Form Values in keyCreateCall:",l),l.description&&(l.metadata||(l.metadata={}),l.metadata.description=l.description,delete l.description,l.metadata=JSON.stringify(l.metadata)),l.metadata){console.log("formValues.metadata:",l.metadata);try{l.metadata=JSON.parse(l.metadata)}catch(e){throw n.ZP.error("Failed to parse metadata: "+e),Error("Failed to parse metadata: "+e)}}console.log("Form Values after check:",l);let r=await fetch("/key/generate",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({user_id:t,...l})});if(!r.ok){let e=await r.text();throw n.ZP.error("Failed to create key: "+e),console.error("Error response from the server:",e),Error("Network response was not ok")}let s=await r.json();return console.log("API Response:",s),s}catch(e){throw console.error("Failed to create key:",e),e}},o=async(e,t)=>{try{console.log("in keyDeleteCall:",t);let l=await fetch("/key/delete",{method:"POST",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"},body:JSON.stringify({keys:[t]})});if(!l.ok){let e=await l.text();throw n.ZP.error("Failed to delete key: "+e),Error("Network response was not ok")}let r=await l.json();return console.log(r),n.ZP.success("API Key Deleted"),r}catch(e){throw console.error("Failed to create key:",e),e}},i=async(e,t)=>{try{let l="/user/info";console.log("in userInfoCall:",l);let r=await fetch("".concat(l,"/?user_id=").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!r.ok){let e=await r.text();throw n.ZP.error(e),Error("Network response was not ok")}let s=await r.json();return console.log(s),s}catch(e){throw console.error("Failed to create key:",e),e}},c=async(e,t)=>{try{let l="/spend/logs";console.log("in keySpendLogsCall:",l);let r=await fetch("".concat(l,"/?api_key=").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}});if(!r.ok){let e=await r.text();throw n.ZP.error(e),Error("Network response was not ok")}let s=await r.json();return console.log(s),s}catch(e){throw console.error("Failed to create key:",e),e}};var d=l(10384),h=l(46453),u=l(2179),m=l(71801),x=l(96776),j=l(2902),p=l(77171),y=l(29714),Z=l(88707),g=l(1861);let{Option:f}=x.default;var w=e=>{let{userID:t,userRole:l,accessToken:o,data:i,setData:c}=e,[x]=j.Z.useForm(),[f,w]=(0,s.useState)(!1),[k,b]=(0,s.useState)(null),N=()=>{w(!1),x.resetFields()},S=()=>{w(!1),b(null),x.resetFields()},_=async e=>{try{n.ZP.info("Making API Call"),e.models&&""!==e.models.trim()?e.models=e.models.split(",").map(e=>e.trim()):e.models=[],w(!0);let l=await a(o,t,e);c(e=>e?[...e,l]:[l]),b(l.key),n.ZP.success("API Key Created"),x.resetFields()}catch(e){console.error("Error creating the key:",e)}};return(0,r.jsxs)("div",{children:[(0,r.jsx)(u.Z,{className:"mx-auto",onClick:()=>w(!0),children:"+ Create New Key"}),(0,r.jsx)(p.Z,{title:"Create Key",visible:f,width:800,footer:null,onOk:N,onCancel:S,children:(0,r.jsxs)(j.Z,{form:x,onFinish:_,labelCol:{span:6},wrapperCol:{span:16},labelAlign:"left",children:["App Owner"===l||"Admin"===l?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.Z.Item,{label:"Key Name",name:"key_alias",children:(0,r.jsx)(y.Z,{})}),(0,r.jsx)(j.Z.Item,{label:"Team ID",name:"team_id",children:(0,r.jsx)(y.Z,{placeholder:"ai_team"})}),(0,r.jsx)(j.Z.Item,{label:"Models (Comma Separated). Eg: gpt-3.5-turbo,gpt-4",name:"models",children:(0,r.jsx)(y.Z,{placeholder:"gpt-4,gpt-3.5-turbo"})}),(0,r.jsx)(j.Z.Item,{label:"Max Budget (USD)",name:"max_budget",children:(0,r.jsx)(Z.Z,{step:.01,precision:2,width:200})}),(0,r.jsx)(j.Z.Item,{label:"Duration (eg: 30s, 30h, 30d)",name:"duration",children:(0,r.jsx)(y.Z,{})}),(0,r.jsx)(j.Z.Item,{label:"Metadata",name:"metadata",children:(0,r.jsx)(y.Z.TextArea,{rows:4,placeholder:"Enter metadata as JSON"})})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.Z.Item,{label:"Key Name",name:"key_alias",children:(0,r.jsx)(y.Z,{})}),(0,r.jsx)(j.Z.Item,{label:"Team ID (Contact Group)",name:"team_id",children:(0,r.jsx)(y.Z,{placeholder:"ai_team"})}),(0,r.jsx)(j.Z.Item,{label:"Description",name:"description",children:(0,r.jsx)(y.Z.TextArea,{placeholder:"Enter description",rows:4})})]}),(0,r.jsx)("div",{style:{textAlign:"right",marginTop:"10px"},children:(0,r.jsx)(g.ZP,{htmlType:"submit",children:"Create Key"})})]})}),k&&(0,r.jsx)(p.Z,{title:"Save your key",visible:f,onOk:N,onCancel:S,footer:null,children:(0,r.jsxs)(h.Z,{numItems:1,className:"gap-2 w-full",children:[(0,r.jsx)(d.Z,{numColSpan:1,children:(0,r.jsxs)("p",{children:["Please save this secret key somewhere safe and accessible. For security reasons, ",(0,r.jsx)("b",{children:"you will not be able to view it again"})," ","through your LiteLLM account. If you lose this secret key, you will need to generate a new one."]})}),(0,r.jsx)(d.Z,{numColSpan:1,children:null!=k?(0,r.jsxs)(m.Z,{children:["API Key: ",k]}):(0,r.jsx)(m.Z,{children:"Key being created, this might take 30s"})})]})})]})},k=l(33393),b=l(13810),N=l(61244),S=l(10827),_=l(3851),D=l(2044),C=l(64167),v=l(74480),I=l(7178),E=l(42440),T=l(9853),A=l(67989),O=l(56863),F=e=>{let{token:t,accessToken:l,keySpend:n,keyBudget:a,keyName:o}=e,[i,d]=(0,s.useState)(!1),[h,m]=(0,s.useState)(null),[x,j]=(0,s.useState)(null),y=async()=>{try{if(null==l||null==t)return;let e=await c(l,t);console.log("Response:",e);let r=Object.values(e).reduce((e,t)=>{let l=new Date(t.startTime),r=new Intl.DateTimeFormat("en-US",{day:"2-digit",month:"short"}).format(l);return e[r]=(e[r]||0)+t.spend,e},{}),s=Object.entries(r);s.sort((e,t)=>{let[l]=e,[r]=t,s=new Date(l),n=new Date(r);return s.getTime()-n.getTime()});let n=Object.fromEntries(s);console.log(n);let a=Object.values(e).reduce((e,t)=>{let l=t.user;return e[l]=(e[l]||0)+t.spend,e},{});console.log(r),console.log(a);let o=[];for(let[e,t]of Object.entries(n))o.push({day:e,spend:t});let i=Object.entries(a).sort((e,t)=>t[1]-e[1]).slice(0,5).map(e=>{let[t,l]=e;return{name:t,value:l}});m(o),j(i),console.log("arrayBarChart:",o)}catch(e){console.error("There was an error fetching the data",e)}};return((0,s.useEffect)(()=>{y()},[t]),t)?(0,r.jsxs)("div",{children:[(0,r.jsx)(u.Z,{className:"mx-auto",onClick:()=>{d(!0)},children:"View Spend Report"}),(0,r.jsxs)(p.Z,{visible:i,width:1e3,onOk:()=>{d(!1)},onCancel:()=>{d(!1)},footer:null,children:[(0,r.jsxs)(E.Z,{style:{textAlign:"left"},children:["Key Name: ",o]}),(0,r.jsxs)(O.Z,{children:["Monthly Spend $",n]}),(0,r.jsx)(b.Z,{className:"mt-6 mb-6",children:h&&(0,r.jsx)(T.Z,{className:"mt-6",data:h,colors:["green"],index:"day",categories:["spend"],yAxisWidth:48})}),(0,r.jsx)(E.Z,{className:"mt-6",children:"Top 5 Users Spend (USD)"}),(0,r.jsx)(b.Z,{className:"mb-6",children:x&&(0,r.jsx)(A.Z,{className:"mt-6",data:x,color:"teal"})})]})]}):null},P=e=>{let{userID:t,accessToken:l,data:s,setData:n}=e,a=async e=>{if(null!=s)try{await o(l,e);let t=s.filter(t=>t.token!==e);n(t)}catch(e){console.error("Error deleting the key:",e)}};if(null!=s)return console.log("RERENDER TRIGGERED"),(0,r.jsxs)(b.Z,{className:"w-full mx-auto flex-auto overflow-y-auto max-h-[50vh] mb-4",children:[(0,r.jsx)(E.Z,{children:"API Keys"}),(0,r.jsxs)(S.Z,{className:"mt-5",children:[(0,r.jsx)(C.Z,{children:(0,r.jsxs)(I.Z,{children:[(0,r.jsx)(v.Z,{children:"Key Alias"}),(0,r.jsx)(v.Z,{children:"Secret Key"}),(0,r.jsx)(v.Z,{children:"Spend (USD)"}),(0,r.jsx)(v.Z,{children:"Key Budget (USD)"}),(0,r.jsx)(v.Z,{children:"Team ID"}),(0,r.jsx)(v.Z,{children:"Metadata"}),(0,r.jsx)(v.Z,{children:"Expires"})]})}),(0,r.jsx)(_.Z,{children:s.map(e=>(console.log(e),"litellm-dashboard"===e.team_id)?null:(0,r.jsxs)(I.Z,{children:[(0,r.jsx)(D.Z,{children:null!=e.key_alias?(0,r.jsx)(m.Z,{children:e.key_alias}):(0,r.jsx)(m.Z,{children:"Not Set"})}),(0,r.jsx)(D.Z,{children:(0,r.jsx)(m.Z,{children:e.key_name})}),(0,r.jsx)(D.Z,{children:(0,r.jsx)(m.Z,{children:e.spend})}),(0,r.jsx)(D.Z,{children:null!=e.max_budget?(0,r.jsx)(m.Z,{children:e.max_budget}):(0,r.jsx)(m.Z,{children:"Unlimited Budget"})}),(0,r.jsx)(D.Z,{children:(0,r.jsx)(m.Z,{children:e.team_id})}),(0,r.jsx)(D.Z,{children:(0,r.jsx)(m.Z,{children:JSON.stringify(e.metadata)})}),(0,r.jsx)(D.Z,{children:null!=e.expires?(0,r.jsx)(m.Z,{children:e.expires}):(0,r.jsx)(m.Z,{children:"Never expires"})}),(0,r.jsx)(D.Z,{children:(0,r.jsx)(N.Z,{onClick:()=>a(e.token),icon:k.Z,size:"sm"})}),(0,r.jsx)(D.Z,{children:(0,r.jsx)(F,{token:e.token,accessToken:l,keySpend:e.spend,keyBudget:e.max_budget,keyName:e.key_name})})]},e.token))})]})]})},R=e=>{let{userID:t,userSpendData:l}=e;console.log("User SpendData:",l);let s=null==l?void 0:l.spend,n=(null==l?void 0:l.max_budget)||null,a=null!==n?"$".concat(n," limit"):"No limit";return"$".concat(s," / ").concat(a),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(b.Z,{className:"mx-auto mb-4",children:[(0,r.jsxs)(O.Z,{children:["$",s]}),(0,r.jsxs)(E.Z,{children:["/ ",a]})]})})},K=l(8792),U=e=>{let{userID:t,userRole:l}=e;return console.log("User ID:",t),(0,r.jsxs)("nav",{className:"left-0 right-0 top-0 flex justify-between items-center h-12 mb-4",children:[(0,r.jsx)("div",{className:"text-left mx-4 my-2 absolute top-0 left-0",children:(0,r.jsx)("div",{className:"flex flex-col items-center",children:(0,r.jsx)(K.default,{href:"/",children:(0,r.jsx)("button",{className:"text-gray-800 text-2xl px-4 py-1 rounded text-center",children:"\uD83D\uDE85 LiteLLM"})})})}),(0,r.jsx)("div",{className:"text-right mx-4 my-2 absolute top-0 right-0",children:(0,r.jsxs)(u.Z,{variant:"secondary",children:[t,(0,r.jsxs)("p",{children:["Role: ",l]})]})})]})},B=l(47907),L=l(37963),M=()=>{let[e,t]=(0,s.useState)(null),[l,n]=(0,s.useState)(null),a=(0,B.useSearchParams)(),o=a.get("userID");a.get("viewSpend");let c=a.get("token"),[u,m]=(0,s.useState)(null),[x,j]=(0,s.useState)(null);if((0,s.useEffect)(()=>{if(c){let e=(0,L.o)(c);if(e){if(console.log("Decoded token:",e),console.log("Decoded key:",e.key),m(e.key),e.user_role){let t=function(e){if(!e)return"Undefined Role";switch(e.toLowerCase()){case"app_owner":return"App Owner";case"demo_app_owner":return"AppOwner";case"admin":return"Admin";case"app_user":return"App User";default:return"Unknown Role"}}(e.user_role);console.log("Decoded user_role:",t),j(t)}else console.log("User role not defined")}}o&&u&&!e&&(async()=>{try{let e=await i(u,o);console.log("Response:",e),n(e.user_info),t(e.keys)}catch(e){console.error("There was an error fetching the data",e)}})()},[o,c,u,e]),null==o||null==c){let e="/sso/key/generate";return console.log("Full URL:",e),window.location.href=e,null}return null==u?null:(null==x&&j("App Owner"),(0,r.jsxs)("div",{children:[(0,r.jsx)(U,{userID:o,userRole:x}),(0,r.jsx)(h.Z,{numItems:1,className:"gap-0 p-10 h-[75vh] w-full",children:(0,r.jsxs)(d.Z,{numColSpan:1,children:[(0,r.jsx)(R,{userID:o,userSpendData:l}),(0,r.jsx)(P,{userID:o,accessToken:u,data:e,setData:t}),(0,r.jsx)(w,{userID:o,userRole:x,accessToken:u,data:e,setData:t})]})})]}))}}},function(e){e.O(0,[787,971,69,744],function(){return e(e.s=88102)}),_N_E=e.O()}]);