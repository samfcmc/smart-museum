'use strict';

/*
 * Tags Controller:
 * Manage existing tags
 */

(function(module) {

  var name = 'TagsCtrl';

  module.exports = function(app, SmartPlaces) {
    app.controller(name, ['$scope', function($scope) {
      SmartPlaces.getTags({
        success: function(tags) {
          $scope.$apply(function() {
            $scope.tags = tags;
          });
        }
      });
      
    }]);

    return name;
  }

}(module));
