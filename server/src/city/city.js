'use strict'

const action = {};


/**
 * Returns all books by cityname in Mongo
 */
action.BooksByCityName_Mongo = (req, res, next) => {
	return res.json({});
}

/**
 * Returns all books by cityname in SQL
 */
action.BooksByCityName_SQL = (req, res, next) => {
  return res.json({}) 
}


module.exports = action
