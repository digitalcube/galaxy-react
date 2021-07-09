import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  NavbarDropdownItem,
  NavbarDropdownItemProps,
} from './NavbarDropdownItem';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';

const meta: Meta = {
  title: 'Routings/NavbarDropdownItem',
  component: NavbarDropdownItem,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<NavbarDropdownItemProps> = (args) => (
  <>
    <NavbarDropdownItem {...args} />
  </>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  children: 'menu',
  href: '#',
};

const MultiItemTempalte: Story<NavbarDropdownItemProps> = () => (
  <>
    <NavbarDropdownItem href="#">
      Account <FaUser />
    </NavbarDropdownItem>
    <NavbarDropdownItem onClick={() => alert('hello')}>
      Log out <FaSignOutAlt />
    </NavbarDropdownItem>
  </>
);
export const AccountMenu = MultiItemTempalte.bind({});
