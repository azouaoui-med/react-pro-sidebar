import{R as e}from"./iframe-DSaFr_71.js";import{n as o,k,S as U,M as C,b as a}from"./MenuItem-CH3bV9UH.js";import{S as m}from"./SubMenu-CvKt7e72.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DuH17pFh.js";import"./index-B_JQJvlL.js";const K=o.div`
  display: flex;
  align-items: center;
`,Q=o.label`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 13px;
  cursor: pointer;
`,X=o.div`
  position: relative;
  cursor: pointer;
  width: 32px;
  height: 20px;
  border-radius: 30px;

  background-color: ${({checked:t})=>t?"#0ed693":"#dde0e7"};
`,Y=o.div`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #fff;
  transition: left 0.2s;

  ${({checked:t})=>t?"left: 15px;":""}
`,p=({id:t,label:r,checked:n,...s})=>e.createElement(K,null,e.createElement(X,{checked:n},e.createElement("input",{id:t,type:"checkbox",style:{cursor:"pointer",position:"absolute",top:0,left:0,right:0,bottom:0,width:"32px",height:"20px",opacity:0,zIndex:2},checked:n,...s}),e.createElement(Y,{checked:n})),r&&e.createElement(Q,{htmlFor:t},r));p.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{label:{required:!1,tsType:{name:"string"},description:""}}};const Z=o.p`
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${({variant:t})=>{switch(t){case"h1":return`
        font-size: 72px; 
        line-height: 90px;
        `;case"h2":return`
        font-size: 60px; 
        line-height: 72px;
        `;case"h3":return`
        font-size: 48px; 
        line-height: 60px;
        `;case"h4":return`
        font-size: 36px; 
        line-height: 44px;
        `;case"h5":return`
        font-size: 30px; 
        line-height: 38px;
        `;case"h6":return`
        font-size: 24px; 
        line-height: 32px;
        `;case"subtitle1":return`
        font-size: 20px; 
        line-height: 30px;
        `;case"subtitle2":return`
        font-size: 18px; 
        line-height: 28px;
        `;case"body1":return`
        font-size: 16px; 
        line-height: 24px;
        `;case"body2":return`
        font-size: 12px; 
        line-height: 18px;
        `;case"caption":return`
        font-size: 10px; 
        line-height: 16px;
        `;default:return""}}}

  ${({fontWeight:t})=>t?`font-weight: ${t};`:""}
  ${({color:t})=>t?`color: ${t};`:""}
  ${({fontSize:t})=>t?`font-size: ${t};`:""}
`,c=({variant:t="body1",children:r,...n})=>e.createElement(Z,{variant:t,...n},r);c.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fontWeight:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},color:{required:!1,tsType:{name:"string"},description:""},fontSize:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:`| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'body1'
| 'body2'
| 'subtitle1'
| 'subtitle2'
| 'caption'`,elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'body1'"},{name:"literal",value:"'body2'"},{name:"literal",value:"'subtitle1'"},{name:"literal",value:"'subtitle2'"},{name:"literal",value:"'caption'"}]},description:"",defaultValue:{value:"'body1'",computed:!1}}}};const ee=o.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  > div {
    width: 100%;
    overflow: hidden;
  }
`,te=o.div`
  width: 35px;
  min-width: 35px;
  height: 35px;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  background-color: #009fdb;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
  ${({rtl:t})=>t?`
      margin-left: 10px;
      margin-right: 4px;
      `:`
      margin-right: 10px;
      margin-left: 4px;
      `}
