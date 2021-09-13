import React, { FC } from 'react';
import { Meta, Story } from '@storybook/react';
import { SiteCardData } from '../../../src/components/SiteCard';
import { Link } from '../../routings/Link/Link';

type MockSiteCardProps = {
  name: string;
  domain: string;
  teamName: string;
  href?: string;
};

const MockSiteCard: FC<MockSiteCardProps> = ({
  name,
  domain,
  teamName,
  href,
}) => {
  return (
    <div className="sites-list">
      <section className="d-flex flex-column site-list-body">
        <SiteCardData name={name} href={href}>
          <span className="d-inline-block align-middle site-url">
            <Link href={`${domain}`}>{domain}</Link>
          </span>
          <span className="d-inline-block align-middle text-truncate site-description">
            <span className="mr-2 d-inline-block rounded-circle font-weight-bold text-center site-initial">
              D
            </span>
            <p className="mb-0 d-inline site-description">{teamName}</p>
          </span>
        </SiteCardData>
      </section>
    </div>
  );
};

const meta: Meta = {
  title: 'Components/SiteCard/SiteCardData',
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
  name: 'Site',
  domain: 'getshifter.io',
  teamName: 'Team name',
  href: '#',
};
