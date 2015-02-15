'use strict';

define([
	'backbone',
	'html!admin/admin-panel/admin-panel.html', 
	'css!admin/admin-panel/admin-panel.css'], 
function (Backbone, template) {

	var AdminView = Backbone.View.extend({
		id: 'admin-panel',
		template: template,

		events: {},

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