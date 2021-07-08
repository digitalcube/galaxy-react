import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

const meta: Meta = {
  title: 'Components/Buttons',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    textAlign: {
      options: ['right', 'center', 'left'],
      control: { type: 'radio' },
    },
    fontWeight: {
      options: ['light', 'normal', 'bold'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} />
  </>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  children: 'Button name',
  disabled: false,
  block: true,
  textAlign: undefined,
  rounded: false,
  fontWeight: undefined,
};
