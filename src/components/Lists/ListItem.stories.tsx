import React from 'react';
import { Meta, Story } from '@storybook/react';
import { List } from './List';
import { ListItem, ListItemProps } from './ListItem';

const meta: Meta = {
  title: 'Components/List/ListItem',
  component: ListItem,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ListItemProps> = (args) => (
  <List rounded>
    <ListItem {...args} />
  </List>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  className: 'px-3 py-4',
  children: 'children',
};
