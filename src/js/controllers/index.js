'use strict';

/*
 * Controllers
 */

(function(module, SmartPlaces) {

  module.exports = function(app, resources, services) {
    var museumResource = resources.Museum;
    var objectHolder = services.ObjectHolder;
    var collections = require('./collections')(app, museumResource, SmartPlaces);
    var objects = require('./objects')(app, museumResource, objectHolder);
    var object = require('./object')(app, objectHolder);

    return {
      Collections: collections,
      Objects: objects,
      Object: object
    };
  };

}(module, window.SmartPlaces));
