'use strict';

require(['jquery', 'underscore', 'login/login', 'bootstrap'], 
function ($, _, Login) {

	var views = [];

	var loginView = Login.createView({el: '#login'});
	views.push(loginView);

    $(function () { _.invoke(views, 'render'); });
});