import React from 'react';
import { render } from '@testing-library/react';
import { Default as AdminLayoutMain } from './AdminLayoutMain.stories';

describe('AdminLayoutMain', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(
      <AdminLayoutMain>
        <h1>hello</h1>
      </AdminLayoutMain>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
