function init(){
    var educationNum = document.getElementById('education');
    var waterNum = document.getElementById('water');
    var disasterNum = document.getElementById('disaster');
    var homelessNum = document.getElementById('homeless');
    var veteransNum = document.getElementById('veterans');
    var donateNum = document.getElementById('BackToUs');

    setLabels(educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value);

    // document.getElementById('educationLabel').innerHTML = educationNum.value;
    // document.getElementById('waterLabel').innerHTML = waterNum.value;
    // document.getElementById('disasterLabel').innerHTML = disasterNum.value;
    // document.getElementById('homelessLabel').innerHTML = homelessNum.value;
    // document.getElementById('veteranLabel').innerHTML = veteransNum.value;
    // document.getElementById('donateLabel').innerHTML = donateNum.value;

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
                data: returnPercentages(educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value),
                backgroundColor: [
                    '#b3ecff',
                    '#e6ccff',
                    '#ffcce6',
                    '#ccff99',
                    '#ff9999',
                    '#ffcc80'
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
        chart.chart.config.data.datasets[0].data = returnPercentages(educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value);
        chart.update();
        setLabels(educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value);
    };
    waterNum.onmouseup = function(){
        chart.chart.config.data.datasets[0].data = returnPercentages(educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value);
        chart.update();
        setLabels(educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value);
    };
    disasterNum.onmouseup = function(){
        chart.chart.config.data.datasets[0].data = returnPercentages(educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value);
        chart.update();
        setLabels(educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value);
    };
    homelessNum.onmouseup = function(){
        chart.chart.config.data.datasets[0].data = returnPercentages(educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value);
        chart.update();
        setLabels(educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value);
    };
    veteransNum.onmouseup = function(){
        chart.chart.config.data.datasets[0].data = returnPercentages(educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value);
        chart.update();
        setLabels(educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value);
    };
    donateNum.onmouseup = function(){
        chart.chart.config.data.datasets[0].data = returnPercentages(educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value);
        chart.update();
        setLabels(educationNum.value, waterNum.value, disasterNum.value, homelessNum.value, veteransNum.value, donateNum.value);
    };
}
function setLabels(edu, water, dis, home, vet, back){
    var sum = Number(edu) + Number(water) + Number(dis) + Number(home) + Number(vet) + Number(back);
    document.getElementById('educationLabel').innerHTML = Math.round((Number(edu)/sum)*100).toString() + '%';
    document.getElementById('waterLabel').innerHTML = Math.round((Number(water)/sum)*100).toString() + '%';
    document.getElementById('disasterLabel').innerHTML = Math.round((Number(dis)/sum)*100).toString() + '%';
    document.getElementById('homelessLabel').innerHTML = Math.round((Number(home)/sum)*100).toString() + '%';
    document.getElementById('veteranLabel').innerHTML = Math.round((Number(vet)/sum)*100).toString() + '%';
    document.getElementById('donateLabel').innerHTML = Math.round((Number(back)/sum)*100).toString() + '%';
}
function returnPercentages(edu, water, dis, home, vet, back){
    var sum = Number(edu) + Number(water) + Number(dis) + Number(home) + Number(vet) + Number(back);
    var numbers = [
        Math.round((Number(edu)/sum)*100),
        Math.round((Number(water)/sum)*100),
        Math.round((Number(dis)/sum)*100),
        Math.round((Number(home)/sum)*100),
        Math.round((Number(vet)/sum)*100),
        Math.round((Number(back)/sum)*100)
    ];
    return numbers;
}

window.onload = init;