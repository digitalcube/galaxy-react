import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ContentCard, ContentCardProps } from './ContentCard';

const meta: Meta = {
  title: 'Components/Contents/ContentCard',
  component: ContentCard,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ContentCardProps> = (args) => {
  return (
    <ContentCard {...args} />
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  categories: [{
    name: 'domain',
    link: 'https://example.com'
  }, {
    name: 'test'
  }],
  href: '#',
  linkText:"Read this article",
  title:"Custom domains on Shifter",
  children: `
  This article contains step by step guide for adding and
  assigning your custom domain to your Shifter site.
  `
};
