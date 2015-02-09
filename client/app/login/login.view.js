'use strict';

define([
	'jquery',
	'underscore',
	'backbone', 
	'html!login/login.html', 
	'css!login/login'], 
function ($, _, Backbone, template) {

	return Backbone.View.extend({
		template: template,

		events: {
			'change input': 'input',
			'submit form': 'login'
		},

		initialize: function (options) {
			this.app = options.app;
			
			this.listenTo(this.model, 'login:hello', this.hello);
			this.listenTo(this.model, 'login:denied', this.render);
		},

		input: function(e) {
			var $target = $(e.target);
			var name = $target.attr('name');
			var value = $target.val();
			this.model.set(name, value);
		},

		login: function (e) {
			e.preventDefault();
			this.model.login();
		},

		hello: function () {
			this.app.navigate('/', { trigger: true });
		},

		render: function () {
			var data = this.model.toJSON();
			var html = this.template(data);

			this.$el.html(html);

			return this;
		}
	});
});