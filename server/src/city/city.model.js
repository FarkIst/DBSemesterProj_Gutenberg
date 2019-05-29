'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

/**
 * Create city schema
 */
const citySchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  utf_name: {
    type: String,
    minlength: 1,
    maxlength: 100
  }, 
  ascii_name: {
    type: String,
    minlength: 1,
    maxlength: 100
  }, 
  latitude: {
    type: Number,
  }, 
  longitude: {
    type: Number,
  }, 
  geoname_id: {
    type: String,
    minlength: 1,
    maxlength: 100
  },
  created_at: Date,
  updated_at: Date
})

/**
 * Create a model using book schema
 */
module.exports = mongoose.model('City', citySchema)