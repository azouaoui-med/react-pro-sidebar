import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu, menuClasses, MenuItem, Sidebar, SubMenu } from '../../src';
import { ProSidebarProvider } from '../../src/components/ProSidebarProvider';
import { Icon } from '../icons/Icon';

const StoryParams: ComponentMeta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
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
    <Sidebar>
      <Menu {...props}>
        <MenuItem>Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>
);

Basic.parameters = {
  docs: {
    source: {
      code: `
      import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

      () => (
        <div style={{ display: 'flex', height: '100%' }}>
          <Sidebar>
            <Menu>
              <MenuItem> Documentation </MenuItem>
              <MenuItem> Calendar </MenuItem>
              <MenuItem> E-commerce </MenuItem>
              <MenuItem> Examples </MenuItem>
            </Menu>
          </Sidebar>
        </div>
      )`,
    },
  },
};

export const renderExpandIcon: ComponentStory<typeof Menu> = () => (
  <div style={{ display: 'flex', height: '100%' }}>
    <Sidebar>
      <Menu renderExpandIcon={({ open }) => <span>{open ? '-' : '+'}</span>}>
        <SubMenu label="Charts">
          <MenuItem> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>
);

renderExpandIcon.storyName = 'renderExpandIcon';

export const MenuItemStyles: ComponentStory<typeof Menu> = () => (
  <div style={{ display: 'flex', height: '100%' }}>
    <Sidebar>
      <Menu
        menuItemStyles={({ level }) => ({
          // only apply the styles on first level menu buttons
          ...(level === 0 && {
            [`&.${menuClasses.active} > .${menuClasses.button}`]: {
              backgroundColor: '#d359ff',
              color: '#f7e1ff',
            },
            [`& > .${menuClasses.button}`]: {
              backgroundColor: '#eaabff',
              color: '#9f0099',
              '&:hover': {
                backgroundColor: '#eecef9',
              },
            },
            [`&.${menuClasses.disabled} > .${menuClasses.button}`]: {
              backgroundColor: '#f7e1ff',
            },
          }),
        })}
      >
        <SubMenu defaultOpen label="Charts" icon={<Icon name="bar-chart" />}>
          <MenuItem> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
        <MenuItem active icon={<Icon name="calendar" />}>
          Calendar (active)
        </MenuItem>
        <MenuItem disabled icon={<Icon name="shopping-cart" />}>
          E-commerce (disabled)
        </MenuItem>
        <MenuItem icon={<Icon name="service" />}> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>
);

MenuItemStyles.storyName = 'menuItemStyles';

export const RootStyles: ComponentStory<typeof Menu> = () => (
  <div style={{ display: 'flex', height: '100%' }}>
    <Sidebar>
      <Menu
        rootStyles={{
          [`.${menuClasses.icon}`]: {
            backgroundColor: '#e1e1e1',
            color: '#344cff',
          },
        }}
      >
        <SubMenu label="Charts" icon={<Icon name="bar-chart" />}>
          <MenuItem> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
        <MenuItem active icon={<Icon name="calendar" />}>
          Calendar (active)
        </MenuItem>
        <MenuItem disabled icon={<Icon name="shopping-cart" />}>
          E-commerce (disabled)
        </MenuItem>
        <MenuItem icon={<Icon name="service" />}> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>
);

RootStyles.storyName = 'rootStyles';
