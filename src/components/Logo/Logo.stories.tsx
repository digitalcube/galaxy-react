import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Logo, LogoProps } from './Logo'

const meta: Meta = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<LogoProps> = args => (
  <>
    <Logo {...args} />
  </>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  name: 'shifter',
  width: 50
}