'use strict';

define([
	'underscore', 
	'marionette', 
	'app',
	'admin/login/login.view',
	'admin/admin-panel/admin-panel.view'
], function (_, Marionette, App, LoginView, AdminPanelView) {

	// Requires authentication to perform the action
	function requireAuth(callback) {
		if (App.auth.isAuthenticated()) {
			return callback;
		} else {
			return function () {
				var self = this;

				var loginView = new LoginView();
				App.layout.login.show(loginView);
				App.layout.presentLogin();

				loginView.once('close', function () {
					if (App.auth.isAuthenticated()) {
						_.bind(callback, self)();
					} else {
						App.trigger('route', '');
					}
				});
			};
		}
	}

	var AdminController = Marionette.Controller.extend({
		initialize: function () {
			this.panelView = new AdminPanelView();
		},

		index: requireAuth(function () {
			App.layout.adminPanel.show(this.panelView);
			App.layout.presentAdminPanel();
		}),

		login: requireAuth(function () {
			App.trigger('route', '');
		}),

		logout: function () {
			if(App.auth.isAuthenticated()) {
				App.auth.once('goodbye', function () {
					App.trigger('route', '');
				});
				App.auth.deauthenticate();
			} else {
				App.trigger('route', '');
			}
		}
	});

	return AdminController;
});