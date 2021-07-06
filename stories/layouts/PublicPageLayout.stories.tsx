import React, { FC } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Footer,
  ImageShifterLogo,
  AuthFormHeader,
  FormField,
  PasswordWithConfirmation,
  Layouts,
  Button,
} from '../../src';
import { FaEnvelope, FaUser } from 'react-icons/fa';

const MockOneColumns: FC = () => (
  <Layouts variant="signup" footer={<Footer serviceName="Shifter" />}>
    <form className="signup px-4 py-4 rounded">
      <AuthFormHeader
        logo={<ImageShifterLogo width="36" height="46" alt="Shifter" />}
        title="Get Started"
        link="/"
        linkText="log in"
        variant="signup"
      />
      <FormField
        id="email"
        label="Email"
        icon={<FaEnvelope className="d-block" />}
        onChange={() => undefined}
        type="text"
        value=""
      />
      <FormField
        id="username"
        label="Username"
        icon={<FaUser className="d-block" />}
        onChange={() => undefined}
        type="text"
        value=""
      />
      <PasswordWithConfirmation
        label="Choose a Password"
        id="password"
        value=""
        confirmValue=""
        placeholder="Password"
        confirmPlaceholder="Re enter Password"
        onChange={() => undefined}
        onChangeConfirm={() => undefined}
      />
      <Button type="submit" block disabled>
        Create Account
      </Button>
    </form>
  </Layouts>
);

const meta: Meta = {
  title: 'Mockup/Layouts/PublicPageLayout',
  component: MockOneColumns,
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

const Template2: Story = (args) => <MockOneColumns {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const OneColumns = Template2.bind({});
