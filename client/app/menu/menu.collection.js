'use strict';

define(['underscore', 'backbone', 'menu/menu.model'], 
function (_, Backbone, MenuModel) {

	var MenuCollection = Backbone.Collection.extend({
		url: '/api/menu',
		model: MenuModel,

		initialize: function () {
			_.bindAll(this, 'toJSON');
		},

		// Group the data by category and sort by category size.
		toJSON: function () {

			var items = Backbone.Collection.prototype.toJSON.call(this);

			// Count the items in each category
			var counts = _.countBy(items, function (item) {
				return item.category;
			});

			// Break the counts out into an array
			var categories = _.map(counts, function (count, name) {
				return { name: name, count: count };
			});
			
			// Sort by counts descending and then by name ascending
			categories.sort(function (a, b) {
				return b.count - a.count || a.name < b.name ? -1 : a.name === b.name ? 0 : 1;
			});

			// Build the menu out of the sorted categories
			var menu = _.map(categories, function (category) {
				var categoryItems = _.filter(items, function (item) { 
					return item.category === category.name;
				});
				categoryItems.sort(function (a, b) { return b.price - a.price; });

				return { category: category.name, items: categoryItems };
			});

			return menu;
		}
	});

	return MenuCollection;
});