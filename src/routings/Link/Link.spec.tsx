import React from 'react';
import { render } from '@testing-library/react';
import { Link as RRLink, BrowserRouter } from 'react-router-dom';
import Link from './Link';
import LinkTagProvider, { LinkTagType } from '../../providers/LinkTagProvider';

describe('Link', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Link />);
    expect(baseElement).toBeTruthy();
  });
  it.each([['a' as const], [RRLink]])(
    'link type is %p, should match snapshot',
    (type: LinkTagType) => {
      const { asFragment } = render(
        <BrowserRouter>
          <LinkTagProvider linkType={type}>
            <Link href="/">Home</Link>
            <Link href="https://example.com">External</Link>
          </LinkTagProvider>
        </BrowserRouter>
      );
      expect(asFragment()).toMatchSnapshot();
    }
  );
  it('should not throw error when not using a Link tag of react-router-dom', () => {
    expect(() => {
      render(
        <LinkTagProvider linkType={'a'}>
          <Link href="/">Home</Link>
        </LinkTagProvider>
      );
    }).not.toThrowError();
  });
  it('should throw error when not using a Link tag of react-router-dom', () => {
    expect(() => {
      render(
        <LinkTagProvider linkType={RRLink}>
          <Link href="/">Home</Link>
        </LinkTagProvider>
      );
    }).toThrow(
      'Invariant failed: You should not use <Link> outside a <Router>'
    );
  });
});
