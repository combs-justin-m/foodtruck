'use strict';

define([
	'marionette',
	'app',
	'main/main.controller',
], function (Marionette, App, MainController) {

	var Main = App.module('Main');

	Main.on('before:start', function () {
		Main.controller = new MainController();

		Main.router = new Marionette.AppRouter({
			controller: Main.controller,
			appRoutes: {
				'': 'index'
			}
		});
	});

	return Main;
});