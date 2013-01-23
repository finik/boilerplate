define(function(require) {
    var Backbone = require('backbone');
    var _ = require('underscore');
    var tpl = require('text!tpl/index.html');

    var IndexView = Backbone.View.extend({
        template: _.template(tpl),

        initialize: function () {
            this.render();
        },

        render: function () {
            $(this.el).html(this.template());
            return this;
        },
    });

    return IndexView;
});