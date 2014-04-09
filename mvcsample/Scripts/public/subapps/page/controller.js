define(function (require) {
    'use strict';

    var base = require('base'),
        tools = require('tools');

    return new base.Controller({
        actions: {
            index: function (options) {
                require('page_index').start(options);
            }
        },

        beforeStart: function (action, params) {
            tools.log('Controller BeforeStart message! Action: ' + action + '. Params: ' + params + '!');
        },

        afterStart: function (action, params) {
            tools.log('Controller AfterStart message! Action: ' + action + '. Params: ' + params + '!');
        }
    });
});