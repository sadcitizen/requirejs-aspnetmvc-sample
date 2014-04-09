define(function (require){
	'use strict';

    var Action = function() {
        var tools = require('tools');

        function start() {
            tools.log('Home Index starts!');
        }

        function stop() {
            tools.log('Home Index stops!');
        }

        return {
            start: start,
            stop: stop
        };
    };

    return new Action();
});