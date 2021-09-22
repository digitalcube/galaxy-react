import { ChartData } from 'chart.js';
import { ChartData as ReactChartData } from 'react-chartjs-2';
import { DatasetOption } from './Data.interface';
import { ChartJSDatasetBuilder } from './Dataset.builder';

export class ChartJSDataBuilder {
  public readonly datasetBuilders: Array<ChartJSDatasetBuilder>;

  private _xLabels: Exclude<ChartData['labels'], undefined> = [];

  constructor(datasetNumber: number = 1, datasetOption?: DatasetOption) {
    this.datasetBuilders = [...Array(datasetNumber)].map(
      () => new ChartJSDatasetBuilder(datasetOption)
    );
  }

  public getDatasets(): ChartData['datasets'] {
    return this.datasetBuilders.map((builder) => builder.getDataset());
  }

  public putXLabel(
    label:
      | string
      | string[]
      | number
      | number[]
      | Date
      | Date[]
  ): this {
    this._xLabels.push(label);
    return this;
  }

  public getLabels(): ChartData['labels'] {
    return this._xLabels;
  }

  public getData(): ReactChartData<ChartData> {
    return {
      datasets: this.getDatasets(),
      labels: this.getLabels(),
    };
  }
}
