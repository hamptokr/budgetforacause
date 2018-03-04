function init(){
    var costs = document.querySelectorAll('.transaction-cost');
    var transactions = document.querySelectorAll('.transaction-guilt');

    for(var i = 0; i < costs.length; i++){
        var cost = Number(costs[i].innerHTML.substr(2));
        console.log(cost);
        if(cost < 20){
            transactions[i].innerHTML = "Equal to " + Math.round(cost/3).toString()+ " meals"
        }else if(cost < 50){
            transactions[i].innerHTML = "Equal to " + Math.round(cost/5).toString() + " first-aid kits"
        }else if(cost < 100){
            transactions[i].innerHTML = "Equal to " + Math.round(cost/10).toString() + " water crates"
        }else{
            transactions[i].innerHTML = "Equal to " + Math.round(cost/50).toString() + " youth educations"
        }
    }

}

window.onload = init;