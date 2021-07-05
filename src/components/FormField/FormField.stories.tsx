import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FormField, FormFieldProps } from './FormField';
import { FaUser } from 'react-icons/fa';

const meta: Meta = {
  title: 'Components/Form/FormField',
  component: FormField,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FormFieldProps> = (args) => (
  <>
    <FormField {...args} />
  </>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
    icon: <FaUser className="d-block" />,
    id: 'password',
    label: 'Password',
    type: "password",
    onChange: () => undefined,
};
