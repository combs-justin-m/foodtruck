'use strict';

define(['underscore', 'backbone'], 
function (_, Backbone) {

	var MenuModel = Backbone.Model.extend({
		url: '/api/menu',
	});

	return MenuModel;
});