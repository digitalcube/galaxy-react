import { render } from '@testing-library/react';
import React from 'react';
import { ExternalButtonLink } from './ExternalButtonLink';

describe('ExternalButtonLink', () => {
  it.each([
    [
      {
        href: 'https://getshifter.io',
        children: 'Link',
      },
    ],
    [
      {
        href: 'https://example.com',
        children: 'Link',
      },
    ],
  ])('given %o, should match snapshot', (args) => {
    const { asFragment } = render(<ExternalButtonLink {...(args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
