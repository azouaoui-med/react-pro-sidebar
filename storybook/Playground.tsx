import React from 'react';
import { Content, Footer, Header, Layout, Sidebar } from '../src';
import { Menu } from '../src/components/Menu';
import { MenuItem } from '../src/components/MenuItem';
import { SubMenu } from '../src/components/SubMenu';
import { useProSidebar } from '../src/hooks/useProSidebar';

export const Playground: React.FC = () => {
  const { toggleSidebar, collapseSidebar, broken } = useProSidebar();

  return (
    <Layout hasSidebar>
      <Sidebar
        fixed
        breakPoint="always"
        customBreakPoint="1000px"
        transitionDuration={200}
        backgroundColor="rgba(58, 77, 64, 0.5)"
        // image="https://i.pinimg.com/736x/8e/6c/06/8e6c064f57f94838263d7ba9ad80f353.jpg"
        overlayColor="rgba(157, 0, 255, .3)"
      >
        <div style={{ height: 1000 }}>
          <Menu>
            <MenuItem> dashboard</MenuItem>
            <MenuItem> community</MenuItem>
            <SubMenu label="submenu">
              <MenuItem> dashboard</MenuItem>
              <MenuItem> community</MenuItem>
              <MenuItem> components</MenuItem>
              <SubMenu label="submenu">
                <MenuItem> dashboard</MenuItem>
                <MenuItem> community</MenuItem>
                <MenuItem> components</MenuItem>
              </SubMenu>
            </SubMenu>
            <MenuItem> components</MenuItem>
          </Menu>
        </div>
      </Sidebar>
      <Layout>
        <Header fixed>
          <div style={{ display: 'flex', padding: 10 }}>
            <div>Header</div>
            <button onClick={() => collapseSidebar()}>collapse</button>
            {broken ? <button onClick={() => toggleSidebar()}>toggle</button> : null}
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
