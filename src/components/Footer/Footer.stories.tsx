import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Footer, FooterProps } from './Footer';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from 'reactstrap';

const meta: Meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  serviceName: 'Shifter',
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const WithLinks = Template.bind({});
WithLinks.args = {
  serviceName: 'Shifter',
  links: [
    {
      id: 'item1',
      href: '#',
      label: 'Privacy Policy',
    },
    {
      id: 'item2',
      href: '#',
      label: 'Terms of Service',
    },
  ],
};

export const WithDropdownMenu = Template.bind({});
WithDropdownMenu.args = {
  serviceName: 'Shifter',
  links: [
    {
      id: 'item1',
      href: '#',
      label: 'Privacy Policy',
    },
    {
      id: 'item2',
      href: '#',
      label: 'Terms of Service,',
    },
  ],
  children: (
    <UncontrolledButtonDropdown>
      <DropdownToggle caret outline size="sm" color="primary">
        Language
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>japanese</DropdownItem>
        <DropdownItem>English</DropdownItem>
      </DropdownMenu>
    </UncontrolledButtonDropdown>
  ),
};
