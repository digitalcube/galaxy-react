import { render } from '@testing-library/react';
import React from 'react';
import { Default as Layout } from './Layout.stories';

describe('Layout', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(
      <Layout {...(Layout.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
