import React, { FC } from 'react';
import { FaBolt, FaComment, FaPlay, FaWrench } from 'react-icons/fa';
import { Meta, Story } from '@storybook/react';
import { TopNavigation } from '../../layouts/TopNavigation.stories';
import { Footer, FeaturedCard, FeaturedCardColumn } from '../../../src';

type MockGuidesPageProps = {};
const MockGuidesPage: FC<MockGuidesPageProps> = ({}) => {
  return (
    <div className="d-flex flex-column min-vh-100 shifter-dashboard">
      <TopNavigation />

      <div className="mx-auto w-100 shifter-guides">
        <h1 className="guide-heading-1 font-weight-bold">Guides</h1>

        <div className="mt-4 container-fluid">
          <div className="row">
            <div className="col px-0">
              <a href="#" className="d-block">
                <img
                  className="img-fluid"
                  src="/images/guide-banner.png"
                  width="1134"
                  height="180"
                  alt="Introducing PHP Error Logs"
                />
              </a>
            </div>
          </div>
        </div>
        <FeaturedCardColumn>
          <FeaturedCard
            title="Read the docs"
            href="https://getshifter.io"
            linkIcon={<FaBolt className="d-block" />}
            linkText="Explore Shifter docs"
          />
          <FeaturedCard
            title="Watch the tutorials"
            excerpt="Get the most from your Jamstack WordPress site"
            href="https://getshifter.io"
            icon={<FaPlay className="d-block" />}
            linkIcon={<FaBolt className="d-block" />}
            linkText="Start Watching"
          />
          <FeaturedCard
            title="Explore extensions"
            excerpt="Get the most from your Jamstack WordPress site"
            href="https://getshifter.io"
            icon={<FaWrench className="d-block" />}
            linkIcon={<FaBolt className="d-block" />}
            linkText="Explore Jamstack extensions"
          />
        </FeaturedCardColumn>
        <h2 className="guide-heading-2 font-weight-bold">Popular articles</h2>

        <div className="container-fluid px-0 guides-list guides-list-md">
          <div className="row">
            <div className="col-md-4">
              <div className="pt-4 px-4 h-100 position-relative guide-list-item">
                <div className="mb-2 guide-list-genre">Developers / Domain</div>
                <h3 className="mb-2 guide-list-title font-weight-bold">
                  Custom domains on Shifter
                </h3>
                <p className="mb-0 guide-list-excerpt">
                  This article contains step by step guide for adding and
                  assigning your custom domain to your Shifter site.
                </p>
                <div className="position-absolute guide-list-anchor">
                  <a
                    href="#"
                    className="px-3 py-0 rounded btn btn-bordered btn-smaller d-inline-flex align-items-center font-weight-bold"
                  >
                    Read this article
                    <i className="pl-2 larger-icon" aria-hidden="true">
                      <FaBolt className="d-block" />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pt-4 px-4 h-100 position-relative guide-list-item">
                <div className="mb-2 guide-list-genre">Developers / Domain</div>
                <h3 className="mb-2 guide-list-title font-weight-bold">
                  Custom domains on Shifter Custom domains on Shifter
                </h3>
                <p className="mb-0 guide-list-excerpt">
                  This article contains step by step guide for adding and
                  assigning your custom domain to your Shifter site.
                </p>
                <div className="position-absolute guide-list-anchor">
                  <a
                    href="#"
                    className="px-3 py-0 rounded btn btn-bordered btn-smaller d-inline-flex align-items-center font-weight-bold"
                  >
                    Read this article
                    <i className="pl-2 larger-icon" aria-hidden="true">
                      <FaBolt className="d-block" />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pt-4 px-4 h-100 position-relative guide-list-item">
                <div className="mb-2 guide-list-genre">Developers / Domain</div>
                <h3 className="mb-2 guide-list-title font-weight-bold">
                  Custom domains on Shifter
                </h3>
                <p className="mb-0 guide-list-excerpt">
                  This article contains step by step guide for adding and
                  assigning your custom domain to your Shifter site.
                </p>
                <div className="position-absolute guide-list-anchor">
                  <a
                    href="#"
                    className="px-3 py-0 rounded btn btn-bordered btn-smaller d-inline-flex align-items-center font-weight-bold"
                  >
                    Read this article
                    <i className="pl-2 larger-icon" aria-hidden="true">
                      <FaBolt className="d-block" />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pt-4 px-4 h-100 position-relative guide-list-item">
                <div className="mb-2 guide-list-genre">Developers / Domain</div>
                <h3 className="mb-2 guide-list-title font-weight-bold">
                  Custom domains on Shifter
                </h3>
                <p className="mb-0 guide-list-excerpt">
                  This article contains step by step guide for adding and
                  assigning your custom domain to your Shifter site.
                </p>
                <div className="position-absolute guide-list-anchor">
                  <a
                    href="#"
                    className="px-3 py-0 rounded btn btn-bordered btn-smaller d-inline-flex align-items-center font-weight-bold"
                  >
                    Read this article
                    <i className="pl-2 larger-icon" aria-hidden="true">
                      <FaBolt className="d-block" />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pt-4 px-4 h-100 position-relative guide-list-item">
                <div className="mb-2 guide-list-genre">Developers / Domain</div>
                <h3 className="mb-2 guide-list-title font-weight-bold">
                  Custom domains on Shifter
                </h3>
                <p className="mb-0 guide-list-excerpt">
                  This article contains step by step guide for adding and
                  assigning your custom domain to your Shifter site. This
                  article contains step by step guide for adding and assigning
                  your custom domain to your Shifter site.
                </p>
                <div className="position-absolute guide-list-anchor">
                  <a
                    href="#"
                    className="px-3 py-0 rounded btn btn-bordered btn-smaller d-inline-flex align-items-center font-weight-bold"
                  >
                    Read this article
                    <i className="pl-2 larger-icon" aria-hidden="true">
                      <FaBolt className="d-block" />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="px-4 py-4 d-flex flex-column justify-content-center h-100 question">
                <h3 className="mb-0 font-weight-bold question-title">
                  Questions?
                </h3>
                <div className="mt-2 question-description">
                  Our team is happy to help
                </div>
                <div className="mt-4 question-anchor">
                  <a
                    href="#"
                    className="px-3 py-0 rounded btn btn-bordered btn-smaller border-0 d-inline-flex align-items-center font-weight-bold"
                  >
                    Contact Support
                    <i className="pl-2 larger-icon" aria-hidden="true">
                      <FaComment className="d-block" />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer serviceName="Shifter" />
    </div>
  );
};

const meta: Meta = {
  title: 'Mockup/Pages/Admin/Guides',
  component: MockGuidesPage,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (args) => <MockGuidesPage {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
