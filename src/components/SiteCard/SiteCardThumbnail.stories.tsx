import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SiteCardThumbnail, SiteCardThumbnailProps } from './SiteCardThumbnail';

const meta: Meta = {
  title: 'Components/SiteCard/SiteCardThumbnail',
  component: SiteCardThumbnail,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SiteCardThumbnailProps> = (args) => {
  return <SiteCardThumbnail {...args} />;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  src: '/images/site-a.png',
  width: 167,
};

export const Screenshot = Template.bind({});
Screenshot.args = {
  src: 'getshifter.io',
};
