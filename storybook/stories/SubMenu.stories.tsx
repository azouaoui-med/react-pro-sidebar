import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu, menuClasses, MenuItem, Sidebar, SubMenu } from '../../src';
import { Icon } from '../icons/Icon';

const StoryParams: ComponentMeta<typeof SubMenu> = {
  title: 'SubMenu',
  component: SubMenu,
  argTypes: {},
};

export default StoryParams;

export const Basic: ComponentStory<typeof SubMenu> = ({ ...props }) => (
  <div style={{ display: 'flex', height: '100%' }}>
    <Sidebar>
      <Menu>
        <SubMenu {...props} label="Charts">
          <MenuItem> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
        <SubMenu label="Maps">
          <MenuItem> Google maps</MenuItem>
          <MenuItem> Open street maps</MenuItem>
        </SubMenu>
        <SubMenu label="Theme">
          <MenuItem> Dark</MenuItem>
          <MenuItem> Light</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  </div>
);

Basic.parameters = {
  docs: {
    source: {
      code: `
      import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

      () => (
        <div style={{ display: 'flex', height: '100%' }}>
          <Sidebar>
            <Menu>
              <SubMenu {...props} label="Charts">
                <MenuItem> Pie charts</MenuItem>
                <MenuItem> Line charts</MenuItem>
                <MenuItem> Bar charts</MenuItem>
              </SubMenu>
              <SubMenu label="Maps">
                <MenuItem> Google maps</MenuItem>
                <MenuItem> Open street maps</MenuItem>
              </SubMenu>
              <SubMenu label="Theme">
                <MenuItem> Dark</MenuItem>
                <MenuItem> Light</MenuItem>
              </SubMenu>
            </Menu>
          </Sidebar>
        </div>
      )`,
    },
  },
};

export const WithIcon: ComponentStory<typeof SubMenu> = () => (
  <div style={{ display: 'flex', height: '100%' }}>
    <Sidebar>
      <Menu>
        <Menu>
          <SubMenu icon={<Icon name="bar-chart" />} label="Charts">
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
          <SubMenu icon={<Icon name="global" />} label="Maps">
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
          </SubMenu>
          <SubMenu icon={<Icon name="ink-bottle" />} label="Theme">
            <MenuItem> Dark</MenuItem>
            <MenuItem> Light</MenuItem>
          </SubMenu>
        </Menu>
      </Menu>
    </Sidebar>
  </div>
);

WithIcon.storyName = 'icon';

export const Prefix: ComponentStory<typeof SubMenu> = () => (
  <div style={{ display: 'flex', height: '100%' }}>
    <Sidebar>
      <Menu>
        <Menu>
          <SubMenu prefix="🔥" label="Charts">
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
          <SubMenu label="Maps">
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
          </SubMenu>
          <SubMenu label="Theme">
            <MenuItem> Dark</MenuItem>
            <MenuItem> Light</MenuItem>
          </SubMenu>
        </Menu>
      </Menu>
    </Sidebar>
  </div>
);
Prefix.storyName = 'prefix';

export const Suffix: ComponentStory<typeof SubMenu> = () => (
  <div style={{ display: 'flex', height: '100%' }}>
    <Sidebar>
      <Menu>
        <Menu>
          <SubMenu suffix="🔥" label="Charts">
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
          <SubMenu label="Maps">
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
          </SubMenu>
          <SubMenu label="Theme">
            <MenuItem> Dark</MenuItem>
            <MenuItem> Light</MenuItem>
          </SubMenu>
        </Menu>
      </Menu>
    </Sidebar>
  </div>
);
Suffix.storyName = 'suffix';

export const Active: ComponentStory<typeof SubMenu> = () => (
  <div style={{ display: 'flex', height: '100%' }}>
    <Sidebar>
      <Menu>
        <Menu>
          <SubMenu active label="Charts (active)">
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
          <SubMenu label="Maps">
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
          </SubMenu>
          <SubMenu label="Theme">
            <MenuItem> Dark</MenuItem>
            <MenuItem> Light</MenuItem>
          </SubMenu>
        </Menu>
      </Menu>
    </Sidebar>
  </div>
);
Active.storyName = 'active';

export const Disabled: ComponentStory<typeof SubMenu> = () => (
  <div style={{ display: 'flex', height: '100%' }}>
    <Sidebar>
      <Menu>
        <Menu>
          <SubMenu disabled label="Charts (disabled)">
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
          <SubMenu label="Maps">
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
          </SubMenu>
          <SubMenu label="Theme">
            <MenuItem> Dark</MenuItem>
            <MenuItem> Light</MenuItem>
          </SubMenu>
        </Menu>
      </Menu>
    </Sidebar>
  </div>
);
Disabled.storyName = 'disabled';

export const Component: ComponentStory<typeof MenuItem> = () => (
  <div style={{ display: 'flex', height: '100%' }}>
    <Sidebar>
      <Menu>
        <SubMenu defaultOpen label="Charts" component="div">
          <MenuItem> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  </div>
);
Component.storyName = 'component';

export const DefaultOpen: ComponentStory<typeof SubMenu> = () => (
  <div style={{ display: 'flex', height: '100%' }}>
    <Sidebar>
      <Menu>
        <Menu>
          <SubMenu defaultOpen label="Charts">
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
          <SubMenu label="Maps">
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
          </SubMenu>
          <SubMenu label="Theme">
            <MenuItem> Dark</MenuItem>
            <MenuItem> Light</MenuItem>
          </SubMenu>
        </Menu>
      </Menu>
    </Sidebar>
  </div>
);
DefaultOpen.storyName = 'defaultOpen';

export const RootStyles: ComponentStory<typeof MenuItem> = () => (
  <div style={{ display: 'flex', height: '100%' }}>
    <Sidebar>
      <Menu>
        <Menu>
          <SubMenu
            defaultOpen
            label="Charts"
            rootStyles={{
              ['& > .' + menuClasses.button]: {
                backgroundColor: '#eaabff',
                color: '#9f0099',
                '&:hover': {
                  backgroundColor: '#eecef9',
                },
              },
              ['.' + menuClasses.subMenuContent]: {
                backgroundColor: '#fbedff',
              },
            }}
          >
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
          <SubMenu label="Maps">
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
          </SubMenu>
          <SubMenu label="Theme">
            <MenuItem> Dark</MenuItem>
            <MenuItem> Light</MenuItem>
          </SubMenu>
        </Menu>
      </Menu>
    </Sidebar>
  </div>
);
RootStyles.storyName = 'rootStyles';
