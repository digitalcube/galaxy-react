import { render } from '@testing-library/react';
import React from 'react';
import { Layouts } from './Layouts';
import { Default as LayoutsStory } from './Layouts.stories';

describe('Layouts', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(
      <LayoutsStory {...(LayoutsStory.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it.each([
    [undefined, 'shifter-dashboard'],
    ['login' as const, 'shifter-dashboard-login'],
    ['signup' as const, 'shifter-dashboard-signup'],
    ['admin' as const, 'shifter-dashboard'],
  ])(
    'variant is %p, should add the %p class name',
    (variant, expectedClassName) => {
      const { container } = render(
        <Layouts variant={variant}>Dummy content</Layouts>
      );
      expect(container.firstChild).toHaveClass(expectedClassName);
    }
  );
});
