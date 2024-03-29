import React, { FC, useState, useEffect } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  AuthFormHeader,
  Button,
  FormAlert,
  Footer,
  FormField,
  ImageShifterLogo,
  Layouts,
  PasswordWithConfirmation,
  AuthFormLayout,
} from '../../../src';
import { FaEnvelope, FaUser } from 'react-icons/fa';

type MockSignUpPageProps = {
  status: '' | 'failure';
};
const MockSignUpPage: FC<MockSignUpPageProps> = ({ status }) => {
  const [currentStatus, setCurrentStatus] = useState(status);
  useEffect(() => {
    setCurrentStatus(status);
  }, [status, setCurrentStatus]);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);
  useEffect(() => {
    if (!username || !email || !password || !passwordConfirm) {
      setCanSubmit(false);
    } else if (password !== passwordConfirm) {
      setCanSubmit(false);
    } else {
      setCanSubmit(true);
    }
  }, [setCanSubmit, username, password, email, passwordConfirm]);
  return (
    <Layouts variant="signup" footer={<Footer serviceName="Shifter" />}>
      <AuthFormLayout variant="signup" status={currentStatus}>
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              [
                `Username: ${username}`,
                `Email: ${email}`,
                `Password: ${password}`,
              ].join('\n')
            );
          }}
        >
          <AuthFormHeader
            logo={<ImageShifterLogo width="36" height="46" />}
            title="Get Started"
            link="/"
            linkText="log in"
            variant="signup"
          />
          <FormAlert
            errorMessage={
              currentStatus === 'failure'
                ? 'We found some errors with your login info. Please correct these issues to continue'
                : undefined
            }
          />
          <FormField
            id="email"
            label="Email"
            icon={<FaEnvelope className="d-block" />}
            onChange={({ target: { value } }) => setEmail(value)}
            type="email"
            value={email}
            errorMessage={
              currentStatus === 'failure'
                ? 'We don’t recognize that email'
                : undefined
            }
          />
          <FormField
            id="username"
            label="Choose a username"
            icon={<FaUser className="d-block" />}
            type="text"
            onChange={({ target: { value } }) => setUsername(value)}
            value={username}
            errorMessage={
              currentStatus === 'failure'
                ? 'We don’t recognize that email'
                : undefined
            }
          />
          <PasswordWithConfirmation
            id="password"
            label="Choose a Password"
            onChange={({ target: { value } }) => setPassword(value)}
            onChangeConfirm={({ target: { value } }) =>
              setPasswordConfirm(value)
            }
            placeholder="Password"
            confirmPlaceholder="Re enter Password"
            value={password}
            confirmValue={passwordConfirm}
            errorMessage={
              currentStatus === 'failure'
                ? 'We found some errors with your login info. Please correct these issues to continue'
                : undefined
            }
            confirmErrorMessage={
              currentStatus === 'failure'
                ? 'We found some errors with your login info. Please correct these issues to continue'
                : undefined
            }
          />
          <Button
            type="submit"
            block
            className="mt-4"
            fontWeight="bold"
            disabled={!canSubmit}
          >
            Create Account
          </Button>
        </form>
      </AuthFormLayout>
    </Layouts>
  );
};

const meta: Meta = {
  title: 'Mockup/Pages/Public/SignUp',
  component: MockSignUpPage,
  argTypes: {
    status: {
      options: ['default', 'failure', 'inprogress', 'success'],
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

const Template: Story<MockSignUpPageProps> = (args) => (
  <MockSignUpPage {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  status: '',
};

export const Failure = Template.bind({});
Failure.args = {
  status: 'failure',
};
