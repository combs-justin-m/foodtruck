'use strict';

define(['jquery', 'underscore', 'backbone'], 
function ($, _, Backbone) {

	var AuthModel = Backbone.Model.extend({

		initialize: function () {
			_.bindAll(this, 'auth', 'deauth', 'token', 'authed');
		},

		auth: function () {
			var defaultError = 'Invalid username or password';
			var model = this;

			model.deauth();

			function success(token) {
				model.clear();
				model.set({token: token, success: true});
				model.trigger('auth:hello', token);
			}

			function failure(error) { 
				error = error || defaultError;
				model.set({error: error});
				model.unset('password');
				model.trigger('auth:invalid', error);
			}

			$.ajax({
				url: '/api/login',
				type: 'POST',
				contentType: 'application/json',
				data: JSON.stringify(model)
			})
			.done(function (data) {
				if (data.token) {
					success(data.token);
				} else {
					failure(data.error || defaultError);
				}
			})	
			.fail(function () { 
				failure(defaultError); 
			});
		},

		deauth: function () {
			if (this.has('token')) {
				this.clear();
				this.trigger('auth:goodbye');
			}
		},

		token: function () { return this.get('token'); },

		authed: function () { return this.token() ? true : false; }
	});

	AuthModel.instance = new AuthModel();

	return AuthModel;
});