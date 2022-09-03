import React from 'react';
import { Sidebar } from '../src';
import { Menu, MenuItem, SubMenu, useProSidebar } from '../src';
import { Icon } from './icons/Icon';

export const Playground: React.FC = () => {
  const { toggleSidebar, collapseSidebar, broken, rtl } = useProSidebar();

  const handleClick = () => {
    console.log('onclick');
  };

  return (
    <div style={{ display: 'flex', height: '100%', direction: rtl ? 'rtl' : 'ltr' }}>
      <Sidebar
        breakPoint="always"
        customBreakPoint="1000px"
        transitionDuration={200}
        // backgroundColor="rgba(27, 38, 58, 0.7)"
        // image="https://i.pinimg.com/736x/8e/6c/06/8e6c064f57f94838263d7ba9ad80f353.jpg"
      >
        <div>
          <Menu
          // closeOnClick
          // renderExpandIcon={({ level, collapsed, open }) => (
          //   <span>{collapsed && level === 0 ? 'o' : open ? '-' : '+'}</span>
          // )}
          // renderMenuItemStyles={({ collapsed, level }) => ({
          //   color: level === 0 ? 'blue' : 'red',
          //   '.menu-icon': {
          //     backgroundColor: '#e1e1e1',
          //   },
          //   // '.menu-anchor': {
          //   //   color: level === 0 ? 'blue' : 'red',
          //   // },
          //   '&.sub-menu': {
          //     '>.sub-menu-content': {
          //       ...(level === 0 &&
          //         {
          //           // backgroundColor: '#e1e1e150',
          //           // maxHeight: '200px',
          //           // overflow: 'auto',
          //         }),
          //     },
          //   },
          // })}
          >
            <SubMenu active label="Charts" icon={<Icon name="bar-chart" />} prefix="OK" suffix="🔥">
              <MenuItem onClick={handleClick}> Pie charts</MenuItem>
              <MenuItem> Line charts</MenuItem>
              <MenuItem> Bar charts</MenuItem>
            </SubMenu>
            <SubMenu label="Maps" icon={<Icon name="global" />}>
              <MenuItem> Google maps</MenuItem>
              <MenuItem> Open street maps</MenuItem>
            </SubMenu>
            <SubMenu label="Theme" icon={<Icon name="ink-bottle" />}>
              <MenuItem> Dark</MenuItem>
              <MenuItem> Light</MenuItem>
            </SubMenu>
            <SubMenu label="Components" icon={<Icon name="diamond" />}>
              <MenuItem> Grid</MenuItem>
              <MenuItem> Layout</MenuItem>
              <SubMenu label="Forms">
                <MenuItem> Input</MenuItem>
                <MenuItem> Select</MenuItem>
                <SubMenu label="More">
                  <MenuItem> CheckBox</MenuItem>
                  <MenuItem> Radio</MenuItem>
                </SubMenu>
              </SubMenu>
            </SubMenu>
            <MenuItem icon={<Icon name="book-2" />}>Documentation</MenuItem>
            <MenuItem icon={<Icon name="calendar" />}> Calendar</MenuItem>
            <MenuItem icon={<Icon name="shopping-cart" />}> E-commerce</MenuItem>
            <MenuItem icon={<Icon name="service" />}> Examples</MenuItem>
          </Menu>
        </div>
      </Sidebar>
      <main>
        <div style={{ display: 'flex', padding: 10 }}>
          <button onClick={() => collapseSidebar()}>collapse</button>
          {broken ? <button onClick={() => toggleSidebar()}>toggle</button> : null}
        </div>
      </main>
    </div>
  );
};
