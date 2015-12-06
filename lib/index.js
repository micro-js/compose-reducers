/**
 * Modules
 */

var toArray = require('@micro-js/to-array')

/**
 * Expose composeReducers
 */

module.exports = composeReducers['default'] = composeReducers

/**
 * composeReducers
 */

function composeReducers (/* arguments */) {
  var args = toArray(arguments)
  var len = args.length

  return function (state, action) {
    for (var i = 0; i < len; ++i) {
      state = args[i](state, action)
    }

    return state
  }
}
