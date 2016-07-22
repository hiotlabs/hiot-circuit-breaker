'use strict';
var assert = require('assert');
var CircuitBreaker = require('..');

describe('fallback', function () {

  it('should resolve with fallback when commande promise rejects', function () {
    var breaker = new CircuitBreaker();
    var rejectingCommand = Promise.reject();
    var fallback = Promise.resolve('fallback')

    return breaker.run(rejectingCommand, fallback)
      .then(x => assert.equal(x, 'fallback'));
  })

});
