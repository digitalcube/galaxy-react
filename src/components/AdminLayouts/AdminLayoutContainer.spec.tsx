import { render } from '@testing-library/react';
import React from 'react';
import { Default as AdminLayoutContainerStory } from './AdminLayoutContainer.stories';

describe('AdminLayoutContainer', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(
      <AdminLayoutContainerStory {...(AdminLayoutContainerStory.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
