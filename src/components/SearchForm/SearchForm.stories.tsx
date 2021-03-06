import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SearchForm, SearchFormProps } from './SearchForm';
import { FaAngleRight, FaCodeBranch } from 'react-icons/fa';

const meta: Meta = {
  title: 'Components/SearchForm/SearchForm',
  component: SearchForm,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SearchFormProps> = (args) => <SearchForm {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search the Shifter dashboard',
  onSubmit: (e) => {
    e.preventDefault();
    alert('submit!');
  },
};

export const WithSuggestion = Template.bind({});
WithSuggestion.args = {
  placeholder: 'Search the Shifter dashboard',
  onSubmit: (e) => {
    e.preventDefault();
    alert('submit!');
  },
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
