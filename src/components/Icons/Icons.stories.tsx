import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  IconBilling,
  IconClose,
  IconDomainAdded,
  IconNotification,
  IconProfile,
  IconSecurity,
  IconVerification,
} from './index';
import { IconProps } from './interfaces';
type IconStory = Story<IconProps>;

const meta: Meta = {
  title: 'Components/Icons',
  component: IconClose,
};

export default meta;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
const DefaultTemplate: IconStory = (props) => (
  <>
    <IconBilling {...props} />
    <IconClose {...props} />
    <IconDomainAdded {...props} />
    <IconNotification {...props} />
    <IconProfile {...props} />
    <IconSecurity {...props} />
    <IconVerification {...props} />
  </>
);
export const Default = DefaultTemplate.bind({});

Default.args = {
  width: '25px',
  style: {
    marginRight: '10px',
  },
};
