import React, { FC } from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

const meta: Meta = {
  title: 'Components/Buttons',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    textAlign: {
      options: ['right', 'center', 'left'],
      control: { type: 'radio' },
    },
    fontWeight: {
      options: ['light', 'normal', 'bold'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} />
  </>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  children: 'Button name',
  disabled: false,
  block: true,
  textAlign: undefined,
  rounded: false,
  fontWeight: undefined,
  loading: false,
};

const ButtonCatalog: FC<{
  disabled: boolean;
} & Partial<Pick<ButtonProps, 'tag'>>
> = ({disabled ,tag="button"}) => (
  <div>
  <div className="mb-2">
    <Button tag={tag} disabled={disabled} color="primary">
      primary
    </Button>{' '}
    <Button tag={tag} disabled={disabled} color="secondary">
      secondary
    </Button>{' '}
    <Button tag={tag} disabled={disabled} color="success">
      success
    </Button>{' '}
    <Button tag={tag} disabled={disabled} color="info">
      info
    </Button>{' '}
    <Button tag={tag} disabled={disabled} color="warning">
      warning
    </Button>{' '}
    <Button tag={tag} disabled={disabled} color="danger">
      danger
    </Button>{' '}
    <Button tag={tag} disabled={disabled} color="link">
      link
    </Button>{' '}
  </div>
  <div>
    <Button tag={tag} disabled={disabled} outline bordered color="primary">
      primary
    </Button>{' '}
    <Button tag={tag} disabled={disabled} outline bordered color="secondary">
      secondary
    </Button>{' '}
    <Button tag={tag} disabled={disabled} outline bordered color="success">
      success
    </Button>{' '}
    <Button tag={tag} disabled={disabled} outline bordered color="info">
      info
    </Button>{' '}
    <Button tag={tag} disabled={disabled} outline bordered color="warning">
      warning
    </Button>{' '}
    <Button tag={tag} disabled={disabled} outline bordered color="danger">
      danger
    </Button>
  </div>
  <div>
    <Button tag={tag} disabled={disabled} outline color="primary">
      primary
    </Button>{' '}
    <Button tag={tag} disabled={disabled} outline color="secondary">
      secondary
    </Button>{' '}
    <Button tag={tag} disabled={disabled} outline color="success">
      success
    </Button>{' '}
    <Button tag={tag} disabled={disabled} outline color="info">
      info
    </Button>{' '}
    <Button tag={tag} disabled={disabled} outline color="warning">
      warning
    </Button>{' '}
    <Button tag={tag} disabled={disabled} outline color="danger">
      danger
    </Button>
  </div>
  </div>
)

const ButtonShowCases: Story<{
  disabled: boolean;
}> = (args) => <ButtonCatalog {...args} />

export const Buttons = ButtonShowCases.bind({})
Buttons.args = {
  disabled: false,
}

const LinkShowCases: Story<{
  disabled: boolean;
}> = (args) => <ButtonCatalog {...args} tag="a" />

export const LinkButtons = LinkShowCases.bind({})
LinkButtons.args = {
  disabled: false,
}