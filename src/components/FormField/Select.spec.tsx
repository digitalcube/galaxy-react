import { render } from '@testing-library/react';
import React from 'react';
import { Default as FormSelect } from './Select.stories';

describe('FormSelect', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(<FormSelect {...(FormSelect.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot (with error massage)', () => {
    const { asFragment } = render(
      <FormSelect
        {...(FormSelect.args as any)}
        errorMessage="We don’t recognize that email"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
