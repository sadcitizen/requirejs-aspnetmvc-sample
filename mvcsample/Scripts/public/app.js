define(function(require){
    'use strict';

    var tools = require('tools'),
        base = require('base');

    return new base.app({
        controllers: {
            'home': 'home_controller',
            'page': 'page_controller'
        },

        beforeStart: function () {
            tools.log('beforeStart message!');
        },

        afterStart: function () {
            tools.log('afterStart message!');
        }
    });
});