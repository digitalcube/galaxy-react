import React from 'react';
import { render } from '@testing-library/react';
import { OneColumns } from './PublicPageLayout.stories';

describe('Nav', () => {
  it('to match snapshot [OneColumns]', () => {
    const { asFragment } = render(<OneColumns />);
    expect(asFragment()).toMatchSnapshot();
  });
});
