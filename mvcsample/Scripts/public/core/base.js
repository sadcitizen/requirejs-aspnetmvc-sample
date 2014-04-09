define(function () {
    'use strict';

    var Base = function () {

        function app (_opts) {

            if (_opts === undefined && _opts.controllers === undefined) {
                throw new Error('Controllers not found!');
            }

            /**
             * Starter
             * */
            function start(route, params) {
                var parsedRoute = parseRoute(route);

                if (_opts.controllers[parsedRoute.controller]) {

                    if (_opts.beforeStart) {
                        _opts.beforeStart(parsedRoute, params);
                    }

                    _opts.controllers[parsedRoute.controller].initialize(parsedRoute.action, params);

                    if (_opts.afterStart) {
                        _opts.afterStart(parsedRoute, params);
                    }
                }
            }

            function parseRoute(route) {
                var parts = route.toLowerCase().split('/');

                return {
                    controller: parts[0],
                    action: parts[1]
                };
            }

            /**
             * API
             * */
            return {
                start: start
            };
        }

        function controller (_opts) {

            if (_opts === undefined && _opts.actions === undefined) {
                throw new Error('Actions not found!');
            }

            /**
             * Constructor
             * */
            function initialize(action, params) {

                if (_opts.actions[action]) {
                    if (_opts.beforeStart) {
                        _opts.beforeStart(action, params);
                    }

                    _opts.actions[action](params);

                    if (_opts.afterStart) {
                        _opts.afterStart(action, params);
                    }
                }
            }

            /**
             * API
             * */
            return {
                initialize: initialize
            };
        }

        return {
            App: app,
            Controller: controller
        };

    };

    return new Base();
});