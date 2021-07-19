import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  WordPressStatusBadge,
  WordPressStatusBadgeProps,
} from './WordPressStatusBadge';

const meta: Meta = {
  title: 'Components/Badge/WordPressStatusBadge',
  component: WordPressStatusBadge,
  parameters: {
    controles: {
      expanded: true,
    },
  },
};
export default meta;
const Template: Story<WordPressStatusBadgeProps> = (args) => (
  <WordPressStatusBadge {...args} />
);

export const Default = Template.bind({});
Default.args = {
  status: 'ready',
  className: '',
};
