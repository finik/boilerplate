define(function(require) {
    var Backbone = require('backbone');
    var HeaderView = require('views/header');
    var IndexView = require('views/index');
    var AboutView = require('views/about');
    var ContactView = require('views/contact');

    var Router = Backbone.Router.extend({
        routes: {
            "": "index", 
            "about": "about",
            "contact": "contact"
        },
        initialize: function () {
            this.headerView = new HeaderView();
            $('.header').html(this.headerView.el);
        },
        index: function() {
            if (!this.indexView) {
                this.indexView = new IndexView();
            }
            $('#content').html(this.indexView.el);
            this.headerView.selectMenuItem('home-menu');
        },
        about: function() {
            if (!this.aboutView) {
                this.aboutView = new AboutView();
            }
            $('#content').html(this.aboutView.el);
            this.headerView.selectMenuItem('about-menu');
        },
        contact: function() {
            if (!this.contactView) {
                this.contactView = new ContactView();
            }
            $('#content').html(this.contactView.el);
            this.headerView.selectMenuItem('contact-menu');
        }
    });

return Router;
});