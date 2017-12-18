# promise-from-callback

[![npm version](https://badge.fury.io/js/promise-from-callback.svg)](https://badge.fury.io/js/promise-from-callback)

Plugin for promisifying Node.js style `callback`s into `Promise`s.

Compatible with all valid [Promises/A+](https://promisesaplus.com/) implementations
including [bluebird](https://github.com/petkaantonov/bluebird/), [Q](https://github.com/kriskowal/q), etc..

## Example

```javascript
const fs = require('fs');

// Just requiring the module will extend the existing Promise API
require('promise-from-callback');

Promise
  .fromCallback(callback => fs.readFile('filename.txt', callback))
  .then(buffer => buffer.toString().trim())
  .fromCallback((filename, callback) => fs.readFile(filename, callback))
  // ...
```

## Installation

### NPM

```bash
npm install promise-from-callback
```

### Browser

```html
<script type="application/javascript" src="promise-from-callback.js"></script>
```

## API Reference

### Promise.fromCallback(fn[, thisArg])

```javascript
Promise
  .fromCallback(callback => fs.readFile('test.txt', callback))
  .then(console.log)
```

### Promise#fromCallback(fn[, thisArg])

```javascript
Promise
  .resolve('test.txt')
  .fromCallback((filename, callback) => fs.readFile(filename, callback))
  .then(console.log);
```
