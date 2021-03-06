'use strict';
const assert = require('assert');
const CircuitBreaker = require('circuit-breaker-js');

module.exports = class {

  constructor(opts) {
    this.breaker = new CircuitBreaker(opts);
  }

  run(command, fallback) {
    command = Promise.resolve(command);
    fallback = Promise.resolve(fallback);

    return new Promise((resolve, reject) => {
      var cmd = (success, failed) => {
        command
          .then(x => {
            success();
            resolve(x);
          })
          .catch(err => {
            failed();
            resolve(fallback);
          });
      };

      this.breaker.run(cmd, () => resolve(fallback));
    });
  }
}
