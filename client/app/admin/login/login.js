'use strict';

define(['login/login.model', 'login/login.view'], 
function (LoginModel, LoginView) {

	return {
		Model: LoginModel,
		View: LoginView,

		createView: function (options, data) {
			options = options || {};
			options.model = options.model || new LoginModel(data || {});

			return new LoginView(options);
		}
	};
});