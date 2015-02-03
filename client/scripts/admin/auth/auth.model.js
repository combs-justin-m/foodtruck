'use strict';

define(['jquery', 'underscore', 'backbone'], 
function ($, _, Backbone) {

	var AuthModel = Backbone.Model.extend({

		initialize: function () {
			_.bindAll(this, 'auth', 'deauth', 'token', 'authed');
		},

		auth: function (password) {
			$.ajax({
				url: '/api/login',
				type: 'POST',
				data: { password: password }
			}).always(_.bind(function (data, textStatus) {
				if (textStatus === 200 && data.token) {
					this.set({token: data.token});
					this.trigger('auth:hello', data.token);
				} else {
					this.set({error: 'Invalid password.'});
					this.trigger('auth:invalid');
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