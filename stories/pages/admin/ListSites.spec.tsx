import { render } from '@testing-library/react';
import React from 'react';
import { Default as ListSites } from './ListSites.stories';

describe('ListSites', () => {
  it('to match snapshot(default)', () => {
    const { asFragment } = render(<ListSites {...(ListSites.args as any)} />);
    expect(asFragment());
  });
});