`,T=({rtl:t,...r})=>e.createElement(ee,{...r},e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement(te,{rtl:t},"P"),e.createElement(c,{variant:"subtitle1",fontWeight:700,color:"#0098e5"},"Pro Sidebar")));T.__docgenInfo={description:"",methods:[],displayName:"SidebarHeader",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rtl:{required:!0,tsType:{name:"boolean"},description:""}}};const I=({size:t=18,...r})=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"currentColor",...r},e.createElement("path",{d:"M4.873 3h14.254a1 1 0 0 1 .809.412l3.823 5.256a.5.5 0 0 1-.037.633L12.367 21.602a.5.5 0 0 1-.734 0L.278 9.302a.5.5 0 0 1-.037-.634l3.823-5.256A1 1 0 0 1 4.873 3z"}));I.__docgenInfo={description:"",methods:[],displayName:"Diamond",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"18",computed:!1}}}};const N=({size:t=18,...r})=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"currentColor",...r},e.createElement("path",{d:"M2 13h6v8H2v-8zM9 3h6v18H9V3zm7 5h6v13h-6V8z"}));N.__docgenInfo={description:"",methods:[],displayName:"BarChart",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"18",computed:!1}}}};const V=({size:t=18,...r})=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"currentColor",...r},e.createElement("path",{d:"M2.05 13h5.477a17.9 17.9 0 0 0 2.925 8.88A10.005 10.005 0 0 1 2.05 13zm0-2a10.005 10.005 0 0 1 8.402-8.88A17.9 17.9 0 0 0 7.527 11H2.05zm19.9 0h-5.477a17.9 17.9 0 0 0-2.925-8.88A10.005 10.005 0 0 1 21.95 11zm0 2a10.005 10.005 0 0 1-8.402 8.88A17.9 17.9 0 0 0 16.473 13h5.478zM9.53 13h4.94A15.908 15.908 0 0 1 12 20.592 15.908 15.908 0 0 1 9.53 13zm0-2A15.908 15.908 0 0 1 12 3.408 15.908 15.908 0 0 1 14.47 11H9.53z"}));V.__docgenInfo={description:"",methods:[],displayName:"Global",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"18",computed:!1}}}};const q=({size:t=18,...r})=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"currentColor",...r},e.createElement("path",{d:"M16 9l4.371 1.749c.38.151.629.52.629.928V21c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-9.323c0-.409.249-.777.629-.928L8 9h8zm4 5H8v5h12v-5zM16 3c.552 0 1 .448 1 1v4H7V4c0-.552.448-1 1-1h8z"}));q.__docgenInfo={description:"",methods:[],displayName:"InkBottle",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"18",computed:!1}}}};const R=({size:t=18,...r})=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"currentColor",...r},e.createElement("path",{d:"M21 18H6a1 1 0 0 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16zm-5-9V7H8v2h8z"}));R.__docgenInfo={description:"",methods:[],displayName:"Book",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"18",computed:!1}}}};const P=({size:t=18,...r})=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"currentColor",...r},e.createElement("path",{d:"M2 11h20v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9zm15-8h4a1 1 0 0 1 1 1v5H2V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2z"}));P.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"18",computed:!1}}}};const M=({size:t=18,...r})=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"currentColor",...r},e.createElement("path",{d:"M6 9h13.938l.5-2H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1V4H2V2h3a1 1 0 0 1 1 1v6zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}));M.__docgenInfo={description:"",methods:[],displayName:"ShoppingCart",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"18",computed:!1}}}};const H=({size:t=18,...r})=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"currentColor",...r},e.createElement("path",{d:"M14.121 10.48a1 1 0 0 0-1.414 0l-.707.706a2 2 0 1 1-2.828-2.828l5.63-5.632a6.5 6.5 0 0 1 6.377 10.568l-2.108 2.135-4.95-4.95zM3.161 4.468a6.503 6.503 0 0 1 8.009-.938L7.757 6.944a4 4 0 0 0 5.513 5.794l.144-.137 4.243 4.242-4.243 4.243a2 2 0 0 1-2.828 0L3.16 13.66a6.5 6.5 0 0 1 0-9.192z"}));H.__docgenInfo={description:"",methods:[],displayName:"Service",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"18",computed:!1}}}};const x=({size:t=18,...r})=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"currentColor",...r},e.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),e.createElement("path",{d:"M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"}));x.__docgenInfo={description:"",methods:[],displayName:"Github",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"18",computed:!1}}}};const re="2.0.0-alpha.1",ae={version:re},ne=o.a`
  padding: 5px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: inline-block;
  background-color: #fff;
  color: #484848;
  text-decoration: none;
