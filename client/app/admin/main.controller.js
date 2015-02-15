'use strict';

define([
	'underscore', 
	'marionette', 
	'app',
	'main/main.view'
], function (_, Marionette, App, MainView) {

	var MainController = Marionette.Controller.extend({
		initialize: function () {
			this.mainView = new MainView();
			App.layout.main.attachView(this.mainView);
		},

		index: function () {
			this.mainView.render();
		}
	});

	return MainController;
});