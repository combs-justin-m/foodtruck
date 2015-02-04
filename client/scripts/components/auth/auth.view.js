'use strict';

define(['underscore', 'backbone', 'templates'], 
function (_, Backbone, templates) {

	return Backbone.View.extend({
		template: templates['client/scripts/components/auth/auth.html'],

		events: {
			'change input': 'input',
			'click .btn-login': 'login'
		},

		initialize: function () {
			this.listenTo(this.model, 'auth:invalid', this.render);
		},

		login: function () {
			this.model.auth();
		},

		input: function(e) {
			var $target = $(e.target);
			var name = $target.attr('name');
			var value = $target.val();
			this.model.set(name, value);
		},

		render: function () {
			var data = this.model.toJSON();
			var html = this.template(data);

			this.$el.html(html);

			return this;
		}
	});
});