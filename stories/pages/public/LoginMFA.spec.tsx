import { render } from '@testing-library/react';
import React from 'react';
import { Default as LoginMFA, Inprogress, Failure } from './LoginMFA.stories';

describe('LoginMFA', () => {
  it('to match snapshot(default)', () => {
    const { asFragment } = render(<LoginMFA {...(LoginMFA.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot (inprogress)', () => {
    const { asFragment } = render(<Inprogress {...(Inprogress.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot (failure)', () => {
    const { asFragment } = render(<Failure {...(Failure.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
