import React from 'react';
import { FaPlay, FaStop } from 'react-icons/fa';
import { Meta, Story } from '@storybook/react';
import {
  SiteCard,
  SiteCardData,
  SiteCardDropdownMenu,
  SiteCardThumbnail,
  SiteCardSettings,
  SiteCardDropdownItem,
} from '../../../src/components/SiteCard';
import { Link } from '../../routings/Link/Link';
import { ProgressBar } from '../ProgressBar/ProgressBar';

type MockSiteCardProps = {
  progress: number;
};

const mockProps = {
  image: {
    src: 'https://getshifter.io',
    alt: 'Site',
  },
  site: {
    id: 'site_xxx',
    name: 'Stable Value Investment Ltd.',
    domain: 'https://getshifter.io',
    team: {
      name: 'super log name toshow a line break super long names work',
      id: 'team_xxx',
    },
    container_state: 'running',
  },
  siteDetailURL: '/sites/xxx-xxx-xxx',
  wordpressAdminURL: undefined,
};

const meta: Meta = {
  title: 'Components/SiteCard/SiteCard',
  component: SiteCard,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<MockSiteCardProps> = ({ progress }) => {
  return (
    <div className="sites-list">
      <section className="d-flex flex-column site-list-body">
        <SiteCard>
          <ProgressBar now={progress} />
          <SiteCardThumbnail {...mockProps.image} />
          <SiteCardData name={mockProps.site.name}>
            <span className="d-inline-block align-middle site-url">
              <Link href={`${mockProps.site.domain}`}>
                {mockProps.site.domain}
              </Link>
            </span>
            <span className="d-inline-block align-middle text-truncate site-description">
              <span className="mr-2 d-inline-block rounded-circle font-weight-bold text-center site-initial">
                D
              </span>
              <p className="mb-0 d-inline site-description">
                {mockProps.site.team?.name}
              </p>
            </span>
          </SiteCardData>
          <SiteCardSettings
            wordpressAdminURL={mockProps.wordpressAdminURL}
            href={mockProps.siteDetailURL}
          >
            <SiteCardDropdownMenu right>
              <SiteCardDropdownItem icon={<FaPlay className="d-block" />}>
                Start WordPress
              </SiteCardDropdownItem>
              <SiteCardDropdownItem icon={<FaStop className="d-block" />}>
                Restart WordPress
              </SiteCardDropdownItem>
            </SiteCardDropdownMenu>
          </SiteCardSettings>
        </SiteCard>
      </section>
    </div>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  progress: 0,
};
