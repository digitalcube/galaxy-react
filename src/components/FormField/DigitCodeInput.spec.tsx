import { render } from '@testing-library/react';
import React from 'react';
import {
  Default as DigitCodeInput,
  Uncontrolled,
} from './DigitCodeInput.stories';

describe('DigitCodeInput', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(
      <DigitCodeInput {...(DigitCodeInput.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot (Uncontrolled)', () => {
    const { asFragment } = render(
      <Uncontrolled {...(Uncontrolled.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
