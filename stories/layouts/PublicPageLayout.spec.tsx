import React from 'react';
import { render } from '@testing-library/react';
import { OneColumns, TwoColumns } from './PublicPageLayout.stories';

describe('Nav', () => {
  it('to match snapshot [OneColumns]', () => {
    const { asFragment } = render(
      <OneColumns />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot [TwoColumns]', () => {
    const { asFragment } = render(
      <TwoColumns {...TwoColumns.args as any}/>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
