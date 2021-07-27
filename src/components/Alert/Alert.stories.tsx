import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Alert, AlertProps } from './Alert';

const meta: Meta = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    type: {
      options: ['info', 'warning', 'danger', 'success'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  type: 'info',
  title: 'title',
  children: 'message',
  showIcon: true,
  className: '',
};
