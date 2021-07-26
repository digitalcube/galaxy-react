import { render } from '@testing-library/react';
import React from 'react';
import { Default as Toggle } from './Toggle.stories';

describe('Toggle', () => {
  it('to match snapshot(default)', () => {
    const { asFragment } = render(<Toggle {...(Toggle.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
