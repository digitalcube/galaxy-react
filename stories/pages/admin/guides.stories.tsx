import React, { FC } from 'react';
import { FaBolt, FaComment, FaPlay, FaWrench } from 'react-icons/fa';
import { Meta, Story } from '@storybook/react';
import { TopNavigation } from '../../layouts/TopNavigation.stories';
import { Footer, FeaturedCard, FeaturedCardColumn, ContentHeader,
  ContentCard,
  ContentCardColumn,
} from '../../../src';


type MockGuidesPageProps = {};
const MockGuidesPage: FC<MockGuidesPageProps> = ({}) => {
  return (
    <div className="d-flex flex-column min-vh-100 shifter-dashboard">
      <TopNavigation />

      <div className="mx-auto w-100 shifter-guides">
        <ContentHeader
          title="Guides"
          src="/images/guide-banner.png"
          width="1134"
          height="180"
          alt="Introducing PHP Error Logs"
          href="#"
        />
        <MockFeaturedContents />
        <MockArticles/>
      </div>
      <Footer serviceName="Shifter" />
    </div>
  );
};

const MockArticles: FC = () => {
  return (
  
    <ContentCardColumn column={3} title="Popular articles">
    <ContentCard
      title="Custom domains on Shifter"
      categories={[{
        name: "Developers"
      }, {
        name: 'Domain'
      }]}
      linkText="Read this article"
      href="#"
    >
      This article contains step by step guide for adding and
      assigning your custom domain to your Shifter site.
    </ContentCard>
    <ContentCard
      title="Custom domains on Shifter"
      categories={[{
        name: "Developers"
      }, {
        name: 'Domain'
      }]}
      linkText="Read this article"
      href="#"
    >
      This article contains step by step guide for adding and
      assigning your custom domain to your Shifter site.
    </ContentCard>
    <ContentCard
      title="Custom domains on Shifter"
      categories={[{
        name: "Developers"
      }, {
        name: 'Domain'
      }]}
      linkText="Read this article"
      href="#"
    >
      This article contains step by step guide for adding and
      assigning your custom domain to your Shifter site.
    </ContentCard>
    <ContentCard
      title="Custom domains on Shifter"
      categories={[{
        name: "Developers"
      }, {
        name: 'Domain'
      }]}
      linkText="Read this article"
      href="#"
    >
      This article contains step by step guide for adding and
      assigning your custom domain to your Shifter site.
    </ContentCard>
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
</ContentCardColumn>
  )
}

const MockFeaturedContents: FC = () => (
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
)

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
