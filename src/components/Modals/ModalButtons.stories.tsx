import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ModalButtons, ModalButtonsProps } from './ModalButtons';
import { Modal } from './Modal';

const meta: Meta = {
  title: 'Components/Modals/ModalButtons',
  component: ModalButtons,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ModalButtonsProps> = (args) => (
  <Modal open={true} dismiss={true}>
    <ModalButtons {...args} />
  </Modal>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  cancelButtonLabel: 'Cancel',
  showCancel: true,
  className: '',
};
