'use strict';

/*
 * Tag a given object controller
 */

(function(module, angular) {

  var name = 'ObjectCtrl';

  module.exports = function(app, objectHolder, SmartPlaces) {
    app.controller(name, ['$scope', objectHolder,
      function($scope, ObjectHolder) {

        $scope.object = ObjectHolder.get();

        SmartPlaces.onBeaconsScanned(function(beacons) {
          $scope.$apply(function() {
            $scope.beacons = [];
            angular.forEach(beacons, function(value, key) {
              SmartPlaces.getBeacon(value, {
                success: function(beacon) {
                  $scope.$apply(function() {
                    $scope.beacons.push(beacon);
                  });
                }
              });
            });
          });

        });

        $scope.tagObject = function(beacon) {
          SmartPlaces.associateTag(beacon, {objectId: $scope.object.ObjectID}, {
            success: function() {
              alert('Object tagged successfully');
            }
          })
        }

    }]);

    return name;

  };

}(module, angular));
