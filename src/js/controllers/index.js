'use strict';

/*
 * Controllers
 */

(function(module, require, SmartPlaces) {

  module.exports = function(app, resources, services) {
    var museumResource = resources.Museum;
    var objectHolder = services.ObjectHolder;
    var collections = require('./collections')(app, museumResource, SmartPlaces);
    var objects = require('./objects')(app, museumResource, objectHolder);
    var object = require('./object')(app, objectHolder, SmartPlaces);
    var tags = require('./tags')(app, SmartPlaces);
    var client = require('./client')(app, museumResource, SmartPlaces);

    return {
      Collections: collections,
      Objects: objects,
      Object: object,
      Tags: tags,
      Client: client
    };
  };

}(module, require, window.SmartPlaces));
