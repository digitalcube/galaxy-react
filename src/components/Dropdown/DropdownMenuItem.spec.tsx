/* eslint-disable jsx-a11y/anchor-is-valid */
import { render } from '@testing-library/react';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { DropdownMenuItem } from './DropdownMenuItem';

describe('DropdownMenuItem', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(
      <DropdownMenuItem>
        <a href="#">Item</a>
      </DropdownMenuItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot [full props]', () => {
    const { asFragment } = render(
      <DropdownMenuItem
        right
        icon={<FaTrash className="d-block" />}
        className="test"
      >
        <a href="#">Item</a>
      </DropdownMenuItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
