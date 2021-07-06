import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  FeaturedCardColumn,
  FeaturedCardColumnProps,
} from './FeaturedCardColumn';
import { FeaturedCard } from './FeaturedCard';

const meta: Meta = {
  title: 'Components/FeaturedCard/FeaturedCardColumn',
  component: FeaturedCardColumn,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<
  FeaturedCardColumnProps & {
    items: number;
  }
> = ({ column = 3, items = 3 }) => {
  const children = Array.from({ length: items }, (_, i) => i + 1);
  return (
    <FeaturedCardColumn column={column}>
      {children.map((v, i) => (
        <FeaturedCard
          key={`${v}-${i}`}
          title="Read the docs"
          href="https://getshifter.io"
          linkText="Explore Shifter docs"
        >
          content
        </FeaturedCard>
      ))}
    </FeaturedCardColumn>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  column: 3,
  items: 3,
};
