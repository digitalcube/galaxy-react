import React from 'react';
import { render } from '@testing-library/react'
import { Default as Nav } from './Nav.stories';

describe('Nav', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(<Nav {...{
        ...Nav.args,
    }}/>);
    expect(asFragment()).toMatchSnapshot()
  });
});
