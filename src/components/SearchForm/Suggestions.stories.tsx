import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SearchSuggestionList, SearchSuggestionListProps } from './Suggestions';
import { FaAngleRight, FaCodeBranch } from 'react-icons/fa';

const meta: Meta = {
  title: 'Components/SearchForm/SearchSuggestionList',
  component: SearchSuggestionList,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SearchSuggestionListProps> = (args) => (
  <div className="form-search position-relative">
    <SearchSuggestionList {...args} />
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  suggestions: [
    {
      icon: <FaCodeBranch className="d-block larger" />,
      children: 'Staging',
      href: '#',
    },
    {
      icon: <FaCodeBranch className="d-block larger" />,
      children: (
        <>
          {'Staging'}
          <span className="colored">
            <i className="mx-1 divider">
              <FaAngleRight className="d-inline-block" />
            </i>
            Deploys
          </span>
        </>
      ),
      href: '#',
    },
    {
      children: <span className="colored">Creating an artifact</span>,
      href: 'https://getshifter.io',
      category: 'Article',
    },
  ],
};
