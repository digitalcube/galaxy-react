import React from 'react';
import { render } from '@testing-library/react';
import { Default as Copyright } from './Copyright.stories';

describe('Copyright', () => {
  it('to match snapshot', () => {
    const { asFragment } = render(
      <Copyright
        {...{
          serviceName: 'Shifter',
          today: new Date('2010-01-01'),
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
