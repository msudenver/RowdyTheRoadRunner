module.exports = function(grunt) {
    grunt.config('replace', {

        uncommentT4tags: {
            src: ['preview/index.html'],
            dest: ['preview/sm_templates/index.postbuild.html'],
            // overwrite: true,
            replacements: [{

                // scans for 2 attribute tokens  inside the t4 tag
                // with multiple or one spaces between
                // attributes

                from: /(<!--)(\s*)(<t4\s)(\s*)(\S*)(\s*)(\S*)(\s*)(\/>)(\s*)(-->)/gi,

                // to: "batman! or "
                to: function(found) {
                    var commentStart = String(found.match(/(<!--)/gi));
                    var commentEnd = String(found.match(/(-->)/gi));
                    grunt.log.writeln('found <t4> tag : '.red + found);
                    // return found.match(find_commentStart);
                    return (function() {
                        return found
                            .split(commentStart)
                            .join(' ').split(commentEnd)
                            .join(' ').trim();
                    })();
                }
            }]
        }
    });
}
