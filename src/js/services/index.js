'use strict';

/*
 * Services entry point
 */

(function(module, require) {

  module.exports = function(app) {

    var objectHolder = require('./object')(app);

    return {
      ObjectHolder: objectHolder
    };
  }

}(module, require));
