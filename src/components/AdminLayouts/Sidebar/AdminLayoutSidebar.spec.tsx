import React from 'react';
import { render } from '@testing-library/react';
import { Default as AdminLayoutSidebar } from './AdminLayoutSidebar.stories';

describe('AdminLayoutSidebar', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(<AdminLayoutSidebar {...AdminLayoutSidebar.args as any} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
