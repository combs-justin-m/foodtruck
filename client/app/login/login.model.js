'use strict';

define(['underscore', 'backbone', 'auth/auth'], 
function (_, Backbone, Auth) {

	var LoginModel = Backbone.Model.extend({

		initialize: function () {
			this.listenTo(Auth, 'auth:hello', function () {
				this.clear();
				this.trigger('login:hello');
			});

			this.listenTo(Auth, 'auth:denied', function (error) {
				this.unset('password');
				this.unset('success');
				this.set({ error: error || 'Invalid username or password.' });
				this.trigger('login:denied', this, error);
			});
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