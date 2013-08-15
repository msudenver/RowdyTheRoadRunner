
module.exports = (grunt) ->

	# grunt things... 
	# automation rules...
	# T4TAGS = grunt.file.readJSON('t4tags_list.json');

	# css files to be minified and combined
	# ignore background-img.css

	cssFiles = ['public/css/*.css', '!public/css/utils/*.css','!public/css/vendor/*.css',
	'!public/css/inherit/*.css', 'public/css/utils/contentTypes.css','public/css/utils/tables.css'];

	# lessFiles = ['public/less/*.less', 'public/less/utils/*.less', '!public/less/vendor' ]

	htmlFiles = ['sm_build/*.html']
	jsFiles = ['public/js/main.js']
	coffeeFiles = ['public/coffeescript/*', '/Gruntfile.coffee', 'casperjs_server/app.coffee']

	# watchYourSelf = ['Gruntfile.coffee', '!/.git', '!2011_Styles/*', '!casperjs_server/*', 
	# '!node_modules/*', '!public/*','!routes/*','!sm_build/*', '!views/*']

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
			  
		cssmin : {
			options : {
				expand: true,
				# banner + timestapmt
				banner : '/*! <%= pkg.name %> \n CSS Baked on <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %> */\n'
			},
			combine : {
				# options for combining CSS files
				files : {
					'sm_build/css/main.min.css' : cssFiles
				}
			}
		},

		# minify js files
		uglify : {
			options : {
				banner : '/*! <%= pkg.name %> \n JS Baked on <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %> */\n\n'
			}
			my_target : {
				files : {
					'sm_build/js/main.min.js' : jsFiles
				}
			}
		},

		# coffeescript compile task 
		coffee_build : {
			options	 : {
				wrap : true
			},
			files : coffeeFiles
		},

		# less task
		less : {
			options : {
					paths : ['public/less']
			},
			local : {
				files : [{ 
					expand: true, 
					cwd: 'public/less', 
					src: '*.less', 
					dest: 'public/css/', 
					ext: '.css' 
				}]
			}
		},

		# watch routinely for css changes
		watch : {
			all : {
				# files : [cssFiles, jsFiles, coffeeFiles, htmlFiles, lessFiles],
				files : [cssFiles, jsFiles, coffeeFiles, htmlFiles],
				# tasks : ['cssmin', 'uglify', 'coffee_build', 'less'],
				tasks : ['cssmin', 'uglify', 'coffee_build'],
				options :{
					# default port 35729, uses livereload chrome browser plug-in
					livereload: false
				}
			}
		}
		# ,

		# # replace- t4 tags task 
		# "regex-replace" : {
		# 	t4tags : {
		# 		src : htmlTemplateFiles,
		# 		actions : {
		# 			name : "t4media", 
		# 			search : new RegExp()
		# 		}
		# 	}
		# }

	})

	# watch event notifier
	grunt.event.on 'watch', (action, path, target)  ->
		grunt.log.writeln(target + ' : ' + path + ' has been ' + action)

	# load plug-ins
	grunt.loadNpmTasks('grunt-contrib-cssmin')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-coffee-build')
	grunt.loadNpmTasks('grunt-contrib-less')
	# grunt.loadNpmTasks('grunt-regex-replace')

    # cssmin task
	grunt.registerTask('buildcss', ['cssmin']);
	grunt.registerTask('buildjs', ['uglify']);
	grunt.registerTask('buildCoffee', ['coffee_build']);
	grunt.registerTask('buildless', ['less']);  ####
	grunt.registerTask('buildWatch', ['watch']);
	# grunt.registerTask('buildt4tags', ['regex-replace']);

	# default task(s)
	grunt.registerTask('default',  ['watch']);
	
