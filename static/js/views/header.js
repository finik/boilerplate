define(function(require) {
    var Backbone = require('backbone');
    var _ = require('underscore');
    var tpl = require('text!tpl/header.html');

    var HeaderView = Backbone.View.extend({
        template: _.template(tpl),

        initialize: function () {
            this.render();
        },

        render: function () {
            $(this.el).html(this.template());
            return this;
        },

        selectMenuItem: function (menuItem) {
            $('.nav li').removeClass('active');
            if (menuItem) {
                $('.' + menuItem).addClass('active');
            }
        }

    });

    return HeaderView;
});