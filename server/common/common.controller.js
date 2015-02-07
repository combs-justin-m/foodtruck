'use strict';

var express = require('express');
var serveStatic = require('serve-static');
var modRewrite = require('connect-modrewrite');

var config = requireRoot('config');

var CommonController = new express.Router();

CommonController.use(modRewrite(['^/([a-zA-Z]+)$ /$1.html']));
CommonController.use(serveStatic('.tmp'));
CommonController.use(serveStatic('client'));

exports = module.exports = CommonController;