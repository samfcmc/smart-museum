'use strict';

(function(module) {

  var name = 'MuseumResource'

  module.exports = function(app) {
    app.factory(name, ['$resource', '$rootScope', function($resource, $rootScope) {
      var collectionsUrl = '/collections'
      var objectsUrl = collectionsUrl + '/:id/objects';

      return $resource('',
        {},
        {
          collections: {
            url: collectionsUrl,
            method: 'GET'
          },
          objects: {
            url: objectsUrl,
            method: 'GET',
            params: {
              id: '@id',
              page: '@page'
            }
          }
        }
      );
    }]);

    return name;

  };

}(module));
