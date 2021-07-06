import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FeaturedCard, FeaturedCardProps } from './FeaturedCard';
import { FeaturedCardColumn } from './FeaturedCardColumn';

const meta: Meta = {
  title: 'Components/FeaturedCard/FeaturedCard',
  component: FeaturedCard,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FeaturedCardProps> = (args) => {
  return (
    <FeaturedCardColumn column={1}>
      <FeaturedCard {...args} />
    </FeaturedCardColumn>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  href: 'https://getshifter.io',
  linkText: 'Link',
  excerpt: 'excerpt',
  title: 'Title',
};
