import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProSidebarProvider } from '../../src/components/ProSidebarProvider';
import { Playground as PlaygroundComponent } from '../Playground';

const StoryParams: ComponentMeta<typeof PlaygroundComponent> = {
  title: 'Playground',
  component: PlaygroundComponent,
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

export const Playground: ComponentStory<typeof PlaygroundComponent> = () => <PlaygroundComponent />;
