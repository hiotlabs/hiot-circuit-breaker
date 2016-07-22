'use strict';
var assert = require('assert');
var CircuitBreaker = require('..');

describe('success', function () {

  it('should resolve with command promise', function () {
    var breaker = new CircuitBreaker();
    var command = Promise.resolve('command');
    var fallback = Promise.resolve('fallback')

    return breaker.run(command, fallback)
      .then(x => assert.equal(x, 'command'));
  })
});
