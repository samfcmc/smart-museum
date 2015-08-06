'use strict';

/*
 * Client Controller
 */

(function(require) {

  var name = 'ClientCtrl';

  module.exports = function(app, resource, SmartPlaces) {
    app.controller(name, ['$scope', resource,
      function($scope, Resource) {
        SmartPlaces.onInit(function() {
          console.log('Smart Places initialized');
          SmartPlaces.onTagFound(function(tag) {
            alert(tag);
            $scope.$apply(function() {
              $scope.updateTag(tag);
            });
          });
        });

        $scope.updateTag = function(tag) {
          $scope.tag = tag;
          resource.object({}, function(response) {
            $scope.object = response.Data;
          });
        };
    }]);

    return name;
  }

}(require));
