import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Toggle, ToggleProps } from './Toggle';

const meta: Meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  checked: true,
};
