'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

/**
 * Create city schema
 */
const mentionsSchema = new Schema({
book_id: {
    type: Schema.Types.ObjectId, ref: 'Book', 
     required: true
},
city_id: {
  type: Schema.Types.ObjectId, ref: 'City',
   required: true
},
  type: {
    type: String,
    minlength: 1,
    maxlength: 45
  },
  created_at: Date,
  updated_at: Date
})

/**
 * Create a model using mentions schema
 */
module.exports = mongoose.model('books_cities_mentions', mentionsSchema)