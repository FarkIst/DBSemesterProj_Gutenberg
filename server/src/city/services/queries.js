'use strict'
var sql = require('../../mysqldb.js');

/**
 * Returns a list of books which mention the specified city name from the SQL Database
 * @function
 * @param {object} data
 * @param {callback} callback
 */
const getAllBookMentionsByCityName_SQL = (city_name, result) => {
   console.log(city_name);
   sql.query(" SELECT DISTINCT Books.Id, Books.title, books_cities_pivot.city_id \
   from Books \
   INNER JOIN books_cities_pivot ON Books.Id = books_cities_pivot.book_id \
   INNER JOIN cities ON books_cities_pivot.city_id = cities.id \
   WHERE cities.name = ? ", city_name, function (err, res) {
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
