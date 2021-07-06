import React, { FC, useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Footer,
  ImageLoginInformation,
  ImageShifterLogo,
  AuthFormHeader,
  FeaturePromotionBlock,
  Layouts,
  Button,
  AuthFormLayout,
  FormAlert,
  DigitCodeInput,
} from '../../src';

type MockLoginMFAPageProps = {
  status: '' | 'failure' | 'inprogress';
  mfaType: 'sms' | 'totp';
};
const MockLoginMFAPage: FC<MockLoginMFAPageProps> = ({ status, mfaType }) => {
  const [currentStatus, setCurrentStatus] = useState(status);
  useEffect(() => {
    setCurrentStatus(status);
  }, [status, setCurrentStatus]);

  const [currentMfaStatus, setCurrentMFAStatus] = useState(mfaType);
  useEffect(() => {
    setCurrentMFAStatus(mfaType);
  }, [mfaType, setCurrentMFAStatus]);

  const [canSubmit, setCanSubmit] = useState(false);
  const [codes, setCodes] = useState<string[]>([...Array(6)].map(() => ''));
  useEffect(() => {
    if (codes.every((num) => num !== '')) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [codes, setCanSubmit]);

  return (
    <Layouts variant="login" footer={<Footer serviceName="Shifter" />}>
      <AuthFormLayout
        status={status}
        inprogress={{
          title: 'Logging you in...',
        }}
      >
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            alert([`Code: ${codes.join('')}`].join('\n'));
          }}
        >
          <AuthFormHeader
            logo={<ImageShifterLogo width="36" height="46" alt="Shifter" />}
            title="Authentication"
            variant="login"
          >
            <p className="text-center font-weight-bold">
              {currentMfaStatus === 'totp' ? (
                'Enter the 6 digit code from your authenticator app'
              ) : (
                <>
                  Enter the verifcation code we sent to <b>***-***-1234</b>
                </>
              )}
            </p>
          </AuthFormHeader>
          <FormAlert
            errorMessage={
              currentStatus === 'failure'
                ? 'We found some errors with your login info. Please correct these issues to continue'
                : undefined
            }
          />
          <DigitCodeInput
            loading={false}
            onChange={setCodes}
            values={codes}
            errorMessage={
              currentStatus === 'failure' ? 'code is incorrect' : undefined
            }
          />
          <Button type="submit" block disabled={!canSubmit}>
            Log In
          </Button>
          <div className="mt-4 py-3 font-weight-bold text-center back2login">
            <a href="#" target="_blank">
              Back to login
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
  title: 'Mockup/Pages/LoginMFA',
  component: MockLoginMFAPage,
  argTypes: {
    mfaType: {
      options: ['sms', 'totp'],
      control: { type: 'radio' },
    },
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

const Template: Story<MockLoginMFAPageProps> = (args) => (
  <MockLoginMFAPage {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  status: '',
  mfaType: 'totp',
};

export const Inprogress = Template.bind({});
Inprogress.args = {
  status: 'inprogress',
};
export const Failure = Template.bind({});
Failure.args = {
  status: 'failure',
};
