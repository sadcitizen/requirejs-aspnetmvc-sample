define(function(require){
    'use strict';

    var tools = require('tools'),
        app = function() {

            var controllers = {
                'home': 'home_controller',
                'page': 'page_controller'
            };


            function start(route, params) {
                tools.log('Application starts!');

                var parts = route.toLowerCase().split('/');

                if (controllers[parts[0]]) {
                    require([controllers[parts[0]]], function(ctrl) {
                        ctrl.initialize(parts[1], params);
                    });
                }
            }

            return {
                start: start
            };

        };

    return new app();
});