define(function () {
    'use strict';

    var Base = function () {

        function app (options) {

            if (options === undefined && options.controllers === undefined) {
                throw new Error('Controllers not found!');
            }

            function start(route, params) {
                var parts = route.toLowerCase().split('/');

                if (options.controllers[parts[0]]) {

                    if (options.beforeStart) {
                        options.beforeStart();
                    }

                    require([options.controllers[parts[0]]], function(ctrl) {
                        ctrl.initialize(parts[1], params);
                    });

                    if (options.afterStart) {
                        options.afterStart();
                    }
                }
            }

            return {
                start: start
            };
        }

        function controller () {

        }

        return {
            app: app,
            controller: controller
        }

    };

    return new Base();
});