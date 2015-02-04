'use strict';

var express = require('express');
var serveStatic = require('serve-static');
var modRewrite = require('connect-modrewrite');

var config = require('../../config');

var routes = new express.Router();

routes.use(modRewrite(['^/([a-zA-Z]+)$ /$1.html']));
routes.use(serveStatic('.tmp'));
routes.use('/bower_components', serveStatic('./bower_components')),
routes.use(serveStatic(config.client));

exports = module.exports = routes;