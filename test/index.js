/**
 * Imports
 */

var composeReducers = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var composed = composeReducers(reducer, reducer)

  t.equal(composed(1, 1), 3)
  t.equal(composed(1, -1), -1)
  t.end()
})

function reducer (state, action) {
  return state + action
}
