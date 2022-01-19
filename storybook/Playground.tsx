import React from 'react';
import { Content, Footer, Header, Layout, Sidebar } from '../src';

export const Playground: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Layout hasSidebar>
      <Sidebar
        fixed
        collapsed={collapsed}
        breakPoint="lg"
        customBreakPoint="1000px"
        onCollapse={(value) => console.log(value)}
      >
        <div style={{ height: 1000 }}>Content </div>
      </Sidebar>
      <Layout>
        <Header fixed>
          <div style={{ display: 'flex', padding: 10 }}>
            <div>Header</div>
            <button onClick={() => setCollapsed(!collapsed)}>toggle collapsed</button>
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
