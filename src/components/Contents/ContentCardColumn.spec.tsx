import { render } from '@testing-library/react';
import React from 'react';
import { Default as ContentCardColumn } from './ContentCardColumn.stories';

describe('ContentCardColumn', () => {
  it.each([
    [0, 0],
    [1, 1],
    [0, 5],
    [12, 12],
    [13, 12],
    [100, 12],
  ])('to match snapshot [column %p | item %p]', (column, items) => {
    const { asFragment } = render(
      <ContentCardColumn column={column} items={items} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
