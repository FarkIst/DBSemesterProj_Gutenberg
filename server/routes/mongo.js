'use strict'

const express = require('express')
const router = express.Router()
const city = require('../src/city')
const book = require('../src/book')

router.get('/CitiesByBook', book.CitiesByBookTitleMongo)
router.get('/BooksCitiesByAuthor', book.BooksCitiesByAuthorMongo)
router.get('/BookByGeo', book.BooksByGeoMongo)
router.get('/BooksByCity', city.BooksByCityName_Mongo)

module.exports = router
