'use strict';

/*
 * Client Controller
 */

(function(require) {

  var name = 'ClientCtrl';

  module.exports = function(app, resource, SmartPlaces) {
    app.controller(name, ['$scope', resource,
      function($scope, Resource) {
        console.log('test');
        Resource.collections({}, function(response) {
          console.log(response);
        });
    }]);

    return name;
  }

}(require));
