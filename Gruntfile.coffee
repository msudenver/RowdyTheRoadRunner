module.exports = (grunt) ->
	# grunt things...
	grunt.initConfig {
		pkg : grunt.file.readJSON('package.json'),
		uglify : {
			options : {
				banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build : {
				src : '<%= banner %>src/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		}
	}
	# load uglify plugin
	grunt.loadNpmTasks('grunt-contrib-uglify');

	# default task(s)
	grunt.registerTask('default', ['uglify']);
