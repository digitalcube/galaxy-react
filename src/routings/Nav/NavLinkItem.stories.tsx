import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NavLinkItem, NavLinkItemProps } from './NavLinkItem';
import { LinkTagProvider } from '../../providers';
import { Link, BrowserRouter } from 'react-router-dom';

const meta: Meta = {
  title: 'Routings/NavLinkItem',
  component: NavLinkItem,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<NavLinkItemProps> = (args) => (
  <BrowserRouter>
    <LinkTagProvider linkType={Link}>
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav ml-auto">
          <NavLinkItem {...args} />
        </ul>
      </nav>
    </LinkTagProvider>
  </BrowserRouter>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  children: 'Sites',
  active: false,
  to: '#',
};
