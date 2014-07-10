

//  RUN GULPFILE INSTEAD ,
// THIS FILE IS PRESERVED AS A REFERENCE
// TO OTHER TASKS *


'use strict';

var gulp = require('gulp');
// var cssmin = require('gulp-cssmin');
// var rename = require('gulp-rename');
// var header = require('gulp-header');
// var less = require('gulp-less');
var dest = 'preview/css';
var src = 'app/less/main.less';
var pkg = require('./package.json');
var moment = require('moment');
var gulpLessTask, banner;

banner = '/* !!!  \n\n ' +
    '<%=pkg.name%> \n ' +
    'CSS MIN Baked on : \n ' +
    moment().format('dddd DD, MMM, YYYY, hh:mm:ss TT') + '\n' +
    '\n build :: <%=pkg.version%> \n\n' +
    '!!! */' +
    '\n';

// Wraps task in function for using inside gulp
// or grunt interchangably

gulpLessTask = function() {
    return gulp.src(src)
        .pipe(less({
            paths: ['app/less/utils']
        }))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min' // renames main.css ->main.min.css
        }))
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(gulp.dest(dest));
};

// gulp.task('watch', function() {
//     gulp.watch(src, ['css']);
// });
//
// gulp.task('css', gulpLessTask);
// gulp.task('default', ['watch']);

// Grunt config for rest of yeoman scaffold
// *
//  $ grunt --gruntfile gulpfile.js

module.exports = function(grunt) {


    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    // // load grunt-gulp tasker
    grunt.loadNpmTasks('grunt-gulp');

    var projectConfig = grunt.file.readJSON('projectConfig.json');

    grunt.initConfig({

        yeoman: projectConfig,
        pkg: grunt.file.readJSON('package.json'),

        gulp: {
            gulpLessTask: gulpLessTask,

        },

        clean: ['', '/bower_components'],
        concurrent: {
            target1: ['uglify', 'copy', 'html']
        }

    });

    // grunt.registerTask('sync', ['browser_sync']);
    // grunt.registerTask("server", ['connect:livereload', 'browser_sync' ,'watch']);
    // grunt.registerTask("server", ['connect:livereload', 'watch']);

    grunt.registerTask('gulpTask', ['gulp:gulpLessTask']);

    // locally defined tasks
    grunt.registerTask("build",
        'Run tasks concurrently, target 1', ['concurrent:target1']);
    // grunt.registerTask("default",
    //     'Loads server with livereload', ['server']);
    grunt.registerTask("specs",
        'Runs watcher on tests', ['watch:specs']);
    grunt.registerTask('uncomment',
        'Uncomments t4 tags inside templates', ['replace:uncommentT4tags']);
    grunt.registerTask('bower-inject',
        'Injects front-end dependencies into templates', ['bower-install']);
    // grunt.registerTask('sync', 'Deploys to various webdav servers', ['webdav_sync']);

    // Load per-task config from separate files.
    grunt.loadTasks('tasks');

    grunt.registerTask("html",
        'Preprocess html templates', ['htmlbuild']);

    grunt.registerTask('format',
        'Prettifies code according to beautifier.js rules ', ['jsbeautifier']);

    // grunt-gulp task
    grunt.registerTask('gulp-less-cssmin', 'pipe less -> css -> min.css ', ['gulp']);

    // reconstruct templates
    grunt.registerTask("rebuild",
        'Reruns build process', ['html', 'copy', 'bower-inject']);

    // prepare prod assets,
    // pending ftp/webdav task
    grunt.registerTask('deploy',
        'Prepares production assets', ['copy:bower', 'html:prod']);
};
