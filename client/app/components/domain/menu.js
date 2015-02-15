'use strict';

define(['underscore', 'backbone', 'components/domain/menu-item'], 
function (_, Backbone, MenuItem) {

	var Menu = Backbone.Collection.extend({
		url: '/api/menu',
		model: MenuItem,

		// Group the data by category and sort by category size.
		toJSON: function () {
			var items = Backbone.Collection.prototype.toJSON.call(this);

			// Group by category
			var categoriesHash = _.groupBy(items, function (item) {
				return item.category;
			});

			// Break the hash out into an array with sorted items
			var categories = _.map(categoriesHash, function (categoryItems, name) {
				categoryItems.sort(function (a, b) { return b.price - a.price; });
				return { name: name, items: categoryItems };
			});
			
			// Sort by category size descending and then by name ascending
			categories.sort(function (a, b) {
				return b.items.length - a.items.length || 
				       a.name < b.name ? -1 : a.name === b.name ? 0 : 1;
			});

			return categories;
		}
	});

	return Menu;
});