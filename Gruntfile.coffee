module.exports = (grunt) ->
	# grunt things... 
	# automation rules...
	T4TAGS = grunt.file.readJSON('t4tags_list.json');
	grunt.initConfig {
		pkg : grunt.file.readJSON('package.json')
	}
	# load uglify plugin
	grunt.loadNpmTasks('grunt-contrib-uglify');

	# default task(s)
	grunt.registerTask('default', ['uglify']);
