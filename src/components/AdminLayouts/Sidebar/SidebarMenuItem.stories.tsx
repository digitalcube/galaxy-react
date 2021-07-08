import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SidebarMenuItem, SidebarMenuItemProps } from './SidebarMenuItem';
import { FaCog } from 'react-icons/fa';

const meta: Meta = {
  title: 'Components/AdminLayout/Sidebar/SidebarMenuItem',
  component: SidebarMenuItem,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SidebarMenuItemProps> = (args) => (
    <div className="shifter-dashboard-columns ">
    <nav className={`sidebar-nav`}>
      <ul>
    <SidebarMenuItem {...args} />
  </ul></nav></div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
    to: '#',
    active: true,
    deactive: false,
    children: 'Menu',
    icon: <FaCog className="d-block" />,
    shouldShowSubmenus: false,
    submenus: [{
        to: "#",
        label: 'Sub item'
    }]
};
