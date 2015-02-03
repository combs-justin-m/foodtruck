'use strict';

var express = require('express');
var serveStatic = require('serve-static');

var config = require('../../config');

var routes = new express.Router();

routes.use(serveStatic('.tmp'));
routes.use('/bower_components', serveStatic('./bower_components')),
routes.use(serveStatic(config.client));

exports = module.exports = routes;