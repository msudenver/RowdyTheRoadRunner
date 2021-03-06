module.exports = function(grunt) {

    grunt.config('jsbeautifier', {
        files: ["app/js/*.js", 'Gruntfile.js', './grunt/**.js'],
        options: {
            // config: "../.jsbeautifyrc",
            html: {
                braceStyle: "collapse",
                indentChar: " ",
                indentScripts: "keep",
                indentSize: 4,
                maxPreserveNewlines: 10,
                preserveNewlines: true,
                unformatted: ["a", "sub", "sup", "b", "i", "u"],
                wrapLineLength: 0
            },
            css: {
                indentChar: " ",
                indentSize: 4
            },
            js: {
                braceStyle: "collapse",
                breakChainedMethods: false,
                e4x: false,
                evalCode: false,
                indentChar: " ",
                indentLevel: 0,
                indentSize: 4,
                indentWithTabs: false,
                jslintHappy: false,
                keepArrayIndentation: false,
                keepFunctionIndentation: false,
                maxPreserveNewlines: 10,
                preserveNewlines: true,
                spaceBeforeConditional: true,
                spaceInParen: false,
                unescapeStrings: false,
                wrapLineLength: 0
            }
        }
    });

}
