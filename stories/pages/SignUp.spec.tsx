import { render } from '@testing-library/react';
import React from 'react';
import { Default as SignUp, Failure } from './SignUp.stories';

describe('SignUp', () => {
  it('to match snapshot(default)', () => {
    const { asFragment } = render(<SignUp {...(SignUp.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot (failure)', () => {
    const { asFragment } = render(<Failure {...(Failure.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
