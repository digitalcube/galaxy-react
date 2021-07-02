import React from 'react';
import { render } from '@testing-library/react';
import { Default as NavbarDropdown, InNavbar } from './NavbarDropdown.stories';

describe('NavbarDropdown', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(
      <NavbarDropdown
        {...{
          ...NavbarDropdown.args,
          avatar: {
            email: 'test@example.com',
          },
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot (in nav bar)', () => {
    const { asFragment } = render(
      <InNavbar
        {...{
          ...InNavbar.args,
          avatar: {
            email: 'test@example.com',
            rounded: false,
          },
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
