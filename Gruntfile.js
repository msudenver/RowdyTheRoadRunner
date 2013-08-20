// Generated by CoffeeScript 1.6.2
(function() {
  module.exports = function(grunt) {
    var coffeeFiles, cssFiles, htmlFiles, jsFiles, lessFiles;

    cssFiles = ['public/css/*.css', '!public/css/utils/mediaAllForIE8.css', '!public/css/vendor/*.css', '!public/css/inherit/*.css'];
    lessFiles = ['public/less/*.less', 'public/less/utils/*.less', 'public/less/vendor/*.less'];
    htmlFiles = ['sm_build/*.html'];
    jsFiles = ['public/js/main.js'];
    coffeeFiles = ['public/coffeescript/*.coffee'];
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      cssmin: {
        options: {
          banner: '/*! <%= pkg.name %> \n CSS Baked on <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %> */\n'
        },
        combine: {
          files: {
            'sm_build/css/main.min.css': cssFiles
          }
        }
      },
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> \n JS Baked on <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %> */\n\n'
        },
        my_target: {
          files: {
            'sm_build/js/main.min.js': jsFiles
          }
        }
      },
      coffee_build: {
        options: {
          wrap: false
        },
        'public/js/main.js': coffeeFiles
      },
      less: {
        options: {
          paths: ['public/less']
        },
        'public/css/main-style.css': lessFiles
      },
      watch: {
        cssChanges: {
          files: [cssFiles],
          tasks: ['cssmin'],
          options: {
            livereload: false
          }
        },
        jsChanges: {
          files: [jsFiles],
          tasks: ['uglify']
        }
      }
    });
    grunt.event.on('watch', function(action, path, target) {
      return grunt.log.writeln(target + ' : ' + path + ' has been ' + action);
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-coffee-build');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('buildcss', ['cssmin']);
    grunt.registerTask('buildjs', ['uglify']);
    grunt.registerTask('buildcoffee', ['coffee_build']);
    grunt.registerTask('buildless', ['less']);
    grunt.registerTask('buildwatch', ['watch']);
    return grunt.registerTask('default', ['watch']);
  };

}).call(this);
