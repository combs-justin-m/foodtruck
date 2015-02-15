'use strict';

define([
	'underscore',
	'backbone',
	'marionette',
	'layout',
	'components/domain/auth'
], function (_, Backbone, Marionette, Layout, Auth) {
	var App = new Marionette.Application();

	App.on('before:start', function () {
		App.layout = new Layout();
		App.auth = new Auth();
	});

	App.on('start', function () {
		Backbone.history.start();
	});

	App.on('route', function (fragment) {
		Backbone.history.navigate(fragment, { trigger: true });
	});

	return App;
});