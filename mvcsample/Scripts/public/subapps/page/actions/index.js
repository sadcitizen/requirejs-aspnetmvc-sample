define(function (require) {
    'use strict';

    var index = function () {

        var $ = require('jquery'),
            tools = require('tools'),
            $featured = $('.featured'),
            scope = {};

        function start(params) {
            tools.log('Page Index starts!');

            var $el = $('<' + params.el + '>', {
                id: params.id
            }).text(params.text);

            $featured.append($el);

            scope.$el = $el;
        }

        function stop() {
            tools.log('Page Index stops!');
            scope.$el.remove();
        }

        return {
            start: start,
            stop: stop
        };
    };

    return new index();
});