'use strict';

define(['backbone', 'html!menu/menu.html', 'css!menu/menu.css'], 
function (Backbone, template) {

	return Backbone.View.extend({
		template: template,

		events: {},

		initialize: function () {
			this.listenTo(this.collection, 'reset', this.render);
		},
		
		render: function () {
			var data = this.collection.toJSON();
			var html = this.template(data);

			this.$el.html(html);

			return this;
		}
	});
});