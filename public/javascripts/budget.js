function init() {
  var categories = [];
  var target = [];
  var actual = [];
  for (var i = 0; i < data.length; i++) {
    categories.push(data[i].category);
    target.push(data[i].target);
    actual.push(data[i].actual);
  }
    var barChartData = {
        labels: categories,
        datasets: [{
            label: 'Current',
            backgroundColor: '#99ffd6',
            borderColor: '#99ffd6',
            borderWidth: 1,
            data: actual
        }, {
            label: 'Goal',
            backgroundColor: '#1ae19e',
            borderColor: '#1ae19e',
            borderWidth: 1,
            data: target
        }]
    };
  var ctx = document.getElementById('canvas').getContext('2d');
  window.myBar = new Chart(ctx, {
      type: 'bar',
      data: barChartData,
      options: {
          responsive: true,
          legend: {
              position: 'bottom',
          }
      }
  });
  // new Chartist.Bar('#budget-chart', {
  //   labels: categories,
  //   series: [
  //     target,
  //     actual
  //   ]
  // }, {
  //   seriesBarDistance: 10,
  //   axisX: {
  //     offset: 60
  //   },
  //   axisY: {
  //     offset: 80,
  //     scaleMinSpace: 15
  //   }
  // });
    var difElements = document.querySelectorAll('.difference');
    difElements.forEach(function(element){
        if(Number(element.textContent) < 0){
            element.style.color = '#ff471a';
            element.style.backgroundColor = '#ffebe6';
        }else{
            element.style.backgroundColor = '#e6fff5';
        }
    });
}

window.onload = init;
