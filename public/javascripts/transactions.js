function init(){
    var costs = document.querySelectorAll('.transaction-cost');
    var transactions = document.querySelectorAll('.transaction-guilt');
    var titles = document.querySelectorAll('.transaction-title');
    for(var i = 0; i < costs.length; i++){
        var cost = Number(costs[i].innerHTML.substr(2));
        console.log(cost);
        if(cost < 20){
            transactions[i].innerHTML = "Equal to " + Math.round(cost/3).toString()+ " meal(s)"
        }else if(cost < 50){
            transactions[i].innerHTML = "Equal to " + Math.round(cost/5).toString() + " first-aid kit(s)"
        }else if(cost < 100){
            transactions[i].innerHTML = "Equal to " + Math.round(cost/10).toString() + " water crate(s)"
        }else{
            transactions[i].innerHTML = "Equal to " + Math.round(cost/50).toString() + " kids' school supplies"
        }
        if(titles[i].innerHTML.indexOf('CHARITY') != -1){
            titles[i].style.color = 'blue';
            transactions[i].innerHTML = "Thank You!";
        }
    }

}

window.onload = init;