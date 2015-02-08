'use strict';

/**
 * Require modules from the root directory.
 */
global.requireRoot = function (name) {
	return require(__dirname + '/' + name);
}

var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var liveReload = require('connect-livereload')

var config = requireRoot('config');

var commonRoutes = requireRoot('common/common.controller');
var authController = requireRoot('auth/auth.controller');
var menuController = requireRoot('menu/menu.controller');

mongoose.connect(config.mongo.uri, config.mongo.options);

var app = express();

app.use(bodyParser.json());
app.use(liveReload());
app.use(commonRoutes);
app.use(authController);
app.use(menuController);

var server = app.listen(config.port, function () {
  console.log('Express server listening on %d', config.port);
});

exports = module.exports = app;