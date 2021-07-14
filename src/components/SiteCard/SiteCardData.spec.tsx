import { render } from '@testing-library/react';
import React from 'react';
import { Default as SiteCardData } from './SiteCardData.stories';

describe('SiteCardData', () => {
  it('to match snapshot [column %p | item %p]', () => {
    const { asFragment } = render(
      <SiteCardData {...(SiteCardData.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
