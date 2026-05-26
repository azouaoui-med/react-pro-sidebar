import{R as e}from"./iframe-DSaFr_71.js";import{I as t}from"./Icon-Du3Vl_6M.js";import{M as r,S as c,b as n,k as j}from"./MenuItem-CH3bV9UH.js";import{S as a}from"./SubMenu-CvKt7e72.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DuH17pFh.js";import"./index-B_JQJvlL.js";const Q={title:"Menu",component:r,argTypes:{}},o=({...I})=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(c,null,e.createElement(r,{...I},e.createElement(n,null,"Documentation"),e.createElement(n,null," Calendar"),e.createElement(n,null," E-commerce"),e.createElement(n,null," Examples"))));o.parameters={docs:{source:{code:`
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
      )`}}};const u=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(c,null,e.createElement(r,{renderExpandIcon:({open:I})=>e.createElement("span",null,I?"-":"+")},e.createElement(a,{label:"Charts"},e.createElement(n,null," Pie charts"),e.createElement(n,null," Line charts"),e.createElement(n,null," Bar charts")),e.createElement(n,null," Calendar"),e.createElement(n,null," E-commerce"),e.createElement(n,null," Examples"))));u.storyName="renderExpandIcon";const s=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(c,null,e.createElement(r,{menuItemStyles:{button:({level:I,active:$,disabled:U})=>{if(I===0)return{color:U?"#f5d9ff":"#d359ff",backgroundColor:$?"#eecef9":void 0}}}},e.createElement(a,{defaultOpen:!0,label:"Charts",icon:e.createElement(t,{name:"bar-chart"})},e.createElement(n,null," Pie charts"),e.createElement(n,null," Line charts"),e.createElement(n,null," Bar charts")),e.createElement(n,{active:!0,icon:e.createElement(t,{name:"calendar"})},"Calendar (active)"),e.createElement(n,{disabled:!0,icon:e.createElement(t,{name:"shopping-cart"})},"E-commerce (disabled)"),e.createElement(n,{icon:e.createElement(t,{name:"service"})}," Examples"))));s.storyName="menuItemStyles";const i=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(c,null,e.createElement(r,{transitionDuration:1e3},e.createElement(a,{label:"Charts"},e.createElement(n,null," Pie charts"),e.createElement(n,null," Line charts"),e.createElement(n,null," Bar charts")),e.createElement(n,null," Calendar"),e.createElement(n,null," E-commerce"),e.createElement(n,null," Examples"))));i.storyName="transitionDuration";const d=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(c,{collapsed:!0},e.createElement(r,{closeOnClick:!0},e.createElement(a,{label:"Charts"},e.createElement(n,null," Pie charts"),e.createElement(n,null," Line charts"),e.createElement(n,null," Bar charts")),e.createElement(n,null," Calendar"),e.createElement(n,null," E-commerce"),e.createElement(n,null," Examples"))));d.storyName="closeOnClick";const M=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(c,null,e.createElement(r,{rootStyles:{[`.${j.icon}`]:{backgroundColor:"#e1e1e1",color:"#344cff"}}},e.createElement(a,{label:"Charts",icon:e.createElement(t,{name:"bar-chart"})},e.createElement(n,null," Pie charts"),e.createElement(n,null," Line charts"),e.createElement(n,null," Bar charts")),e.createElement(n,{active:!0,icon:e.createElement(t,{name:"calendar"})},"Calendar (active)"),e.createElement(n,{disabled:!0,icon:e.createElement(t,{name:"shopping-cart"})},"E-commerce (disabled)"),e.createElement(n,{icon:e.createElement(t,{name:"service"})}," Examples"))));M.storyName="rootStyles";const l=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(c,null,e.createElement(r,{accordion:!0},e.createElement(a,{label:"Charts",icon:e.createElement(t,{name:"bar-chart"})},e.createElement(n,null," Pie charts"),e.createElement(n,null," Line charts"),e.createElement(n,null," Bar charts")),e.createElement(a,{label:"E-commerce",icon:e.createElement(t,{name:"shopping-cart"})},e.createElement(n,null," Orders"),e.createElement(n,null," Products"),e.createElement(n,null," Customers")),e.createElement(a,{label:"Calendar",icon:e.createElement(t,{name:"calendar"})},e.createElement(n,null," Schedule"),e.createElement(n,null," Events")),e.createElement(n,{icon:e.createElement(t,{name:"service"})}," Documentation"))));l.storyName="accordion";const m=()=>e.createElement("div",{style:{display:"flex",height:"100%"}},e.createElement(c,null,e.createElement(r,{popover:!0},e.createElement(a,{label:"Charts",icon:e.createElement(t,{name:"bar-chart"})},e.createElement(n,null," Pie charts"),e.createElement(n,null," Line charts"),e.createElement(n,null," Bar charts")),e.createElement(a,{label:"E-commerce",icon:e.createElement(t,{name:"shopping-cart"})},e.createElement(n,null," Orders"),e.createElement(n,null," Products")),e.createElement(n,{icon:e.createElement(t,{name:"calendar"})}," Calendar"),e.createElement(n,{icon:e.createElement(t,{name:"service"})}," Documentation"))));m.storyName="popover";m.parameters={docs:{description:{story:"With `popover` set on `Menu`, top-level `SubMenu`s open as floating poppers (to the side) even while the sidebar is expanded — instead of sliding open inline. Useful for tall sidebars with many items. Click a submenu to open its flyout; click elsewhere or press Escape to close."},source:{code:`
      import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

      () => (
        <Sidebar>
          <Menu popover>
            <SubMenu label="Charts">
              <MenuItem>Pie charts</MenuItem>
              <MenuItem>Line charts</MenuItem>
            </SubMenu>
            <SubMenu label="E-commerce">
              <MenuItem>Orders</MenuItem>
              <MenuItem>Products</MenuItem>
            </SubMenu>
            <MenuItem>Calendar</MenuItem>
          </Menu>
        </Sidebar>
      )`}}};l.parameters={docs:{description:{story:"When `accordion` is set on `Menu`, only one top-level `SubMenu` can be open at a time. Opening another automatically closes the previously open one. Nested submenus are not affected — set `accordion` on a `SubMenu` to coordinate its direct children."},source:{code:`
      import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

      () => (
        <Sidebar>
          <Menu accordion>
            <SubMenu label="Charts">
              <MenuItem>Pie charts</MenuItem>
              <MenuItem>Line charts</MenuItem>
            </SubMenu>
            <SubMenu label="E-commerce">
              <MenuItem>Orders</MenuItem>
              <MenuItem>Products</MenuItem>
            </SubMenu>
            <SubMenu label="Calendar">
              <MenuItem>Schedule</MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      )`}}};o.__docgenInfo={description:"",methods:[],displayName:"Basic"};u.__docgenInfo={description:"",methods:[],displayName:"renderExpandIcon"};s.__docgenInfo={description:"",methods:[],displayName:"MenuItemStyles"};i.__docgenInfo={description:"",methods:[],displayName:"TransitionDuration"};d.__docgenInfo={description:"",methods:[],displayName:"CloseOnClick"};M.__docgenInfo={description:"",methods:[],displayName:"RootStyles"};l.__docgenInfo={description:"",methods:[],displayName:"Accordion"};m.__docgenInfo={description:"",methods:[],displayName:"Popover"};var p,E,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`({
  ...props
}) => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu {...props}>
        <MenuItem>Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>`,...(h=(E=o.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var b,S,y;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu renderExpandIcon={({
      open
    }) => <span>{open ? '-' : '+'}</span>}>
        <SubMenu label="Charts">
          <MenuItem> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>`,...(y=(S=u.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var f,v,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu menuItemStyles={{
      button: ({
        level,
        active,
        disabled
      }) => {
        // only apply styles on first level elements of the tree
        if (level === 0) return {
          color: disabled ? '#f5d9ff' : '#d359ff',
          backgroundColor: active ? '#eecef9' : undefined
        };
      }
    }}>
        <SubMenu defaultOpen label="Charts" icon={<Icon name="bar-chart" />}>
          <MenuItem> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
        <MenuItem active icon={<Icon name="calendar" />}>
          Calendar (active)
        </MenuItem>
        <MenuItem disabled icon={<Icon name="shopping-cart" />}>
          E-commerce (disabled)
        </MenuItem>
        <MenuItem icon={<Icon name="service" />}> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>`,...(C=(v=s.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var g,x,P;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu transitionDuration={1000}>
        <SubMenu label="Charts">
          <MenuItem> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>`,...(P=(x=i.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var _,B,L;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar collapsed>
      <Menu closeOnClick>
        <SubMenu label="Charts">
          <MenuItem> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>`,...(L=(B=d.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var N,O,k;M.parameters={...M.parameters,docs:{...(N=M.parameters)==null?void 0:N.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu rootStyles={{
      [\`.\${menuClasses.icon}\`]: {
        backgroundColor: '#e1e1e1',
        color: '#344cff'
      }
    }}>
        <SubMenu label="Charts" icon={<Icon name="bar-chart" />}>
          <MenuItem> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
        <MenuItem active icon={<Icon name="calendar" />}>
          Calendar (active)
        </MenuItem>
        <MenuItem disabled icon={<Icon name="shopping-cart" />}>
          E-commerce (disabled)
        </MenuItem>
        <MenuItem icon={<Icon name="service" />}> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>`,...(k=(O=M.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var D,R,T;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu accordion>
        <SubMenu label="Charts" icon={<Icon name="bar-chart" />}>
          <MenuItem> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
        <SubMenu label="E-commerce" icon={<Icon name="shopping-cart" />}>
          <MenuItem> Orders</MenuItem>
          <MenuItem> Products</MenuItem>
          <MenuItem> Customers</MenuItem>
        </SubMenu>
        <SubMenu label="Calendar" icon={<Icon name="calendar" />}>
          <MenuItem> Schedule</MenuItem>
          <MenuItem> Events</MenuItem>
        </SubMenu>
        <MenuItem icon={<Icon name="service" />}> Documentation</MenuItem>
      </Menu>
    </Sidebar>
  </div>`,...(T=(R=l.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var w,A,W;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  height: '100%'
}}>
    <Sidebar>
      <Menu popover>
        <SubMenu label="Charts" icon={<Icon name="bar-chart" />}>
          <MenuItem> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
        <SubMenu label="E-commerce" icon={<Icon name="shopping-cart" />}>
          <MenuItem> Orders</MenuItem>
          <MenuItem> Products</MenuItem>
        </SubMenu>
        <MenuItem icon={<Icon name="calendar" />}> Calendar</MenuItem>
        <MenuItem icon={<Icon name="service" />}> Documentation</MenuItem>
      </Menu>
    </Sidebar>
  </div>`,...(W=(A=m.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};const V=["Basic","renderExpandIcon","MenuItemStyles","TransitionDuration","CloseOnClick","RootStyles","Accordion","Popover"];export{l as Accordion,o as Basic,d as CloseOnClick,s as MenuItemStyles,m as Popover,M as RootStyles,i as TransitionDuration,V as __namedExportsOrder,Q as default,u as renderExpandIcon};
