'use strict';

var express = require('express');

var routes = express.Router();

routes.post('api/login', function (req, res) {
	response.json({token: '1234'});
});

exports = module.exports = routes;