import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NavbarBrand, NavbarBrandProps } from './NavbarBrand';

const meta: Meta = {
  title: 'Routings/NavbarBrand',
  component: NavbarBrand,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<NavbarBrandProps> = (args) => <NavbarBrand {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  name: 'shifter',
  width: 24,
  href: '/',
};
