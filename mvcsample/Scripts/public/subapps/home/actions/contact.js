define(function (require){
	'use strict';

	var tools = require('tools');

	function start() {
	    tools.log('Home Contact starts!');
	    
	    tools.log(require('urls').forms().posts);
	}

	function stop() {
	    tools.log('Home Contact stops!');
	}

    return {
        start: start,
        stop: stop
    };
});