import React from 'react';
import { render } from '@testing-library/react';
import { Default as Loading } from './Loading.stories';

describe('Loading', () => {
  it('to match snapshot (hidden)', () => {
    const { asFragment } = render(
      <Loading
        {...{
          show: false,
          shouldShow: jest.fn(),
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot (open)', () => {
    const { asFragment } = render(
      <Loading
        {...{
          show: true,
          shouldShow: jest.fn(),
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
