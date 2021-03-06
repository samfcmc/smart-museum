'use strict';

/*
 * Routes
 */
(function(module) {

  module.exports = function(app, controllers) {
    app.config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/collections");

        $stateProvider.state('collections', {
          url: '/collections',
          templateUrl: '/views/collections.html',
          controller: controllers.Collections
        });

        $stateProvider.state('objects', {
          url: '/collections/{id}/objects',
          templateUrl: '/views/objects.html',
          controller: controllers.Objects
        });

        $stateProvider.state('object', {
          url: '/object',
          templateUrl: '/views/object.html',
          controller: controllers.Object
        });

        $stateProvider.state('tags', {
          url: '/tags',
          templateUrl: '/views/tags.html',
          controller: controllers.Tags
        })
    }]);

  };

}(module));
