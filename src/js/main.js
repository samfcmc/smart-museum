'use strict';

/*
 * Main: Entry point
 */

(function(require, angular) {

  var app = angular.module('app', ['ui.router', 'ngResource']);

  var resources = require('./resources')(app);
  var services = require('./services')(app);
  var controllers = require('./controllers')(app, resources, services);
  require('./routes')(app, controllers);

}(require, angular));
