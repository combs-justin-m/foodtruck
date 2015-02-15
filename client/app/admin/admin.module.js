'use strict';

define(['marionette', 'backbone', 'app'], 
function (Marionette, Backbone, App) {

	var Admin = App.module('Admin');

	Admin.on('before:start', function () {

		Admin.lazyController = function (callback) {
			if (Admin.controller) {
				callback(Admin.controller);
			} else {
				require(['admin/admin.controller'], function (AdminController) {
					Admin.controller = new AdminController();
					callback(Admin.controller);
				});
			}
		};

		var AdminRouter = Backbone.Router.extend({
			routes: {
				'admin(/:page)': 'admin'
			},

			admin: function (page) {
				Admin.lazyController(function (controller) {
					if (page && controller[page]) {
						controller[page]();
					} else {
						controller.index();
					}
				});
			}
		});

		Admin.router = new AdminRouter();
	});

	return Admin;
});