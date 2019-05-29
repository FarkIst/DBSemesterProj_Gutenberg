'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

/**
 * Create book schema
 */
const bookSchema = new Schema({
  id: {
    type: Number,
    required: true,
    minlength: 5,
    maxlength: 1000
  },
  title: {
    type: String,
    minlength: 1,
    maxlength: 200
  },
  author: {
    type: String,
    minlength: 1,
    maxlength: 200
  },
  number: {
    type: String,
    minlength: 1,
    maxlength: 45
  },
  created_at: Date,
  updated_at: Date
})

/**
 * Create a model using book schema
 */
module.exports = mongoose.model('Book', bookSchema)