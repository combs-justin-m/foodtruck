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
			'click button.close': 'remove'
		},

		initialize: function () {
			this.listenTo(this.model, 'login:hello', this.remove);
			this.listenTo(this.model, 'login:denied', this.render);

			_.bindAll(this, 'input', 'login', 'render', 'renderModal', 'renderContent', 'remove');
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

		render: function () {
			var data = this.model.toJSON();
			
			this.renderModal(data);
			this.renderContent(data);

			return this;
		},

		renderModal: function (data) {
			if (!this.$modal) {
				var html = this.modalTemplate(data);
				this.$el.html(html);
				this.$modal = this.$('#login-modal');
				this.$modal.modal();
			}

			this.$modal.show('show');

			return this;
		},

		renderContent: function (data) {
			var html = this.contentTemplate(data);
			this.$('#login-modal-content').html(html);
			return this;
		},

		remove: function () {
			var self = this;
			if (this.$modal) {
				this.$modal.modal('hide');
				this.$modal.on('hidden.bs.modal', function () {
					Backbone.View.prototype.remove.apply(self, arguments);
				});
			} else {
				Backbone.View.prototype.remove.apply(self, arguments);
			}
		}
	});
});