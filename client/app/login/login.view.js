'use strict';

define([
	'underscore',
	'backbone', 
	'html!login/login.modal.html', 
	'html!login/login.content.html',
	'css!login/login', 
	'bootstrap' ], 
function (_, Backbone, modalTemplate, contentTemplate) {

	return Backbone.View.extend({
		modalTemplate: modalTemplate,
		contentTemplate: contentTemplate,

		events: {
			'change input': 'input',
			'submit form': 'login',
			'click button.close': 'hide'
		},

		initialize: function (options) {
			this.app = options.app;
			this.listenTo(this.model, 'login:hello', this.hide);
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

		hide: function () {
			if (this.$modal) {
				this.$modal.modal('hide');
			}
		},

		render: function () {
			var data = this.model.toJSON();
			
			this.renderModal(data);
			this.renderContent(data);

			return this;
		},

		renderModal: function (data) {
			// to prevent the modal from animating for every render, only draw it once
			if (!this.$modal) {
				var html = this.modalTemplate(data);
				this.$el.html(html);

				// initialize the modal
				this.$modal = this.$('#login-modal');
				this.$modal.modal();

				// clean up after the modal is hidden
				this.$modal.on('hidden.bs.modal', _.bind(this.remove, this));
			}

			this.$modal.modal('show');

			return this;
		},

		renderContent: function (data) {
			var html = this.contentTemplate(data);
			this.$('#login-modal-content').html(html);
			return this;
		},

		remove: function () {
			this.app.navigate('/');
			Backbone.View.prototype.remove.call(this);
		}
	});
});