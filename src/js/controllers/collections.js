'use strict';

/*
 * Collections Controller
 */

(function(module) {

  var name = 'CollectionsCtrl';

  module.exports = function(app, resource) {
    app.controller(name,
      ['$scope', resource,
      function($scope, Resource) {

        Resource.collections({}, function(response) {
          $scope.collections = response;
        });

    }]);

    return name;
  }

}(module));