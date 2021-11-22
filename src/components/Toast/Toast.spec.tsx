import { render } from '@testing-library/react';
import React from 'react';
import { Toast } from './Toast';
import { Default as ToastStory } from './Toast.stories';

describe('Alert', () => {
  it.each([
    ['info' as const],
    ['success' as const],
    ['warning' as const],
    ['danger' as const],
  ])('to match snapshot [type: %p]', (type) => {
    const { asFragment } = render(
      <ToastStory {...(ToastStory.args as any)} type={type} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should not return null when children provided', () => {
    const { container } = render(<Toast type="info" children="title" />);
    expect(container.firstChild).not.toEqual(null);
  });
  it('should not return null when title provided', () => {
    const { container } = render(<Toast type="info" title="title" />);
    expect(container.firstChild).not.toEqual(null);
  });
  it('should return null when no content provided', () => {
    const { container } = render(<Toast type="info" toggle />);
    expect(container.firstChild).toEqual(null);
  });
});
