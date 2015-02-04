'use strict';

define(['jquery', 'underscore', 'backbone'], 
function ($, _, Backbone) {

	var AuthModel = Backbone.Model.extend({

		initialize: function () {
			_.bindAll(this, 'auth', 'deauth', 'token', 'authed');
		},

		auth: function () {
			this.deauth();

			$.ajax({
				url: '/api/login',
				type: 'POST',
				data: this.toJSON()
			}).always(_.bind(function (data, textStatus, jqXHR) {
				if (jqXHR.status === 200 && data.token) {
					this.clear();
					this.set({token: data.token});
					this.trigger('auth:hello', data.token);
				} else {
					var error = data.error || 'Invalid username or password';
					this.set({error: error});
					this.unset('password');
					this.trigger('auth:invalid', error);
				}
			}, this));
		},

		deauth: function () {
			if (this.has('token')) {
				this.unset('token');
				this.trigger('auth:goodbye');
			}
		},

		token: function () { return this.get('token'); },

		authed: function () { return this.token() ? true : false; }
	});

	AuthModel.instance = new AuthModel();

	return AuthModel;
});