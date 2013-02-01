define(function(require) {
	var $ = require('jquery');
	var Backbone = require('backbone');
	var MainRouter = require('router');
	var Bootstrap = require('bootstrap');

	$(function(){
		new MainRouter();
		Backbone.history.start({pushState: false});
	});
});
