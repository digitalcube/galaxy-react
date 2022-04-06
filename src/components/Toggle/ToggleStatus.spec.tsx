import { render } from '@testing-library/react';
import React from 'react';
import { Default as ToggleStatus } from './ToggleStatus.stories';

describe('ToggleStatus', () => {
  it('to match snapshot(default)', () => {
    const { asFragment } = render(
      <ToggleStatus {...(ToggleStatus.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
