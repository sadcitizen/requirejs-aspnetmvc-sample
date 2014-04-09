define(function () {
    'use strict';

    var Base = {};

    Base.App = (function () {

        function App (options) {

            if (options === undefined) {
                throw new Error('App options not found!');
            }

            if (options.controllers === undefined) {
                throw new Error('Controllers not found!');
            }

            this._options = options;
        }

        function parseRoute(route) {
            var parts = route.toLowerCase().split('/');

            return {
                controller: parts[0],
                action: parts[1]
            };
        }

        App.prototype.start = function (route, params) {
            var parsedRoute = parseRoute(route);

            if (this._options.controllers[parsedRoute.controller]) {

                if (this._options.beforeStart) {
                    this._options.beforeStart(parsedRoute, params);
                }

                this._options.controllers[parsedRoute.controller].initialize(parsedRoute.action, params);

                if (this._options.afterStart) {
                    this._options.afterStart(parsedRoute, params);
                }
            }
        };

        return App;
    })();

    Base.Controller = (function () {

        function Controller (options) {
            if (options === undefined) {
                throw new Error('Controller options not found!');
            }

            if (options.actions === undefined) {
                throw new Error('Actions not found!');
            }

            this._options = options;
        }

        Controller.prototype.initialize = function (action, params) {
            if (this._options.actions[action]) {
                if (this._options.beforeStart) {
                    this._options.beforeStart(action, params);
                }

                this._options.actions[action](params);

                if (this._options.afterStart) {
                    this._options.afterStart(action, params);
                }
            }
        };

        return Controller;
    })();

    Base.Action = (function () {

        function Action (options) {
            if (options === undefined) {
                throw new Error('Action options not found!');
            }

            if (options.start === undefined) {
                throw new Error('Method Start not found!');
            }

            for (var prop in options) {
                if (options.hasOwnProperty(prop)) {
                    this[prop] = options[prop];
                }
            }
        }

        Action.prototype.start = function () {};

        Action.prototype.stop = function () {};

        return Action;
    })();

    return Base;
});