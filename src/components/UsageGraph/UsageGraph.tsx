import React, { FC, useMemo } from 'react';
import { Doughnut, Line, ChartData } from 'react-chartjs-2';
import { ChartOptions, ChartData as ChartJSData } from 'chart.js';
import { Col, Row } from 'reactstrap';
import { roundingNumber } from '../../libs/format/number.utils';
import { chartJSBackgroundColorPlugin } from '../../libs/chartjs/plugins/background-color';

const options: ChartOptions = {
  responsive: true,
  legend: {
    display: false,
  },
  plugins: {
    chartArea: {
      backgroundColor: '#f6f5f6',
    },
  },
  scales: {
    gridLines: {
      drawBorder: false,
      display: false,
    },
    scaleLabel: {
      display: false,
    },
    xAxes: [
      {
        type: 'time',
        time: {
          unit: 'day',
          stepSize: 7,
        },
      },
    ],
    yAxes: [
      {
        position: 'left',
        id: 'y-axis-1',
        ticks: {
          min: 0,
          callback: (value) => `${value}GB`,
        },
      },
    ],
  },
};

export const useUsageGraphHook = ({
  limitGB,
  usageAmountGB,
}: {
  limitGB: number;
  usageAmountGB: number;
}) =>
  useMemo(() => {
    const roundedUsageAmountGB = roundingNumber(usageAmountGB);
    const remainUsageGB = (() => {
      const value = limitGB - roundedUsageAmountGB;
      if (value < 0) return 0;
      return roundingNumber(value);
    })();
    const usagePercent = (() => {
      const usage = roundedUsageAmountGB / limitGB;
      return roundingNumber(usage * 100);
    })();
    return {
      roundedUsageAmountGB,
      remainUsageGB,
      usagePercent,
    };
  }, [limitGB, usageAmountGB]);

export type UsageGraphProps = {
  data: ChartData<ChartJSData>;
  usageAmountGB: number;
  limitGB: number;
  autoChargeTargetGB?: number;
  type: 'Transfer' | 'Storage';
  primaryColor: string;
  secondaryColor: string;
};

export const UsageGraph: FC<UsageGraphProps> = ({
  data,
  usageAmountGB,
  limitGB,
  type,
  autoChargeTargetGB,
  primaryColor,
  secondaryColor,
}) => {
  const {
    roundedUsageAmountGB,
    remainUsageGB,
    usagePercent,
  } = useUsageGraphHook({ limitGB, usageAmountGB });
  return (
    <Row>
      <Col md="8">
        <Line
          options={options}
          data={data}
          plugins={[chartJSBackgroundColorPlugin]}
        />
      </Col>
      <Col md="4">
        <Doughnut
          options={{
            responsive: true,
            legend: {
              display: false,
            },
          }}
          data={{
            labels: ['Usage amount(GB)', 'Remain usage(GB'],
            datasets: [
              {
                data: [roundedUsageAmountGB, remainUsageGB],
                backgroundColor: [
                  remainUsageGB === 0 ? 'red' : secondaryColor,
                  primaryColor,
                ],
              },
            ],
          }}
        />
        <p className="text-center text-primary">
          <small>
            {roundedUsageAmountGB}
            GB of {limitGB} GB
          </small>
        </p>
        <p className="text-center text-primary">
          <span
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
            }}
          >
            {usagePercent} %
          </span>
          <br />
          <small>of your monthly {type} has been used.</small>
        </p>
        {autoChargeTargetGB !== undefined ? (
          <p className="text-center text-primary">
            <span
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
              }}
            >
              {autoChargeTargetGB > 0 ? autoChargeTargetGB : 0} GB
            </span>
            <br />
            <small>
              of your {type} pay-as-you-go
              <br />
              ($0.18 / GB).
            </small>
          </p>
        ) : null}
      </Col>
    </Row>
  );
};
