define(function (require) {
    'use strict';

    var base = require('base');

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
        }
    });
});