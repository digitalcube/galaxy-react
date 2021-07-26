import { render } from '@testing-library/react';
import React from 'react';
import { Default as ListItem } from './ListItem.stories';

describe('ListItem', () => {
  it('to match snapshot(default)', () => {
    const { asFragment } = render(<ListItem {...(ListItem.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
