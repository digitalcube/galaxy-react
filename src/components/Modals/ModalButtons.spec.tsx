import { render } from '@testing-library/react';
import React from 'react';
import { Default as ModalButtons } from './ModalButtons.stories';

describe('ModalButtons', () => {
  it('to match snapshot [default]', () => {
    const { asFragment } = render(
      <ModalButtons {...(ModalButtons.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot [hide cancel button]', () => {
    const { asFragment } = render(<ModalButtons showCancel={false} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
