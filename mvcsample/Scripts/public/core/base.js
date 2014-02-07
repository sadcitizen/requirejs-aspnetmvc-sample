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
                var parts = route.toLowerCase().split('/');

                if (_opts.controllers[parts[0]]) {

                    if (_opts.beforeStart) {
                        _opts.beforeStart();
                    }

                    require([_opts.controllers[parts[0]]], function(ctrl) {
                        ctrl.initialize(parts[1], params);
                    });

                    if (_opts.afterStart) {
                        _opts.afterStart();
                    }
                }
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
            function initialize(action, options) {

                if (_opts.actions[action]) {
                    _opts.actions[action](options);
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
            app: app,
            controller: controller
        };

    };

    return new Base();
});