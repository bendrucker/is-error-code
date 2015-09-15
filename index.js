'use strict'

module.exports = function isErrorCode (code) {
  return code < 200 || code >= 400
}
