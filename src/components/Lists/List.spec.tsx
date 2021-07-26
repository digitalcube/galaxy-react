import { render } from '@testing-library/react';
import React from 'react';
import { Default as List } from './List.stories';

describe('List', () => {
  it('to match snapshot(default)', () => {
    const { asFragment } = render(<List {...(List.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
