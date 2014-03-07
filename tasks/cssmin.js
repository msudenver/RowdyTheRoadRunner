module.exports = function(grunt) {
    grunt.config('cssmin', {
        options: {
            banner: '/* !!!  \n\n' + '<%=pkg.name%> \n' + 'CSS MIN Baked on <%=grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT")%>  \n' + 'build :: <%=pkg.version%> \n\n' + '!!! */' + '\n'
        },
        dev: {
            files: {
                '<%=yeoman.dest%>/css/main.min.css': '<%=yeoman.dest%>/css/main.css'
            }
        }
    })
};
