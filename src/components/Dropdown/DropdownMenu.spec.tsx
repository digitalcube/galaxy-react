/* eslint-disable jsx-a11y/anchor-is-valid */
import { render } from '@testing-library/react';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { DropdownMenu } from './DropdownMenu';

describe('DropdownMenu', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(<DropdownMenu />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot [full props]', () => {
    const { asFragment } = render(
      <DropdownMenu
        right
        icon={<FaTrash className="d-block" />}
        className="test"
      >
        <a href="#">Item</a>
      </DropdownMenu>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
