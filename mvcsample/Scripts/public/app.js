define(function(require){
    'use strict';

    var tools = require('tools'),
        app = function() {

            var routes = {
                
                'home/index': function (params) {
                    require('home_index').start(params);
                },
                
                'home/about': function (params) {
                    require('home_about').start(params);
                },
                
                'home/contact': function (params) {
                    require('home_contact').start(params);
                },
                
                'page/index': function (params) {
                    require('page_index').start(params);
                }

            };

            function start(route, params) {

                tools.log('Application starts!');

                route = route.toLowerCase();
                
                if (routes[route]) {
                    routes[route](params);
                }
            }

            return {
                start: start
            };

        };

    return new app();
});