import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PasswordWithConfirmation, PasswordWithConfirmationProps } from './PasswordWithConfirmation';

const meta: Meta = {
  title: 'Components/Form/PasswordWithConfirmation',
  component: PasswordWithConfirmation,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<PasswordWithConfirmationProps> = (args) => (
  <>
    <PasswordWithConfirmation {...args} />
  </>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
    label: 'Choose a Password',
    id: 'password',
    value: '',
    confirmValue: '',
    onChange: () => undefined,
    onChangeConfirm: () => undefined,
    placeholder: 'Password',
    confirmPlaceholder: 'Re enter Password'
};
