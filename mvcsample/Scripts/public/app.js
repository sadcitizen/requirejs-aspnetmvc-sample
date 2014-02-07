define(function(require){
    'use strict';

    var tools = require('tools'),
        app = function() {

            var controllers = {
                home: function (action, params) {
                    require('home_controller').initialize(action, params);
                },

                page: function (action, params) {
                    require('page_controller').initialize(action, params);
                }
            };

            function start(route, params) {

                tools.log('Application starts!');

                var parts = route.toLowerCase().split('/');

                if (controllers[parts[0]]) {
                    controllers[parts[0]](parts[1], params);
                }
            }

            return {
                start: start
            };

        };

    return new app();
});