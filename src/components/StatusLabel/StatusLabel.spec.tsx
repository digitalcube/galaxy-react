import { render } from '@testing-library/react';
import React from 'react';
import { Default as StatusLabel } from './StatusLabel.stories';

describe('StatusLabel', () => {
  it('to match snapshot(default)', () => {
    const { asFragment } = render(
      <StatusLabel {...(StatusLabel.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
