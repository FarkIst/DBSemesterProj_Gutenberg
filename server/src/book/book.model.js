'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

/**
 * Create book schema
 */
const bookSchema = new Schema({
  id: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1000
  },
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 200
  },
  author: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 200
  },
  content: {
    type: String,
    required: true,
  },
  created_at: Date,
  updated_at: Date
})

/**
 * Create a model using book schema
 */
module.exports = mongoose.model('Book', bookSchema)