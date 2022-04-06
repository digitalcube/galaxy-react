import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ToggleStatus, ToggleStatusProps } from './ToggleStatus';
import { Toggle } from './Toggle';

const meta: Meta = {
  title: 'Components/ToggleStatus',
  component: ToggleStatus,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ToggleStatusProps> = (args) => (
  <ToggleStatus {...args}>
    <Toggle
      checked={true}
      id="dummy-toggle"
      onChange={() => undefined}
      label="dummy"
      status={{
        isActive: true,
        fontWeight: 'bold',
        inactiveLabel: 'inactiveLabel',
        activeLabel: 'activeLabel',
      }}
    />
  </ToggleStatus>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {};
