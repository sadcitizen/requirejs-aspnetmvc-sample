module.exports = function(grunt){

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        requirejs: {
            compile: {
                options: {
                    baseUrl: '.',
                    mainConfigFile: 'public/packages.js',
                    include: ['public/packages', 'assets/require/require.min.js'],
                    out: 'build/app.min.js',
                    deps: ['app'],
                    optimize: 'uglify',
                    preserveLicenseComments: false,
                    generateSourceMaps: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['requirejs']);
};