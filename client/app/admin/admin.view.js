'use strict';

define([
	'backbone',
	'html!admin/admin.html', 
	'css!admin/admin'], 
function (Backbone, template) {

	var AdminView = Backbone.View.extend({
		id: 'admin',
		template: template,

		events: {
		},

		initialize: function () {
		},

		render: function () {
			var html = this.template({});
			this.$el.html(html);
			return this;
		}
	});

	return AdminView;
});