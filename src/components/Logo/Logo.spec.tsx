import React from 'react';
import { render } from '@testing-library/react';
import { Default as Logo } from './Logo.stories';
import { BrandName } from './Logo';

describe('Logo', () => {
  it.each([['shifter' as const], ['digitalcube' as const]])(
    'to match snapshot [%p]',
    (name: BrandName) => {
      const { asFragment } = render(
        <Logo
          {...{
            name,
            width: 50,
          }}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    }
  );
});
