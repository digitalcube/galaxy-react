/**
 * @see https://stackoverflow.com/questions/37144031/background-colour-of-line-charts-in-chart-js
 */
export const chartJSBackgroundColorPlugin = {
  beforeDraw: function (chart: any) {
    if (
      !chart.config.options.plugins ||
      !chart.config.options.plugins.chartArea
    ) {
      return;
    }
    const { backgroundColor } = chart.config.options.plugins.chartArea;
    if (!backgroundColor) return;
    const ctx = chart.chart.ctx;
    const chartArea = chart.chartArea;
    ctx.save();
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(
      chartArea.left,
      chartArea.top,
      chartArea.right - chartArea.left,
      chartArea.bottom - chartArea.top
    );
    ctx.restore();
  },
};
