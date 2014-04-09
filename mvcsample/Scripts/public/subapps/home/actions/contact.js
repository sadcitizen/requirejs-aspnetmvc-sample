define(function (require){
    'use strict';

    var Action = function() {
        var tools = require('tools');

        function start() {
            tools.log('Home Contacts starts!');
        }

        function stop() {
            tools.log('Home Contacts stops!');
        }

        return {
            start: start,
            stop: stop
        };
    };

    return new Action();
});