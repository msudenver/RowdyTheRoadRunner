module.exports = function(grunt) {
    grunt.config('copy', {
        // flat filepath output
        views: {
            expand: true,
            cwd: 'app/views/',
            src: '*.html',
            dest: 'preview/views/',
            flatten: false,
            filter: 'isFile',
        },
        // templates: {
        //     expand: true,
        //     cwd: 'app',
        //     src: '*.html',
        //     dest: 'preview',
        //     flatten: true,
        //     filter: 'isFile',
        // },
        css: {
            expand: true,
            cwd: 'app/less/',
            src: 'print.css',
            dest: 'preview/css/',
            flatten: true,
            filter: 'isFile',
        },
        images: {
            expand: true,
            cwd: 'app/images/',
            src: '**/*.{png,jpg,jpeg,gif,webp,svg}',
            dest: 'preview/images/',
            flatten: false,
            filter: 'isFile',
        },
        js: {
            expand: true,
            cwd: 'app/js/',
            src: '**',
            dest: 'preview/js/',
            flatten: false,
            filter: 'isFile',
        },
        bower: {
            files: [{
                expand: true,
                cwd: 'bower_components',
                src: '**/*',
                dest: 'preview/bower_components/',
                flatten: false,
                filter: 'isFile',
            }, {
                expand: true,
                cwd: 'bower_components',
                src: '**/*',
                dest: 'prod/bower_components/',
                flatten: false,
                filter: 'isFile',
            }]
        }
    });
}
