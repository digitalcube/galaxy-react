import { render } from '@testing-library/react';
import React from 'react';
import { Default as Domain } from './Domain.stories';

describe('Domain', () => {
  it('to match snapshot(default)', () => {
    const { asFragment } = render(<Domain {...(Domain.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
