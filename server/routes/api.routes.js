'use strict';

var express = require('express');
var authService = require('../services/auth.service');

var routes = express.Router();

routes.post('/api/login', function (req, res) {	
	console.log(req.body);
	authService.auth(req.body.username, req.body.password, function (result) {
		res.json(result);
	});
});

exports = module.exports = routes;