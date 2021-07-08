import React, { FC, useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { AuthFormLayout, AuthFormLayoutProps } from './Layout';
import { AuthFormHeader } from '../../AuthForm';
import { Button } from '../../Buttons';
import { ImageShifterLogo } from '../../Images';

type AuthFormLayoutExampleProps = {
  status: '' | 'failure' | 'inprogress';
} & Pick<AuthFormLayoutProps, 'inprogress' | 'success'>;
const AuthFormLayoutExample: FC<AuthFormLayoutExampleProps> = ({
  status,
  inprogress,
  success,
}) => {
  const [currentStatus, setCurrentStatus] = useState(status);
  useEffect(() => {
    setCurrentStatus(status);
  }, [status, setCurrentStatus]);
  return (
    <AuthFormLayout
      variant="login"
      status={currentStatus}
      inprogress={inprogress}
      success={success}
    >
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <AuthFormHeader
          logo={<ImageShifterLogo width="36" height="46" alt="Shifter" />}
          title="Log In"
          variant="login"
        />
        <Button type="submit" className="mt-4" fontWeight="bold" block disabled>
          Log In
        </Button>
      </form>
    </AuthFormLayout>
  );
};

const meta: Meta = {
  title: 'Components/AuthForm/Layouts',
  component: AuthFormLayoutExample,
  argTypes: {
    status: {
      options: ['default', 'inprogress', 'failure', 'success'],
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

const Template: Story<AuthFormLayoutExampleProps> = (args) => (
  <AuthFormLayoutExample {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  status: '',
  inprogress: {
    title: '',
    message: '',
  },
  success: {
    title: '',
    message: '',
  },
};
