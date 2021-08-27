import React, { FC } from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Alert, Badge } from 'reactstrap';

const MockColors: FC = () => (
  <article>
    <h1>Native Reactstrap components</h1>
    <section className="mb-4">
      <h2>Buttons</h2>
      <div className="mb-2">
        <Button color="primary">primary</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}
        <Button color="success">success</Button>{' '}
        <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button>{' '}
        <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button>{' '}
      </div>
      <div>
        <Button outline color="primary">
          primary
        </Button>{' '}
        <Button outline color="secondary">
          secondary
        </Button>{' '}
        <Button outline color="success">
          success
        </Button>{' '}
        <Button outline color="info">
          info
        </Button>{' '}
        <Button outline color="warning">
          warning
        </Button>{' '}
        <Button outline color="danger">
          danger
        </Button>
      </div>
    </section>
    <section>
      <h2>Alerts</h2>
      <Alert color="primary">This is a primary alert — check it out!</Alert>
      <Alert color="secondary">This is a secondary alert — check it out!</Alert>
      <Alert color="success">This is a success alert — check it out!</Alert>
      <Alert color="danger">This is a danger alert — check it out!</Alert>
      <Alert color="warning">This is a warning alert — check it out!</Alert>
      <Alert color="info">This is a info alert — check it out!</Alert>
      <Alert color="light">This is a light alert — check it out!</Alert>
      <Alert color="dark">This is a dark alert — check it out!</Alert>
    </section>
    <section>
      <h2>Badge</h2>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="info">Info</Badge>
      <Badge color="light">Light</Badge>
      <Badge color="dark">Dark</Badge>
    </section>
  </article>
);

const meta: Meta = {
  title: 'Mockup/Common/Colors',
  component: MockColors,
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

const Template2: Story = (args) => <MockColors {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const NativeReactstrap = Template2.bind({});
