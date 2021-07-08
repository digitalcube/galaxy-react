import React from 'react';
import { render } from '@testing-library/react';
import { Default as SidebarSubMenu } from './SidebarSubMenu.stories';

describe('SidebarSubMenu', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(
      <SidebarSubMenu {...(SidebarSubMenu.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
