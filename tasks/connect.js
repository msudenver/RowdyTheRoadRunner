module.exports = function(grunt) {
    grunt.config('connect', {
        options: {
            // makes domain accessable to vms and world
            hostname: '0.0.0.0',
        },
        livereload: {
            options: {
                open: true,
                port: 9000,
                livereload: true,
                base: 'preview',
                directory: 'preview'
            }
        },
    });
}
