'use strict';

var express = require('express');
var Menu = require('./menu.model')

var MenuController = express.Router();

MenuController.get('/api/menu', function (req, res) {	
	Menu.find(function (err, items) {

		// Accumulate category counts in  a hash
		var hash = {};
		items.forEach(function (item) {
			hash[item.category] = hash[item.category] || 0;
			hash[item.category]++;
		});

		// Break hash counts out into an array
		var categories = Object.keys(hash).map(function (key) {
			return {
				name: key, 
				count: hash[key]
			};
		});
		
		// Sort by counts descending and then by name ascending
		categories.sort(function (a, b) {
			return b.count - a.count || a.name.localeCompare(b.name);
		});

		// Build the menu out of the sorted categories
		var menu = {};
		categories.forEach(function (category) {
			menu[category.name] = items.filter(function (item) { 
				return item.category === category.name
			});
		})

		res.json(menu);
	});
});

exports = module.exports = MenuController;