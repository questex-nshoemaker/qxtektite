'use strict';

module.exports = function (grunt) {

    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // watch for files to change and run tasks when they do
        watch: {
            sass: {
                files: ['assets/sass/**/*.{scss,sass}'],
                tasks: ['sass']
            }
        },

        // sass (libsass) config
        sass: {
            options: {
                sourceMap: true,
                relativeAssets: false,
                outputStyle: 'expanded',
                sassDir: 'assets/sass',
                cssDir: 'assets/css'
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'assets/sass/',
                    src: ['**/*.{scss,sass}'],
                    dest: 'assets/css',
                    ext: '.css'
                }]
            }
        },
        postcss: {
            options: {
                map: {
                    inline: false
                },
                processors: [
                    require('pixrem')(), //adds fallbacks for rem
                    require('autoprefixer-core')({browsers: ['last 2 versions', 'ie9']}) // add vendor prefixes
                ]
            },
            build: {
                processors: [
                    require('pixrem')(),
                    require('autoprefixer-core')({browsers: ['last 2 versions', 'ie9']}) // add vendor prefixes
                ]
            }
        },

        // run tasks in parallel
        concurrent: {
            serve: [
                'sass',
                'watch'
            ],
            options: {
                logConcurrentOutput: true
            }
        },
    });

    // Register the grunt serve task
    grunt.registerTask('serve', [
        'concurrent:serve'
    ]);

    // Register the grunt build task
    grunt.registerTask('build', [
        'sass'
    ]);

    // Register build as the default task fallback
    grunt.registerTask('default', 'build');

};
