import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AdminLayoutSidebar, AdminLayoutSidebarProps } from './AdminLayoutSidebar';

const meta: Meta = {
  title: 'Components/AdminLayout/Sidebar/AdminLayoutSidebar',
  component: AdminLayoutSidebar,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<AdminLayoutSidebarProps> = (args) => (
  <div className="shifter-dashboard-main">
    <AdminLayoutSidebar {...args} />
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
    children: 'hello world',
    header: 'Header',
    backTo: {
        to: '#',
        label: 'back to'
    }
};
