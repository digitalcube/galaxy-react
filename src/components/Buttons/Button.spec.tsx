import { render } from '@testing-library/react';
import React from 'react';
import { Button } from './Button';
import { Default as StoryButton } from './Button.stories';

describe('Button', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(<StoryButton {...(StoryButton.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it.each([
    [{fontWeight: 'bold' as const}, 'font-weight-bold'],
    [{fontWeight: 'normal' as const}, 'font-weight-normal'],
    [{fontWeight: 'light' as const}, 'font-weight-light'],
    [{textAlign: 'center' as const}, 'text-center'],
    [{textAlign: 'left' as const}, 'text-left'],
    [{textAlign: 'right' as const}, 'text-right'],
    [{rounded: true}, 'rounded'],
  ])('given %p, should contain %p class name', (props, className) => {
    const { container } = render(<Button {...props} />)
    expect(container.firstChild).toHaveClass(className)
  })
});
