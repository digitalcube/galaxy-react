import { render } from '@testing-library/react';
import React from 'react';
import { Default as ForgetPassword, Success, Failure } from './ForgetPassword.stories';

describe('ForgetPassword', () => {
  it('to match snapshot(default)', () => {
    const { asFragment } = render(<ForgetPassword {...(ForgetPassword.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot (inprogress)', () => {
    const { asFragment } = render(<Success {...(Success.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot (failure)', () => {
    const { asFragment } = render(<Failure {...(Failure.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
