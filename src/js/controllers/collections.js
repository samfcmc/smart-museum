'use strict';

/*
 * Collections Controller
 */

(function(module) {

  var name = 'CollectionsCtrl';

  module.exports = function(app, resource, SmartPlaces) {
    app.controller(name,
      ['$scope', resource,
      function($scope, Resource) {

        SmartPlaces.onInit(function() {
          console.log('Smart Places Initialized');
        });

        Resource.collections({}, function(response) {
          $scope.collections = response;
        });


    }]);

    return name;
  }

}(module));
