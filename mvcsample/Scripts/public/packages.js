require.config({
    baseUrl: '/scripts',

    urlArgs: 'v=' + (new Date()).getTime(),

    paths: {
        /* --- assets --- */
        jquery: 'assets/jquery/jquery-1.10.2.min',
        underscore: 'assets/underscore/underscore.min',

        /* --- app --- */
        app: 'public/app',

        /* --- core --- */
        tools: 'public/core/tools',
        config: 'public/core/config',
        urls: 'public/core/urls',

        /* --- subapps --- */

        /* --- subapps - home --- */
        home_controller: 'public/subapps/home/controller',
        home_index: 'public/subapps/home/actions/index',
        home_about: 'public/subapps/home/actions/about',
        home_contact: 'public/subapps/home/actions/contact',

        /* --- subapps - page --- */
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