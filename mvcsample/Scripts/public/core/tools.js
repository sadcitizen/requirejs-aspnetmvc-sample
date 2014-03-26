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

    function parseUrl(url) {
        var a = document.createElement('a'),
            parsed = {};
        
        a.href = url;

        parsed.protocol = a.protocol.replace(':', '');
        parsed.host = a.hostname;
        parsed.port = parseStringToInt(a.port);
        parsed.segments = a.pathname.replace(/^\//, '').split('/');
        parsed.query = a.search.replace(/^\?/, '');

        parsed.params = (function () {
            var o = { },
                segments = parsed.query.split('&'),
                length = segments.length,
                i = 0,
                parts;
            
            for (; i < length ; i++) {
                parts = segments[i].split('=');
                o[parts[0]] = parseStringToInt(parts[1]);
            }

            return o;
        })();

        parsed.hash = a.hash.replace(/^\#/, '');
        return parsed;
    }

    function parseStringToInt(str) {
        var num = parseInt(str, 10);
        return isNaN(num) ? str : num;
    }

	return {
	    log: log,
	    parseUrl: parseUrl
	};

});