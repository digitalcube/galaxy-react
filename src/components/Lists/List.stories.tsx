import React from 'react';
import { Meta, Story } from '@storybook/react';
import { List, ListProps } from './List';
import { ListItem } from './ListItem';
import { Button } from '../Buttons';
import { Toggle } from '../Toggle/Toggle';

const meta: Meta = {
  title: 'Components/List/List',
  component: List,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ListProps> = (args) => (
  <List {...args}>
    <ListItem
      title="test"
      justifyContent="between"
      alignItem="center"
      rounded
      className="px-4 py-3"
      status={{
        isActive: true,
        fontWeight: 'bold',
      }}
      description="Lorem ipsum dolor sit amet consectetur adipisicing, elit. Blanditiis vero beatae sed maxime, commodi doloremque tempore aliquid dolor quidem iste nihil facilis eveniet temporibus, earum repellat odio numquam voluptatem quo!"
    >
      <Toggle
        checked={true}
        id="dummy-toggle"
        onChange={() => undefined}
        label="dummy"
      />
    </ListItem>
    <ListItem
      title="test"
      justifyContent="between"
      alignItem="center"
      rounded
      className="px-4 py-3"
    >
      <Button smaller>Button</Button>
    </ListItem>
    <ListItem
      title="test"
      justifyContent="between"
      alignItem="center"
      rounded
      className="px-4 py-3"
    ></ListItem>
    <ListItem
      title="test"
      justifyContent="between"
      alignItem="center"
      rounded
      className="px-4 py-3"
      status={{
        isActive: false,
        inactiveLabel: 'disabled',
        fontWeight: 'bold',
      }}
      description={
        <p>
          <b>Hello world</b>
        </p>
      }
    ></ListItem>
  </List>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  rounded: true,
};
