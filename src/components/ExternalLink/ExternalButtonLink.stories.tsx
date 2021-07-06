import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  ExternalButtonLink,
  ExternalButtonLinkProps,
} from './ExternalButtonLink';

const meta: Meta = {
  title: 'Components/ExternalLink/ExternalButtonLink',
  component: ExternalButtonLink,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ExternalButtonLinkProps> = (args) => {
  return <ExternalButtonLink {...args} />;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  href: 'https://getshifter.io',
  children: 'Link',
};
