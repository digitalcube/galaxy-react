import React from 'react';
import { render } from '@testing-library/react'
import { Default as TopNavigation } from './TopNavigation.stories';

describe('TopNavigation', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(<TopNavigation {...{
        ...TopNavigation.args,
    }}/>);
    expect(asFragment()).toMatchSnapshot()
  });
});
