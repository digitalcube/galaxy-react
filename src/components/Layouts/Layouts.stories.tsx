import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Layouts, LayoutsProps } from './Layouts';

const meta: Meta = {
  title: 'Components/Layouts',
  component: Layouts,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    variant: {
      options: ['default', 'login', 'signup'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

const Template: Story<LayoutsProps> = (args) => (
  <>
    <Layouts {...args} />
  </>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  variant: 'login',
  footer: 'Footer',
};
