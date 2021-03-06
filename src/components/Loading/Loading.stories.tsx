import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Loading, LoadingProps } from './Loading';
const meta: Meta = {
  title: 'Components/Loading/Loading',
  component: Loading,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<LoadingProps> = (args) => {
  return (
    <>
      <Loading {...args} />
    </>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  show: true,
};
