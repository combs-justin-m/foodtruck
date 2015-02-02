'use strict';

define(['backbone', 'templates'], 
function (Backbone, templates) {

	return Backbone.View.extend({
		template: templates['client/scripts/admin/login.html'],

		render: function () {
			var data = this.model.toJSON();
			var html = this.template(data);

			this.$el.html(html);

			return this;
		}
	});
});