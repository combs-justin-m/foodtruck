'use strict';

define(['backbone', 'html!login/login.html', 'css!login/login.css'], 
function (Backbone, template) {

	return Backbone.View.extend({
		template: template,

		events: {
			'change input': 'input',
			'click .btn-login': 'login'
		},

		initialize: function () {
			this.listenTo(this.model, 'change:success', this.render);
			this.listenTo(this.model, 'change:error', this.render);
		},

		login: function () {
			this.model.login();
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