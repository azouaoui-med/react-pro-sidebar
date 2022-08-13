import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu, MenuItem, Sidebar } from '../../src';
import { ProSidebarProvider } from '../../src/components/ProSidebarProvider';

// TODO : use controls to test props (collapsed, toggled, rtl,...)
const StoryParams: ComponentMeta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
  subcomponents: { MenuItem },
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

export const Basic: ComponentStory<typeof Menu> = ({ ...props }) => (
  <div style={{ display: 'flex', height: '100%' }}>
    <Sidebar backgroundColor="rgba(27, 38, 58, 1)" style={{ color: '#b3b8d4' }}>
      <Menu {...props}>
        <MenuItem> Pie charts</MenuItem>
        <MenuItem> Line charts</MenuItem>
        <MenuItem> Bar charts</MenuItem>
      </Menu>
    </Sidebar>
    <main> Main content</main>
  </div>
);
