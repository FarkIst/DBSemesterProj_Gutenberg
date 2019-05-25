'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

/**
 * Create city schema
 */
const citySchema = new Schema({
  id: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1000
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 200
  }, 
  geolocation: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  created_at: Date,
  updated_at: Date
})

/**
 * Create a model using book schema
 */
module.exports = mongoose.model('City', citySchema)