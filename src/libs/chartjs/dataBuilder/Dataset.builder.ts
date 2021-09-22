import { ChartDataSets } from 'chart.js';
import { DatasetOption } from './Data.interface';

export const defaultDataOption: DatasetOption = {
  fill: false,
  lineTension: 0.1,
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
  backgroundColor: 'rgba(75,192,192,0.4)',
  borderColor: 'rgba(75,192,192,1)',
  pointBorderColor: 'rgba(75,192,192,1)',
  spanGaps: true,
};

export class ChartJSDatasetBuilder {
  private _dataset: ChartDataSets;

  public constructor(datasetOption: DatasetOption = {}) {
    this._dataset = datasetOption;
    const defaultData = { ...defaultDataOption };
    Object.entries(defaultData).forEach(([key, value]) => {
      if (Object.prototype.hasOwnProperty.call(this._dataset, key)) return;
      // @ts-expect-error
      this._dataset[key] = value;
    });
    if (!Object.prototype.hasOwnProperty.call(this._dataset, 'data')) {
      this._dataset.data = [];
    }
  }

  public updateOption(datasetOption: DatasetOption): this {
    Object.entries(datasetOption).forEach(([key, value]) => {
      // @ts-expect-error
      this._dataset[key] = value;
    });
    return this;
  }

  public putData(data: number) {
    if (!this._dataset.data) this._dataset.data = [];
    this._dataset.data.push(data);
    return this;
  }

  public getDataset(): ChartDataSets {
    return this._dataset;
  }
}
