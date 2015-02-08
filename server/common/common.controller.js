'use strict';

var express = require('express');
var serveStatic = require('serve-static');

var config = requireRoot('config');

var CommonController = new express.Router();

CommonController.use(serveStatic('.tmp'));
CommonController.use(serveStatic('client'));

exports = module.exports = CommonController;