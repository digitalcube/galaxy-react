import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AuthFormHeader, AuthFormHeaderProps } from './AuthFormHeader';
import { ImageShifterLogo } from '../../Images';

const meta: Meta = {
  title: 'Components/AuthForm/AuthFormHeader',
  component: AuthFormHeader,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<AuthFormHeaderProps> = (args) => (
  <>
    <AuthFormHeader {...args} />
  </>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  logo: <ImageShifterLogo width="36" height="46" alt="Shifter" />,
  title: 'Log In',
  link: '/signup',
  linkText: 'sign up',
  variant: 'login',
};
