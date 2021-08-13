import { render } from '@testing-library/react';
import React from 'react';
import { Default as ReadOnlyFormField } from './ReadonlyField.stories';

describe('ReadOnlyFormField', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(<ReadOnlyFormField {...(ReadOnlyFormField.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot (with error massage)', () => {
    const { asFragment } = render(
      <ReadOnlyFormField
        {...(ReadOnlyFormField.args as any)}
        errorMessage="We don’t recognize that email"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
