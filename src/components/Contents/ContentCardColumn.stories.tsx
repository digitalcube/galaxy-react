import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  ContentCardColumn,
  ContentCardColumnProps,
} from './ContentCardColumn';
import { ContentCard } from './ContentCard';

const meta: Meta = {
  title: 'Components/Contents/ContentCardColumn',
  component: ContentCardColumn,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<
  ContentCardColumnProps & {
    items: number;
  }
> = ({ items = 3, column, title }) => {
  const children = Array.from({ length: items }, (_, i) => i + 1);
  return (
    <ContentCardColumn column={column} title={title}>
      {children.map((v, i) => (
        <ContentCard
          key={`${v}-${i}`}
          title="Read the docs"
          href="https://getshifter.io"
          linkText="Explore Shifter docs"
        >
          content
        </ContentCard>
      ))}
    </ContentCardColumn>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
    title: 'Popular articles',
  column: 3,
  items: 3,
};
