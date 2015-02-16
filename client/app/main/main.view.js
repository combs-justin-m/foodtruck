'use strict';

define(['backbone', 'app'], 
function (Backbone, App) {

	var MainView = Backbone.View.extend({
		el: '#main-container',

		events: {
			'click #admin-panel-btn': 'gotoAdmin'
		},

		initialize: function () {
			this.$adminPanelBtn = this.$('#admin-panel-btn');
			this.listenTo(App.auth, 'change', this.render);
		},

		section: function (name) {
			return $(this.sections[name]);
		},

		gotoAdmin: function (e) {
			e.preventDefault();
			App.trigger('route', 'admin');
		},

		render: function () {
			this.$adminPanelBtn.toggleClass('hidden', !App.auth.isAuthenticated());
		}
	});

	return MainView;
});