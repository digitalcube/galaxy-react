import { render } from '@testing-library/react';
import React from 'react';
import { Default as Steps } from './Steps.stories';

describe('Steps', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(<Steps {...(Steps.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot (with error massage)', () => {
    const { asFragment } = render(
      <Steps
        {...(Steps.args as any)}
        errorMessage="We don’t recognize that email"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
