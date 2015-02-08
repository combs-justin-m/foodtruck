'use strict';

var express = require('express');
var AuthService = require('./auth.service');

var AuthController = express.Router();

AuthController.post('/api/auth/login', function (req, res) {	
	if(!req.body.username || !req.body.password) {
		return res.status(400).end();
	}

	AuthService.authenticate(req.body, function (err, result) {
		if (err) {
			console.error(err); 
			res.status(500).end();
		} else {
			res.json(result);
		}
	});
});

exports = module.exports = AuthController;