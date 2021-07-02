import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Nav, NavProps } from './Nav';
import { NavLinkItem } from './NavLinkItem';

const meta: Meta = {
  title: 'Routings/Nav',
  component: Nav,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<NavProps> = (args) => (
  <nav className="navbar navbar-expand-lg">
    <Nav {...args}>
      {args.children}
      <NavLinkItem to="/">Menu</NavLinkItem>
      <NavLinkItem to="/">Menu</NavLinkItem>
      <NavLinkItem to="/">Menu</NavLinkItem>
    </Nav>
  </nav>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  children: 'item',
};
