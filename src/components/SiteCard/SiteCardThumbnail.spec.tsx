import { render } from '@testing-library/react';
import React from 'react';
import { Default as SiteCardThumbnail, } from './SiteCardThumbnail.stories';

describe('SiteCardThumbnail', () => {
  it('to match snapshot [column %p | item %p]', () => {
    const { asFragment } = render(
      <SiteCardThumbnail {...(SiteCardThumbnail.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
