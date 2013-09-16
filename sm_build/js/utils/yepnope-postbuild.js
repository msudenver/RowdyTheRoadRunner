/*
                                    __-YEPNOPE-__
                                    -------------
                                modernizr.load Function

*/

'use strict'

//  utils
var log  = function(x){ console.log(x) }
,   warn = function(x){ console.warn(x) }
,   nope = function( ){ return }
,   href = document.location.href
,   host = document.location.hostname
,   $$$  = function(expr, cond){ return (cond || document).querySelector(expr) }
,   timeout = 'timeout=' + 1000 + '!' // one sec
,   angularCDN =
     'https://ajax.googleapis.com/ajax/libs/angularjs/1.0.1/angular.min.js'
,   angularCDNUncompressed =
    '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.5/angular.js'
,   jQueryCDN  =
    '//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.0/jquery.min.js'
,   glyphiconsCDN =
    '//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css'
,   bootstrapJsCDN =
    '//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/js/bootstrap.min.js'
,   d3CDN =
    '//cdnjs.cloudflare.com/ajax/libs/d3/3.3.3/d3.min.js';

var debugPrintOut = function(url ,result ,key){
    log('url ::' + url)
    log('result ::' + result)
    log('key ::' + key)
}


yepnope([

        // styles load
        // -----------
        // * load stylesheets first, then scripts

    {
        // bootstrap.min.css, resource # 62542
        load: ["<t4 type='media' id='62542'/>"],
        complete: function(){
            warn("bootstrap.min.css loaded from server")
        }
    },


    {
        load: glyphiconsCDN,
        complete : function(){
            warn('glyphicons loaded!')
        }
    },

    {
        // main.min.css, resource # 62508
        load: ["<t4 type='media' id='62508'/>"],
        complete: function(){
            warn("main.min.css loaded from server")
        }
    },

    {

        // jQuery load v1.10
        // -----------------
        // jquery v2.0.3, incompatible with IE8

        load: timeout + jQueryCDN,
        callback: function(url, result, key){
            if (!window.jQuery) {
                // jquery.min.js, resource # 62496
                yepnope("<t4 type='media' id='62496'/>")
                // yepnope("../js/vendor/min/jquery.min.js")
                warn("jQuery was loaded from Server")
            } else {
                warn("jQuery was loaded from CDN")
            }
        },
        complete: function(){

        }
    },

    {
        // Bootstrap 3.0 load
        // ------------------

        load: [timeout + bootstrapJsCDN],
        // callback: function(url, result, key){
        callback: function(url, result, key){
            if (!$.fn.modal) {
                // bootstrap.min.js, resource # 62497
                yepnope("<t4 type='media' id='62497'/>")
                // yepnope('../js/vendor/min/bootstrap.min.js')
                warn("bootstrapmin.js was loaded from Server")
            } else {
                warn("bootstrap.min.js was loaded from CDN")
            }
        },

        // Main.min.js css & console.* polyfill load
        // -----------------------------------------

        complete: function() {
            // plugins.js, resource # 62499
            yepnope("<t4 type='media' id='62499'/>")
            // yepnope('../js/vendor/plugins.js')
            // newsroom.css, resource # 62509

        }
    },

    {
        // DEGREE-FINDER assets load
        // -------------------------

        load : timeout + d3CDN,
        callback : function(url, result, key){
            if(!window.d3){
                // d3.js, resource # 63059
                yepnope("<t4 type='media' id='63059'/>")
                // yepnope('../js/vendor/d3.js')
                warn('d3.js was loaded from Server')
            }else{
                warn('d3.js was loaded from CDN')
            }
        },
        complete : function(){
            // flat.ui, resource # 63061
            // yepnope("<t4 type='media' id='63061'/>")
            // yepnope('../css/vendor/flat-ui.css')
            // flat.ui, resource # 63062
            yepnope("<t4 type='media' id='63062'/>")
            // yepnope('../css/degree-finder/main.css')
        }

    },

    {

        load :  timeout + angularCDN,
        callback : function(url, result, key){
            debugPrintOut(url, result, key);
            if(!window.angular){

                log('got here [1]')

                // angular.js, resource # 63063
                yepnope("<t4 type='media' id='63063'/>")
                // yepnope('../js/vendor/angular.js')
                warn('angular.js was loaded from Server')
            }else{
                warn('angular.js was loaded from CDN')
            }
        },
        complete : function(){

            log('got here [2]')

            if (window.angular) {

                log('angular loaded')

                yepnope([{
                    test : window.angular,
                    // angular.js, resource # 63064
                    yep  : ["<t4 type='media' id='63064'/>"],
                    complete : function(){

                        warn("controllers.js loaded")

                        angular.element(document).ready(function() {
                            log('got here [3]')
                            // yepnope('../js/controllers.js')
                            angular.bootstrap(document, ['degreeFinder']);
                        });

                        // degrees-finder.js, resource # 63067
                        yepnope("<t4 type='media' id='63067'/>")
                        // yepnope('../js/degrees-finder.js')

                        // main.min.js, resource # 62498
                        yepnope("<t4 type='media' id='62498'/>")
                        // yepnope('../js/main.min.js')
                    }
                }])

            }else{
                log('angular not loaded')
                // yepnope('../js/vendor/angular.js')
            }
        }
    }

    // {
        // TRUMBA:CALENDAR:SPUDS api load
        // ------------------------------
        // test for homepage url or .spuds class in the body

        // test :
        //     !!href.match(/^(http|https)(\:\/\/msudenver.edu\/$)/g) || !!$$$(".spuds"),
        // yep: {
        //     "spuds.js": "http://trumba.com/scripts/spuds.js"
        // },
        // nope: warn("no spuds to be seen"),
        // callback: function(url, result, key){
        //     ("spuds.js" === key && result === true) ? warn("_____ spuds.js loaded _____") : nope("_____spuds.js not loaded _____")
        // }
    // },

    // {
        // // adds check for newsroom url build
        // // test : Modernizr.newsroom,
        // test: !! href.match(/newsroom/i),
        // yep: {
        //     // slider.js, resource # 62500
        //     // "<t4 type='media' id='62500'/>"
        //     "slider.js": "../js/utils/slider.js",

        //     // newsroom.css, resource # 62509
        //     // "<t4 type='media' id='62509'/>"
        //     "newsroom": "../css/newsroom.css"
        // },
        // callback : function(url, result, key){
        //     // log("should only be called in newsroom")
        //     // log("key :" + key)
        //     ("slider.js" === key && result === true) ? initCarousel() : nope()
        // }

    // }

]);

// var locator = (function(href){

//     switch (href) {
//         case "http://msudenver.edu/admissions/":
//             console.warn("msudenver:admissions");

//         case "http://localhost:9001/prebuild/admissions.1col.prebuild.html":
//             console.warn("local:admissions");
//     }

// })(href);
