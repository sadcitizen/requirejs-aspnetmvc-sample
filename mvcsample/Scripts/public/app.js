define(function(require){
    'use strict';

    var tools = require('tools'),
        base = require('base');

    return new base.app({
        controllers: {
            'home': require('home_controller'),
            'page': require('page_controller')
        },

        beforeStart: function () {
            tools.log('beforeStart message!');
        },

        afterStart: function () {
            tools.log('afterStart message!');
        }
    });
});