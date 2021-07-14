import { render } from '@testing-library/react';
import React from 'react';
import { Default as SiteCard } from './SiteCard.stories';

describe('SiteCard', () => {
  it('to match snapshot [column %p | item %p]', () => {
    const { asFragment } = render(<SiteCard {...(SiteCard.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
