import React from 'react';
import { Content, Footer, Header, Layout, Sidebar } from '../src';
import { Menu } from '../src/components/Menu';
import { MenuItem } from '../src/components/MenuItem';
import { SubMenu } from '../src/components/SubMenu';
import { useProSidebar } from '../src/hooks/useProSidebar';
import { Icon } from './icons/Icon';

export const Playground: React.FC = () => {
  const { toggleSidebar, collapseSidebar, broken } = useProSidebar();
  const [open, setOpen] = React.useState(true);

  return (
    <Layout hasSidebar>
      <Sidebar
        fixed
        breakPoint="always"
        customBreakPoint="1000px"
        transitionDuration={200}
        backgroundColor="rgba(27, 38, 58, 1)"
        // image="https://i.pinimg.com/736x/8e/6c/06/8e6c064f57f94838263d7ba9ad80f353.jpg"
        // overlayColor="rgba(5, 10, 24, .4)"
      >
        <div>
          <Menu>
            <SubMenu
              label="Charts"
              icon={<Icon name="bar-chart" />}
              prefix="OK"
              suffix="NO"
              open={open}
            >
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
      <Layout>
        <Header fixed>
          <div style={{ display: 'flex', padding: 10 }}>
            <div>Header</div>
            <button onClick={() => collapseSidebar()}>collapse</button>
            {broken ? <button onClick={() => toggleSidebar()}>toggle</button> : null}
            <button onClick={() => setOpen(!open)}>toggle menu</button>
            <div style={{ marginLeft: 'auto' }}>right</div>
          </div>
        </Header>
        <Content>
          <div style={{ height: 1000 }}>Content</div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

/* <Layout variant='basic' sidebar={<Sidebar collapsed> ... </Sidebar>} */

// variants = 'basic' | 'full-height-sidebar' | 'full-width-header' | 'full-width-footer' | 'fixed-header'
