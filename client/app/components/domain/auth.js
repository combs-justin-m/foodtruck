'use strict';

define(['jquery', 'underscore', 'backbone', 'modernizr'], 
function ($, _, Backbone, Modernizr) {

	var Auth = Backbone.Model.extend({

		initialize: function () {
			// Sync with localStorage
			if (Modernizr.localstorage) {
				try {
					var data = window.localStorage.getItem('auth');
					this.set(data && JSON.parse(data));
				} catch (e) {
					console.error(e);
				}
			
				this.listenTo(this, 'change', function () {
					if (_.isEmpty(this.attributes)) {
						window.localStorage.removeItem('auth');
					} else {
						window.localStorage.setItem('auth', JSON.stringify(this));
					}
				});
			}
		},

		authenticate: function (credentials) {
			var defaultError = 'Invalid username or password';
			var model = this;

			model.deauthenticate();

			function success(data) {
				model.deauthenticate(); // ensure model is clear before setting data;
				model.set(data);
				model.trigger('hello', data);
			}

			function failure(error) { 
				error = error || defaultError;
				model.trigger('denied', error);
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
			var wasAuthenticated = this.isAuthenticated();
			this.clear();
			if(wasAuthenticated) {
				this.trigger('goodbye');
			}
		},

		token: function () { return this.get('token'); },

		isAuthenticated: function () { return this.token() ? true : false; }
	});

	return Auth;
});