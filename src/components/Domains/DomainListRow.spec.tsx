/* eslint-disable jsx-a11y/anchor-is-valid */
import { render } from '@testing-library/react';
import React from 'react';
import { DomainListRow } from './DomainListRow';

describe('DomainListRow', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(
      <DomainListRow>
        <a href="#">Item</a>
      </DomainListRow>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot [full props]', () => {
    const { asFragment } = render(
      <DomainListRow className="test">
        <a href="#">Item</a>
      </DomainListRow>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
