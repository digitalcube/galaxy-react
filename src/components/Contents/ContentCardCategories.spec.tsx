import { render } from '@testing-library/react';
import React from 'react';
import { Default as ContentCardCategories } from './ContentCardCategories.stories';

describe('ContentCardCategories', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(
      <ContentCardCategories {...(ContentCardCategories.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
