
'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'menu/menu',
    'login/login',
    'auth/auth'],
function($, _, Backbone, Menu, Login, Auth) {

    var App = Backbone.Router.extend({

    	routes: {
            '(/)': 'index',
            'login(/)': 'login'
        },

        initialize: function() {
            this.views = [];
            this.views.push(Menu.createView({
                el: '#menu-container'
            }));

            this.listenTo(Auth, 'auth:hello', function () {
                this.navigate(null);
            });
        },

        index: function() {
            _.invoke(this.views, 'render');
        },

        login: function() {
            this.index();
            $('body').append(Login.createView().render().el);
        }
    });

    return new App();
});