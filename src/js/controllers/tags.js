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

      $scope.deleteTag = function(tag) {
        SmartPlaces.deleteTag(tag, {
          success: function() {
            $scope.$apply(function() {
              var i = $scope.tags.indexOf(tag);
              $scope.tags.splice(i, 1);  
            });
          }
        });
      }

    }]);

    return name;
  }

}(module));
