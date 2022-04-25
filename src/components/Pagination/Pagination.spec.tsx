import { render } from '@testing-library/react';
import React from 'react';
import { Default as Pagination } from './Pagination.stories';

describe('Pagination', () => {
  it('to match snapshot [column %p | item %p]', () => {
    const { asFragment } = render(<Pagination {...(Pagination.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
