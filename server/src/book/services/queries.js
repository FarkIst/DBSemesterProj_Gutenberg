'use strict'

var sql = require('../../mysqldb.js');

/**
 * Returns a list of cities mentioned in a specified book title from the SQL Database
 * @function
 * @param {object} data
 * @param {callback} callback
 */
const getAllCityMentionsByBookTitle_SQL = (book_title, result) => {
  console.log(book_title);
  sql.query("SELECT DISTINCT Cities.Id, Cities.latitude, Cities.longitude \
from Cities \
INNER JOIN books_cities_mentions ON Cities.Id = books_cities_mentions.city_id \
INNER JOIN books ON books_cities_mentions.book_id = books.id \
WHERE books.title =  ? ", book_title, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      }
      else {
        result(null, res);
      }
    });
};

/**
 * Returns a list of cities mentioned in a specified book title from the MongoDB Database
 * @function
 * @param {object} data
 * @param {callback} callback
 */
const getAllCityMentionsByBookTitle_Mongo = (book_title, callback) => {
};

/**
 * Returns a list of books and cities related to a specified author from the SQL Database
 * @function
 * @param {object} data
 * @param {callback} callback
 */
const getAllBookAndCityMentionsByAuthor_SQL = (author, result) => {
  const answer = {};
  sql.query("SELECT DISTINCT Books.Id, Books.title, Books.author \
from Books \
WHERE books.author = ? ", author, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      }
      else {
        answer.books = res;
      }});
  sql.query("SELECT DISTINCT Cities.Id, Cities.latitude, Cities.longitude \
from Cities \
INNER JOIN books_cities_mentions ON Cities.Id = books_cities_mentions.city_id \
INNER JOIN books ON books_cities_mentions.book_id = books.id \
WHERE books.author =  ? ", author, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      }
      else {
        answer.cities = res;
        result(null, answer);
      }
    });
    };

/**
 * Returns a list of books and cities related to a specified author from the MongoDB Database
 * @function
 * @param {object} data
 * @param {callback} callback
 */
const getAllBookAndCityMentionsByAuthor_Mongo = (author, callback) => {
};

/**
 * Returns a list of books mentioning a city nearby a specified geolocation from the SQL Database
 * @function
 * @param {object} data
 * @param {callback} callback
 */
const getBooksByGeolocation_SQL = (latitude, longitude, result) => {
  sql.query("SELECT DISTINCT b.id, b.title, b.author, (6371 * acos(cos(radians("+latitude+")) * cos(radians(c.latitude)) * cos(radians(c.longitude) - radians("+longitude+")) + sin(radians("+latitude+")) * sin(radians(c.latitude)))) AS distance \
  from Books b \
  INNER JOIN books_cities_mentions ON b.Id = books_cities_mentions.book_id \
  INNER JOIN cities c ON books_cities_mentions.city_id = c.id \
  HAVING distance < "+process.env.distance+ " \
  ORDER BY distance asc ", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      }
      else {
        console.log(res);
        result(null, res);
      }
    });
}

/**
 * Returns a list of books mentioning a city nearby a specified geolocation from the MongoDB Database
 * @function
 * @param {object} data
 * @param {callback} callback
 */
const getBooksByGeolocation_Mongo = (geolocation, callback) => { }

module.exports = {
  CitiesByBookTitleMongo: getAllCityMentionsByBookTitle_Mongo,
  CitiesByBookTitleSQL: getAllCityMentionsByBookTitle_SQL,
  BooksCitiesByAuthorMongo: getAllBookAndCityMentionsByAuthor_Mongo,
  BooksCitiesByAuthorSQL: getAllBookAndCityMentionsByAuthor_SQL,
  BooksByGeoMongo: getBooksByGeolocation_Mongo,
  BooksByGeoSQL: getBooksByGeolocation_SQL
}
