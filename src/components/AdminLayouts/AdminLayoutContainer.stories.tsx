import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AdminLayoutContainer, AdminLayoutContainerProps } from './AdminLayoutContainer';
import { AdminLayoutMain } from './AdminLayoutMain';

const meta: Meta = {
  title: 'Components/AdminLayout/AdminLayoutContainer',
  component: AdminLayoutContainer,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<AdminLayoutContainerProps> = (args) => {
  return (
      <AdminLayoutContainer {...args}>
          <AdminLayoutMain>
            <h1>Hello</h1>
          </AdminLayoutMain>
    </AdminLayoutContainer>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  column: false,
  className: 'sites-list',
};
