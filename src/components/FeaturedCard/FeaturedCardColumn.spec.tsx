import { render } from '@testing-library/react';
import React from 'react';
import { Default as FeaturedCardColumn } from './FeaturedCardColumn.stories';

describe('FeaturedCardColumn', () => {
  it.each([
    [0, 0],
    [1, 1],
    [0, 5],
    [12, 12],
    [13, 12],
    [100, 12],
  ])('to match snapshot [column %p | item %p]', (column, items) => {
    const { asFragment } = render(
      <FeaturedCardColumn column={column} items={items} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
