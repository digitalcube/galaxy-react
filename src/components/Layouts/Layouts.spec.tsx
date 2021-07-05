import { render } from '@testing-library/react';
import React from 'react';
import { Default as Layouts } from './Layouts.stories';

describe('Layouts', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(
      <Layouts {...(Layouts.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
