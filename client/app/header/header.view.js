'use strict';

define(['backbone', 'auth/auth'], 
function (Backbone, Auth) {
	var HeaderView = Backbone.View.extend({

		events: {
			'click .header-logout': 'logout'
		},

		initialize: function () {
			this.listenTo(Auth, 'change', this.render);
			this.$logout = this.$('.header-logout');
		},

		logout: function (e) {
			e.preventDefault();
			Auth.deauthenticate();
		},

		render: function () {
			this.$logout.toggleClass('invisible', !Auth.isAuthenticated());
		}
	});

	return HeaderView;
});