'use strict'

var test = require('tape')
var isErrorCode = require('./')

test(function (t) {
  t.ok(isErrorCode(0))
  t.ok(isErrorCode(400))
  t.ok(isErrorCode(500))
  t.notOk(isErrorCode(399))
  t.notOk(isErrorCode(200))
  t.end()
})
