import React, { useEffect } from 'react';
import { Meta, Story } from '@storybook/react';
import { Loading, LoadingProps } from './Loading';
import { useState } from 'react';

const meta: Meta = {
  title: 'Components/Loading',
  component: Loading,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<LoadingProps> = (args) => {
  const [show, shouldShow] = useState(args.show);

  useEffect(() => {
    shouldShow(args.show);
  }, [args.show, shouldShow]);

  return (
    <>
      <Loading
        {...{
          show,
          shouldShow,
        }}
      />
      <button
        onClick={() => {
          shouldShow(true);
        }}
      >
        Show
      </button>
    </>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  show: true,
};
