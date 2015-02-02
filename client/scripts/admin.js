'use strict';

require(['require-config'], function() {
    require(['jquery', 'admin/login.view', 'admin/login.model', 'bootstrap'], 
    function ($, LoginView, LoginModel) {

        var loginModel = new LoginModel();
        var loginView = new LoginView({el: '#admin-login', model: loginModel});

        $(function () { loginView.render(); });
    });
});