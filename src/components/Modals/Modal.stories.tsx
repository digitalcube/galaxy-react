import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps } from './Modal';

const meta: Meta = {
  title: 'Components/Modals/Modal',
  component: Modal,
  argTypes: {
    size: {
      options: ['normal', 'small'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ModalProps> = (args) => (
  <Modal onSubmit={(e) => alert(e)} {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  id: 'modal',
  className: '',
  open: true,
  size: 'normal',
  rounded: true,
  title: 'Modal title',
  dismiss: true,
  children: 'Content',
};
