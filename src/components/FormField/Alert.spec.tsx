import { render } from '@testing-library/react';
import React from 'react';
import { Default as Alert } from './Alert.stories';

describe('Alert', () => {
  it('to match snapshot [no item]', () => {
    const { asFragment } = render(<Alert {...(Alert.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot [error message]', () => {
    const { asFragment } = render(<Alert errorMessage="error" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot [children]', () => {
    const { asFragment } = render(<Alert>children</Alert>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot [mixed]', () => {
    const { asFragment } = render(
      <Alert errorMessage="message">children</Alert>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
