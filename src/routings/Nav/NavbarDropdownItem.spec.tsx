import React from 'react';
import { render } from '@testing-library/react'
import { Default as NavbarDropdownItem } from './NavbarDropdownItem.stories';

describe('NavbarDropdownItem', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(<NavbarDropdownItem {...{
        href: '#',
        children: 'Account'
    }}/>);
    expect(asFragment()).toMatchSnapshot()
  });
});
