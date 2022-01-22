import React from 'react';
import { Content, Footer, Header, Layout, Sidebar } from '../src';
import { useProSidebar } from '../src/hooks/useProSidebar';

export const Playground: React.FC = () => {
  const { toggleSidebar, collapseSidebar } = useProSidebar();

  return (
    <Layout hasSidebar>
      <Sidebar fixed breakPoint="lg" customBreakPoint="1000px" backgroundColor="orange">
        <div style={{ height: 1000 }}>Content </div>
      </Sidebar>
      <Layout>
        <Header fixed>
          <div style={{ display: 'flex', padding: 10 }}>
            <div>Header</div>
            <button onClick={() => collapseSidebar()}>collapse</button>
            <button onClick={() => toggleSidebar()}>toggle</button>
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
