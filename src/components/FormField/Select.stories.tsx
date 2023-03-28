import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FormSelect, FormSelectProps } from './Select';
import { FaUser } from 'react-icons/fa';

const meta: Meta = {
  title: 'Components/Forms/FormSelect',
  component: FormSelect,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FormSelectProps> = (args) => (
  <>
    <FormSelect {...args} />
  </>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  icon: <FaUser className="d-block" />,
  id: 'password',
	label: 'Password',
	defaultValue:'en',
  onChange: () => undefined,
  errorMessage: '',
  options: [
    {
      children: 'Japanese',
      value: 'jp',
    },
    {
      children: 'English',
			value: 'en',
    },
  ],
};
