'use strict';

define(['backbone', 'auth/auth'], 
function (Backbone, Auth) {
	var HeaderView = Backbone.View.extend({

		events: {
			'click #header-admin-btn': 'admin'
		},

		initialize: function (options) {
			this.app = options.app;
			this.listenTo(Auth, 'change', this.render);
			this.$adminBtn = this.$('#header-admin-btn');
		},

		admin: function (e) {
			e.preventDefault();
			this.app.navigate('/admin', { trigger: true });
		},

		render: function () {
			this.$adminBtn.toggleClass('invisible', !Auth.isAuthenticated());
		}
	});

	return HeaderView;
});