import { render } from '@testing-library/react';
import React from 'react';
import { Default as SettingCard, Button, Buttons } from './SettingCard.stories';

describe('SettingCard', () => {
  it('to match snapshot(default)', () => {
    const { asFragment } = render(
      <SettingCard {...(SettingCard.args as any)} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot(button)', () => {
    const { asFragment } = render(<Button {...(Button.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('to match snapshot(buttons)', () => {
    const { asFragment } = render(<Buttons {...(Buttons.args as any)} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
