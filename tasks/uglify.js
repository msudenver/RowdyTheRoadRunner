module.exports = function(grunt) {

    grunt.config('uglify', {
        options: {
            mangle: true, // shorten var names where possible
            compress: true,
            wrap: false,
            // sourceMap : "<%=yeoman.dest%>/js/main.map",
            banner: '/* !!!  \n\n' + '<%=pkg.name%> \n' + 'JS MIN Baked on <%=grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT")%>  \n' + 'build :: <%=pkg.version%> \n\n' + '!!! */' + '\n'
        },

        target: {
            src: "<%=yeoman.app%>/js/main.js",
            dest: "<%=yeoman.dest%>/js/main.min.js"
        }
    });
}
