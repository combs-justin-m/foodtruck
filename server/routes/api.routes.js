'use strict';

var express = require('express');

var routes = express.Router();

routes.post('/api/login', function (req, res) {
	res.json({token: null});
});

exports = module.exports = routes;