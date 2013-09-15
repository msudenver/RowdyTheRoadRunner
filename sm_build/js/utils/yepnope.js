/*
                                    __-YEPNOPE-__
                                    -------------
                                modernizr.load Function

*/

'use strict'

//  utils
var log  = function(x){ console.log(x) }
,   warn = function(x){ console.warn(x) }
,   nope = function(){ return }
,   href = document.location.href
,   host = document.location.hostname
,   $$$  = function(expr, cond){ return (cond || document).querySelector(expr) }
,   timeout = 'timeout=' + 1000 + '!' // one sec
,   angularCDN =
     '//ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js'
,   jQueryCDN  =
    '//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.0/jquery.min.js'
,   bootstrapJsCDN =
     '//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/js/bootstrap.min.js';


yepnope([
    
    // styles load
    // -----------
    // * load stylesheets first, then scripts

    {
        // bootstrap.min.css, resource # 62542
        // "<t4 type='media' id='62542'/>"
        load: "../css/vendor/bootstrap.min.css",
        complete: function() {
            warn("bootstrap.min.css loaded from server")
        }
    },

    {
        // main.min.css, resource # 62508
        // load: "<t4 type='media' id='62508'/>",
        load: '../css/main.min.css',
        complete: function() {
            warn("main.min.css loaded from server")
        }
    },

    {
        // jQuery load v1.10
        // -----------------
        // jquery v2.0.3, incompatible with IE8

        load: timeout + jQueryCDN,
        
        callback: function(url, result, key) {
            if (!window.jQuery) {
                // jquery.min.js, resource # 62496
                // yepnope("<t4 type='media' id='62496'/>")
                yepnope("../js/vendor/min/jquery.min.js")
                warn("jQuery was loaded from Server")
            } else {
                warn("jQuery was loaded from CDN")
            }
        }
    },

    {
        // Bootstrap 3.0 load
        // ------------------

        load: timeout + bootstrapJsCDN,
        callback: function(url, result, key) {
            if (!$.fn.modal) {
                // bootstrap.min.js, resource # 62497
                // yepnope("<t4 type='media' id='62497'/>")
                yepnope('../js/vendor/min/bootstrap.min.js')
                warn("bootstrapmin.js was loaded from Server")
            } else {
                warn("bootstrap.min.js was loaded from CDN")
            }
        },
        
        // Main.min.js css & console.* polyfill load
        // -----------------------------------------

        complete: function() {
            // plugins.js, resource # 62499
            // "<t4 type='media' id='62499'/>"
            yepnope('../js/vendor/plugins.js')
            // newsroom.css, resource # 62509
            // "<t4 type='media' id='62509'/>"
            // yepnope('../js/main.min.js')
        }
    },

    {
        // DEGREE-FINDER assets load
        // -------------------------
        load : ['../js/vendor/d3.js', angularCDN],
        complete : function(){
            yepnope('../css/degree-finder/main.css')
            yepnope('preload!' + '../js/controllers.js')
            // yepnope('../js/controllers.js')
            yepnope('../js/main.js')
            
            yepnope('../js/main.min.js')
        }
        
    },

    {
        // TRUMBA:CALENDAR:SPUDS api load
        // ------------------------------
        // test for homepage url or .spuds class in the body

        test : !!href.match(/^(http|https)(\:\/\/msudenver.edu\/$)/g) || !!$$$(".spuds"),
        yep: {
            "spuds.js": "http://trumba.com/scripts/spuds.js"
        },
        nope: warn("no spuds to be seen"),
        callback: function(url, result, key) {
            ("spuds.js" === key && result === true) ? warn("_____ spuds.js loaded _____") : nope("_____spuds.js not loaded _____")
        }
    },

    {
        //  adds check for newsroom url build
        // test : Modernizr.newsroom,
        test: !! href.match(/newsroom/i),
        yep: {
            // slider.js, resource # 62500
            // "<t4 type='media' id='62500'/>"
            "slider.js": "../js/utils/slider.js",

            // newsroom.css, resource # 62509
            // "<t4 type='media' id='62509'/>"
            "newsroom": "../css/newsroom.css"
        },
        callback: function(url, result, key) {
            // log("should only be called in newsroom")
            // log("key :" + key)
            ("slider.js" === key && result === true) ? initCarousel() : nope()
        }
    }

]);


// yepnope.injectJs('../js/vendor/d3.js', function() {
//     warn('d3.js loaded!');
// }, { charset: "utf-8" })

// yepnope.injectJs('', function() {
//         warn('angular.js loaded!');
// });

// yepnope([{
//     load: ['../css/degree-finder/main.css','../js/controllers.js', '../js/main.js'],
//     complete: function() {
//         warn('controller.js and main.js loaded!');
//      }
// }]);



// var location = (function(href){

//     switch (href) {
//         case "http://msudenver.edu/admissions/":
//             console.warn("msudenver:admissions");

//         case "http://localhost:9001/prebuild/admissions.1col.prebuild.html":
//             console.warn("local:admissions");
//     }

// })(href);
