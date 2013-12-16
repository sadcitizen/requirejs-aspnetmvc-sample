// Config
define(function() {
	'use strict';

	var debug = true;

	function isDebug() {
		return debug;
	}

	return {
		isDebug: isDebug,
	};
});