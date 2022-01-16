import { render } from '@testing-library/react';
import React from 'react';
import { Default as Guides } from './Guides.stories';

describe('Guides', () => {
  it('to match snapshot(default)', () => {
    const { asFragment } = render(<Guides {...(Guides.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
