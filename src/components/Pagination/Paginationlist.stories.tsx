import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Paginationlist, PaginationlistProps } from './Paginationlist';

const meta: Meta = {
  title: 'Components/Paginationlist',
  component: Paginationlist,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<PaginationlistProps> = (args) => <Paginationlist {...args}></Paginationlist>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
	num: 5,
	handleClick: {}
};
