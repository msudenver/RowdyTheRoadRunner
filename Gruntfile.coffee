module.exports = (grunt) ->
	# grunt things... 
	# automation rules...
	# T4TAGS = grunt.file.readJSON('t4tags_list.json');

	# css files to be minified and combined
	# ignore background-img.css
	cssFiles = ['public/css/*.css', 'public/css/utils/*.css','!public/css/background-img.css','public/css/vendor/*.css']

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
			  
		cssmin : {
			options : {
				# banner + timestapmt
				banner : '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy")%> */\n'
			},
			combine : {
				# optios for combining CSS files
				files : {
					'build/css/main.min.css' : cssFiles
				}
			}
		}

	})
	# load uglify plugin
	grunt.loadNpmTasks('grunt-contrib-cssmin')

	# default task(s)
	grunt.registerTask('default',  ['cssmin']);
    # cssmin task
	grunt.registerTask('buildcss', ['cssmin']);

