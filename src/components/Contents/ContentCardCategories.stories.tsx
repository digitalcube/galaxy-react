import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ContentCardCategories, ContentCardCategoriesProps } from './ContentCardCategories';

const meta: Meta = {
  title: 'Components/Contents/ContentCardCategories',
  component: ContentCardCategories,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ContentCardCategoriesProps> = (args) => {
  return (
    <ContentCardCategories {...args} />
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
  }]
};
