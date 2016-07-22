# hiot-circuit-breaker
A promisified version of [circuit-breaker-js](https://github.com/yammer/circuit-breaker-js)

## Usage
For options and default values, see https://github.com/yammer/circuit-breaker-js/blob/master/README.md.

```javascript
var CircuitBreaker = require('hiot-circuit-breaker');

var breaker = new CircuitBreaker(/* options */);

var command = fetch('http://another-api.com/stuff');
var fallback = Promise.resolve('no stuff');

breaker.run(command, fallback)
  .then(x => console.log(x));
```
