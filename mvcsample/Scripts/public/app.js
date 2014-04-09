define(function(require){
    'use strict';

    var tools = require('tools'),
        base = require('base');

    return new base.App({
        controllers: {
            home: require('home_controller'),
            page: require('page_controller')
        },

        beforeStart: function (route, params) {
            tools.log('BeforeStart message! Route: ' + route.controller + '/' + route.action + '. Params: ' + params + '!');
        },

        afterStart: function (route, params) {
            tools.log('AfterStart message! Route: ' + route.controller + '/' + route.action + '. Params: ' + params + '!');
        }
    });
});