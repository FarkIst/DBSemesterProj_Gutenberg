'use strict'

process.env.NODE_ENV = 'test'

const expect = require('chai').expect
const book = require('./index')

describe('Book', () => {
  it('should get book object', () => {
    expect(book).to.be.an('object')
  })
})
