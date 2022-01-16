import { render } from '@testing-library/react';
import React from 'react';
import { Default as SiteSettings } from './SiteSettings.stories';

describe('SiteSettings', () => {
  it('to match snapshot(default)', () => {
    const { asFragment } = render(
      <SiteSettings {...(SiteSettings.args as any)} />
    );
    expect(asFragment());
  });
});
