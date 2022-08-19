import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar } from '../../src';
import { ProSidebarProvider } from '../../src/components/ProSidebarProvider';

// TODO : use controls to test props (collapsed, toggled, rtl,...)
const StoryParams: ComponentMeta<typeof Sidebar> = {
  title: 'Sidebar',
  component: Sidebar,
  subcomponents: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <ProSidebarProvider>
        <Story />
      </ProSidebarProvider>
    ),
  ],
};

export default StoryParams;

export const Basic: ComponentStory<typeof Sidebar> = ({ ...props }) => (
  <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
    <Sidebar {...props}>Sidebar</Sidebar>
    <main> Main content</main>
  </div>
);
