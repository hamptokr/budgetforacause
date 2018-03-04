function init(){
    var ctx = document.getElementById('month_bar_chart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            datasets: [{
                data: [16,20,17,40,30,45,12,50,30,20,35,19],
                backgroundColor: [
                    '#1ae19e',
                    '#1ae19e',
                    '#1ae19e',
                    '#1ae19e',
                    '#1ae19e',
                    '#1ae19e',
                    '#1ae19e',
                    '#1ae19e',
                    '#1ae19e',
                    '#1ae19e',
                    '#1ae19e',
                    '#1ae19e'
                ]
            }],
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ]
        },

        // Configuration options go here
        options: {
            legend:{
                display: false
            }
        }

    });

    var pie_chart = document.getElementById('overall_pi_chart').getContext('2d');
    var chart2 = new Chart(pie_chart, {
        type: 'pie',

        // The data for our dataset
        data: {
            datasets: [{
                data: [16,20,17,40,30,40],
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
                'Water',
                'Disaster',
                'Homeless',
                'Veterans',
                'B4C'
            ]
        },

        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    })
}


window.onload = init;