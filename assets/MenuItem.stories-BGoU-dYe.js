import{R as e}from"./iframe-DSaFr_71.js";import{I as d}from"./Icon-Du3Vl_6M.js";import{b as n,S as t,M as a,k as q}from"./MenuItem-CH3bV9UH.js";import"./preload-helper-Dp1pzeXC.js";const H={title:"MenuItem",component:n,argTypes:{}},m=({...j})=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(t,null,e.createElement(a,null,e.createElement(n,{...j},"Documentation"),e.createElement(n,null," Calendar"),e.createElement(n,null," E-commerce"),e.createElement(n,null," Examples"))));m.parameters={docs:{source:{code:`
      import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

      () => (
        <div style={{ display: 'flex', height: '100%' }}>
          <Sidebar>
            <Menu>
              <MenuItem> Documentation </MenuItem>
              <MenuItem> Calendar </MenuItem>
              <MenuItem> E-commerce </MenuItem>
              <MenuItem> Examples </MenuItem>
            </Menu>
          </Sidebar>
        </div>
      )`}}};const r=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(t,null,e.createElement(a,null,e.createElement(n,{icon:e.createElement(d,{name:"book-2"})},"Documentation"),e.createElement(n,{icon:e.createElement(d,{name:"calendar"})}," Calendar"),e.createElement(n,{icon:e.createElement(d,{name:"shopping-cart"})}," E-commerce"),e.createElement(n,{icon:e.createElement(d,{name:"service"})}," Examples"))));r.storyName="icon";const l=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(t,null,e.createElement(a,null,e.createElement(n,{prefix:"🔥"},"Documentation"),e.createElement(n,null," Calendar"),e.createElement(n,null," E-commerce"),e.createElement(n,null," Examples"))));l.storyName="prefix";const o=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(t,null,e.createElement(a,null,e.createElement(n,{suffix:"🔥"},"Documentation"),e.createElement(n,null," Calendar"),e.createElement(n,null," E-commerce"),e.createElement(n,null," Examples"))));o.storyName="suffix";const c=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(t,null,e.createElement(a,null,e.createElement(n,{active:!0},"Documentation"),e.createElement(n,null," Calendar"),e.createElement(n,null," E-commerce"),e.createElement(n,null," Examples"))));c.storyName="active";const s=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(t,null,e.createElement(a,null,e.createElement(n,{disabled:!0},"Documentation"),e.createElement(n,null," Calendar"),e.createElement(n,null," E-commerce"),e.createElement(n,null," Examples"))));s.storyName="disabled";const i=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(t,null,e.createElement(a,null,e.createElement(n,{component:"div"},"Documentation"),e.createElement(n,null," Calendar"),e.createElement(n,null," E-commerce"))));i.storyName="component";const u=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(t,null,e.createElement(a,null,e.createElement(n,{rootStyles:{["."+q.button]:{backgroundColor:"#eaabff",color:"#9f0099","&:hover":{backgroundColor:"#eecef9"}}}},"Documentation"),e.createElement(n,null," Calendar"),e.createElement(n,null," E-commerce"),e.createElement(n,null," Examples"))));u.storyName="rootStyles";m.__docgenInfo={description:"",methods:[],displayName:"Basic"};r.__docgenInfo={description:"",methods:[],displayName:"WithIcon"};l.__docgenInfo={description:"",methods:[],displayName:"Prefix"};o.__docgenInfo={description:"",methods:[],displayName:"Suffix"};c.__docgenInfo={description:"",methods:[],displayName:"Active"};s.__docgenInfo={description:"",methods:[],displayName:"Disabled"};i.__docgenInfo={description:"",methods:[],displayName:"Component"};u.__docgenInfo={description:"",methods:[],displayName:"RootStyles"};var p,M,E;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`({
  ...props
}) => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu>
        <MenuItem {...props}>Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>`,...(E=(M=m.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var I,y,f;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu>
        <MenuItem icon={<Icon name="book-2" />}>Documentation</MenuItem>
        <MenuItem icon={<Icon name="calendar" />}> Calendar</MenuItem>
        <MenuItem icon={<Icon name="shopping-cart" />}> E-commerce</MenuItem>
        <MenuItem icon={<Icon name="service" />}> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,x,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu>
        <MenuItem prefix="🔥">Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var S,b,v;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu>
        <MenuItem suffix="🔥">Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var C,D,_;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu>
        <MenuItem active>Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>`,...(_=(D=c.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var N,k,R;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu>
        <MenuItem disabled>Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>`,...(R=(k=s.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var P,A,B;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu>
        <MenuItem component="div">Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
      </Menu>
    </Sidebar>
  </div>`,...(B=(A=i.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var W,O,T;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu>
        <MenuItem rootStyles={{
        ['.' + menuClasses.button]: {
          backgroundColor: '#eaabff',
          color: '#9f0099',
          '&:hover': {
            backgroundColor: '#eecef9'
          }
        }
      }}>
          Documentation
        </MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>`,...(T=(O=u.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const J=["Basic","WithIcon","Prefix","Suffix","Active","Disabled","Component","RootStyles"];export{c as Active,m as Basic,i as Component,s as Disabled,l as Prefix,u as RootStyles,o as Suffix,r as WithIcon,J as __namedExportsOrder,H as default};
