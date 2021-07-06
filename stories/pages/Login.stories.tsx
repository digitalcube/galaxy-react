import React, { FC, useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Footer,
  ImageLoginInformation,
  ImageShifterLogo,
  Checkbox,
  AuthFormHeader,
  FormField,
  FeaturePromotionBlock,
  Layouts,
  Button,
  LoginFormLayout,
  FormAlert,
} from '../../src';
import { FaLock, FaUser } from 'react-icons/fa';

type MockLoginPageProps = {
  status: '' | 'failure' | 'inprogress';
};
const MockLoginPage: FC<MockLoginPageProps> = ({ status }) => {
  const [currentStatus, setCurrentStatus] = useState(status);
  useEffect(() => {
    setCurrentStatus(status);
  }, [status, setCurrentStatus]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);
  useEffect(() => {
    setCanSubmit(!!username && !!password);
  }, [setCanSubmit, username, password]);
  return (
    <Layouts variant="login" footer={<Footer serviceName="Shifter" />}>
      <LoginFormLayout status={status}>
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              [`Username: ${username}`, `Password: ${password}`].join('\n')
            );
          }}
        >
          <AuthFormHeader
            logo={<ImageShifterLogo width="36" height="46" alt="Shifter" />}
            title="Log In"
            link="/signup"
            linkText="sign up"
            variant="login"
          />
          <FormAlert
            errorMessage={
              currentStatus === 'failure'
                ? 'We found some errors with your login info. Please correct these issues to continue'
                : undefined
            }
          />
          <FormField
            id="username"
            label="Username or email"
            icon={<FaUser className="d-block" />}
            onChange={({ target: { value } }) => setUsername(value)}
            type="text"
            value={username}
            errorMessage={
              currentStatus === 'failure'
                ? 'We don’t recognize that email'
                : undefined
            }
          />
          <FormField
            id="password"
            label="Password"
            icon={<FaLock className="d-block" />}
            onChange={({ target: { value } }) => setPassword(value)}
            type="password"
            value={password}
            errorMessage={
              currentStatus === 'failure'
                ? 'We don’t recognize that password'
                : undefined
            }
          />
          <Checkbox
            label="Remember me"
            id="remember"
            value={false}
            onChange={() => undefined}
          />
          <Button type="submit" block disabled={!canSubmit}>
            Log In
          </Button>
          <div className="forget-password">
            <a href="#" target="_blank">
              Forgot Password?
            </a>
          </div>
        </form>
      </LoginFormLayout>
      <FeaturePromotionBlock
        image={<ImageLoginInformation width="153" height="141" alt="" />}
        title="Faster Build Times"
        description="Customize Shifter settings for up to 70% faster build times."
        link="#"
        linkText="Learn about Shifter Media CDN"
      />
    </Layouts>
  );
};

const meta: Meta = {
  title: 'Mockup/Pages/Login',
  component: MockLoginPage,
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

const Template: Story<MockLoginPageProps> = (args) => (
  <MockLoginPage {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  status: '',
};

export const Inprogress = Template.bind({});
Inprogress.args = {
  status: 'inprogress',
};
export const Failure = Template.bind({});
Failure.args = {
  status: 'failure',
};
