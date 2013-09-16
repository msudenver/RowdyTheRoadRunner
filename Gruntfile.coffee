
'use strict';

# grunt things...
# automation rules...
# T4TAGS = grunt.file.readJSON('t4tags_list.json');

LIVERELOAD_PORT = 35729;

module.exports = (grunt) ->

	# show elapse time at the end
	require('time-grunt')(grunt)

	# load all plug-ins
	require('load-grunt-tasks')(grunt)

	# config
	yeomanConfig =
		app : 'app'
		dist: 'dist'

	# css files to be minified and combined
	# ignore example : !background-img.css

	cssFiles = [
        'public/css/*.css'
		# 'public/css/utils/*.css'
		'!public/css/utils/mediaAllForIE8.css'
		'!public/css/vendor/*.css'
		'!public/css/inherit/*.css'
		 'public/css/utils/print.css'
	]


	lessFiles = [
		'public/less/*.less'
		'sm_build/less/*.less'
	 ]

	htmlFiles = ['sm_build/*.html']
	jsFiles   = ['public/js/main.js']

	coffeeScriptFiles = [
		'public/coffeescript/*.coffee'
		'sm_build/js/*.coffee'
	]

	grunt.initConfig

		yeoman : yeomanConfig,

		pkg : grunt.file.readJSON('package.json'),

		# connect server config
		connect:
			options :
				port: 9001
				livereload: 35729 # or true
				# change this host to 0.0.0.0 to access the server
				# from outsite
				hostname: '0.0.0.0'
				# hostname: 'localhost'

			server :
				options :
					open : true
					base: "sm_build"
					directory: "sm_build"


		# minify css
		cssmin :
			options :
				# expand: true,
				# banner + timestapmt
				banner : '/*! <%= pkg.name %> \n CSS Baked on <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %> */\n'

			combine :
				# options for combining CSS files
				files :
					'sm_build/css/main.min.css' : cssFiles


		# minify js files
		uglify :
			options :
				banner :
					'/*! <%= pkg.name %> \n JS Baked on <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %> */\n\n'

			my_target :
				files :
					'sm_build/js/main.min.js' : jsFiles


		# coffeescript compile task
		coffee :
            options  :
                base : true
			compile  :
				files : 'public/js/main.js' : coffeeScriptFiles

		# less task
		less :
			options :
					paths : ['public/less/*.less', 'sm_build/less/*.less']
					# report : 'gzip'

			'public/css/main-style.css' : lessFiles

		# watch routinely for css changes
		watch :
			cssChanges :
				files  : [cssFiles]
				tasks  : ['cssmin']
				options:
					# default port 35729, uses livereload chrome browser plug-in
					livereload: true

			lessChanges :
				files  : [lessFiles]
				tasks  : ['less']

			jsChanges :
				files : [jsFiles, coffeeScriptFiles],
				tasks : ['uglify']


	# watch event notifier
	grunt.event.on 'watch', (action, path, target)  ->
		grunt.log.writeln(target + ' : ' + path + ' has been ' + action)

	# Register tasks
	grunt.registerTask 'buildcss', ['cssmin']
	grunt.registerTask 'buildjs', ['uglify']
	grunt.registerTask 'brewcoffee', ['coffee']
	grunt.registerTask 'buildless', ['less']
	grunt.registerTask 'buildwatch', ['watch']

	grunt.registerTask 'server', (target) ->

		grunt.log.writeln "target #{target}"

		grunt.task.run([
            'cssmin',
			'brewcoffee',
			'connect:server:keepalive',
            'watch'
		])


	# default task(s)
	grunt.registerTask 'default',  ['watch']

