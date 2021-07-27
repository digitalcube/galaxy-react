import { render } from '@testing-library/react';
import React from 'react';
import { Modal } from 'reactstrap';
import { Default as ModalStory } from './Modal.stories';

describe('Modal', () => {
  it('to match snapshot [story]', () => {
    const { asFragment } = render(<ModalStory {...(ModalStory.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot [normal / dismissable]', () => {
    const { asFragment } = render(
      <Modal
        {...{
          id: 'modal',
          className: '',
          open: true,
          size: 'normal',
          rounded: true,
          title: 'Modal title',
          dismiss: true,
          children: 'Content',
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot [small / un-dismissable]', () => {
    const { asFragment } = render(
      <Modal
        {...{
          id: 'modal',
          className: '',
          open: true,
          size: 'small',
          rounded: true,
          title: 'Modal title',
          dismiss: false,
          children: 'Content',
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot [close]', () => {
    const { asFragment } = render(
      <Modal
        {...{
          id: 'modal',
          className: '',
          open: false,
          size: 'small',
          rounded: true,
          title: 'Modal title',
          dismiss: false,
          children: 'Content',
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