`,oe=o.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  color: white;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
  /* background: #0098e5; */
`,le=o.a`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  color: white;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
  /* background: #0098e5; */
`,z="https://github.com/azouaoui-med/react-pro-sidebar/blob/master/storybook/Playground.tsx",$=({collapsed:t,...r})=>e.createElement("div",{style:{display:"flex",justifyContent:"center",paddingBottom:"20px"}},t?e.createElement(le,{href:z,target:"_blank"},e.createElement(x,{size:28})):e.createElement(oe,{...r},e.createElement("div",{style:{marginBottom:"12px"}},e.createElement(x,{size:30})),e.createElement(c,{fontWeight:600},"Pro Sidebar"),e.createElement(c,{variant:"caption",style:{letterSpacing:1,opacity:.7}},"V ",ae.version),e.createElement("div",{style:{marginTop:"16px"}},e.createElement(ne,{href:z,target:"_blank"},e.createElement(c,{variant:"caption",color:"#607489",fontWeight:600},"View code")))));$.__docgenInfo={description:"",methods:[],displayName:"SidebarFooter",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},collapsed:{required:!1,tsType:{name:"boolean"},description:""}}};const ie=o.div`
  min-width: 18px;
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({shape:t})=>t==="circle"?"50%":"16px"};
  padding: ${({shape:t})=>t==="circle"?"0":"0 6px"};
  font-size: 11px;
  font-weight: 600;

  ${({variant:t})=>{switch(t){case"info":return`
                background-color: #048acd;
                color: #fff;
                `;case"success":return`
                background-color: #0cbb34;
                color: #fff;

                `;case"danger":return`
                background-color: #fb3939;
                color: #fff;

                `;case"warning":return`
                background-color: #e25807;
                color: #fff;

                `}}}
`,y=({children:t,variant:r="info",shape:n="rounded",...s})=>e.createElement(ie,{variant:r,shape:n,...s},t);y.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'circle' | 'rounded'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'rounded'"}]},description:"",defaultValue:{value:"'rounded'",computed:!1}}}};const ce=o.div`
  margin: 0 -5px;
  a {
    margin: 0 5px;
  }
