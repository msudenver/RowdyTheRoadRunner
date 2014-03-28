module.exports = function(grunt) {
    grunt.config('connect', {
        options: {
            // makes domain accessable to vms and world
            hostname: 'localhost',
        },
        livereload: {
            options: {
                open: true,
                port: 9005,
                livereload: true,
                base: 'preview',
                directory: 'preview'
            }
        },
    });
}
