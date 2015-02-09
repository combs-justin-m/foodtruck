'use strict';

define([
	'jquery',
	'underscore',
	'backbone', 
	'html!login/login.html', 
	'css!login/login', 
	'bootstrap' ], 
function ($, _, Backbone, template) {

	return Backbone.View.extend({
		template: template,

		events: {
			'change input': 'input',
			'submit form': 'login'
		},

		initialize: function (options) {
			this.app = options.app;

			this.$body = $('body');
			
			this.listenTo(this.model, 'login:hello', this.remove);
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

		render: function () {
			var data = this.model.toJSON();
			var html = this.template(data);

			this.$el.html(html);

			this.$body.css('overflow', 'hidden');

			var slide = function () {
				this.$body.css({ 
					left: $(window).width()+1
				});
			};
			slide = _.bind(slide, this);

			setTimeout(slide, 0);

			return this;
		},

		remove: function () {
			this.app.navigate('/');

			// move the body back
			this.$body.css('left', 0);

			var view = this;

			// turn scrolling back on and remove the view
			var finalize = _.once(function () {
				view.$body.css('overflow', 'auto');
				Backbone.View.prototype.remove.call(view);
			});

			// handler waiting for 'transitionend'
			function handler(e) {
				if ($(e.target).is('body')) {
					finalize();
					view.$body.off(e);
				}
			}

			// timeout to ensure everything gets leaned up eventually
			function timeout() {
				finalize();
				view.$body.off('transitionend', handler);
			}

			// finalize once the css transition has ended
			this.$body.on('transitionend', handler);

			// finalize after timeout to ensure the view is gone
			setTimeout(timeout, 1000);
		}
	});
});