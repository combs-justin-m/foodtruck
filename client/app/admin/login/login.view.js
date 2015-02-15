'use strict';

define([
	'jquery',
	'underscore',
	'backbone', 
	'app',
	'html!admin/login/login.html', 
	'css!admin/login/login.css'], 
function ($, _, Backbone, App, template) {

	return Backbone.View.extend({
		id: 'login',
		template: template,

		events: {
			'change input': 'input',
			'submit form': 'login',
			'click .panel': 'click',
			'click .container': 'close'
		},

		initialize: function () {
			// Backing model for storing form fields
			this.model = new Backbone.Model();

			this.listenTo(App.auth, 'denied', function (error) {
				this.model.set({ 
					password: '',
					error: error || 'Invalid username or password.' 
				});
			});

			this.listenTo(App.auth, 'hello', this.close);

			this.listenTo(this.model, 'change', this.onChange);

			$(document).on('keyup', this.checkEscape);
		},

		input: function(e) {
			var $target = $(e.target);
			var name = $target.attr('name');
			var value = $target.val();
			this.model.set(name, value, { isInput: true });
		},

		login: function (e) {
			e.preventDefault();

			App.auth.authenticate({
				username: this.model.get('username'),
				password: this.model.get('password')
			});
		},

		click: function (e) {
			if (e) e.stopPropagation();
		},

		checkEscape: function (e) {
			if (e.which === 27) this.close();
		},

		close: function () {
			this.trigger('close');
		},

		onChange: function (model, options) {
			if (!options.isInput) this.render();
		},

		render: function () {
			var data = this.model.toJSON();
			var html = this.template(data);

			this.$el.html(html);

			return this;
		},

		remove: function () {
			$(document).off('keyup', this.checkEscape);
			return Backbone.View.prototype.remove.call(this);
		}
	});
});