'use strict';

/*
 * Client Controller
 */

(function(require) {

  var name = 'ClientCtrl';

  module.exports = function(app, resource, SmartPlaces) {
    app.controller(name, ['$scope', resource,
      function($scope, Resource) {
        SmartPlaces.onTagFound(function(tag) {
          $scope.$apply(function() {
            $scope.updateTag(tag);
          });
        });

        $scope.updateTag = function(tag) {
          Resource.object({id: tag.objectId}, function(response) {
            $scope.object = response.Data;
          });
        };
    }]);

    return name;
  }

}(require));
