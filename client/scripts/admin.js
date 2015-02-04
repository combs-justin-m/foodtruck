'use strict';

require(['jquery', 'underscore', 'components/auth/auth.view', 'components/auth/auth.model', 'bootstrap'], 
function ($, _, AuthView, AuthModel) {

	var views = [];

	var authView = new AuthView({el: '#admin-auth', model: AuthModel.instance});
	views.push(authView);

    $(function () { _.invoke(views, 'render'); });
});