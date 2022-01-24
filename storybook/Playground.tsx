import React from 'react';
import { Content, Footer, Header, Layout, Sidebar } from '../src';
import { useProSidebar } from '../src/hooks/useProSidebar';

export const Playground: React.FC = () => {
  const { toggleSidebar, collapseSidebar, broken } = useProSidebar();

  return (
    <Layout hasSidebar>
      <Sidebar
        fixed
        breakPoint="lg"
        transitionDuration={500}
        customBreakPoint="1000px"
        backgroundColor="rgba(5, 172, 55, 0.5)"
        image="https://i.pinimg.com/736x/8e/6c/06/8e6c064f57f94838263d7ba9ad80f353.jpg"
      >
        <div style={{ height: 1000 }}>Content </div>
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
