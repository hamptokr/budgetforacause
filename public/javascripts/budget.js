function init() {
  let categories = [];
  let target = [];
  let actual = [];
  for (let i = 0; i < data.length; i++) {
    categories.push(data[i].category);
    target.push(data[i].target);
    actual.push(data[i].actual);
  }
  new Chartist.Bar('#budget-chart', {
    labels: categories,
    series: [
      target,
      actual
    ]
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
