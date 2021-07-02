import React from 'react';
import { render } from '@testing-library/react'
import { Default as Avatar } from './Avatar.stories';

describe('Avatar', () => {
  it('to match snapshot ', () => {
    const { asFragment } = render(<Avatar {...Avatar.args}/>);
    expect(asFragment()).toMatchSnapshot()
  });
});
