import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NavbarDropdown, NavbarDropdownProps } from './NavbarDropdown';
import { Nav } from './Nav';
import { NavLinkItem } from './NavLinkItem';

const meta: Meta = {
  title: 'Routings/NavbarDropdown',
  component: NavbarDropdown,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<NavbarDropdownProps> = (args) => (
  <NavbarDropdown {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  children: 'item',
  avatar: {
    email: 'test@example.com',
    size: 32,
    rounded: true,
  },
};

const IntegratedTemplate: Story<NavbarDropdownProps> = (args) => (
  <nav className="navbar navbar-expand-lg">
    <Nav>
      <NavLinkItem to="#">Guides</NavLinkItem>
      <NavbarDropdown {...args} />
    </Nav>
  </nav>
);
export const InNavbar = IntegratedTemplate.bind({});
InNavbar.args = {
  avatar: {
    email: 'test@example.com',
  },
};
