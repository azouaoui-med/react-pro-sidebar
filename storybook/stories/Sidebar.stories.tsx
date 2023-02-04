import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu, MenuItem, Sidebar, useProSidebar } from '../../src';
import { ProSidebarProvider } from '../../src/components/ProSidebarProvider';

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
    <Sidebar {...props}>
      <Menu>
        <MenuItem> Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
    <main style={{ padding: 10 }}> Main content</main>
  </div>
);
Basic.parameters = {
  docs: {
    source: {
      code: `
      import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

      () => (
        <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
          <Sidebar>
            <Menu>
              <MenuItem> Documentation</MenuItem>
              <MenuItem> Calendar</MenuItem>
              <MenuItem> E-commerce</MenuItem>
              <MenuItem> Examples</MenuItem>
            </Menu>
          </Sidebar>
          <main style={{ padding: 10 }}> Main content</main>
        </div>
    );`,
    },
  },
};

export const Width: ComponentStory<typeof Sidebar> = () => (
  <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
    <Sidebar width="300px">
      <Menu>
        <MenuItem> Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>
);

Width.storyName = 'width';

export const DefaultCollapsed: ComponentStory<typeof Sidebar> = () => (
  <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
    <Sidebar defaultCollapsed>
      <Menu>
        <MenuItem> Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>
);
DefaultCollapsed.storyName = 'defaultCollapsed';

export const CollapsedWidth: ComponentStory<typeof Sidebar> = () => (
  <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
    <Sidebar defaultCollapsed collapsedWidth="60px">
      <Menu>
        <MenuItem> Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>
);
CollapsedWidth.storyName = 'collapsedWidth';

export const BackgroundColor: ComponentStory<typeof Sidebar> = () => (
  <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
    <Sidebar backgroundColor="#bcf3ff">
      <Menu>
        <MenuItem> Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>
);
BackgroundColor.storyName = 'backgroundColor';

export const Image: ComponentStory<typeof Sidebar> = () => (
  <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
    <Sidebar image="https://i.pinimg.com/736x/8e/6c/06/8e6c064f57f94838263d7ba9ad80f353.jpg">
      <Menu>
        <MenuItem> Documentation</MenuItem>
        <MenuItem> Calendar</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
  </div>
);
Image.storyName = 'image';

export const BreakPoint: ComponentStory<typeof Sidebar> = () => {
  const { toggleSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
      <Sidebar breakPoint="always">
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ display: 'flex', padding: 10 }}>
        <div>
          <button className="sb-button" onClick={() => toggleSidebar()}>
            Toggle
          </button>
        </div>
      </main>
    </div>
  );
};
BreakPoint.storyName = 'breakPoint';

BreakPoint.parameters = {
  docs: {
    inlineStories: false,
    iframeHeight: 500,
  },
};

export const CustomBreakPoint: ComponentStory<typeof Sidebar> = () => {
  const { toggleSidebar, broken } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
      <Sidebar customBreakPoint="800px">
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }}>
        <div>
          {broken && (
            <button className="sb-button" onClick={() => toggleSidebar()}>
              Toggle
            </button>
          )}
        </div>
      </main>
    </div>
  );
};
CustomBreakPoint.storyName = 'customBreakPoint';

BreakPoint.parameters = {
  docs: {
    inlineStories: false,
    iframeHeight: 500,
  },
};

export const TransitionDuration: ComponentStory<typeof Sidebar> = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
      <Sidebar transitionDuration={1000}>
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }}>
        <div>
          <button className="sb-button" onClick={() => collapseSidebar()}>
            Collapse
          </button>
        </div>
      </main>
    </div>
  );
};
TransitionDuration.storyName = 'transitionDuration';

export const RTL: ComponentStory<typeof Sidebar> = () => {
  const { rtl } = useProSidebar();

  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        minHeight: '400px',
        direction: rtl ? 'rtl' : 'ltr',
      }}
    >
      <Sidebar rtl>
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};
RTL.storyName = 'rtl';

export const RootStyles: ComponentStory<typeof Sidebar> = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        minHeight: '400px',
      }}
    >
      <Sidebar
        rootStyles={{
          background:
            'linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)',
        }}
      >
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};
RootStyles.storyName = 'rootStyles';
