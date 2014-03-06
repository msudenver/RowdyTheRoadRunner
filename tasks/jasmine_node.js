module.exports = function(grunt) {
    grunt.config('jasmine_node', {
        specNameMatcher: "_spec", // load only specs containing specNameMatcher
        projectRoot: ".",
        requirejs: false,
        forceExit: false,
        useCoffee: true
    });
}
