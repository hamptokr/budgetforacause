exports.getDatabaseConnection = function() {
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