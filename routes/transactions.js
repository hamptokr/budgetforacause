var express = require('express');
var db = require('../database.js');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {

    getTransactionArray(42, function(transaction_array) {
        console.log(transaction_array);
        res.render('transactions', {transaction_data: transaction_array});
    });

});

function getTransactionArray(user_id, callback) {
    var connection = db.getDatabaseConnection();

    connection.query('SELECT * FROM transactions WHERE user_id = ?', [user_id], function (error, results, fields) {
        if (error) throw error;

        var transaction_array = [];
        for (var i = 0; i < results.length; i++) {
            var row = results[i];
            transaction_array.push({
                id: row['id'],
                date: row['date'],
                name: row['name'],
                amount: row['amount'],
                category: row['category']
            });
            console.log(row);
        }
        callback(transaction_array);
    });

    connection.end();
}


module.exports = router;
