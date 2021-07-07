import { render } from '@testing-library/react';
import React from 'react';
import { Default as ContentHeader } from './ContentHeader.stories';

describe('ContentHeader', () => {
  it('to match snapshot [column %p | item %p]', () => {
    const { asFragment } = render(
      <ContentHeader {...(ContentHeader.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
