import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TopNavigation, TopNavigationProps } from './TopNavigation'

const meta: Meta = {
  title: 'Layouts/TopNavigation',
  component: TopNavigation,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TopNavigationProps> = args => <TopNavigation {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
    serviceName: 'Shifter',
    today: new Date('2010-01-01')
}