
module.exports = (grunt) ->
	dateFormat = require('dateformat');
	# date format helper
	# format = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")

	# grunt things... 
	# automation rules...
	# T4TAGS = grunt.file.readJSON('t4tags_list.json');

	# css files to be minified and combined
	# ignore background-img.css

	cssFiles = ['public/css/*.css', '!public/css/utils/*.css','!public/css/vendor/*.css',
	'!public/css/inherit/*.css', 'public/css/utils/contentTypes.css','public/css/utils/tables.css'];

	htmlFiles = ['sm_build/*.html']
	jsFiles = ['public/js/main.js']
	csFiles = ['public/coffeescript/*', '/Gruntfile.coffee', 'casperjs_server/app.coffee']
	lessFiles = ['public/less/*.less', 'public/less/utils/*.less', '!public/less/vendor' ]

	htmlTemplateFiles = ['public/homepage.html','public/onecolumn.html'
	,'public/twocolumn.html', 'public/threecolumn.html'];

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
			files : csFiles
		},

		# less task

		less : {
			dev : {
				files : lessFiles		
			}
		},


		# watch routinely for css changes
		watch : {
			all : {
				files : [cssFiles, jsFiles, csFiles, htmlFiles],
				tasks : ['cssmin', 'uglify', 'coffee_build', 'less'],
				options :{
					# default port 35729, uses livereload chrome browser plug-in
					livereload: true
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
	grunt.registerTask('buildcs', ['coffee_build']);
	grunt.registerTask('buildless', ['less']);  ####
	grunt.registerTask('watch-build', ['watch']);
	# grunt.registerTask('buildt4tags', ['regex-replace']);

	# default task(s)
	grunt.registerTask('default',  ['watch']);
	
