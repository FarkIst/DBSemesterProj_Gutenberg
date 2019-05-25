'use strict'

const action = {}


/**
 * Returns all cities by title in Mongo
 */
action.CitiesByBookTitleMongo = (req, res, next) => {
	return res.json({}); 
}

/**
 * Returns all cities by title in SQL
 */
action.CitiesByBookTitleSQL = (req, res, next) => { 
  return res.json({});
}

/**
 * Returns all books and cities by author in Mongo
 */
action.BooksCitiesByAuthorMongo = (req, res, next) => { 
  return res.json({});
}

/**
 * Returns all books and cities by author in SQL
 */
action.BooksCitiesByAuthorSQL = (req, res, next) => {
  return res.json({});
}

/**
 * Returns all books by geolocation in Mongo
 */
action.BooksByGeoMongo = (req, res, next) => {
	return res.json({});
}

/**
 * Returns all books by geolocation in SQL
 */
action.BooksByGeoSQL = (req, res, next) => { 
  return res.json({});
}

module.exports = action
