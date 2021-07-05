import { render } from '@testing-library/react';
import React from 'react';
import { Default as Checkbox } from './Checkbox.stories';

describe('Checkbox', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(
      <Checkbox {...(Checkbox.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
