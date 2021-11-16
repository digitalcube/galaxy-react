import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  StatusBadgeOutline,
  StatusBadgeOutlineProps,
} from './StatusBadgeOutline';

const meta: Meta = {
  title: 'Components/Badge/StatusBadgeOutline',
  component: StatusBadgeOutline,
  parameters: {
    controles: {
      expanded: true,
    },
  },
};
export default meta;
const Template: Story<StatusBadgeOutlineProps> = (args) => (
  <StatusBadgeOutline {...args} />
);

export const Default = Template.bind({});
Default.args = {
  status: 'ready',
  className: '',
  labelPrefix: 'WordPress',
};
