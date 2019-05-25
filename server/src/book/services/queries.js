'use strict'

/**
 * Returns a list of cities mentioned in a specified book title from the SQL Database
 * @function
 * @param {object} data
 * @param {callback} callback
 */
const getAllCityMentionsByBookTitle_SQL = (book_title, callback) => {
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
const getAllBookAndCityMentionsByAuthor_SQL = (author, callback) => {
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
const getBooksByGeolocation_SQL = (geolocation, callback) => {}

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
