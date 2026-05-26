import{R as e}from"./iframe-DSaFr_71.js";import{S as a,M as l,b as t}from"./MenuItem-CH3bV9UH.js";import"./preload-helper-Dp1pzeXC.js";const me={title:"Sidebar",component:a,subcomponents:{},argTypes:{}},o=({...n})=>e.createElement("div",{style:{display:"flex",height:"100%",minHeight:"400px"}},e.createElement(a,{...n},e.createElement(l,null,e.createElement(t,null," Documentation"),e.createElement(t,null," Calendar"),e.createElement(t,null," E-commerce"),e.createElement(t,null," Examples"))),e.createElement("main",{style:{padding:10}}," Main content"));o.parameters={docs:{source:{code:`
      import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

      () => (
        <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
          <Sidebar>
            <Menu>
              <MenuItem> Documentation</MenuItem>
              <MenuItem> Calendar</MenuItem>
              <MenuItem> E-commerce</MenuItem>
              <MenuItem> Examples</MenuItem>
            </Menu>
          </Sidebar>
          <main style={{ padding: 10 }}> Main content</main>
        </div>
    );`}}};const s=()=>e.createElement("div",{style:{display:"flex",height:"100%",minHeight:"400px"}},e.createElement(a,{width:"300px"},e.createElement(l,null,e.createElement(t,null," Documentation"),e.createElement(t,null," Calendar"),e.createElement(t,null," E-commerce"),e.createElement(t,null," Examples"))));s.storyName="width";const i=()=>{const[n,m]=e.useState(!1);return e.createElement("div",{style:{display:"flex",height:"100%",minHeight:"400px"}},e.createElement(a,{collapsed:n},e.createElement(l,null,e.createElement(t,null," Documentation"),e.createElement(t,null," Calendar"),e.createElement(t,null," E-commerce"),e.createElement(t,null," Examples"))),e.createElement("main",{style:{padding:10}},e.createElement("div",null,e.createElement("button",{className:"sb-button",onClick:()=>m(!n)},"Collapse"))))};i.storyName="collapsed";const c=()=>e.createElement("div",{style:{display:"flex",height:"100%",minHeight:"400px"}},e.createElement(a,{collapsed:!0,collapsedWidth:"60px"},e.createElement(l,null,e.createElement(t,null," Documentation"),e.createElement(t,null," Calendar"),e.createElement(t,null," E-commerce"),e.createElement(t,null," Examples"))));c.storyName="collapsedWidth";const d=()=>{const[n,m]=e.useState(!1);return e.createElement("div",{style:{display:"flex",height:"100%",minHeight:"400px"}},e.createElement(a,{onBackdropClick:()=>m(!1),toggled:n,breakPoint:"all"},e.createElement(l,null,e.createElement(t,null," Documentation"),e.createElement(t,null," Calendar"),e.createElement(t,null," E-commerce"),e.createElement(t,null," Examples"))),e.createElement("main",{style:{display:"flex",padding:10}},e.createElement("div",null,e.createElement("button",{className:"sb-button",onClick:()=>m(!n)},"Toggle"))))};d.storyName="toggled";const u=()=>e.createElement("div",{style:{display:"flex",height:"100%",minHeight:"400px"}},e.createElement(a,{backgroundColor:"#bcf3ff"},e.createElement(l,null,e.createElement(t,null," Documentation"),e.createElement(t,null," Calendar"),e.createElement(t,null," E-commerce"),e.createElement(t,null," Examples"))));u.storyName="backgroundColor";const p=()=>e.createElement("div",{style:{display:"flex",height:"100%",minHeight:"400px"}},e.createElement(a,{image:"https://i.pinimg.com/736x/8e/6c/06/8e6c064f57f94838263d7ba9ad80f353.jpg"},e.createElement(l,null,e.createElement(t,null," Documentation"),e.createElement(t,null," Calendar"),e.createElement(t,null," E-commerce"),e.createElement(t,null," Examples"))));p.storyName="image";const r=()=>{const[n,m]=e.useState(!1);return e.createElement("div",{style:{display:"flex",height:"100%",minHeight:"400px"}},e.createElement(a,{onBackdropClick:()=>m(!1),toggled:n,breakPoint:"all"},e.createElement(l,null,e.createElement(t,null," Documentation"),e.createElement(t,null," Calendar"),e.createElement(t,null," E-commerce"),e.createElement(t,null," Examples"))),e.createElement("main",{style:{display:"flex",padding:10}},e.createElement("div",null,e.createElement("button",{className:"sb-button",onClick:()=>m(!n)},"Toggle"))))};r.storyName="breakPoint";r.parameters={docs:{inlineStories:!1,iframeHeight:500}};const g=()=>{const[n,m]=e.useState(!1),[ee,te]=e.useState(window.matchMedia("(max-width: 800px)").matches);return e.createElement("div",{style:{display:"flex",height:"100%",minHeight:"400px"}},e.createElement(a,{toggled:n,breakPoint:"800px",onBreakPoint:te},e.createElement(l,null,e.createElement(t,null," Documentation"),e.createElement(t,null," Calendar"),e.createElement(t,null," E-commerce"),e.createElement(t,null," Examples"))),e.createElement("main",{style:{padding:10}},e.createElement("div",null,ee&&e.createElement("button",{className:"sb-button",onClick:()=>m(!n)},"Toggle"))))};g.storyName="custom breakpoint value";r.parameters={docs:{inlineStories:!1,iframeHeight:500}};const E=()=>{const[n,m]=e.useState(!1);return e.createElement("div",{style:{display:"flex",height:"100%",minHeight:"400px"}},e.createElement(a,{collapsed:n,transitionDuration:1e3},e.createElement(l,null,e.createElement(t,null," Documentation"),e.createElement(t,null," Calendar"),e.createElement(t,null," E-commerce"),e.createElement(t,null," Examples"))),e.createElement("main",{style:{padding:10}},e.createElement("div",null,e.createElement("button",{className:"sb-button",onClick:()=>m(!n)},"Collapse"))))};E.storyName="transitionDuration";const M=()=>e.createElement("div",{style:{display:"flex",height:"100%",minHeight:"400px",direction:"rtl"}},e.createElement(a,{rtl:!0},e.createElement(l,null,e.createElement(t,null," Documentation"),e.createElement(t,null," Calendar"),e.createElement(t,null," E-commerce"),e.createElement(t,null," Examples"))));M.storyName="rtl";const I=()=>e.createElement("div",{style:{display:"flex",height:"100%",minHeight:"400px"}},e.createElement(a,{rootStyles:{background:"linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)"}},e.createElement(l,null,e.createElement(t,null," Documentation"),e.createElement(t,null," Calendar"),e.createElement(t,null," E-commerce"),e.createElement(t,null," Examples"))));I.storyName="rootStyles";o.__docgenInfo={description:"",methods:[],displayName:"Basic"};s.__docgenInfo={description:"",methods:[],displayName:"Width"};i.__docgenInfo={description:"",methods:[],displayName:"Collapsed"};c.__docgenInfo={description:"",methods:[],displayName:"CollapsedWidth"};d.__docgenInfo={description:"",methods:[],displayName:"Toggled"};u.__docgenInfo={description:"",methods:[],displayName:"BackgroundColor"};p.__docgenInfo={description:"",methods:[],displayName:"Image"};r.__docgenInfo={description:"",methods:[],displayName:"BreakPoint"};g.__docgenInfo={description:"",methods:[],displayName:"CustomBreakPoint"};E.__docgenInfo={description:"",methods:[],displayName:"TransitionDuration"};M.__docgenInfo={description:"",methods:[],displayName:"RTL"};I.__docgenInfo={description:"",methods:[],displayName:"RootStyles"};var h,y,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`({
  ...props
}) => <div style={{
  display: 'flex',
  height: '100%',
  minHeight: '400px'
}}>
    <Sidebar {...props}>
      <Menu>
        <MenuItem> Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
    <main style={{
    padding: 10
  }}> Main content</main>
  </div>`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,f,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%',
  minHeight: '400px'
}}>
    <Sidebar width="300px">
      <Menu>
        <MenuItem> Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,v,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [collapsed, setCollapsed] = React.useState(false);
  return <div style={{
    display: 'flex',
    height: '100%',
    minHeight: '400px'
  }}>
      <Sidebar collapsed={collapsed}>
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{
      padding: 10
    }}>
        <div>
          <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
            Collapse
          </button>
        </div>
      </main>
    </div>;
}`,...(k=(v=i.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var N,D,H;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%',
  minHeight: '400px'
}}>
    <Sidebar collapsed collapsedWidth="60px">
      <Menu>
        <MenuItem> Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>`,...(H=(D=c.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var T,_,B;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [toggled, setToggled] = React.useState(false);
  return <div style={{
    display: 'flex',
    height: '100%',
    minHeight: '400px'
  }}>
      <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="all">
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{
      display: 'flex',
      padding: 10
    }}>
        <div>
          <button className="sb-button" onClick={() => setToggled(!toggled)}>
            Toggle
          </button>
        </div>
      </main>
    </div>;
}`,...(B=(_=d.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var P,R,w;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%',
  minHeight: '400px'
}}>
    <Sidebar backgroundColor="#bcf3ff">
      <Menu>
        <MenuItem> Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>`,...(w=(R=u.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var W,L,j;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%',
  minHeight: '400px'
}}>
    <Sidebar image="https://i.pinimg.com/736x/8e/6c/06/8e6c064f57f94838263d7ba9ad80f353.jpg">
      <Menu>
        <MenuItem> Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>`,...(j=(L=p.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var O,q,z;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [toggled, setToggled] = React.useState(false);
  return <div style={{
    display: 'flex',
    height: '100%',
    minHeight: '400px'
  }}>
      <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="all">
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{
      display: 'flex',
      padding: 10
    }}>
        <div>
          <button className="sb-button" onClick={() => setToggled(!toggled)}>
            Toggle
          </button>
        </div>
      </main>
    </div>;
}`,...(z=(q=r.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var A,F,G;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [toggled, setToggled] = React.useState(false);
  const [broken, setBroken] = React.useState(window.matchMedia('(max-width: 800px)').matches);
  return <div style={{
    display: 'flex',
    height: '100%',
    minHeight: '400px'
  }}>
      <Sidebar toggled={toggled} breakPoint="800px" onBreakPoint={setBroken}>
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{
      padding: 10
    }}>
        <div>
          {broken && <button className="sb-button" onClick={() => setToggled(!toggled)}>
              Toggle
            </button>}
        </div>
      </main>
    </div>;
}`,...(G=(F=g.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,Q;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const [collapsed, setCollapsed] = React.useState(false);
  return <div style={{
    display: 'flex',
    height: '100%',
    minHeight: '400px'
  }}>
      <Sidebar collapsed={collapsed} transitionDuration={1000}>
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{
      padding: 10
    }}>
        <div>
          <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
            Collapse
          </button>
        </div>
      </main>
    </div>;
}`,...(Q=(K=E.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,V,X;M.parameters={...M.parameters,docs:{...(U=M.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <div style={{
    display: 'flex',
    height: '100%',
    minHeight: '400px',
    direction: 'rtl'
  }}>
      <Sidebar rtl>
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
    </div>;
}`,...(X=(V=M.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,$;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <div style={{
    display: 'flex',
    height: '100%',
    minHeight: '400px'
  }}>
      <Sidebar rootStyles={{
      background: 'linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)'
    }}>
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
    </div>;
}`,...($=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const re=["Basic","Width","Collapsed","CollapsedWidth","Toggled","BackgroundColor","Image","BreakPoint","CustomBreakPoint","TransitionDuration","RTL","RootStyles"];export{u as BackgroundColor,o as Basic,r as BreakPoint,i as Collapsed,c as CollapsedWidth,g as CustomBreakPoint,p as Image,M as RTL,I as RootStyles,d as Toggled,E as TransitionDuration,s as Width,re as __namedExportsOrder,me as default};
