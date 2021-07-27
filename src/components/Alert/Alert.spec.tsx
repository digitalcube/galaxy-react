import { render } from '@testing-library/react';
import React from 'react';
import { Alert } from './Alert';
import { Default as AlertStory } from './Alert.stories';

describe('Alert', () => {
  it.each([
      ['info' as const],
      ['success' as const],
      ['warning' as const],
      ['danger' as const]
  ])('to match snapshot [type: %p]', (type) => {
    const { asFragment } = render(<AlertStory {...(AlertStory.args as any)} type={type} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should not return null when children provided', () => {
    const { container } = render(<Alert type="info" children="ttle" />)
    expect(container.firstChild).not.toEqual(null)
  })
  it('should not return null when title provided', () => {
    const { container } = render(<Alert type="info" title="ttle" />)
    expect(container.firstChild).not.toEqual(null)
  })
  it('should return null when no content provided', () => {
    const { container } = render(<Alert type="info" />)
    expect(container.firstChild).toEqual(null)
  })
});
