import React from 'react';
import { render } from '@testing-library/react';
import { Default as FullPageLoading } from './FullPageLoading.stories';

describe('FullPageLoading', () => {
  it('to match snapshot (hidden)', () => {
    const { asFragment } = render(
      <FullPageLoading
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
      <FullPageLoading
        {...{
          show: true,
          shouldShow: jest.fn(),
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
