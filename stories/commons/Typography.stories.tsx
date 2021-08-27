import React, { FC } from 'react';
import { Meta, Story } from '@storybook/react';

const MockTypography: FC = () => (
  <div>
    <h1>Header h1</h1>
    <h2>Header h2</h2>
    <h3>Header h3</h3>
    <h4>Header h4</h4>
    <h5>Header h5</h5>
    <h6>Header h6</h6>

    <p>
      <a href="#">Link</a>
    </p>
    <p>Paragraph</p>
  </div>
);

const meta: Meta = {
  title: 'Mockup/Common/Typography',
  component: MockTypography,
  argTypes: {
    status: {
      options: ['default', 'inprogress', 'failure'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

const Template2: Story = (args) => <MockTypography {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const OneColumns = Template2.bind({});
