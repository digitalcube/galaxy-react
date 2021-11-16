import { render } from '@testing-library/react';
import React from 'react';
import { StatusBadgeOutline } from './StatusBadgeOutline';

describe('StatusBadgeOutline', () => {
  describe('snapshot testing per status', () => {
    it.each([
      'stopped' as const,
      'disabled' as const,
      'running' as const,
      'attached' as const,
      'deployed' as const,
      'enabled' as const,
      'pending' as const,
      'starting' as const,
      'building' as const,
      'starting-static' as const,
      'failed' as const,
      'verified' as const,
      'published' as const,
      'onteam' as const,
      'scheduled' as const,
      'ready' as const,
    ])('status is %p', (status) => {
      const { asFragment } = render(<StatusBadgeOutline status={status} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe('prefix', () => {
    it.each([undefined, 'WordPress', 'Domain'])('prefix is %p', (prefix) => {
      const { asFragment } = render(
        <StatusBadgeOutline status="ready" labelPrefix={prefix} />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe('suffix', () => {
    it.each([undefined, 'WordPress', 'Domain'])('suffix is %p', (suffix) => {
      const { asFragment } = render(
        <StatusBadgeOutline status="ready" labelSuffix={suffix} />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe('AddingIcon', () => {
    it('When the icon is attached', () => {
      const { asFragment } = render(
        <StatusBadgeOutline
          status="running"
          labelSuffix="AddingIcon"
          withExternalLinkIcon={true}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
