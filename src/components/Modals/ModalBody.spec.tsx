import { render } from '@testing-library/react';
import React from 'react';
import { ModalBody } from './ModalBody';

describe('ModalBody', () => {
  it('to match snapshot [no submit handler]', () => {
    const { asFragment } = render(<ModalBody>Content</ModalBody>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot [with submit event]', () => {
    const { asFragment } = render(
      <ModalBody onSubmit={(e) => e.preventDefault()}>Title</ModalBody>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
