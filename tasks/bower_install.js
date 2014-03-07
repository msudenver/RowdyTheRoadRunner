module.exports = function(grunt) {
    // injects bower components into your html template from grunt
    grunt.config("bower-install", {
        target_one: {
            html: "app/homepage.html",
            // ignorePath: "app/"
        },
        target_two: {
            html: "preview/homepage.html",
            // ignorePath: "dest/"
        }
    });
}
