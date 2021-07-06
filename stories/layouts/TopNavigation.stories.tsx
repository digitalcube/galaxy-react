import React, { FC } from 'react';
import { Meta, Story } from '@storybook/react';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import {
  SearchForm,
  NavLinkItem,
  Nav,
  NavbarBrand,
  NavbarDropdown,
  NavbarDropdownItem,
  Navbar,
} from '../../src';

export const TopNavigation: FC = () => {
  return (
    <Navbar>
      <NavbarBrand href="/" name="shifter" />
      <SearchForm
        onChange={() => undefined}
        onSubmit={(e) => e.preventDefault()}
      />
      <Nav>
        <NavLinkItem active to="#">
          Sites
        </NavLinkItem>
        <NavLinkItem to="#">Teams</NavLinkItem>
        <NavLinkItem to="#">Guides</NavLinkItem>
        <NavbarDropdown
          avatar={{
            size: 32,
            email: 'test@example.com',
            rounded: true,
          }}
        >
          <NavbarDropdownItem href="#">
            Account
            <FaUser />
          </NavbarDropdownItem>
          <NavbarDropdownItem href="#">
            Log out <FaSignOutAlt />
          </NavbarDropdownItem>
        </NavbarDropdown>
      </Nav>
    </Navbar>
  );
};

const meta: Meta = {
  title: 'Mockup/Layouts/TopNavigation',
  component: TopNavigation,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <TopNavigation {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
