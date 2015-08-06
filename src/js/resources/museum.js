'use strict';

(function(module) {

  var name = 'MuseumResource'

  module.exports = function(app) {
    app.factory(name, ['$resource', '$rootScope', function($resource, $rootScope) {
      var collectionsUrl = '/collections'
      var objectsUrl = collectionsUrl + '/:id/objects';
      var objectUrl = '/objects/:id';

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
          },
          object: objectUrl,
          methid: 'GET',
          params: {
            id: '@id'
          }
        }
      );
    }]);

    return name;

  };

}(module));
