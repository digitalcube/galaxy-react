import React, { FC } from 'react';
import { FaPlay, FaStop } from 'react-icons/fa';
import { Meta, Story } from '@storybook/react';
import {
  SiteCardDropdownMenu,
  SiteCardDropdownItem,
} from '../../../src/components/SiteCard';

type MockSiteCardProps = {
  right: boolean;
};

const MockSiteCard: FC<MockSiteCardProps> = (args) => {
  return (
    <div className="sites-list">
      <section className="d-flex flex-column site-list-body" {...args}>
        <SiteCardDropdownMenu right>
          <SiteCardDropdownItem icon={<FaPlay className="d-block" />}>
            Start WordPress
          </SiteCardDropdownItem>
          <SiteCardDropdownItem icon={<FaStop className="d-block" />}>
            Restart WordPress
          </SiteCardDropdownItem>
        </SiteCardDropdownMenu>
      </section>
    </div>
  );
};

const meta: Meta = {
  title: 'Components/SiteCard/SiteCardDropdownMenu',
  component: MockSiteCard,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<MockSiteCardProps> = (args) => <MockSiteCard {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  right: true,
};
