'use strict';
var assert = require('assert');
var CircuitBreaker = require('..');

describe('fallback', function () {
  this.timeout(5000);

  it('should accept any value as fallback', function () {
    var breaker = new CircuitBreaker();
    var rejectingCommand = Promise.reject();

    return breaker.run(rejectingCommand, 'fallback')
      .then(x => assert.equal(x, 'fallback'));
  })

  it('should resolve with fallback when commande promise rejects', function () {
    var breaker = new CircuitBreaker();
    var rejectingCommand = Promise.reject();
    var fallback = Promise.resolve('fallback')

    return breaker.run(rejectingCommand, fallback)
      .then(x => assert.equal(x, 'fallback'));
  })
});
