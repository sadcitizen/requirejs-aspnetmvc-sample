define(function (require) {
    'use strict';

    var base = require('base');

    return new base.Controller({
        actions: {
            index: function (options) {
                require('page_index').start(options);
            }
        }
    });
});