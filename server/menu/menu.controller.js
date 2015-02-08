'use strict';

var express = require('express');
var Menu = require('./menu.model')

var MenuController = express.Router();

MenuController.get('/api/menu', function (req, res) {	
	Menu.find(function (err, items) { 
		res.json(items);
	});
});

exports = module.exports = MenuController;