import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Copyright, CopyrightProps } from './Copyright'

const meta: Meta = {
  title: 'Components/Copyright',
  component: Copyright,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<CopyrightProps> = args => <Copyright {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
    serviceName: 'Shifter',
    today: new Date('2010-01-01')
}