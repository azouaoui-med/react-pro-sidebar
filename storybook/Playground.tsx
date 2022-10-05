import React from 'react';
import { Sidebar } from '../src';
import { Menu, MenuItem, SubMenu, useProSidebar } from '../src';
import { Icon } from './icons/Icon';

export const Playground: React.FC = () => {
  const { toggleSidebar, collapseSidebar, broken, rtl } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%', direction: rtl ? 'rtl' : 'ltr' }}>
      <Sidebar breakPoint="lg">
        <div>
          <Menu>
            <SubMenu label="Charts" icon={<Icon name="bar-chart" />}>
              <MenuItem> Pie charts</MenuItem>
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
            <SubMenu suffix="🔥" label="Components" icon={<Icon name="diamond" />}>
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
          <button
            className="sb-button"
            style={{ marginRight: '8px' }}
            onClick={() => collapseSidebar()}
          >
            Collapse
          </button>
          {broken ? (
            <button className="sb-button" onClick={() => toggleSidebar()}>
              Toggle
            </button>
          ) : null}
        </div>
      </main>
    </div>
  );
};
