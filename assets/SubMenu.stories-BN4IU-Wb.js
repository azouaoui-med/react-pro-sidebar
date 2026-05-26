import{R as e}from"./iframe-DSaFr_71.js";import{I as S}from"./Icon-Du3Vl_6M.js";import{S as n}from"./SubMenu-CvKt7e72.js";import{S as l,M as a,b as t,k as g}from"./MenuItem-CH3bV9UH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DuH17pFh.js";import"./index-B_JQJvlL.js";const se={title:"SubMenu",component:n,argTypes:{}},m=({...r})=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(l,null,e.createElement(a,null,e.createElement(n,{...r,label:"Charts"},e.createElement(t,null," Pie charts"),e.createElement(t,null," Line charts"),e.createElement(t,null," Bar charts")),e.createElement(n,{label:"Maps"},e.createElement(t,null," Google maps"),e.createElement(t,null," Open street maps")),e.createElement(n,{label:"Theme"},e.createElement(t,null," Dark"),e.createElement(t,null," Light")))));m.parameters={docs:{source:{code:`
      import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

      () => (
        <div style={{ display: 'flex', height: '100%' }}>
          <Sidebar>
            <Menu>
              <SubMenu {...props} label="Charts">
                <MenuItem> Pie charts</MenuItem>
                <MenuItem> Line charts</MenuItem>
                <MenuItem> Bar charts</MenuItem>
              </SubMenu>
              <SubMenu label="Maps">
                <MenuItem> Google maps</MenuItem>
                <MenuItem> Open street maps</MenuItem>
              </SubMenu>
              <SubMenu label="Theme">
                <MenuItem> Dark</MenuItem>
                <MenuItem> Light</MenuItem>
              </SubMenu>
            </Menu>
          </Sidebar>
        </div>
      )`}}};const s=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(l,null,e.createElement(a,null,e.createElement(a,null,e.createElement(n,{icon:e.createElement(S,{name:"bar-chart"}),label:"Charts"},e.createElement(t,null," Pie charts"),e.createElement(t,null," Line charts"),e.createElement(t,null," Bar charts")),e.createElement(n,{icon:e.createElement(S,{name:"global"}),label:"Maps"},e.createElement(t,null," Google maps"),e.createElement(t,null," Open street maps")),e.createElement(n,{icon:e.createElement(S,{name:"ink-bottle"}),label:"Theme"},e.createElement(t,null," Dark"),e.createElement(t,null," Light"))))));s.storyName="icon";const c=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(l,null,e.createElement(a,null,e.createElement(a,null,e.createElement(n,{prefix:"🔥",label:"Charts"},e.createElement(t,null," Pie charts"),e.createElement(t,null," Line charts"),e.createElement(t,null," Bar charts")),e.createElement(n,{label:"Maps"},e.createElement(t,null," Google maps"),e.createElement(t,null," Open street maps")),e.createElement(n,{label:"Theme"},e.createElement(t,null," Dark"),e.createElement(t,null," Light"))))));c.storyName="prefix";const o=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(l,null,e.createElement(a,null,e.createElement(a,null,e.createElement(n,{suffix:"🔥",label:"Charts"},e.createElement(t,null," Pie charts"),e.createElement(t,null," Line charts"),e.createElement(t,null," Bar charts")),e.createElement(n,{label:"Maps"},e.createElement(t,null," Google maps"),e.createElement(t,null," Open street maps")),e.createElement(n,{label:"Theme"},e.createElement(t,null," Dark"),e.createElement(t,null," Light"))))));o.storyName="suffix";const i=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(l,null,e.createElement(a,null,e.createElement(n,{label:"Settings",defaultOpen:!0},e.createElement(n,{label:"Account",defaultOpen:!0},e.createElement(t,{active:!0}," Profile (active)"),e.createElement(t,null," Password")),e.createElement(n,{label:"Notifications"},e.createElement(t,null," Email"),e.createElement(t,null," Push"))))));i.storyName="active";const M=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(l,null,e.createElement(a,null,e.createElement(a,null,e.createElement(n,{disabled:!0,label:"Charts (disabled)"},e.createElement(t,null," Pie charts"),e.createElement(t,null," Line charts"),e.createElement(t,null," Bar charts")),e.createElement(n,{label:"Maps"},e.createElement(t,null," Google maps"),e.createElement(t,null," Open street maps")),e.createElement(n,{label:"Theme"},e.createElement(t,null," Dark"),e.createElement(t,null," Light"))))));M.storyName="disabled";const d=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(l,null,e.createElement(a,null,e.createElement(n,{defaultOpen:!0,label:"Charts",component:"div"},e.createElement(t,null," Pie charts"),e.createElement(t,null," Line charts"),e.createElement(t,null," Bar charts")))));d.storyName="component";const b=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(l,null,e.createElement(a,null,e.createElement(a,null,e.createElement(n,{defaultOpen:!0,label:"Charts"},e.createElement(t,null," Pie charts"),e.createElement(t,null," Line charts"),e.createElement(t,null," Bar charts")),e.createElement(n,{label:"Maps"},e.createElement(t,null," Google maps"),e.createElement(t,null," Open street maps")),e.createElement(n,{label:"Theme"},e.createElement(t,null," Dark"),e.createElement(t,null," Light"))))));b.storyName="defaultOpen";const p=()=>{const[r,E]=e.useState(),I=f=>{E(r===f?void 0:f)};return e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(l,null,e.createElement(a,null,e.createElement(a,null,e.createElement(n,{onClick:()=>I("charts"),open:r==="charts",label:"Charts"},e.createElement(t,null," Pie charts"),e.createElement(t,null," Line charts"),e.createElement(t,null," Bar charts")),e.createElement(n,{onClick:()=>I("maps"),open:r==="maps",label:"Maps"},e.createElement(t,null," Google maps"),e.createElement(t,null," Open street maps")),e.createElement(n,{onClick:()=>I("theme"),open:r==="theme",label:"Theme"},e.createElement(t,null," Dark"),e.createElement(t,null," Light"))))))};p.storyName="open";const h=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(l,null,e.createElement(a,null,e.createElement(a,null,e.createElement(n,{defaultOpen:!0,label:"Charts",rootStyles:{["& > ."+g.button]:{backgroundColor:"#eaabff",color:"#9f0099","&:hover":{backgroundColor:"#eecef9"}},["."+g.subMenuContent]:{backgroundColor:"#fbedff"}}},e.createElement(t,null," Pie charts"),e.createElement(t,null," Line charts"),e.createElement(t,null," Bar charts")),e.createElement(n,{label:"Maps"},e.createElement(t,null," Google maps"),e.createElement(t,null," Open street maps")),e.createElement(n,{label:"Theme"},e.createElement(t,null," Dark"),e.createElement(t,null," Light"))))));h.storyName="rootStyles";const u=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(l,null,e.createElement(a,null,e.createElement(n,{label:"Settings",accordion:!0,defaultOpen:!0},e.createElement(n,{label:"Account"},e.createElement(t,null," Profile"),e.createElement(t,null," Password")),e.createElement(n,{label:"Notifications"},e.createElement(t,null," Email"),e.createElement(t,null," Push")),e.createElement(n,{label:"Privacy"},e.createElement(t,null," Data"),e.createElement(t,null," Sharing"))),e.createElement(n,{label:"Tools",defaultOpen:!0},e.createElement(n,{label:"Editor"},e.createElement(t,null," Theme")),e.createElement(n,{label:"Terminal"},e.createElement(t,null," Shell"))))));u.storyName="accordion";u.parameters={docs:{description:{story:"`accordion` on a `SubMenu` coordinates only its direct children — opening one nested submenu inside `Settings` closes its siblings. The neighboring `Tools` submenu is unaffected: its own nested submenus open independently of each other."},source:{code:`
      import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

      () => (
        <Sidebar>
          <Menu>
            <SubMenu label="Settings" accordion defaultOpen>
              <SubMenu label="Account">…</SubMenu>
              <SubMenu label="Notifications">…</SubMenu>
              <SubMenu label="Privacy">…</SubMenu>
            </SubMenu>
            <SubMenu label="Tools" defaultOpen>
              <SubMenu label="Editor">…</SubMenu>
              <SubMenu label="Terminal">…</SubMenu>
            </SubMenu>
          </Menu>
        </Sidebar>
      )`}}};m.__docgenInfo={description:"",methods:[],displayName:"Basic"};s.__docgenInfo={description:"",methods:[],displayName:"WithIcon"};c.__docgenInfo={description:"",methods:[],displayName:"Prefix"};o.__docgenInfo={description:"",methods:[],displayName:"Suffix"};i.__docgenInfo={description:"",methods:[],displayName:"Active"};M.__docgenInfo={description:"",methods:[],displayName:"Disabled"};d.__docgenInfo={description:"",methods:[],displayName:"Component"};b.__docgenInfo={description:"",methods:[],displayName:"DefaultOpen"};p.__docgenInfo={description:"",methods:[],displayName:"Open"};h.__docgenInfo={description:"",methods:[],displayName:"RootStyles"};u.__docgenInfo={description:"",methods:[],displayName:"Accordion"};var y,v,O;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`({
  ...props
}) => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu>
        <SubMenu {...props} label="Charts">
          <MenuItem> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
        <SubMenu label="Maps">
          <MenuItem> Google maps</MenuItem>
          <MenuItem> Open street maps</MenuItem>
        </SubMenu>
        <SubMenu label="Theme">
          <MenuItem> Dark</MenuItem>
          <MenuItem> Light</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  </div>`,...(O=(v=m.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var C,P,x;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu>
        <Menu>
          <SubMenu icon={<Icon name="bar-chart" />} label="Charts">
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
          <SubMenu icon={<Icon name="global" />} label="Maps">
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
          </SubMenu>
          <SubMenu icon={<Icon name="ink-bottle" />} label="Theme">
            <MenuItem> Dark</MenuItem>
            <MenuItem> Light</MenuItem>
          </SubMenu>
        </Menu>
      </Menu>
    </Sidebar>
  </div>`,...(x=(P=s.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var L,k,T;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu>
        <Menu>
          <SubMenu prefix="🔥" label="Charts">
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
          <SubMenu label="Maps">
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
          </SubMenu>
          <SubMenu label="Theme">
            <MenuItem> Dark</MenuItem>
            <MenuItem> Light</MenuItem>
          </SubMenu>
        </Menu>
      </Menu>
    </Sidebar>
  </div>`,...(T=(k=c.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var N,D,_;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu>
        <Menu>
          <SubMenu suffix="🔥" label="Charts">
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
          <SubMenu label="Maps">
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
          </SubMenu>
          <SubMenu label="Theme">
            <MenuItem> Dark</MenuItem>
            <MenuItem> Light</MenuItem>
          </SubMenu>
        </Menu>
      </Menu>
    </Sidebar>
  </div>`,...(_=(D=o.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var B,G,A;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu>
        <SubMenu label="Settings" defaultOpen>
          <SubMenu label="Account" defaultOpen>
            <MenuItem active> Profile (active)</MenuItem>
            <MenuItem> Password</MenuItem>
          </SubMenu>
          <SubMenu label="Notifications">
            <MenuItem> Email</MenuItem>
            <MenuItem> Push</MenuItem>
          </SubMenu>
        </SubMenu>
      </Menu>
    </Sidebar>
  </div>`,...(A=(G=i.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var R,w,W;M.parameters={...M.parameters,docs:{...(R=M.parameters)==null?void 0:R.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu>
        <Menu>
          <SubMenu disabled label="Charts (disabled)">
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
          <SubMenu label="Maps">
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
          </SubMenu>
          <SubMenu label="Theme">
            <MenuItem> Dark</MenuItem>
            <MenuItem> Light</MenuItem>
          </SubMenu>
        </Menu>
      </Menu>
    </Sidebar>
  </div>`,...(W=(w=M.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var j,q,z;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu>
        <SubMenu defaultOpen label="Charts" component="div">
          <MenuItem> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  </div>`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var F,H,J;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu>
        <Menu>
          <SubMenu defaultOpen label="Charts">
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
          <SubMenu label="Maps">
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
          </SubMenu>
          <SubMenu label="Theme">
            <MenuItem> Dark</MenuItem>
            <MenuItem> Light</MenuItem>
          </SubMenu>
        </Menu>
      </Menu>
    </Sidebar>
  </div>`,...(J=(H=b.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState<'charts' | 'maps' | 'theme' | undefined>();
  const handleOpenSubMenu = (key: 'charts' | 'maps' | 'theme') => {
    if (open === key) {
      setOpen(undefined);
    } else {
      setOpen(key);
    }
  };
  return <div style={{
    display: 'flex',
    height: '100%'
  }}>
      <Sidebar>
        <Menu>
          <Menu>
            <SubMenu onClick={() => handleOpenSubMenu('charts')} open={open === 'charts'} label="Charts">
              <MenuItem> Pie charts</MenuItem>
              <MenuItem> Line charts</MenuItem>
              <MenuItem> Bar charts</MenuItem>
            </SubMenu>
            <SubMenu onClick={() => handleOpenSubMenu('maps')} open={open === 'maps'} label="Maps">
              <MenuItem> Google maps</MenuItem>
              <MenuItem> Open street maps</MenuItem>
            </SubMenu>
            <SubMenu onClick={() => handleOpenSubMenu('theme')} open={open === 'theme'} label="Theme">
              <MenuItem> Dark</MenuItem>
              <MenuItem> Light</MenuItem>
            </SubMenu>
          </Menu>
        </Menu>
      </Sidebar>
    </div>;
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,X,Y;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu>
        <Menu>
          <SubMenu defaultOpen label="Charts" rootStyles={{
          ['& > .' + menuClasses.button]: {
            backgroundColor: '#eaabff',
            color: '#9f0099',
            '&:hover': {
              backgroundColor: '#eecef9'
            }
          },
          ['.' + menuClasses.subMenuContent]: {
            backgroundColor: '#fbedff'
          }
        }}>
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
          <SubMenu label="Maps">
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
          </SubMenu>
          <SubMenu label="Theme">
            <MenuItem> Dark</MenuItem>
            <MenuItem> Light</MenuItem>
          </SubMenu>
        </Menu>
      </Menu>
    </Sidebar>
  </div>`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu>
        <SubMenu label="Settings" accordion defaultOpen>
          <SubMenu label="Account">
            <MenuItem> Profile</MenuItem>
            <MenuItem> Password</MenuItem>
          </SubMenu>
          <SubMenu label="Notifications">
            <MenuItem> Email</MenuItem>
            <MenuItem> Push</MenuItem>
          </SubMenu>
          <SubMenu label="Privacy">
            <MenuItem> Data</MenuItem>
            <MenuItem> Sharing</MenuItem>
          </SubMenu>
        </SubMenu>
        <SubMenu label="Tools" defaultOpen>
          <SubMenu label="Editor">
            <MenuItem> Theme</MenuItem>
          </SubMenu>
          <SubMenu label="Terminal">
            <MenuItem> Shell</MenuItem>
          </SubMenu>
        </SubMenu>
      </Menu>
    </Sidebar>
  </div>`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const ce=["Basic","WithIcon","Prefix","Suffix","Active","Disabled","Component","DefaultOpen","Open","RootStyles","Accordion"];export{u as Accordion,i as Active,m as Basic,d as Component,b as DefaultOpen,M as Disabled,p as Open,c as Prefix,h as RootStyles,o as Suffix,s as WithIcon,ce as __namedExportsOrder,se as default};
