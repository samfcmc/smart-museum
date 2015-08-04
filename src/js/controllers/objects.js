'use strict';

/*
 * Objects Controller
 */

(function(module, angular) {

  var name = 'ObjectsCtrl';

  module.exports = function(app, resource, objectHolder) {
    app.controller(name, ['$scope', '$stateParams', '$state', resource, objectHolder,
      function($scope, $stateParams, $state, Resource, ObjectHolder) {

        $scope.page = 1;
        $scope.nextPage = false;

        $scope.id = $stateParams.id;
        $scope.objects = [];

        $scope.getObjects = function() {
          Resource.objects({id: $scope.id, page: $scope.page}, function(response) {
            $scope.page = response.Page;
            $scope.nextPage = response.NextPage;
            angular.forEach(response.Items, function(value, key) {
              $scope.objects.push(value);
            });
          });
        };

        $scope.getObjects();

        $scope.getNextPage = function() {
          if($scope.nextPage) {
            $scope.page++;
            $scope.getObjects();
          }
        };

        $scope.tag = function(object) {
          ObjectHolder.hold(object);
          $state.go('object');
        }

    }]);

    return name;
  }

}(module, angular));
