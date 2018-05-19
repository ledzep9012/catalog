/**
 * Utility functions
 */
'use strict';
/* Others */
var ErrorCodes = require('./errorcodes');
var Promise = global.Promise;

module.exports = {
  throwError: function(error, key, value) {
    if (typeof error === 'object') {
        console.log('suc')
      throw error;
    }

    var err = new Error();
    err.name = error;
    if (key) {
      err.data = {};
      err.data[key] = value;
    }
    throw err;
  },

  /*
    *   Check if all required params are
    *   present and they are of correct type
    */
  validateParams: function(params, required) {
    return new Promise(function(resolve, reject) {
      var paramsCheck = {};

      for (var p in required) {
        var name = required[p].name;

        if (required[p].required == true) {
          if (params[name] == null) {
            paramsCheck.error = ErrorCodes.get('MISSING_PARAMS');
            paramsCheck.error.data = {
              param: name,
              reason: 'missing'
            };
            break;
          }

          if (typeof params[name] != required[p].type) {
            paramsCheck.error = ErrorCodes.get('MISMATCH_PARAMS');
            paramsCheck.error.data = {
              param: name,
              reason: 'required ' + required[p].type
            };
            break;
          }

          if (typeof params[name] === 'string' && params[name].length < 1) {
            paramsCheck.error = ErrorCodes.get('EMPTY_PARAM');
            paramsCheck.error.data = {
              param: name,
              reason: 'empty'
            };
            break;
          }
        }
      }

      resolve(paramsCheck);
    });
  }
};
