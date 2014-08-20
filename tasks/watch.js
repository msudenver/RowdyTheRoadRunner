module.exports = function(grunt) {
    grunt.config('watch', {

        options: {
            livereload: true
        },

        gruntfile: {
            // options : { livereload : true },
            files: 'tasks/*.js'
        },

        bower_deps: {
            // options : { livereload : true },
            files: ['bower_components/**'],
            tasks: ['copy:bower', 'bower-install']
        },

        less: {
            // options : { livereload : false }, // reset this for browser_sync
            //files: ['app/less/{*,utils/*}.less'],
            files: ['app/less/{main.min.css,print.css}'],
            tasks: ['css']
        },

        js: {
            // options : { livereload : true },
            files: ["app/js/*.js"],
            tasks: ['jshint', 'uglify', 'copy:js']
        },

        livereload: {
            // options: {livereload: true},
            files: [
                'app/*.html',
                'app/views/*.html',
                'app/layouts/*.html',
                'app/images /**/*.{png,jpg,jpeg,gif,webp,svg}'
            ],
            tasks: [
                // 'copy:templates',
                'copy:images',
                'copy:views',
                'html'
            ]
        },

        // watch specs
        specs: {
            // options : { livereload : true },
            files: ['specs/*.coffee'],
            tasks: ['coffee:compile_specs', 'jasmine_node']
        }
    });
}
