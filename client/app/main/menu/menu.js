'use strict';

define(['underscore', 'menu/menu.collection', 'menu/menu.model', 'menu/menu.view'], 
function (_, MenuCollection, MenuModel, MenuView) {

	return {
		Collection: MenuCollection,
		Model: MenuModel,
		View: MenuView,

		createView: function (options, data) {
			options = options || {};
			options.collection = options.collection || new MenuCollection(data || []);

			var view = new MenuView(options);

			if (!data) {
				options.collection.fetch({
					reset: true,
					error: function () { view.remove(); }
				});
			}

			return view;
		}
	};
});