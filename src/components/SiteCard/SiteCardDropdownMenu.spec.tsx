import { render } from '@testing-library/react';
import React from 'react';
import { Default as SiteCardDropdownMenu } from './SiteCardDropdownMenu.stories';

describe('SiteCardDropdownMenu', () => {
  it('to match snapshot [column %p | item %p]', () => {
    const { asFragment } = render(
      <SiteCardDropdownMenu {...(SiteCardDropdownMenu.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
