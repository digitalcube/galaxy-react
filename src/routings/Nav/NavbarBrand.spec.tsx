import React from 'react';
import { render } from '@testing-library/react'
import { Default as NavbarBrand } from './NavbarBrand.stories';

describe('NavbarBrand', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(<NavbarBrand {...{
        name: 'shifter',
        ...NavbarBrand.args,
    }}/>);
    expect(asFragment()).toMatchSnapshot()
  });
});
