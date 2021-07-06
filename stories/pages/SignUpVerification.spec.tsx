import { render } from '@testing-library/react';
import React from 'react';
import { Default as SignUpVerification, Failure } from './SignUpVerification.stories';

describe('SignUpVerification', () => {
  it('to match snapshot(default)', () => {
    const { asFragment } = render(
      <SignUpVerification {...(SignUpVerification.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot (failure)', () => {
    const { asFragment } = render(
      <Failure {...(Failure.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
