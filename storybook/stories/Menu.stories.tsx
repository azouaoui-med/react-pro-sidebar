import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu, menuClasses, MenuItem, Sidebar, SubMenu } from '../../src';
import { Icon } from '../icons/Icon';

const StoryParams: ComponentMeta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
  argTypes: {},
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
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            // only apply styles on first level elements of the tree
            if (level === 0)
              return {
                color: disabled ? '#f5d9ff' : '#d359ff',
                backgroundColor: active ? '#eecef9' : undefined,
              };
          },
        }}
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

export const TransitionDuration: ComponentStory<typeof Menu> = () => (
  <div style={{ display: 'flex', height: '100%' }}>
    <Sidebar>
      <Menu transitionDuration={1000}>
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

TransitionDuration.storyName = 'transitionDuration';

export const CloseOnClick: ComponentStory<typeof Menu> = () => (
  <div style={{ display: 'flex', height: '100%' }}>
    <Sidebar collapsed>
      <Menu closeOnClick>
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

CloseOnClick.storyName = 'closeOnClick';

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
