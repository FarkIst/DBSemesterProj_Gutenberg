'use strict'

process.env.NODE_ENV = 'test'

const expect = require('chai').expect
const city = require('./index')

describe('City', () => {
  it('should get city object', () => {
    expect(city).to.be.an('object')
  })
})
