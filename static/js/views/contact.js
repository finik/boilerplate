define(function(require) {
    var Backbone = require('backbone');
    var _ = require('underscore');
    var tpl = require('text!tpl/contact.html');

    var view = Backbone.View.extend({
        template: _.template(tpl),

        initialize: function () {
            this.render();
        },

        render: function () {
            $(this.el).html(this.template());
            return this;
        },
    });

    return view;
});