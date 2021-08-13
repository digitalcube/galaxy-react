import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ReadOnlyFormField, ReadOnlyFormFieldProps } from './ReadonlyField';
import { FaLock, FaUser } from 'react-icons/fa';

const meta: Meta = {
  title: 'Components/Forms/ReadOnlyFormField',
  component: ReadOnlyFormField,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    iconExample: {
      options: ['none', 'user', 'lock'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

const Template: Story<
  Omit<ReadOnlyFormFieldProps, 'icon'> & {
    iconExample: 'none' | 'user' | 'lock';
  }
> = (args) => {
  const icon = (() => {
    switch (args.iconExample) {
      case 'user':
        return <FaUser className="d-block" />;
      case 'lock':
        return <FaLock />;
      default:
        return null;
    }
  })();
  return <ReadOnlyFormField {...args} icon={icon} />;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  iconExample: 'user',
  value: 'readonlyData',
  handleCopy: (data) => window.alert(data),
  smaller: false,
  className: '',
};
