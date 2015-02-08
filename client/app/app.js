
'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'menu/menu',
    'login/login'],
function($, _, Backbone, Menu, Login) {

    var App = Backbone.Router.extend({

    	routes: {
            '(/)': 'index',
            'admin(/)': 'admin'
        },

        initialize: function() {
            this.views = [
                Menu.createView({ el: '#menu-container', app: this })
            ];
        },

        index: function() {
           this.render();
        },

        admin: function() {
            this.render();

            var view = Login.createView({ app: this });
            this.append(view.render());
        },

        render: function () {
             _.invoke(this.views, 'render');
             return this;
        },

        append: function (view) {
            $('body').append(view.el);
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