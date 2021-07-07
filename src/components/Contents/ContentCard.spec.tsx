import { render } from '@testing-library/react';
import React from 'react';
import { Default as ContentCard } from './ContentCard.stories';

describe('ContentCard', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(
      <ContentCard {...(ContentCard.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
