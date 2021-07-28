import { render } from '@testing-library/react';
import React from 'react';
import { Default as CopyClipboardStory } from './CopyClipboard.stories';

describe('CopyClipboard', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(
      <CopyClipboardStory {...(CopyClipboardStory.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
