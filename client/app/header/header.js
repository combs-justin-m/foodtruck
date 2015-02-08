'use strict';

define(['header/header.view'], 
function (HeaderView) {
	return {
		View: HeaderView,

		createView: function (options) {
			return new HeaderView(options);
		}
	};
});