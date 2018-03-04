var express = require('express');
var db = require('../database.js');
var router = express.Router();

router.get('/', function(req,res,next){
   getCauseArray(42, function(cause_array) {
      console.log(cause_array);
       res.render('cause', {cause_data: cause_array});
   });
});


function getCauseArray(user_id, callback) {
    var connection = db.getDatabaseConnection();

    connection.query('SELECT * FROM cause_split WHERE user_id = ?', [user_id], function (error, results, fields) {
        if (error) throw error;

        var cause_array = [];
        for (var i = 0; i < results.length; i++) {
            var row = results[i];
            cause_array.push({
                charityType: row['charity_type'],
                percentage: row['percentage']
            });
            console.log(row);
        }
        callback(cause_array);
    });

    connection.end();
}

module.exports = router;
