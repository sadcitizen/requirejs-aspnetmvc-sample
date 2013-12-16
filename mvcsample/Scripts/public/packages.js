var require = {
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
		home_index: 'public/subapps/home/home_index',
		home_about: 'public/subapps/home/home_about',
		home_contact: 'public/subapps/home/home_contact',

	    /* --- subapps - page --- */
		page_index: 'public/subapps/page/page_index',
		
	},

	shim: {
		jquery: {
			exports: 'jQuery'
		},

		underscore: {
			exports: '_'
		},
	}
};