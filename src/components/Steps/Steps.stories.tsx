import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Steps, StepsProps } from './Steps';

const meta: Meta = {
  title: 'Components/Steps',
  component: Steps,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<
  Omit<StepsProps, 'steps'> & {
    stepLength: number;
  }
> = ({ stepLength, ...args }) => {
  const steps = [...Array(stepLength)].map((_d, i) => ({
    name: `Step name ${i + 1}`,
    description: 'Step Descriptions',
  }));
  return <Steps {...args} steps={steps} />;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  className: '',
  stepLength: 3,
  currentStep: 1,
  title: 'Title',
  footer: 'Footer',
};
