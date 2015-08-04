'use strict';

/*
 * Service to hold a given object
 */

(function(module) {

  var name = 'ObjectHolder';

  module.exports = function(app) {
    app.factory(name, [function() {
      return {
        clean: function() {
          this.object = false;
        },
        hold: function(object) {
          this.object = object;
        },
        get: function() {
          return this.object;
        },
        hasObject: function() {
          return this.object != undefined;
        }
      };
    }]);

    return name;
  }

}(module));
