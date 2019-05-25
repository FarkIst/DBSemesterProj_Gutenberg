'use strict'

/**
 * Returns a list of books which mention the specified city name from the SQL Database
 * @function
 * @param {object} data
 * @param {callback} callback
 */
const getAllBookMentionsByCityName_SQL = (city_name, callback) => {
};

/**
 * Returns a list of books which mention the specified city name from the MongoDB Database
 * @function
 * @param {object} data
 * @param {callback} callback
 */
const getAllBookMentionsByCityName_Mongo = (city_name, callback) => {
};


module.exports = {
   BooksByCityName_Mongo: getAllBookMentionsByCityName_Mongo,
   BooksByCityName_SQL: getAllBookMentionsByCityName_SQL,
}
