import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ContentHeader, ContentHeaderProps } from './ContentHeader';

const meta: Meta = {
  title: 'Components/Contents/ContentHeader',
  component: ContentHeader,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ContentHeaderProps> = (args) => {
  return <ContentHeader {...args} />;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  title: 'Guides',
  src: '/images/guide-banner.png',
  width: '1134',
  height: '180',
  alt: 'Introducing PHP Error Logs',
  href: '#',
};

export const NoImage = Template.bind({});
NoImage.args = {
  title: 'Guides',
};
