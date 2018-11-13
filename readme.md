# is-error-code [![Build Status](https://travis-ci.org/bendrucker/is-error-code.svg?branch=master)](https://travis-ci.org/bendrucker/is-error-code) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/is-error-code.svg)](https://greenkeeper.io/)

> Check if an HTTP status code is an error code


## Install

```
$ npm install --save is-error-code
```


## Usage

```js
var isErrorCode = require('is-error-code')

isErrorCode(200)
//=> false

isErrorCode(400)
//=> true
```

## API

#### `isErrorCode(code)` -> `boolean`

##### code

*Required*  
Type: `number`

An HTTP status code.


## License

MIT © [Ben Drucker](http://bendrucker.me)
