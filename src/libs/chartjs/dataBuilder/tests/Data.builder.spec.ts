import { ChartJSDataBuilder } from '../Data.builder';
import { defaultDataOption } from '../Dataset.builder';

describe('src/utils/statistics/ChartJS2/Data.builder.ts', () => {
  let builder: ChartJSDataBuilder;
  beforeEach(() => {
    builder = new ChartJSDataBuilder();
  });
  it('should get default datasets', () => {
    expect(builder.getDatasets()).toEqual([
      {
        ...defaultDataOption,
        data: [],
      },
    ]);
  });
  it('should return default labels', () => {
    expect(builder.getLabels()).toEqual([]);
  });
  it('should get default data object', () => {
    expect(builder.getData()).toEqual({
      datasets: [
        {
          ...defaultDataOption,
          data: [],
        },
      ],
      labels: [],
    });
  });
  it('should return multipile datasets when given number to constructor', () => {
    builder = new ChartJSDataBuilder(4);
    const dataset = {
      ...defaultDataOption,
      data: [],
    };
    expect(builder.getDatasets()).toEqual([dataset, dataset, dataset, dataset]);
  });
  it('should overwrite dataset option', () => {
    builder = new ChartJSDataBuilder(2, {
      yAxisID: 'test-1',
    });
    const dataset = {
      ...defaultDataOption,
      yAxisID: 'test-1',
      data: [],
    };
    expect(builder.getDatasets()).toEqual([dataset, dataset]);
  });
  it('Should get updated dataset', () => {
    builder = new ChartJSDataBuilder(2);
    const data1 = [1, 2, 3];
    const data2 = [0.1, 0.2, 0.94];
    data1.forEach((i) => builder.datasetBuilders[0].putData(i));
    data2.forEach((j) => builder.datasetBuilders[1].putData(j));
    expect(builder.getDatasets()).toEqual([
      {
        ...defaultDataOption,
        data: [1, 2, 3],
      },
      {
        ...defaultDataOption,
        data: [0.1, 0.2, 0.94],
      },
    ]);
  });
  it('Should get updated dataset with update option', () => {
    builder = new ChartJSDataBuilder(2);
    builder.datasetBuilders[1].updateOption({
      type: 'bar',
      yAxisID: 'test-2',
    });
    const data1 = [1, 2, 3];
    const data2 = [0.1, 0.2, 0.94];
    data1.forEach((i) => builder.datasetBuilders[0].putData(i));
    data2.forEach((j) => builder.datasetBuilders[1].putData(j));
    expect(builder.getDatasets()).toEqual([
      {
        ...defaultDataOption,
        data: [1, 2, 3],
      },
      {
        ...defaultDataOption,
        type: 'bar',
        yAxisID: 'test-2',
        data: [0.1, 0.2, 0.94],
      },
    ]);
  });
  it('edge case', () => {
    builder = new ChartJSDataBuilder(3);
    const testABuilder = builder.datasetBuilders[0];
    const testBBuilder = builder.datasetBuilders[1];
    const testCBuilder = builder.datasetBuilders[2];
    const inputs = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    inputs[0].forEach((input) => testABuilder.putData(input));
    inputs[1].forEach((input) => testBBuilder.putData(input));
    inputs[2].forEach((input) => testCBuilder.putData(input));
    expect(builder.getDatasets()).toEqual([
      {
        ...defaultDataOption,
        data: [1, 2, 3],
      },
      {
        ...defaultDataOption,
        data: [4, 5, 6],
      },
      {
        ...defaultDataOption,
        data: [7, 8, 9],
      },
    ]);
  });
});
