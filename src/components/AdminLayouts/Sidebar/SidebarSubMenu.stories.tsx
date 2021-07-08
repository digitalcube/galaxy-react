import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SidebarSubMenu, SidebarSubMenuProps } from './SidebarSubMenu';
import { SidebarMenuItem } from './SidebarMenuItem';

const meta: Meta = {
  title: 'Components/AdminLayout/Sidebar/SidebarSubMenu',
  component: SidebarSubMenu,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SidebarSubMenuProps> = (args) => (
    <div className="shifter-dashboard-columns ">
    <nav className={`sidebar-nav`}>
      <ul>
    <SidebarMenuItem>
        test
        <SidebarSubMenu {...args} />
        </SidebarMenuItem>
  </ul></nav></div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
    className: '',
    items: [{
        to: '#',
        label: 'submenu'
    }]
};
