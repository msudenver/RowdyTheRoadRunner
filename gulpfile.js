'use strict';

var gulp = require('gulp');
require('gulp-grunt')(gulp); // add all the gruntfile tasks to gulp

var runSequence = require('run-sequence'),
    cssmin = require('gulp-cssmin'),
    livereload = require('gulp-livereload'),
    rename = require('gulp-rename'),
    header = require('gulp-header'),
    less = require('gulp-less'),
    pkg = require('./package.json'),
    moment = require('moment'),
    uglify = require('gulp-uglify'),
    protractor = require('gulp-protractor').protractor;

// var _ = require('lodash');
// var util = require('gulp-util');

var banner = '/* !!!  \n\n ' + '<%=pkg.name%> \n ' + '<%=type%> MIN Baked on : \n ' +
    moment().format('dddd DD, MMM, YYYY, hh:mm:ss TT') + '\n' +
    '\n build :: <%=pkg.version%> \n\n' + '!!! */' + '\n';

// source paths
var src = {
    'less': ['app/less/**/*.less', 'app/less/main.less'],
    'scripts': ['app/main.js'],
    'templates': ['app/**/*.html', ],
    'mainlessFile': 'app/less/main.less',
    'mainJs': 'app/js/main.js',
};

// destination paths
var dest = {
    'css': 'preview/css',
    'js': 'preview/js'
};

// Run grunt tasks as gulp registered tasks
// - prepend grunt-* to for grunt task
// *

gulp.task('Js', function() {
    return gulp.src(src.mainJs)
        .pipe(uglify({
            outSourceMap: true
        }))
        .pipe(rename({
            suffix: '.min' // renames main.js ->main.min.js
        }))
        .pipe(header(banner, {
            pkg: pkg,
            type: 'JS'
        }))
        .pipe(gulp.dest(dest.js))
})

gulp.task('css', function() {
    return gulp.src(src.mainlessFile)
        .pipe(less({
            paths: ['app/less/utils']
        }))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min' // renames main.css ->main.min.css
        }))
        .pipe(header(banner, {
            pkg: pkg,
            type : 'CSS'
        }))
        .pipe(gulp.dest(dest.css));
});

gulp.task('build', function(cb) {
    // runSequence reference:
    //  ( 1 # 1st  ,[2,3] # 2nd runs in parallel ,4 # 3rd )  cb   # call callback last
    runSequence('grunt-htmlbuild', 'grunt-copy', cb);
});

gulp.task('html', ['grunt-htmlbuild']);

gulp.task('watch', function() {
    gulp.watch(src.less, ['css']);
    gulp.watch(src.mainJs, ['Js']);
    gulp.watch(src.templates, ['html']);
    // gulp.watch('spec/unit/{*, /**}.js', ['spec']);
    gulp.watch('preview/**').on('change', function(file) {
        livereload().changed(file.path);
    });
});

// Run $ webdriver-manager start
gulp.task('spec', function() {
    return gulp.src(["spec/unit/*.js"])
        .pipe(protractor({
            configFile: "spec/protractor.config.js",
            args: ['--baseUrl', 'http://127.0.0.1:8000']
        }))
        .on('error', function(e) {
            throw e;
        });
});

gulp.task('server', ['grunt-connect', 'watch']);
gulp.task('default', ['server']);

// Grunt config for rest of yeoman scaffold
// *
//  $ grunt --gruntfile gulpfile.js

// module.exports = function(grunt) {


//     // require('time-grunt')(grunt);
//     // require('load-grunt-tasks')(grunt);

//     // // load grunt-gulp tasker
//     // grunt.loadNpmTasks('grunt-gulp');

//     var projectConfig = grunt.file.readJSON('projectConfig.json');

//     grunt.initConfig({

//         yeoman: projectConfig,
//         pkg: grunt.file.readJSON('package.json'),

//         // gulp: {
//         //     gulpLessTask: gulpLessTask,

//         // },

//         // clean: ['', '/bower_components'],
//         // concurrent: {
//         //     target1: ['uglify', 'copy', 'html']
//         // }

//     });

//     // grunt.registerTask('sync', ['browser_sync']);
//     // grunt.registerTask("server", ['connect:livereload', 'browser_sync' ,'watch']);
//     // grunt.registerTask("server", ['connect:livereload', 'watch']);

//     // grunt.registerTask('gulpTask', ['gulp:gulpLessTask']);

//         // Load per-task config from separate files.
//     grunt.loadTasks('tasks');

//     // locally defined tasks
//     grunt.registerTask("build",
//         'Run tasks concurrently, target 1', ['concurrent:target1']);

//     // grunt.registerTask("default",
//     //     'Loads server with livereload', ['server']);
//     // grunt.registerTask("specs",
//     //     'Runs watcher on tests', ['watch:specs']);
//     // grunt.registerTask('uncomment',
//     //     'Uncomments t4 tags inside templates', ['replace:uncommentT4tags']);

//     grunt.registerTask('bower-inject',
//         'Injects front-end dependencies into templates', ['bower-install']);
//     // grunt.registerTask('sync', 'Deploys to various webdav servers', ['webdav_sync']);



//     grunt.registerTask("html",
//         'Preprocess html templates', ['htmlbuild']);

//     // grunt.registerTask('format',
//     //     'Prettifies code according to beautifier.js rules ', ['jsbeautifier']);

//     // grunt-gulp task
//     // grunt.registerTask('gulp-less-cssmin', 'pipe less -> css -> min.css ', ['gulp']);

//     // reconstruct templates
//     grunt.registerTask("rebuild",
//         'Reruns build process', ['html', 'copy', 'bower-inject']);

//     // prepare prod assets,
//     // pending ftp/webdav task
//     grunt.registerTask('deploy',
//         'Prepares production assets', ['copy:bower', 'html:prod']);
// };
