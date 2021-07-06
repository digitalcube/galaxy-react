import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DigitCodeInput,
  DigitCodeInputProps,
  UncontrolledDigitCodeInput,
  UncontrolledDigitCodeInputProps,
} from './DigitCodeInput';

const meta: Meta = {
  title: 'Components/Forms/DigitCodeInput',
  component: DigitCodeInput,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DigitCodeInputProps> = (args) => (
  <>
    <DigitCodeInput {...args} />
  </>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  loading: false,
  values: [...Array(6)].map(() => ''),
};

const UncontrolledTemplate: Story<UncontrolledDigitCodeInputProps> = (args) => (
  <UncontrolledDigitCodeInput {...args} />
);
export const Uncontrolled = UncontrolledTemplate.bind({});
Uncontrolled.args = {
  loading: false,
  length: 6,
  errorMessage: 'code is incorrect',
  onComplete: (code) => alert('Code is ' + code),
};
