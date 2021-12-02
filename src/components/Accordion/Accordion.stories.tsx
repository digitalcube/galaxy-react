import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Accordion, AccordionProps } from './Accordion';

const meta: Meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<AccordionProps> = (args) => (
  <Accordion {...args}>ここに中身が入ります。</Accordion>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  defaultOpen: false,
  title: 'ここにタイトルが入ります',
};
