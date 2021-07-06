import React, { FC } from 'react';
import {
  FaArrowLeft,
  FaBolt,
  FaCode,
  FaCodeBranch,
  FaCog,
  FaHome,
  FaUserFriends,
} from 'react-icons/fa';
import { Meta, Story } from '@storybook/react';
import { TopNavigation } from '../../layouts/TopNavigation.stories';
import { Footer } from '../../../src';

type MockSiteSettingProps = {};
const MockSiteSetting: FC<MockSiteSettingProps> = ({}) => {
  return (
    <div className="d-flex flex-column min-vh-100 shifter-dashboard">
      <TopNavigation />
      <div className="d-flex flex-md-row-reverse flex-column flex-grow-1 shifter-dashboard-columns site-settings">
        <main
          role="main"
          className="mb-4 pt-3 px-4 flex-grow-1 shifter-dashboard-main"
        >
          <h1 className="mb-4 font-weight-bold setting-headding">
            Site Settings
          </h1>

          <section className="general-setting">
            <div className="mt-3 px-4 py-3 general-setting-item">
              <header className="d-flex align-items-start justify-content-between general-setting-item-header">
                <h2 className="general-setting-heading font-weight-bold">
                  Automatically publish new deploys{' '}
                  <span className="font-weight-bold c-toggle-switch-status active">
                    yes
                  </span>
                </h2>
                <div className="custom-control custom-switch c-toggle-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="general-setting-1"
                    checked
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="general-setting-1"
                  >
                    <span className="d-none">
                      Notify me when a new artifact it created
                    </span>
                  </label>
                </div>
              </header>
              <div className="mt-2 general-setting-item-body">
                <p className="mb-0">
                  when a new deploy is generated, it will be automatically
                  published as the live site.
                </p>
              </div>
            </div>
            <div className="mt-3 px-4 py-3 general-setting-item">
              <header className="d-flex align-items-start justify-content-between general-setting-item-header">
                <h2 className="general-setting-heading font-weight-bold">
                  Create a WordPress backup when a new deploy is built{' '}
                  <span className="font-weight-bold c-toggle-switch-status active">
                    yes
                  </span>
                </h2>
                <div className="custom-control custom-switch c-toggle-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="general-setting-2"
                    checked
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="general-setting-2"
                  >
                    <span className="d-none">
                      Notify me when a new artifact it created
                    </span>
                  </label>
                </div>
              </header>
              <div className="mt-2 general-setting-item-body">
                <p className="mb-0">
                  when a new deploy is generated, a downloadable WordPress
                  backup will also be created.
                </p>
              </div>
            </div>
            <div className="mt-3 px-4 py-3 general-setting-item">
              <header className="d-flex align-items-start justify-content-between general-setting-item-header">
                <h2 className="general-setting-heading font-weight-bold">
                  Prevent this site from being deleted{' '}
                  <span className="font-weight-bold c-toggle-switch-status inactive">
                    no
                  </span>
                </h2>
                <div className="custom-control custom-switch c-toggle-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="general-setting-3"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="general-setting-3"
                  >
                    <span className="d-none">
                      Prevent this site from being deleted
                    </span>
                  </label>
                </div>
              </header>
              <div className="mt-2 general-setting-item-body">
                <p className="mb-0">
                  when a new deploy is generated, a downloadable WordPress
                  backup will also be created.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-3 notification-setting">
            <h2 className="mb-0 px-3 py-3 font-weight-bold notification-setting-heading">
              Site Notification Settings
            </h2>

            <div className="px-4 py-4 d-flex align-items-start justify-content-between notification-base-setting">
              <h3 className="notification-base-title font-weight-normal">
                Recieve notifications for this site{' '}
                <span className="font-weight-bold c-toggle-switch-status active">
                  yes
                </span>
              </h3>
              <div className="custom-control custom-switch c-toggle-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="notification-list-1"
                  checked
                />
                <label
                  className="custom-control-label"
                  htmlFor="notification-list-1"
                >
                  <span className="d-none">
                    Recieve notifications for this site
                  </span>
                </label>
              </div>
            </div>

            <div className="mt-4 notification-setting-list">
              <ul className="m-0 p-0 mb-3">
                <li className="px-4 py-3 d-flex align-items-start justify-content-between">
                  <div className="notification-title">
                    Notify me when a new artifact it created{' '}
                    <span className="font-weight-bold c-toggle-switch-status active">
                      on
                    </span>
                  </div>
                  <div className="notification-toggle">
                    <div className="custom-control custom-switch c-toggle-switch">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="notification-list-1"
                        checked
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="notification-list-1"
                      >
                        <span className="d-none">
                          Notify me when a new artifact it created
                        </span>
                      </label>
                    </div>
                  </div>
                </li>
                <li className="px-4 py-3 d-flex align-items-start justify-content-between">
                  <div className="notification-title">
                    Notifiy me when a site is published{' '}
                    <span className="font-weight-bold c-toggle-switch-status active">
                      on
                    </span>
                  </div>
                  <div className="notification-toggle">
                    <div className="custom-control custom-switch c-toggle-switch">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="notification-list-2"
                        checked
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="notification-list-2"
                      >
                        <span className="d-none">
                          Notifiy me when a site is published
                        </span>
                      </label>
                    </div>
                  </div>
                </li>
                <li className="px-4 py-3 d-flex align-items-start justify-content-between">
                  <div className="notification-title">
                    Notifiy me when a site is published{' '}
                    <span className="font-weight-bold c-toggle-switch-status active">
                      on
                    </span>
                  </div>
                  <div className="notification-toggle">
                    <div className="custom-control custom-switch c-toggle-switch">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="notification-list-3"
                        checked
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="notification-list-3"
                      >
                        <span className="d-none">
                          Notifiy me when a site is published
                        </span>
                      </label>
                    </div>
                  </div>
                </li>
                <li className="px-4 py-3 d-flex align-items-start justify-content-between">
                  <div className="notification-title">
                    Notify me about domain changes{' '}
                    <span className="font-weight-bold c-toggle-switch-status active">
                      on
                    </span>
                  </div>
                  <div className="notification-toggle">
                    <div className="custom-control custom-switch c-toggle-switch">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="notification-list-4"
                        checked
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="notification-list-4"
                      >
                        <span className="d-none">
                          Notify me about domain changes
                        </span>
                      </label>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="mt-3 pb-4 delete-setting">
            <h2 className="mb-2 px-3 pt-3 font-weight-bold delete-setting-heading">
              Delete site
            </h2>
            <p className="mb-0 px-3 delete-setting-description">
              Deleting this site will also delete all site artifacts and data.
              This cannot be undone. Be sure to back up your site before
              deleting.
            </p>
            <div className="px-3 pt-4 pb-3 d-flex justify-content-end delete-setting-button">
              <button
                type="button"
                className="px-3 py-2 btn btn-colored btn-caution btn-smaller font-weight-bold"
                disabled
              >
                Delete site
              </button>
            </div>
          </section>
        </main>

        <div className="pt-4 shifter-dashboard-sidebar">
          <div className="return2sites">
            <a
              className="d-inline-flex align-items-center"
              href="./sites-home-all-sites.html"
            >
              <i className="mr-2" aria-hidden="true">
                <FaArrowLeft className="d-block" />
              </i>
              All Sites
            </a>
          </div>

          <div className="mt-4 sidebar-sitename font-weight-bold">
            Site Name
          </div>

          <div className="mt-2 rounded d-inline-block font-weight-bold c-site-status c-is-site-stopped">
            WordPress Stopped
          </div>

          <nav className="mt-4 sidebar-nav">
            <ul>
              <li>
                <a
                  className="px-3 py-2 rounded d-inline-flex align-items-center justify-content-center"
                  href="./sites-home-all-sites.html"
                >
                  <i className="mr-2" aria-hidden="true">
                    <FaHome className="d-block" />
                  </i>
                  Home
                </a>
              </li>
              <li>
                <a
                  className="px-3 py-2 rounded d-inline-flex align-items-center justify-content-center"
                  href="./sites-live.html"
                >
                  <i className="mr-2" aria-hidden="true">
                    <FaBolt className="d-block" />
                  </i>
                  Live
                </a>
              </li>
              <li>
                <a
                  className="px-3 py-2 rounded d-inline-flex align-items-center justify-content-center"
                  href="./sites-staging.html"
                >
                  <i className="mr-2" aria-hidden="true">
                    <FaCodeBranch className="d-block" />
                  </i>
                  Staging
                </a>
              </li>
              <li>
                <a
                  className="px-3 py-2 rounded d-inline-flex align-items-center justify-content-center"
                  href="./sites-dev"
                >
                  <i className="mr-2" aria-hidden="true">
                    <FaCode className="d-block" />
                  </i>
                  Dev
                </a>
              </li>
              <li>
                <a
                  className="px-3 py-2 rounded d-inline-flex align-items-center justify-content-center deactive"
                  href="./sites-team.html"
                >
                  <i className="mr-2" aria-hidden="true">
                    <FaUserFriends className="d-block" />
                  </i>
                  Team
                </a>
              </li>
              <li>
                <a
                  className="px-3 py-2 rounded d-inline-flex align-items-center justify-content-center active"
                  href="./sites-settings.html"
                >
                  <i className="mr-2" aria-hidden="true">
                    <FaCog className="d-block" />
                  </i>
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer serviceName="Shifter" />
    </div>
  );
};

const meta: Meta = {
  title: 'Mockup/Pages/Admin/SiteSetting',
  component: MockSiteSetting,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <MockSiteSetting {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
