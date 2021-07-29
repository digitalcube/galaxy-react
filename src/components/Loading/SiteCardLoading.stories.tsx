import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SiteCardLoading, SiteCardLoadingProps } from './SiteCardLoading';
const meta: Meta = {
  title: 'Components/Loading/SiteCardLoading',
  component: SiteCardLoading,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SiteCardLoadingProps> = (args) => {
  return (
    <div className="sites-list">
      <section className="d-flex flex-column site-list-body">
        <SiteCardLoading {...args} />
      </section>
    </div>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  show: true,
};
