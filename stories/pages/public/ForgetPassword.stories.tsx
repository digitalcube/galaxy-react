import React, { FC, useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Footer,
  ImageLoginInformation,
  ImageShifterLogo,
  AuthFormHeader,
  FormField,
  FeaturePromotionBlock,
  Layouts,
  Button,
  AuthFormLayout,
  FormAlert,
} from '../../../src';
import { FaUser } from 'react-icons/fa';

type MockForgetPasswordPageProps = {
  status: '' | 'failure' | 'success';
};
const MockForgetPasswordPage: FC<MockForgetPasswordPageProps> = ({
  status,
}) => {
  const [currentStatus, setCurrentStatus] = useState(status);
  useEffect(() => {
    setCurrentStatus(status);
  }, [status, setCurrentStatus]);

  const [username, setUsername] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);
  useEffect(() => {
    setCanSubmit(!!username);
  }, [setCanSubmit, username]);
  return (
    <Layouts variant="login" footer={<Footer serviceName="Shifter" />}>
      <AuthFormLayout
        variant="login"
        status={status}
        success={{
          title: 'Password reset email sent',
          message: (
            <>
              <div className="m-3 pb-2 text-center enter-code">
                An email has been sent to
                <br />
                <b>u*******@email.com</b>
                <br />
                Follow the directions in the email to reset your password.{' '}
              </div>
              <button
                type="submit"
                className="mt-4 btn btn-colored btn-block font-weight-bold"
              >
                Back to Login
              </button>
            </>
          ),
        }}
      >
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            alert([`Username: ${username}`].join('\n'));
          }}
        >
          <AuthFormHeader
            logo={<ImageShifterLogo width="36" height="46" alt="Shifter" />}
            title="Password Reset"
            variant="login"
          >
            <div className="mt-4 pb-2 text-center enter-code">
              If there is an account associated width this email or username, a
              password reset link will be sent.
            </div>
          </AuthFormHeader>
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
          <Button
            type="submit"
            block
            className="mt-4"
            fontWeight="bold"
            disabled={!canSubmit}
          >
            Send Password Reset Lik
          </Button>
          <div className="mt-4 py-3 font-weight-bold text-center back2login">
            <a href="#" target="_blank">
              Cancel
            </a>
          </div>
        </form>
      </AuthFormLayout>
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
  title: 'Mockup/Pages/Public/ForgetPassword',
  component: MockForgetPasswordPage,
  argTypes: {
    status: {
      options: ['default', 'success', 'failure'],
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

const Template: Story<MockForgetPasswordPageProps> = (args) => (
  <MockForgetPasswordPage {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  status: '',
};

export const Success = Template.bind({});
Success.args = {
  status: 'success',
};
export const Failure = Template.bind({});
Failure.args = {
  status: 'failure',
};
