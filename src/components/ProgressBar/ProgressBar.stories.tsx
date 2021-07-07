import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ProgressBar, ProgressBarProps } from './ProgressBar';

const meta: Meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ProgressBarProps> = (args) => {
  return <ProgressBar {...args} />;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  now: 100,
  min: 1,
  max: 100,
  className: '',
};
