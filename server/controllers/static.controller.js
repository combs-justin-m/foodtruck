'use strict';

var express = require('express');
var serveStatic = require('serve-static');
var modRewrite = require('connect-modrewrite');

var config = requireLocal('config');

var StaticController = new express.Router();

StaticController.use(modRewrite(['^/([a-zA-Z]+)$ /$1.html']));
StaticController.use(serveStatic('.tmp'));
StaticController.use('/bower_components', serveStatic('./bower_components')),
StaticController.use(serveStatic('client'));

exports = module.exports = StaticController;