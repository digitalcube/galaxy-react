import React, { FC } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Button as RRButton,
  Alert as RRAlert,
  Badge as RRBadge,
} from 'reactstrap';
import { Button, Alert } from '../../src/components';

type MockProps = {
  disabled?: boolean;
};
const ReactstrapComponents: FC<MockProps> = ({ disabled = false }) => (
  <article>
    <h1>Native Reactstrap components</h1>
    <section className="mb-4">
      <h2>Buttons</h2>
      <div className="mb-2">
        <RRButton disabled={disabled} color="primary">
          primary
        </RRButton>{' '}
        <RRButton disabled={disabled} color="secondary">
          secondary
        </RRButton>{' '}
        <RRButton disabled={disabled} color="success">
          success
        </RRButton>{' '}
        <RRButton disabled={disabled} color="info">
          info
        </RRButton>{' '}
        <RRButton disabled={disabled} color="warning">
          warning
        </RRButton>{' '}
        <RRButton disabled={disabled} color="danger">
          danger
        </RRButton>{' '}
        <RRButton disabled={disabled} color="link">
          link
        </RRButton>{' '}
      </div>
      <div>
        <RRButton disabled={disabled} outline color="primary">
          primary
        </RRButton>{' '}
        <RRButton disabled={disabled} outline color="secondary">
          secondary
        </RRButton>{' '}
        <RRButton disabled={disabled} outline color="success">
          success
        </RRButton>{' '}
        <RRButton disabled={disabled} outline color="info">
          info
        </RRButton>{' '}
        <RRButton disabled={disabled} outline color="warning">
          warning
        </RRButton>{' '}
        <RRButton disabled={disabled} outline color="danger">
          danger
        </RRButton>
      </div>
    </section>
    <section>
      <h2>Alerts</h2>
      <RRAlert color="primary">This is a primary alert — check it out!</RRAlert>
      <RRAlert color="secondary">
        This is a secondary alert — check it out!
      </RRAlert>
      <RRAlert color="success">This is a success alert — check it out!</RRAlert>
      <RRAlert color="danger">This is a danger alert — check it out!</RRAlert>
      <RRAlert color="warning">This is a warning alert — check it out!</RRAlert>
      <RRAlert color="info">This is a info alert — check it out!</RRAlert>
      <RRAlert color="light">This is a light alert — check it out!</RRAlert>
      <RRAlert color="dark">This is a dark alert — check it out!</RRAlert>
    </section>
    <section>
      <h2>Badge</h2>
      <RRBadge color="primary">Primary</RRBadge>
      <RRBadge color="secondary">Secondary</RRBadge>
      <RRBadge color="success">Success</RRBadge>
      <RRBadge color="danger">Danger</RRBadge>
      <RRBadge color="warning">Warning</RRBadge>
      <RRBadge color="info">Info</RRBadge>
      <RRBadge color="light">Light</RRBadge>
      <RRBadge color="dark">Dark</RRBadge>
    </section>
    <section>
      <h2>Texts</h2>
      <p className="text-primary">Primary</p>
      <p className="text-secondary">Secondary</p>
      <p className="text-success">Success</p>
      <p className="text-danger">Danger</p>
      <p className="text-warning">Warning</p>
      <p className="text-info">Info</p>
      <p className="text-light">Light</p>
      <p className="text-dark">Dark</p>
    </section>
  </article>
);

const GalacyComponents: FC<MockProps> = ({ disabled = false }) => (
  <article>
    <h1>Galaxy components</h1>
    <section className="mb-4">
      <h2>Buttons</h2>
      <div className="mb-2">
        <Button disabled={disabled} color="primary">
          primary
        </Button>{' '}
        <Button disabled={disabled} color="secondary">
          secondary
        </Button>{' '}
        <Button disabled={disabled} color="success">
          success
        </Button>{' '}
        <Button disabled={disabled} color="info">
          info
        </Button>{' '}
        <Button disabled={disabled} color="warning">
          warning
        </Button>{' '}
        <Button disabled={disabled} color="danger">
          danger
        </Button>{' '}
        <Button disabled={disabled} color="link">
          link
        </Button>{' '}
      </div>
      <div>
        <Button disabled={disabled} outline bordered color="primary">
          primary
        </Button>{' '}
        <Button disabled={disabled} outline bordered color="secondary">
          secondary
        </Button>{' '}
        <Button disabled={disabled} outline bordered color="success">
          success
        </Button>{' '}
        <Button disabled={disabled} outline bordered color="info">
          info
        </Button>{' '}
        <Button disabled={disabled} outline bordered color="warning">
          warning
        </Button>{' '}
        <Button disabled={disabled} outline bordered color="danger">
          danger
        </Button>
      </div>
      <div>
        <Button disabled={disabled} outline color="primary">
          primary
        </Button>{' '}
        <Button disabled={disabled} outline color="secondary">
          secondary
        </Button>{' '}
        <Button disabled={disabled} outline color="success">
          success
        </Button>{' '}
        <Button disabled={disabled} outline color="info">
          info
        </Button>{' '}
        <Button disabled={disabled} outline color="warning">
          warning
        </Button>{' '}
        <Button disabled={disabled} outline color="danger">
          danger
        </Button>
      </div>
    </section>
    <section>
      <h2>Alerts</h2>
      <Alert type="success">This is a success alert — check it out!</Alert>
      <Alert type="danger">This is a danger alert — check it out!</Alert>
      <Alert type="warning">This is a warning alert — check it out!</Alert>
      <Alert type="info">This is a info alert — check it out!</Alert>
    </section>
  </article>
);

const meta: Meta = {
  title: 'Mockup/Common/Colors',
  component: ReactstrapComponents,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

const Template1: Story<MockProps> = (args) => (
  <ReactstrapComponents {...args} />
);
const Template2: Story<MockProps> = (args) => <GalacyComponents {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const NativeReactstrap = Template1.bind({});
export const Galaxy = Template2.bind({});
NativeReactstrap.args = {
  disabled: false,
};

Galaxy.args = {
  disabled: false,
};
