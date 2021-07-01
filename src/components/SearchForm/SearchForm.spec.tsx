import React from 'react';
import { render } from '@testing-library/react'
import { Default as SearchForm } from './SearchForm.stories';

describe('SearchForm', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(<SearchForm {...{
        onChange: jest.fn(),
        onSubmit: jest.fn()
    }}/>);
    expect(asFragment()).toMatchSnapshot()
  });
});
