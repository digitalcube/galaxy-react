import React from 'react';
import { render } from '@testing-library/react';
import { Default as TopNavigation } from './TopNavigation.stories';

describe('Mockup/TopNavigation', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(<TopNavigation />);
    expect(asFragment()).toMatchSnapshot();
  });
});
