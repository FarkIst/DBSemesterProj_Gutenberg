'use strict'

const express = require('express')
const router = express.Router()
const city = require('../src/city')
const book = require('../src/book')

router.get('/CitiesByBook', book.CitiesByBookTitleSQL)
router.get('/BooksCitiesByAuthor', book.BooksCitiesByAuthorSQL)
router.get('/BookByGeo', book.BooksByGeoSQL)
router.get('/BooksByCity', city.BooksByCityName_SQL)

module.exports = router
