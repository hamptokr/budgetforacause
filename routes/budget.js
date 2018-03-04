var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    //
    //    console.log('hi');
    //    console.log(array);
    // });
    //
    // console.log('it was get!');
    var budget_array = [
        {
            category: "Food",
            amount: 50000
        },
        {
            category: "Car",
            amount: 12000
        }
    ];

    putBudgetArray(
        42,
        budget_array,
        function () {
            console.log('job done')
        }
    );
    renderBudgetPage(req, res);
});

router.post('/', function (req, res, next) {
    // update database with shit from post fields
    console.log('it was post');
    renderBudgetPage(req, res);
});

function getDatabaseConnection() {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'budgetforacausesql.cgcmts38rmc9.us-east-1.rds.amazonaws.com',
        user: 'jmk',
        password: 'The_Singleton_Pattern',
        database: 'b4c'
    });

    connection.connect();
    return connection;
}

function getBudgetArray(user_id, callback) {
    var connection = getDatabaseConnection();

    connection.query('SELECT * FROM budgets WHERE user_id = ?', [user_id], function (error, results, fields) {
        if (error) throw error;

        var budget_array = [];
        for (var i = 0; i < results.length; i++) {
            var row = results[i];
            budget_array.push({
                category: row['category'],
                amount: row['amount']
            });
            console.log(row);
        }
        callback(budget_array);
    });

    connection.end();
}

function putBudgetArray(user_id, budget_data, callback) {
    var connection = getDatabaseConnection();

    var resolvedCallbacks = 0;

    for (var i = 0; i < budget_data.length; i++) {
        var budget_field = budget_data[i];
        console.log(budget_field);
        connection.query(
            'UPDATE b4c.budgets SET amount = ? WHERE user_id = ? AND category = ?',
            [
                budget_field['amount'],
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

function renderBudgetPage(req, res) {
    res.render('index', {title: 'budget my dude'});
}

module.exports = router;
