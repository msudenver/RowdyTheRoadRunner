module.exports = function(grunt) {
    grunt.config('jshint', {
        options: {
            jshintrc: ".jshintrc"
        },
        target: {
            src: "app/js/*.js"
        },
        all: ["Gruntfile.js", "app/js/*.js"],
        gruntfile: ["Gruntfile.js"]
    });
}
