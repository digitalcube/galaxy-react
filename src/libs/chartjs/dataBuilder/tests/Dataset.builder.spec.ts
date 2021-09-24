import { ChartJSDatasetBuilder, defaultDataOption } from '../Dataset.builder';

describe('src/utils/statistics/ChartJS2/Dataset.builder.ts', () => {
  let builder: ChartJSDatasetBuilder;
  beforeEach(() => {
    builder = new ChartJSDatasetBuilder();
  });
  it('should return empty data', () => {
    expect(builder.getDataset()).toEqual({
      ...defaultDataOption,
      data: [],
    });
  });
  it('should overwrite the type', () => {
    builder = new ChartJSDatasetBuilder({
      type: 'line',
    });
    expect(builder.getDataset()).toEqual({
      ...defaultDataOption,
      data: [],
      type: 'line',
    });
  });
  it('should update options', () => {
    expect(
      builder
        .updateOption({
          type: 'bar',
          yAxisID: 'test-1',
        })
        .getDataset()
    ).toEqual({
      ...defaultDataOption,
      data: [],
      type: 'bar',
      yAxisID: 'test-1',
    });
  });
  it.each([[[1, 2, 3]], [[1]], [[10, 0.6]]])(
    'When put %p, should the data is %j',
    (inputs) => {
      inputs.forEach((input) => builder.putData(input));
      const dataset = builder.getDataset();
      expect(dataset.data).toEqual(inputs);
    }
  );
});
