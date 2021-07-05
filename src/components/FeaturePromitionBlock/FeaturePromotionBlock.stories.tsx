import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  FeaturePromotionBlock,
  FeaturePromotionBlockProps,
} from './FeaturePromotionBlock';
import { ImageShifterLogo } from '../Images';

const meta: Meta = {
  title: 'Components/FeaturePromotionBlock',
  component: FeaturePromotionBlock,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FeaturePromotionBlockProps> = (args) => (
  <>
    <FeaturePromotionBlock {...args} />
  </>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  image: <ImageShifterLogo width="36" height="46" alt="Shifter" />,
  title: 'Log In',
  link: '/signup',
  linkText: 'sign up',
  description: 'Description here',
};
