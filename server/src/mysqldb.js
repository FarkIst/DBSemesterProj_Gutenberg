'user strict';

require('dotenv').config();
var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASS,
  database: 'Gutenberg'
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;