'use strict'

var Query = require('./services/queries.js');
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
  Query.CitiesByBookTitleSQL(req.query.title, function (err, result) {
    if (err)
      res.send(err);
    console.log('res', result);
    res.send(result);
  });
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
  Query.BooksCitiesByAuthorSQL(req.query.author, function (err, result) {
    if (err)
      res.send(err);
    console.log('res', result);
    res.send(result);
  });
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
  Query.BooksByGeoSQL(req.query.latitude, req.query.longitude, function (err, result) {
    if (err)
      res.send(err);
    console.log('res', result);
    res.send(result);
  });
}

module.exports = action
