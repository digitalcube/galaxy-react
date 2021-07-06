import { render } from '@testing-library/react';
import React from 'react';
import { FaCircle } from 'react-icons/fa';
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
    [
      {
        href: 'https://getshifter.io',
        children: 'Link',
        icon: <FaCircle className="d-block" />,
      },
    ],
    [
      {
        href: 'https://example.com',
        children: 'Link',
        icon: <FaCircle className="d-block" />,
      },
    ],
  ])('given %o, should match snapshot', (args) => {
    const { asFragment } = render(<ExternalButtonLink {...(args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
