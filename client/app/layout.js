'use strict';

define(['jquery', 'underscore', 'marionette', 'velocity'],
function ($, _, Marionette) {

	var SLIDE_SPEED = 2.5;

	// Slides an element from one position to another.
	function slide(options) {
		var $el = $(options.el);
		var from = $el.position().left;

		return $.Velocity.animate($el, {
			translateZ: 0, // for hardware acceleration
			translateX: [options.to, from]
		}, {
			duration: Math.abs(from - options.to) / SLIDE_SPEED,
			easing: 'linear',
			display: options.display
		});
	}

	function overlay(options) {
		var $el = $(options.el);
		var opacity = options.on ? 0.65 : 0;
		var display = options.on ? 'auto' : 'none';
		return $.Velocity.animate($el, {opacity: opacity}, {duration: 250, display: display});			
	}

	var Layout = Marionette.LayoutView.extend({
		el: 'body',

		initialize: function () {
			this.$overlay = this.$el.find('#main-overlay');
		},

		regions: {
			main: '#main-container',
			login: '#admin-login-container',
			adminPanel: '#admin-panel-container',
			adminContent: '#admin-content-container'
		},

		presentMain: function () {
			this.main.$el.show();

			overlay({el: this.$overlay, on: false});		
			slide({el: this.main.$el, to: 0}).then(_.bind(function () {
				this.$el.css('overflow', 'auto');
				this.login.$el.hide();
				this.adminPanel.$el.hide();
				this.adminContent.$el.hide();
			}, this));
		},

		presentLogin: function () {
			this.$el.css('overflow', 'hidden');
			this.login.$el.show();
			this.adminPanel.$el.hide();
			this.adminContent.$el.hide();

			overlay({el: this.$overlay, on: true});	
			slide({el: this.main.$el, to: $(window).width(), display: 'none'});
		},

		presentAdminPanel: function () {
			this.$el.css('overflow', 'hidden');
			this.main.$el.show();
			this.login.$el.hide();
			this.adminPanel.$el.show();
			this.adminContent.$el.hide();

			overlay({el: this.$overlay, on: true});	
			slide({
				el: this.main.$el,
				to: this.adminPanel.$el.position().left + this.adminPanel.$el.width()
			});
		},

		presentAdminContent: function () {
			this.$el.css('overflow', 'hidden');
			this.login.$el.hide();
			this.adminPanel.$el.show();
			this.adminContent.$el.show();

			overlay({el: this.$overlay, on: true});	
			slide({el: this.main.$el, to: $(window).width(), display: 'none'});
		}
	});

	return Layout;

});