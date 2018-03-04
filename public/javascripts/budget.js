function init() {
  let categories = [];
  let series = [];
  for (let i = 0; i < data.length; i++) {
    categories.push(data[i].category);
    series.push([data[i].actual, data[i].target])
  }
  new Chartist.Bar('#budget-chart', {
    labels: categories,
    series: series
  }, {
    seriesBarDistance: 10,
    axisX: {
      offset: 60
    },
    axisY: {
      offset: 80,
      scaleMinSpace: 15
    }
  });
}

window.onload = init;
