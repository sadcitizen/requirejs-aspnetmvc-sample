define(function(require) {
	'use strict';

	var cfg = require('config');

	function log(msg) {
		if (cfg.isDebug()) {
		    console.log(currentTime() + ' -> ' + msg);
		}
	}

	function currentTime() {
	    var date = new Date();
	    return leadingZero(date.getHours()) + ':' +
            leadingZero(date.getMinutes()) + ':' +
            leadingZero(date.getSeconds()) + '.' + date.getMilliseconds();
	}

	function leadingZero(value) {
	    return (value < 10 ? '0' : '') + value;
	}


	return {
		log: log
	};

});