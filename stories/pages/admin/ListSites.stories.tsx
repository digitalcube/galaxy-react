import React, { FC } from 'react';
import { FaPlay, FaPlus, FaStop, FaAngleDown } from 'react-icons/fa';
import { Meta, Story } from '@storybook/react';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from 'reactstrap';
import { TopNavigation } from '../../layouts/TopNavigation.stories';
import {
  AdminLayoutContainer,
  Footer,
  Layouts,
  SiteCard,
  SiteCardData,
  SiteCardDropdownMenu,
  SiteCardThumbnail,
  SiteCardSettings,
  SiteCardDropdownItem,
  WordPressStatusBadge,
  Link,
  ProgressBar,
  StatusBadge,
} from '../../../src';

type MockListSitesProps = {};

const MockListSites: FC<MockListSitesProps> = ({}) => {
  return (
    <Layouts variant="admin" footer={<Footer serviceName="Shifter" />}>
      <TopNavigation />
      <AdminLayoutContainer className="sites-list">
        <header className="d-flex align-items-center justify-content-start sites-list-header">
          <h1 className="mb-0 font-weight-bold sites-list-title">Sites</h1>
          <div className="ml-3 list-sorter">
            <select name="" id="" className="selectpicker show-tick">
              <option data-content="<span class='option-item font-weight-bold'>Name:</span> A-Z">
                Name: A-Z
              </option>
              <option data-content="<span class='option-item font-weight-bold'>Name:</span> Z-A">
                Name: Z-A
              </option>
              <option data-content="<span class='option-item font-weight-bold'>Type:</span> Static">
                Type: Static
              </option>
              <option data-content="<span class='option-item font-weight-bold'>Type:</span> Headless">
                Type: Headless
              </option>
            </select>
          </div>
          <div className="ml-auto list-add">

          <UncontrolledButtonDropdown>
            <DropdownToggle className="px-3 py-0 d-flex align-items-center font-weight-bold rounded btn-smaller" color="primary">
              <i className="mr-2" aria-hidden="true">
                <FaPlus className="d-inline-block" />
              </i>
              Create a new site
              <i className="ml-2" aria-hidden="true">
                <FaAngleDown className="d-inline-block" />
              </i>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem to="/sites/create/static" tag={Link}>
                Shifter Static
              </DropdownItem>
              <DropdownItem to="/sites/create/headless" tag={Link}>
                Shifter Headless
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
          </div>
        </header>
        <section className="d-flex flex-column site-list-body">
          <SiteCard>
            <ProgressBar now={10} />
            <SiteCardThumbnail
              {...{
                src: 'https://getshifter.io',
                alt: 'Site',
              }}
            />
            <SiteCardData name="site name">
              <span className="d-inline-block align-middle site-url">
                <Link href={`https://getfhiter.io`}>getshifter.io</Link>
              </span>
              <span className="d-inline-block align-middle text-truncate site-description">
                <span className="mr-2 d-inline-block rounded-circle font-weight-bold text-center site-initial">
                  D
                </span>
                <p className="mb-0 d-inline site-description">
                  Team member name
                </p>
              </span>
            </SiteCardData>
            <SiteCardSettings
              statusBadge={<WordPressStatusBadge status="running" />}
              href="#"
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
          <SiteCard>
            <ProgressBar now={10} />
            <SiteCardThumbnail
              {...{
                src: 'https://getshifter.io',
                alt: 'Site',
              }}
            />
            <SiteCardData
              name="site name"
              tips={
                <StatusBadge className="ml-2 d-inline-block" status="danger">
                  Trial
                </StatusBadge>
              }
            >
              <span className="d-inline-block align-middle site-url">
                <Link href={`https://getfhiter.io`}>getshifter.io</Link>
              </span>
              <span className="d-inline-block align-middle text-truncate site-description">
                <span className="mr-2 d-inline-block rounded-circle font-weight-bold text-center site-initial">
                  D
                </span>
                <p className="mb-0 d-inline site-description">
                  Team member name
                </p>
              </span>
            </SiteCardData>
            <SiteCardSettings
              statusBadge={<WordPressStatusBadge status="running" />}
              href="#"
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
      </AdminLayoutContainer>
    </Layouts>
  );
};

const meta: Meta = {
  title: 'Mockup/Pages/Admin/ListSites',
  component: MockListSites,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <MockListSites {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
