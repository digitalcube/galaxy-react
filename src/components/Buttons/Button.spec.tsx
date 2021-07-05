import { render } from '@testing-library/react';
import React from 'react';
import { Default as Button } from './Button.stories';

describe('Button', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(<Button {...(Button.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
