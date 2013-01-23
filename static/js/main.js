requirejs.config({
	shim: {
		'bootstrap': {
			deps: ['jquery'],
			exports: 'bootstrap'
		},
		'underscore': {
			exports: '_'
		},
		'backbone': {
			exports: 'Backbone',
			deps: ['underscore']

		}
	},
	paths: {
		'underscore'    : 'vendor/underscore-min',
		'backbone'      : 'vendor/backbone-min',
		'jquery'        : 'vendor/jquery-1.9.0.min',
		'bootstrap'     : 'vendor/bootstrap.min',
		'text'          : 'vendor/text'
	}
});

define(function(require) {
	var $ = require('jquery');
	var Backbone = require('backbone');
	var MainRouter = require('router');

	$(function(){
		new MainRouter();
		Backbone.history.start({pushState: false});
	});
});
