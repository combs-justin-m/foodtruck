'use strict';

global.requireLocal = function (name) {
	return require(__dirname + '/' + name);
}

var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var liveReload = require('connect-livereload')

var config = requireLocal('config');

var staticController = requireLocal('controllers/static.controller');
var authController = requireLocal('controllers/auth.controller');

mongoose.connect(config.mongo.uri, config.mongo.options);

var app = express();

app.use(bodyParser.json());
app.use(liveReload());
app.use(staticController);
app.use(authController);

var server = app.listen(config.port, function () {
  console.log('Express server listening on %d', config.port);
});

exports = module.exports = app;