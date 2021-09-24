import React from 'react';
import dayjs from 'dayjs';
import { Meta, Story } from '@storybook/react';
import { UsageGraph, UsageGraphProps } from './UsageGraph';
import { ChartJSDataBuilder } from '../../libs/chartjs/dataBuilder';

const meta: Meta = {
  title: 'Components/UsageGraph',
  component: UsageGraph,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    primaryColor: {
      options: ['#892885', '#05f'],
      control: {
        type: 'radio',
      },
    },
    secondaryColor: {
      options: ['#e2c9e1', '#99bbff'],
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;

const Template: Story<UsageGraphProps> = (args) => {
  const dataBuilder = new ChartJSDataBuilder(1);
  const amountTotalGBBuilder = dataBuilder.datasetBuilders[0].updateOption({
    label: 'Total usage (GB)',
    type: 'line',
    borderColor: args.primaryColor,
    pointBackgroundColor: args.secondaryColor,
    pointBorderColor: args.secondaryColor,
  });
  const items = [
    {
      value: 1,
      date: dayjs('2020/02/01'),
    },
    {
      value: 5,
      date: dayjs('2020/02/10'),
    },
    {
      value: 15,
      date: dayjs('2020/02/20'),
    },
    {
      value: 0,
      date: dayjs('2020/03/1'),
    },
  ];
  items.forEach((item) => {
    dataBuilder.putXLabel(item.date.toDate());
    amountTotalGBBuilder.putData(item.value);
  });
  const data = dataBuilder.getData();

  return <UsageGraph {...args} data={data} />;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  type: 'Transfer',
  usageAmountGB: 10,
  limitGB: 100,
  primaryColor: '#892885',
  secondaryColor: '#e2c9e1',
};