`,L=()=>e.createElement(ce,null,e.createElement("p",null,e.createElement("a",{href:"https://www.npmjs.com/package/react-pro-sidebar",rel:"nofollow noreferrer",target:"_blank"},e.createElement("img",{src:"https://img.shields.io/github/license/azouaoui-med/react-pro-sidebar?style=flat-square",alt:"License"})),e.createElement("a",{href:"https://www.npmjs.com/package/react-pro-sidebar",rel:"nofollow noreferrer",target:"_blank"},e.createElement("img",{src:"https://img.shields.io/npm/dependency-version/react-pro-sidebar/peer/react?style=flat-square",alt:"Peer"})),e.createElement("a",{href:"https://www.npmjs.com/package/react-pro-sidebar",rel:"nofollow noreferrer",target:"_blank"},e.createElement("img",{src:"https://img.shields.io/npm/dt/react-pro-sidebar?style=flat-square",alt:"Download"})),e.createElement("a",{href:"https://github.com/azouaoui-med/react-pro-sidebar",target:"_blank",rel:"noreferrer"},e.createElement("img",{src:"https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social",alt:"Stars"})),e.createElement("a",{href:"https://github.com/azouaoui-med/react-pro-sidebar",target:"_blank",rel:"noreferrer"},e.createElement("img",{src:"https://img.shields.io/github/forks/azouaoui-med/react-pro-sidebar?style=social",alt:"Forks"}))));L.__docgenInfo={description:"",methods:[],displayName:"PackageBadges"};const d={light:{sidebar:{backgroundColor:"#ffffff",color:"#607489"},menu:{menuContent:"#fbfcfd",icon:"#0098e5",hover:{backgroundColor:"#c5e4ff",color:"#44596e"},disabled:{color:"#9fb6cf"}}},dark:{sidebar:{backgroundColor:"#0b2948",color:"#8ba1b7"},menu:{menuContent:"#082440",icon:"#59d0ff",hover:{backgroundColor:"#00458b",color:"#b6c8d9"},disabled:{color:"#3e5e7e"}}}},v=(t,r)=>{const n=parseInt(t.slice(1,3),16),s=parseInt(t.slice(3,5),16),b=parseInt(t.slice(5,7),16);return`rgba(${n}, ${s}, ${b}, ${r})`},E=()=>{const[t,r]=e.useState(!1),[n,s]=e.useState(!1),[b,j]=e.useState(!1),[h,W]=e.useState(!1),[g,A]=e.useState(!1),[f,D]=e.useState(!1),[l,F]=e.useState("light"),G=i=>{W(i.target.checked)},O=i=>{F(i.target.checked?"dark":"light")},J=i=>{A(i.target.checked)},w={root:{fontSize:"13px",fontWeight:400},icon:{color:d[l].menu.icon,[`&.${k.disabled}`]:{color:d[l].menu.disabled.color}},SubMenuExpandIcon:{color:"#b6b7b9"},subMenuContent:({level:i})=>({backgroundColor:i===0?v(d[l].menu.menuContent,g&&!t?.4:1):"transparent"}),button:{[`&.${k.disabled}`]:{color:d[l].menu.disabled.color},"&:hover":{backgroundColor:v(d[l].menu.hover.backgroundColor,g?.8:1),color:d[l].menu.hover.color}},label:({open:i})=>({fontWeight:i?600:void 0})};return e.createElement("div",{style:{display:"flex",height:"100%",direction:h?"rtl":"ltr"}},e.createElement(U,{collapsed:t,toggled:n,onBackdropClick:()=>s(!1),onBreakPoint:j,image:"https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg",rtl:h,breakPoint:"md",backgroundColor:v(d[l].sidebar.backgroundColor,g?.9:1),rootStyles:{color:d[l].sidebar.color}},e.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100%"}},e.createElement(T,{rtl:h,style:{marginBottom:"24px",marginTop:"16px"}}),e.createElement("div",{style:{flex:1,marginBottom:"32px"}},e.createElement("div",{style:{padding:"0 24px",marginBottom:"8px"}},e.createElement(c,{variant:"body2",fontWeight:600,style:{opacity:t?0:.7,letterSpacing:"0.5px"}},"General")),e.createElement(C,{menuItemStyles:w,popover:f},e.createElement(m,{label:"Charts",icon:e.createElement(N,null),suffix:e.createElement(y,{variant:"danger",shape:"circle"},"6")},e.createElement(a,null," Pie charts"),e.createElement(a,null," Line charts"),e.createElement(a,null," Bar charts")),e.createElement(m,{label:"Maps",icon:e.createElement(V,null)},e.createElement(a,null," Google maps"),e.createElement(a,null," Open street maps")),e.createElement(m,{label:"Theme",icon:e.createElement(q,null)},e.createElement(a,null," Dark"),e.createElement(a,null," Light")),e.createElement(m,{label:"Components",icon:e.createElement(I,null)},e.createElement(a,null," Grid"),e.createElement(a,null," Layout"),e.createElement(m,{label:"Forms"},e.createElement(a,null," Input"),e.createElement(a,null," Select"),e.createElement(m,{label:"More"},e.createElement(a,null," CheckBox"),e.createElement(a,null," Radio")))),e.createElement(m,{label:"E-commerce",icon:e.createElement(M,null)},e.createElement(a,null," Product"),e.createElement(a,null," Orders"),e.createElement(a,null," Credit card"))),e.createElement("div",{style:{padding:"0 24px",marginBottom:"8px",marginTop:"32px"}},e.createElement(c,{variant:"body2",fontWeight:600,style:{opacity:t?0:.7,letterSpacing:"0.5px"}},"Extra")),e.createElement(C,{menuItemStyles:w,popover:f},e.createElement(a,{icon:e.createElement(P,null),suffix:e.createElement(y,{variant:"success"},"New")},"Calendar"),e.createElement(a,{icon:e.createElement(R,null)},"Documentation"),e.createElement(a,{disabled:!0,icon:e.createElement(H,null)},"Examples"))),e.createElement($,{collapsed:t}))),e.createElement("main",null,e.createElement("div",{style:{padding:"16px 24px",color:"#44596e"}},e.createElement("div",{style:{marginBottom:"16px"}},b&&e.createElement("button",{className:"sb-button",onClick:()=>s(!n)},"Toggle")),e.createElement("div",{style:{marginBottom:"48px"}},e.createElement(c,{variant:"h4",fontWeight:600},"React Pro Sidebar"),e.createElement(c,{variant:"body2"},"React Pro Sidebar provides a set of components for creating high level and customizable side navigation"),e.createElement(L,null)),e.createElement("div",{style:{padding:"0 8px"}},e.createElement("div",{style:{marginBottom:16}},e.createElement(p,{id:"collapse",checked:t,onChange:()=>r(!t),label:"Collapse"})),e.createElement("div",{style:{marginBottom:16}},e.createElement(p,{id:"rtl",checked:h,onChange:G,label:"RTL"})),e.createElement("div",{style:{marginBottom:16}},e.createElement(p,{id:"theme",checked:l==="dark",onChange:O,label:"Dark theme"})),e.createElement("div",{style:{marginBottom:16}},e.createElement(p,{id:"image",checked:g,onChange:J,label:"Image"})),e.createElement("div",{style:{marginBottom:16}},e.createElement(p,{id:"popover",checked:f,onChange:()=>D(!f),label:"Popover"}))))))};E.__docgenInfo={description:"",methods:[],displayName:"Playground"};const ge={title:"Playground",component:E,subcomponents:{},argTypes:{}},u=()=>e.createElement(E,null);u.__docgenInfo={description:"",methods:[],displayName:"Playground"};var S,B,_;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:"() => <PlaygroundComponent />",...(_=(B=u.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};const fe=["Playground"];export{u as Playground,fe as __namedExportsOrder,ge as default};
