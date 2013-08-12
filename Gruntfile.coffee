
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

		# watch routinely for css changes
		watch : {
			scripts : {
				files : cssFiles,
				tasks : ['cssmin']
			}
		}
		# replace- t4 tags task 
		"regex-replace" : {
			t4tags : {
				src : htmlTemplateFiles,
				actions : {
					name : "t4media", 
					search : new RegExp()
				}
			}
		}

	})

	# watch event notifier
	grunt.event.on 'watch', (action, path, target)  ->
		grunt.log.writeln(target + ' : ' + path + ' has been ' + action)

	# load plug-ins
	grunt.loadNpmTasks('grunt-contrib-cssmin')
	grunt.loadNpmTasks('grunt-regex-replace')
	grunt.loadNpmTasks('grunt-contrib-watch')

    # cssmin task
	grunt.registerTask('buildcss', ['cssmin']);
	grunt.registerTask('watch-build', ['watch']);
	grunt.registerTask('buildt4tags', ['regex-replace']);

	# default task(s)
	grunt.registerTask('default',  ['cssmin']);
	
