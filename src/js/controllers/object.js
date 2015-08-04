'use strict';

/*
 * Tag a given object controller
 */

(function(module) {

  var name = 'ObjectCtrl';

  module.exports = function(app, objectHolder) {
    app.controller(name, ['$scope', objectHolder,
      function($scope, ObjectHolder) {

        $scope.object = ObjectHolder.get();

    }]);

    return name;

  };

}(module));
