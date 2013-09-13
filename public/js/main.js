var $$___public_coffeescript_main = {};
$$___public_coffeescript_main = (function(module, exports) {
  'use strict';
$(function() {
  var href;
  return href = document.location.href;
});

$('body').animate({
  opacity: 1
});

$(".clickable").click(function(event) {
  event.preventDefault();
  if ($(this).data().href) {
    return window.open($(this).data().href, "_self");
  }
});

Modernizr.addTest('firefox', function() {
  return !!navigator.userAgent.match(/firefox/i);
});

Modernizr.addTest('homepage', function() {
  return !!href.match(/^(http|https)(\:\/\/msudenver.edu\/$)/g);
});

if ($("html").hasClass('homepage')) {
  $Trumba.addSpud({
    webName: "msudenver-events-calendars",
    spudType: "upcoming",
    url: {
      filterview: "HomePageFeed"
    },
    teaserBase: "http://msudenver.edu/events",
    spudId: "homepage_events"
  });
  $('div#top3').load("/newsroom/home/");
} else {
  console.warn("running on localhost");
}

  return module.exports;
})({exports: $$___public_coffeescript_main}, $$___public_coffeescript_main);var $$___Gruntfile = {};
$$___Gruntfile = (function(module, exports) {
  'use strict';
var LIVERELOAD_PORT;

LIVERELOAD_PORT = 35729;

module.exports = function(grunt) {
  var coffeeFiles, cssFiles, htmlFiles, jsFiles, lessFiles, yeomanConfig;
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);
  yeomanConfig = {
    app: 'app',
    dist: 'dist'
  };
  cssFiles = ['public/css/*.css', '!public/css/utils/mediaAllForIE8.css', '!public/css/vendor/*.css', '!public/css/inherit/*.css', 'public/css/utils/print.css'];
  lessFiles = ['public/less/*.less', 'public/less/utils/*.less', 'public/less/vendor/*.less'];
  htmlFiles = ['sm_build/*.html'];
  jsFiles = ['public/js/main.js'];
  coffeeFiles = ['public/coffeescript/*.coffee', 'Gruntfile.coffee'];
  grunt.initConfig({
    yeoman: yeomanConfig,
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 9000,
          hostname: 'localhost',
          base: "www-root/sm_build",
          keepalive: true
        }
      }
    },
    coffee: {
      dist: {
        files: [
          {
            expand: true,
            cwd: ""
          }
        ]
      }
    },
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
      lessChanges: {
        files: [lessFiles],
        tasks: ['less']
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
  grunt.registerTask('buildcss', ['cssmin']);
  grunt.registerTask('buildjs', ['uglify']);
  grunt.registerTask('buildcoffee', ['coffee_build']);
  grunt.registerTask('buildless', ['less']);
  grunt.registerTask('buildwatch', ['watch']);
  grunt.registerTask('server', ['connect']);
  return grunt.registerTask('default', ['watch']);
};

  return module.exports;
})({exports: $$___Gruntfile}, $$___Gruntfile);

//@ sourceMappingURL=main.js.map