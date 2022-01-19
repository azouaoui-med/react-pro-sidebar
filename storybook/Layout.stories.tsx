import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout, Content, Header, Sidebar, Footer } from '../src';
import { ConfigProvider } from '../src/components/ConfigProvider';
import { Playground } from './Playground';

const StoryParams: ComponentMeta<typeof Layout> = {
  title: 'layout',
  component: Layout,
  subcomponents: { Header, Sidebar, Footer, Content },
  argTypes: {
    rtl: {
      control: { type: 'boolean' },
    },
  },
  decorators: [
    (Story) => (
      <ConfigProvider>
        <Story />
      </ConfigProvider>
    ),
  ],
};

export default StoryParams;

export const basic: ComponentStory<typeof Layout> = () => (
  <Layout>
    <Header>Header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>
);

export const fixedHeader: ComponentStory<typeof Layout> = () => (
  <Layout>
    <Header fixed>Header</Header>
    <Content>
      <div style={{ height: 800 }}>Content</div>
    </Content>
    <Footer>Footer</Footer>
  </Layout>
);

export const withSidebar: ComponentStory<typeof Layout> = () => (
  <Layout>
    <Header>Header</Header>
    <Layout hasSidebar>
      <Sidebar>Sidebar</Sidebar>
      <Content>
        <div style={{ height: 800 }}>Content</div>
      </Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
);

export const FixedSidebar: ComponentStory<typeof Layout> = () => (
  <Layout hasSidebar>
    <Sidebar fixed>
      <div style={{ height: 800 }}>Sidebar</div>
    </Sidebar>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
);

export const FixedSidebarHeader: ComponentStory<typeof Layout> = () => (
  <Layout hasSidebar>
    <Sidebar fixed>
      <div style={{ height: 1000 }}>Content </div>
    </Sidebar>
    <Layout>
      <Header fixed>Header</Header>
      <Content>
        <div style={{ height: 800 }}>Content</div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
);

export const RTL: ComponentStory<typeof Layout> = () => (
  <Layout rtl>
    <Header>Header</Header>
    <Layout hasSidebar>
      <Sidebar>Sidebar</Sidebar>
      <Content>
        <div style={{ height: 800 }}>Content</div>
      </Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
);

export const PlaygroundTest: ComponentStory<typeof Layout> = () => <Playground />;
