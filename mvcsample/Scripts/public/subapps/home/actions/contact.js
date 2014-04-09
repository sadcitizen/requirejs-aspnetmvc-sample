define(function (require) {
    'use strict';

    var base = require('base'),
        tools = require('tools');

    return new base.Action({
        start: function () {
            tools.log('Home Contacts starts!');
        }
    });
});