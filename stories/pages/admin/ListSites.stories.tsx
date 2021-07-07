import React, { FC } from 'react';
import {
  FaEllipsisH,
  FaPlay,
  FaPlus,
  FaStop,
  FaWordpressSimple,
} from 'react-icons/fa';
import { Meta, Story } from '@storybook/react';
import { TopNavigation } from '../../layouts/TopNavigation.stories';
import { Button, Footer, Layouts, SiteCard } from '../../../src';

type MockListSitesProps = {};
const MockListSites: FC<MockListSitesProps> = ({}) => {
  return (
    <Layouts variant="admin" footer={<Footer serviceName="Shifter" />}>
      <TopNavigation />

      <main className="px-4 sites-list">
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
            <Button
              type="button"
              className="px-3 py-0 d-flex align-items-center"
              rounded
              fontWeight="bold"
              smaller
            >
              <i className="mr-2" aria-hidden="true">
                <FaPlus className="d-block" />
              </i>
              Create a new site
            </Button>
          </div>
        </header>
        <section className="d-flex flex-column site-list-body">
          <SiteCard
            image={{
              src: '/images/site-a.png',
              alt: 'Site'
            }}
            site={{
              id: 'site_xxx',
              name: 'Stable Value Investment Ltd.',
              domain: 'stablevalueinvestment.org',
              team: {
                name: 'super log name toshow a line break super long names work',
                id: 'team_xxx'
              }
            }}
          />
          
          <div className="mb-3 rounded d-md-flex align-items-start site-list-item">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <div className="site-thumbnail rounded-left">
              <img src="/images/site-b.png" width="167" height="111" alt="" />
            </div>
            <div className="pl-3 py-3 site-data">
              <h2 className="mb-0 font-weight-bold site-name">Example Site</h2>
              <div className="d-flex align-items-center site-info">
                <span className="d-inline-block align-middle site-url">
                  <a href="nervous-lamarr9210.on.getshifter.io">
                    nervous-lamarr9210.on.getshifter.io
                  </a>
                </span>
                <span className="d-inline-block align-middle text-truncate">
                  <span className="mr-2 d-inline-block rounded-circle font-weight-bold text-center site-initial">
                    D
                  </span>
                  <p className="mb-0 d-inline site-description">Team name</p>
                </span>
              </div>
            </div>
            <div className="ml-auto pt-4 pr-3 d-flex align-items-center flex-shrink-0 site-setting">
              <div className="ml-4 site-status">
                <div className="rounded font-weight-bold c-site-status c-is-site-stopped">
                  WordPress Stopped
                </div>
              </div>
              <div className="ml-4 site-panel">
                <a href="#" title="管理画面">
                  <i aria-hidden="true">
                    <FaWordpressSimple className="d-block" />
                  </i>
                </a>
              </div>
              <div className="ml-4 font-weight-bold site-manage">
                <a href="#">Manage site</a>
              </div>
              <div className="ml-4 site-control">
                <a
                  className="dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i aria-hidden="true">
                    <FaEllipsisH className="d-block" />
                  </i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                >
                  <a
                    className="dropdown-item px-3 py-2 d-flex align-items-center justify-content-between"
                    href="#"
                  >
                    Start WordPress
                    <i aria-hidden="true">
                      <FaPlay className="d-block" />
                    </i>
                  </a>
                  <a
                    className="dropdown-item px-3 py-2 d-flex align-items-center justify-content-between"
                    href="#"
                  >
                    Restart WordPress
                    <i aria-hidden="true">
                      <FaStop className="d-block" />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 rounded d-md-flex align-items-start site-list-item">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <div className="site-thumbnail rounded-left">
              <img src="/images/site-c.png" width="167" height="111" alt="" />
            </div>
            <div className="pl-3 py-3 site-data">
              <h2 className="mb-0 font-weight-bold site-name">
                Interior Design Blog
              </h2>
              <div className="mt-3 d-flex align-items-center site-info">
                <span className="d-inline-block align-middle site-url">
                  <a href="interiordesignwebsite.com/blog/">
                    interiordesignwebsite.com/blog/
                  </a>
                </span>
                <span className="d-inline-block align-middle text-truncate site-description">
                  <span className="mr-2 d-inline-block rounded-circle font-weight-bold text-center site-initial">
                    D
                  </span>
                  <p className="mb-0 d-inline site-description">
                    Super long name to show a line break super long names work
                  </p>
                </span>
              </div>
            </div>
            <div className="ml-auto pt-4 pr-3 d-flex align-items-center flex-shrink-0 site-setting">
              <div className="ml-4 site-status">
                <div className="rounded font-weight-bold c-site-status c-is-site-stopped">
                  WordPress Stopped
                </div>
              </div>
              <div className="ml-4 site-panel">
                <a href="#" title="管理画面">
                  <i aria-hidden="true">
                    <FaWordpressSimple className="d-block" />
                  </i>
                </a>
              </div>
              <div className="ml-4 font-weight-bold site-manage">
                <a href="#">Manage site</a>
              </div>
              <div className="ml-4 site-control">
                <a
                  className="dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i aria-hidden="true">
                    <FaEllipsisH className="d-block" />
                  </i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                >
                  <a
                    className="dropdown-item px-3 py-2 d-flex align-items-center justify-content-between"
                    href="#"
                  >
                    Start WordPress
                    <i aria-hidden="true">
                      <FaPlay className="d-block" />
                    </i>
                  </a>
                  <a
                    className="dropdown-item px-3 py-2 d-flex align-items-center justify-content-between"
                    href="#"
                  >
                    Restart WordPress
                    <i aria-hidden="true">
                      <FaStop className="d-block" />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 rounded d-md-flex align-items-start site-list-item">
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <div className="site-thumbnail rounded-left">
              <img src="/images/site-d.png" width="167" height="111" alt="" />
            </div>
            <div className="pl-3 py-3 site-data">
              <h2 className="mb-0 font-weight-bold site-name">
                Interior Design Blog
              </h2>
              <div className="mt-3 d-flex align-items-center site-info">
                <span className="d-inline-block align-middle site-url">
                  <a href="interiordesignwebsite.com/blog/">
                    interiordesignwebsite.com/blog/
                  </a>
                </span>
                <span className="d-inline-block align-middle text-truncate site-description">
                  <span className="mr-2 d-inline-block rounded-circle font-weight-bold text-center site-initial">
                    D
                  </span>
                  <p className="mb-0 d-inline site-description">
                    Super long name to show a line break super long names work
                  </p>
                </span>
              </div>
            </div>
            <div className="ml-auto pt-4 pr-3 d-flex align-items-center flex-shrink-0 site-setting">
              <div className="ml-4 site-status">
                <div className="rounded font-weight-bold c-site-status c-is-site-stopped">
                  WordPress Stopped
                </div>
              </div>
              <div className="ml-4 site-panel">
                <a href="#" title="管理画面">
                  <i aria-hidden="true">
                    <FaWordpressSimple className="d-block" />
                  </i>
                </a>
              </div>
              <div className="ml-4 font-weight-bold site-manage">
                <a href="#">Manage site</a>
              </div>
              <div className="ml-4 site-control">
                <a
                  className="dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i aria-hidden="true">
                    <FaEllipsisH className="d-block" />
                  </i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                >
                  <a
                    className="dropdown-item px-3 py-2 d-flex align-items-center justify-content-between"
                    href="#"
                  >
                    Start WordPress
                    <i aria-hidden="true">
                      <FaPlay className="d-block" />
                    </i>
                  </a>
                  <a
                    className="dropdown-item px-3 py-2 d-flex align-items-center justify-content-between"
                    href="#"
                  >
                    Restart WordPress
                    <i aria-hidden="true">
                      <FaStop className="d-block" />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
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
