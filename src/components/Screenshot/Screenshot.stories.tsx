import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Screenshot, ScreenshotProps } from './Screenshot';

const meta: Meta = {
  title: 'Components/Screenshot',
  component: Screenshot,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ScreenshotProps> = (args) => {
  return <Screenshot {...args} />;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  url: 'getshifter.io',
};
