({
	baseUrl: '.',
	mainConfigFile: 'public/packages.js',
	include: ['public/packages', 'assets/require/require.min.js'],
	deps: ['app'],
	optimize: 'uglify',
	out: 'application.js',
	generateSourceMaps: false,
	preserveLicenseComments: false,
	onBuildWrite: function (name, path, contents) {
	    console.log('Writing: ' + name);
	    return contents;
	}
})