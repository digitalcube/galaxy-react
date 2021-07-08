import React from 'react';
import { render } from '@testing-library/react';
import { Default as SidebarMenuItem } from './SidebarMenuItem.stories';

describe('SidebarMenuItem', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(
      <SidebarMenuItem {...(SidebarMenuItem.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
