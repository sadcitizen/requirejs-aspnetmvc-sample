require.config({
    baseUrl: '/scripts',

    //urlArgs: 'v=' + (new Date()).getTime(),

    paths: {
        /**
         * Assets
         * */
        jquery: 'assets/jquery/jquery-1.10.2.min',
        underscore: 'assets/underscore/underscore.min',

        /**
         * Base
         * */
        base: 'public/core/base',

        /**
         * App
         * */
        app: 'public/app',

        /**
         * Core
         * */
        tools: 'public/core/tools',
        config: 'public/core/config',
        urls: 'public/core/urls',

        /**
         * SubApplication - Home
         * */
        home_controller: 'public/subapps/home/controller',
        home_index: 'public/subapps/home/actions/index',
        home_about: 'public/subapps/home/actions/about',
        home_contact: 'public/subapps/home/actions/contact',

        /**
         * SubApplication - Page
         * */
        page_controller: 'public/subapps/page/controller',
        page_index: 'public/subapps/page/actions/index'

    },

    shim: {
        jquery: {
            exports: 'jQuery'
        },

        underscore: {
            exports: '_'
        }
    }
});