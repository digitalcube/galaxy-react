import { render } from '@testing-library/react';
import React from 'react';
import { DomainListItemTitle } from './DomainListItemTitle';

describe('DomainListItemTitle', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(
      <DomainListItemTitle>
        <a href="#">Item</a>
      </DomainListItemTitle>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot [full props]', () => {
    const { asFragment } = render(
      <DomainListItemTitle className="test">
        <a href="#">Item</a>
      </DomainListItemTitle>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
