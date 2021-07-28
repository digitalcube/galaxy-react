import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CopyClipboard, CopyClipboardProps } from './CopyClipboard';

const meta: Meta = {
  title: 'Components/CopyClipboard',
  component: CopyClipboard,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<CopyClipboardProps> = (args) => (
  <CopyClipboard
    {...args}
    handleCopy={(value) => {
      alert(`Will copy: ${value}`);
    }}
  />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  showIcon: true,
  className: '',
  value: 'Copy text',
  classNameOverwrite: false,
};
