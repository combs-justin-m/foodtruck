'use strict';

define(['underscore', 'backbone', 'auth/auth'], 
function (_, Backbone, Auth) {

	var LoginModel = Backbone.Model.extend({

		initialize: function () {
			this.listenTo(Auth, 'auth:hello', function () {
				this.clear();
				this.set({ success: true });
			});

			this.listenTo(Auth, 'auth:denied', function (error) {
				this.unset('password');
				this.unset('success');
				this.set({ error: error || 'Invalid username or password.'});
			});

			_.bindAll(this, 'login');
		},

		login: function () {
			Auth.authenticate({
				username: this.get('username'),
				password: this.get('password')
			});
		}
	});

	return LoginModel;
});