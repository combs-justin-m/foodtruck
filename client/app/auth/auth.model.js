'use strict';

define(['jquery', 'underscore', 'backbone', 'modernizr'], 
function ($, _, Backbone, Modernizr) {

	var AuthModel = Backbone.Model.extend({

		initialize: function () {
			// Sync with localStorage
			if (Modernizr.localstorage) {
				this.set(window.localStorage.getItem('auth'));
			
				this.on('change', function () {
					if (this.attributes.length) {
						window.localStorage.setItem('auth', this.attributes);
					} else {
						window.localStorage.removeItem('auth');
					}
				}, this);
			}
		},

		authenticate: function (credentials) {
			var defaultError = 'Invalid username or password';
			var model = this;

			model.deauthenticate();

			function success(data) {
				model.deauthenticate(); // ensure model is clear before setting data
				model.set(data);
				model.trigger('auth:hello', data);
			}

			function failure(error) { 
				error = error || defaultError;
				model.trigger('auth:denied', error);
			}

			$.ajax({
				url: '/api/auth/login',
				type: 'POST',
				contentType: 'application/json',
				data: JSON.stringify(credentials)
			})
			.done(function (data) {
				if (data.token) {
					success(data);
				} else {
					failure(data.error);
				}
			})	
			.fail(function () { 
				failure(); 
			});
		},

		deauthenticate: function () {
			if (this.has('token')) {
				this.clear();
				this.trigger('auth:goodbye');
			}
		},

		token: function () { return this.get('token'); },

		isAuthenticated: function () { return this.token() ? true : false; }
	});

	return AuthModel;
});