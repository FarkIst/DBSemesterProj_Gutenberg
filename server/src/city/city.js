'use strict'
var Query = require('./services/queries.js');

const action = {};


/**
 * Returns all books by cityname in Mongo
 */
action.BooksByCityName_Mongo = (req, res, next) => {
	return res.json({sup: "DUCK"});
}

/**
 * Returns all books by cityname in SQL
 */
action.BooksByCityName_SQL = (req, res, next) => {
  Query.BooksByCityName_SQL(req.query.name, function (err, result) {
    if (err)
      res.send(err);
    console.log('res', result);
    res.send(result);
  });
}

module.exports = action
