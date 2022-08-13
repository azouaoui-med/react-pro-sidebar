import React from 'react';
import { Sidebar } from '../src';
import { Menu, MenuItem, SubMenu, useProSidebar } from '../src';
import { Icon } from './icons/Icon';

export const Playground: React.FC = () => {
  const { toggleSidebar, collapseSidebar, broken } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar
        breakPoint="always"
        customBreakPoint="1000px"
        transitionDuration={200}
        backgroundColor="rgba(27, 38, 58, 1)"
        // image="https://i.pinimg.com/736x/8e/6c/06/8e6c064f57f94838263d7ba9ad80f353.jpg"
      >
        <div>
          <Menu>
            <SubMenu label="Charts" icon={<Icon name="bar-chart" />}>
              <MenuItem> Pie charts</MenuItem>
              <MenuItem> Line charts</MenuItem>
              <MenuItem> Bar charts</MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label="Maps" icon={<Icon name="global" />}>
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
            <MenuItem icon={<Icon name="book-2" />}> Documentation</MenuItem>
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
