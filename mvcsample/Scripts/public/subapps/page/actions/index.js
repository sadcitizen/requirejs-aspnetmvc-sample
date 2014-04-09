define(function (require) {
    'use strict';

    var base = require('base'),
        $ = require('jquery'),
        tools = require('tools'),
        $featured = $('.featured'),
        scope = {};

    return new base.Action({
        start: function (params) {
            tools.log('Page Index starts!');

            var $el = $('<' + params.el + '>', {
                id: params.id
            }).text(params.text);

            $featured.append($el);

            scope.$el = $el;

            setTimeout(this.stop, 3000);
        },

        stop: function () {
            tools.log('Page Index stops!');
            scope.$el.remove();
        }
    });
});