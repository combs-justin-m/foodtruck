'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'util/slide',
    'header/header',
    'menu/menu',
    'login/login',
    'admin/admin'],
function($, _, Backbone, slide, Header, Menu, Login, Admin) {

    var App = Backbone.Router.extend({

    	routes: {
            '(/)': 'index',
            'login(/)': 'login',
            'admin(/)': 'admin'
        },

        initialize: function() {
            this.views = [
                Header.createView({ el: '#header', app: this }),
                Menu.createView({ el: '#menu-container', app: this })
            ];
            this.appendices = [];
        },

        index: function() {
            this.removeAppendices();
            this.render();
            slide({ to: 0 });
        },

        login: function() {
            this.append(Login.createView({ app: this }));
            this.render();
            slide();
        },

        admin: function() {
            var adminView = Admin.createView({ app: this });
            this.append(adminView);
            this.render();
            slide({ to: adminView.$el.width() });
        },

        render: function () {
             _.invoke(this.views, 'render');
             _.invoke(this.appendices, 'render');
             return this;
        },

        append: function (view) {
            this.$body = this.$body || $('body');
            this.appendices.push(view);
            this.$body.append(view.el);
        },

        removeAppendices: function () {
            _.invoke(this.appendices, 'remove');
            this.appendices = [];
        }
    });

    return  {
        start: function () {
            if (this.app) {
                return false;
            }

            this.app = new App();
            Backbone.history.start();
            return true;
        }
    };
});