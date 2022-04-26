import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Pagination, PaginationProps } from './Pagination';
import { Paginationlist } from './Paginationlist';

const meta: Meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<PaginationProps> = (args) => {
	return <Pagination {...args}>
		<Paginationlist num={args.num} handleClick={{}}></Paginationlist>
		</Pagination>;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  num: 5,
};
