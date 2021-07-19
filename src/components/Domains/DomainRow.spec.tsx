import { render } from '@testing-library/react';
import React from 'react';
import { DomainRow } from './DomainRow';

describe('DomainRow', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(
      <DomainRow>
        <a href="#">Item</a>
      </DomainRow>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot [full props]', () => {
    const { asFragment } = render(
      <DomainRow className="test">
        <a href="#">Item</a>
      </DomainRow>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
