define(function (require){
    'use strict';

    var Action = function() {
        var tools = require('tools');

        function start() {
            tools.log('Home About starts!');
        }

        function stop() {
            tools.log('Home About stops!');
        }

        return {
            start: start,
            stop: stop
        };
    };

    return new Action();
});