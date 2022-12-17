import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from '../src';
import { Switch } from './components/Switch';
import { Icon } from './icons/Icon';

export const Playground: React.FC = () => {
  const { toggleSidebar, collapseSidebar, broken } = useProSidebar();

  const [isRTL, setIsRTL] = React.useState<boolean>(false);

  // handle on RTL change event
  const handleRTLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsRTL(e.target.checked);
  };

  return (
    <div style={{ display: 'flex', height: '100%', direction: isRTL ? 'rtl' : 'ltr' }}>
      <Sidebar rtl={isRTL} breakPoint="lg">
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
        <div style={{ padding: 10 }}>
          <div style={{ display: 'flex', marginBottom: '16px' }}>
            <button
              className="sb-button"
              style={{ margin: '0 8px' }}
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

          <div style={{ padding: '0 8px' }}>
            <Switch id="rtl" checked={isRTL} onChange={handleRTLChange} label="RTL" />
          </div>
        </div>
      </main>
    </div>
  );
};
