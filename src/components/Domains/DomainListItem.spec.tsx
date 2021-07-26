/* eslint-disable jsx-a11y/anchor-is-valid */
import { render } from '@testing-library/react';
import React from 'react';
import { DomainListItem } from './DomainListItem';

describe('DomainListItem', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(
      <DomainListItem domainName="example.com">
        <a href="#">Item</a>
      </DomainListItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
