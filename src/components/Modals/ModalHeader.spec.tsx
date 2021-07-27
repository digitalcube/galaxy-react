import { render } from '@testing-library/react';
import React from 'react';
import { MockModalProvider } from './ModalContext';
import { ModalHeader } from './ModalHeader';

describe('ModalHeader', () => {
  it('to match snapshot [default]', () => {
    const { asFragment } = render(
      <MockModalProvider>
        <ModalHeader closeIcon={true}>Title</ModalHeader>
      </MockModalProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot [hide close icon]', () => {
    const { asFragment } = render(
      <MockModalProvider>
        <ModalHeader closeIcon={false}>Title</ModalHeader>
      </MockModalProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
