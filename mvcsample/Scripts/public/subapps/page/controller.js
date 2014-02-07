define(function (require) {
    'use strict';

    var PageController = function () {

        var actions = {
            index: index
        };

        /**
         * Constructor
         * */

        function initialize(action, options) {

            if (actions[action]) {
                actions[action](options);
            }

        }

        /**
         * Actions
         * */
        function index(options) {
            require('page_index').start(options);
        }

        /**
         * API
         * */
        return {
            initialize: initialize
        }
    };

    return new PageController();
});