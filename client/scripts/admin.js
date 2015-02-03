'use strict';

require(['jquery', 'underscore', 'admin/auth/auth.view', 'admin/auth/auth.model', 'bootstrap'], 
function ($, _, AuthView, AuthModel) {

	var views = [];

	var authView = new AuthView({el: '#admin-auth', model: AuthModel.instance});
	views.push(authView);

    $(function () { _.invoke(views, 'render'); });
});