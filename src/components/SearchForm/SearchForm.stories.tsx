import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SearchForm, SearchFormProps } from './SearchForm'

const meta: Meta = {
  title: 'Components/SearchForm',
  component: SearchForm,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SearchFormProps> = args => (
    <SearchForm {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
    placeholder: 'Search the Shifter dashboard',
    onSubmit: (e) => {
        e.preventDefault()
        alert('submit!')
    }
};