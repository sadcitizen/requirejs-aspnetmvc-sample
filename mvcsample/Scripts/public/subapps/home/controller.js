define(function (require) {
    'use strict';

    var base = require('base'),
        tools = require('tools');

    return new base.Controller({
        actions: {
            index: function (options) {
                require('home_index').start(options);
            },

            about: function (options) {
                require('home_about').start(options);
            },

            contact: function (options) {
                require('home_contact').start(options);
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