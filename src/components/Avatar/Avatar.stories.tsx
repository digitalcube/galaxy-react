import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar';

const meta: Meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<AvatarProps> = (args) => (
  <>
    <Avatar {...args} />
  </>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  size: 32,
  rounded: true,
  email: 'emaildano@gmail.com',
};
