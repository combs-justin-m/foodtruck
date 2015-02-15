'use strict';

define(['admin/admin.view'], 
function (AdminView) {

	return {
		View: AdminView,

		createView: function (options) {
			options = options || {};
			return new AdminView(options);
		}
	};
});