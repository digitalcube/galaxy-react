import { render } from '@testing-library/react';
import React from 'react';
import { Default as FeaturedCard } from './FeaturedCard.stories';

describe('FeaturedCard', () => {
  it('to match snapshot [column %p | item %p]', () => {
    const { asFragment } = render(
      <FeaturedCard {...(FeaturedCard.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
