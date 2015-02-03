'use strict';

define(['backbone', 'templates'], 
function (Backbone, templates) {

	return Backbone.View.extend({
		template: templates['client/scripts/admin/auth/auth.html'],

		events: {
			'click .btn-login': 'login'
		},

		login: function (e) {
			var value = $(e.target).val();
			this.model.auth(value);
		},

		render: function () {
			var data = this.model.toJSON();
			var html = this.template(data);

			this.$el.html(html);

			return this;
		}
	});
});