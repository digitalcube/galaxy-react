import { render } from '@testing-library/react';
import React from 'react';
import { Default as Login, Inprogress, Failure } from './Login.stories';

describe('Login', () => {
  it('to match snapshot(default)', () => {
    const { asFragment } = render(<Login {...(Login.args as any)} />);
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
