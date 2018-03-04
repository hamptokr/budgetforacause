function init(){
    var educationNum = document.getElementById('education');
    var waterNum = document.getElementById('water');
    var disasterNum = document.getElementById('disaster');
    var homelessNum = document.getElementById('homeless');
    var veteransNum = document.getElementById('veterans');
    var donateNum = document.getElementById('BackToUs');

    document.getElementById('educationLabel').innerHTML = educationNum.value;
    document.getElementById('waterLabel').innerHTML = waterNum.value;
    document.getElementById('disasterLabel').innerHTML = disasterNum.value;
    document.getElementById('homelessLabel').innerHTML = homelessNum.value;
    document.getElementById('veteranLabel').innerHTML = veteransNum.value;
    document.getElementById('donateLabel').innerHTML = donateNum.value;

    educationNum.oninput = function(){
        document.getElementById('educationLabel').innerHTML = educationNum.value;
    };
    waterNum.oninput = function(){
        document.getElementById('waterLabel').innerHTML = waterNum.value;
    };
    disasterNum.oninput = function(){
        document.getElementById('disasterLabel').innerHTML = disasterNum.value;
    };
    homelessNum.oninput = function(){
        document.getElementById('homelessLabel').innerHTML = homelessNum.value;
    };
    veteransNum.oninput = function(){
        document.getElementById('veteranLabel').innerHTML = veteransNum.value;
    };
    donateNum.oninput = function(){
        document.getElementById('donateLabel').innerHTML = donateNum.value;
    };

    var ctx = document.getElementById('donut_chart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: {
            datasets: [{
                data: [educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value],
                backgroundColor: [
                    '#b3ffb3',
                    '#80ff80',
                    '#4dff4d',
                    '#80ff80',
                    '#4dff4d',
                    '#80ff80'
                ]
            }],
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Education',
                'Water Conservation',
                'Disaster Relief',
                'Homeless Support',
                'Veteran Funds',
                'B4C'
            ]
        },

        // Configuration options go here
        options: {}
    });
    educationNum.onmouseup = function(){
        chart.chart.config.data.datasets[0].data = [educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value];
        chart.update();
    };
    waterNum.onmouseup = function(){
        chart.chart.config.data.datasets[0].data = [educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value];
        chart.update();
    };
    disasterNum.onmouseup = function(){
        chart.chart.config.data.datasets[0].data = [educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value];
        chart.update();
    };
    homelessNum.onmouseup = function(){
        chart.chart.config.data.datasets[0].data = [educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value];
        chart.update();
    };
    veteransNum.onmouseup = function(){
        chart.chart.config.data.datasets[0].data = [educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value];
        chart.update();
    };
    donateNum.onmouseup = function(){
        chart.chart.config.data.datasets[0].data = [educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value];
        chart.update();
    };
}


window.onload = init;