import React from 'react';
import { Meta, Story } from '@storybook/react';
import { StatusBadge, StatusBadgeProps } from './StatusBadge';

const meta: Meta = {
  title: 'Components/Badge/StatusBadge',
  component: StatusBadge,
  parameters: {
    controles: {
      expanded: true,
    },
  },
};
export default meta;
const Template: Story<StatusBadgeProps> = (args) => <StatusBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'ready',
  className: '',
  labelPrefix: '',
};
