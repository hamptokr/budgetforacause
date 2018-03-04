var express = require('express');
var db = require('../database.js');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    //
    //    console.log('hi');
    //    console.log(array);
    // });
    //
    // console.log('it was get!');
    // var budget_array = [
    //     {
    //         category: "Food",
    //         target: 50000
    //     },
    //     {
    //         category: "Car",
    //         target: 12000
    //     }
    // ];
    //
    // putBudgetArray(
    //     42,
    //     budget_array,
    //     function () {
    //         console.log('job done')
    //     }
    // );
    // renderBudgetPage(req, res);
    getBudgetArray(42, function(budget_array) {
        res.render('budget', {budget_data: budget_array});
    });

});

router.post('/', function (req, res, next) {
    // update database with shit from post fields
    console.log('it was post');
    renderBudgetPage(req, res);
});

function getBudgetArray(user_id, callback) {
    var connection = db.getDatabaseConnection();

    connection.query('SELECT * FROM budgets WHERE user_id = ?', [user_id], function (error, results, fields) {
        if (error) throw error;

        var budget_array = [];
        for (var i = 0; i < results.length; i++) {
            var row = results[i];
            budget_array.push({
                category: row['category'],
                target: row['target'],
                actual: row['actual'],
                difference: row['target'] - row['actual']
            });
            console.log(row);
        }
        callback(budget_array);
    });

    connection.end();
}

function putBudgetArray(user_id, budget_data, callback) {
    var connection = db.getDatabaseConnection();

    var resolvedCallbacks = 0;

    for (var i = 0; i < budget_data.length; i++) {
        var budget_field = budget_data[i];
        console.log(budget_field);
        connection.query(
            'UPDATE b4c.budgets SET target = ? WHERE user_id = ? AND category = ?',
            [
                budget_field['target'],
                user_id,
                budget_field['category']
            ],
            function (error, results, fields) {
            if (error) throw error;

            resolvedCallbacks++;
            if (resolvedCallbacks === budget_data.length)
                callback();
        });
    }

    connection.end();
}


module.exports = router;
