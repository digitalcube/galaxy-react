import { render } from '@testing-library/react';
import React from 'react';
import { Default as ProgressBar } from './ProgressBar.stories';

describe('ProgressBar', () => {
  it('to match snapshot [column %p | item %p]', () => {
    const { asFragment } = render(
      <ProgressBar {...(ProgressBar.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
