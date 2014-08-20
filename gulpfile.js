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
    del = require('del'),
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

gulp.task('js', function() {
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

gulp.task('prep', function(cb) {
    // runSequence reference:
    //  ( 1 # 1st  ,[2,3] # 2nd runs in parallel ,4 # 3rd )  cb   # call callback last
    runSequence('grunt-htmlbuild', 'grunt-copy', 'css', 'js', cb);
});

gulp.task('html', ['grunt-htmlbuild']);

gulp.task('watch', function() {
    gulp.watch(src.less, ['css']);
    gulp.watch(src.mainJs, ['js']);
    gulp.watch(src.templates, ['html']);
    gulp.watch('preview/**').on('change', function(file) {
        livereload().changed(file.path);
    });
});

gulp.task('serve', ['grunt-connect', 'watch']);
gulp.task('default', ['server']);

// Clean all build files as a new project except for node_modules
gulp.task('nuke', del.bind(null, ['preview', 'prod', 'bower_components' ]));
