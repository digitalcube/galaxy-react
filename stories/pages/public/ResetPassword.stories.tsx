import React, { FC, useState, useEffect } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  AuthFormHeader,
  Button,
  FormAlert,
  Footer,
  ImageShifterLogo,
  Layouts,
  PasswordWithConfirmation,
  AuthFormLayout,
} from '../../../src';

type MockResetPasswordPageProps = {
  status: '' | 'failure' | 'success';
};
const MockResetPasswordPage: FC<MockResetPasswordPageProps> = ({ status }) => {
  const [currentStatus, setCurrentStatus] = useState(status);
  useEffect(() => {
    setCurrentStatus(status);
  }, [status, setCurrentStatus]);

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);
  useEffect(() => {
    if (!password || !passwordConfirm) {
      setCanSubmit(false);
    } else if (password !== passwordConfirm) {
      setCanSubmit(false);
    } else {
      setCanSubmit(true);
    }
  }, [setCanSubmit, password, passwordConfirm]);
  return (
    <Layouts variant="signup" footer={<Footer serviceName="Shifter" />}>
      <AuthFormLayout
        variant="signup"
        status={currentStatus}
        success={{
          title: 'Password has been successfully reset',
          message: <Button block>Go to Login</Button>,
        }}
      >
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            alert([`Password: ${password}`].join('\n'));
          }}
        >
          <AuthFormHeader
            logo={<ImageShifterLogo width="36" height="46" />}
            title="Password Reset"
            variant="signup"
          />
          <FormAlert
            errorMessage={
              currentStatus === 'failure'
                ? 'We found some errors with your login info. Please correct these issues to continue'
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
            Reset Password
          </Button>
        </form>
      </AuthFormLayout>
    </Layouts>
  );
};

const meta: Meta = {
  title: 'Mockup/Pages/Public/ResetPassword',
  component: MockResetPasswordPage,
  argTypes: {
    status: {
      options: ['default', 'failure'],
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

const Template: Story<MockResetPasswordPageProps> = (args) => (
  <MockResetPasswordPage {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  status: '',
};

export const Succeeded = Template.bind({});
Succeeded.args = {
  status: 'success',
};

export const Failure = Template.bind({});
Failure.args = {
  status: 'failure',
};
