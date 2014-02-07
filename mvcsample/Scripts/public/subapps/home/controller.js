define(function (require) {
    'use strict';

    var HomeController = function () {

        var actions = {
            index: index,
            contact: contact,
            about: about
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
            require('home_index').start(options);
        }

        function about(options) {
            require('home_about').start(options);
        }

        function contact(options) {
            require('home_contact').start(options);
        }

        /**
         * API
         * */
        return {
            initialize: initialize
        }
    };

    return new HomeController();
});