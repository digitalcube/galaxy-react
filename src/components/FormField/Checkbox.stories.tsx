import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';

const meta: Meta = {
  title: 'Components/Forms/Checkboxs',
  component: Checkbox,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<CheckboxProps> = (args) => (
  <>
    <Checkbox {...args} />
  </>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox name',
  id: 'remember',
  value: false,
  onChange: () => {},
  disabled: false,
};
