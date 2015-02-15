'use strict';

define(['backbone', 'html!main/menu/menu.html', 'css!main/menu/menu.css'], 
function (Backbone, template) {

	return Backbone.View.extend({
		id: 'menu',
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