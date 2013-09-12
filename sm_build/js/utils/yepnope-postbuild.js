/*
                                    __-YEPNOPE-__
                                    -------------
                         replacement for modernizr.load Function

*/

'use strict'

//  utils
var log  = function(x){ console.log(x)}
var warn = function(x){ console.warn(x)}
var nope = function(){ return }
var href = document.location.href
var host = document.location.hostname
var adt4apps = "adt4apps.msudenver.edu"
var $$$ = function (expr, cond){ return(cond || document).querySelector(expr)}
var timeout = "timeout=" + 1000 + "!"; // one sec

// yepnope.injectCss || yepnope.injectJS
// Function Signature(".js", callback, encoding:utf-8, timeout:5000ms)
yepnope([
    {
        test : (host === adt4apps),
        yep  : {
            "uncompressed_main.css" : "css!<t4 type='media' id='62898'/>",
            "uncompressed_bootstrap.css" : "css!<t4 type='media' id='62897'/>"
        },
        nope : warn("not adt4apps"),
        callback : function(url, result, key){
            console.log("url ::" + url)
            console.log("result ::" + result)
            console.log("key ::" + key)
        }
    }
]);

yepnope([

    //  load stylesheets first, then scripts
    {
        // load bootstrap.min.css, resource # 62542
        // load : "../css/vendor/bootstrap.min.css",
        load : "css!<t4 type='media' id='62542'/>",
        complete : function(){
            warn("bootstrap.min.css loaded from server")
        }
    },

    {
        // load main.min.css, resource # 62508
        // load: '../css/main.min.css',
        load: "css!<t4 type='media' id='62508'/>",
        complete : function(){
            console.warn("main.min.css loaded from server")
        }
    },

    {
        load : timeout + "//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.0/jquery.min.js",
        // load : timeout + "//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.js", TOO NEW FOR IE8
        callback : function(url, result, key){
            if(!window.jQuery){

                // load jquery.min.js, resource # 62496
                yepnope("<t4 type='media' id='62496'/>")
                // yepnope("../js/vendor/min/jquery.min.js")

                warn("jQuery was loaded from Server")
            }else{
                warn("jQuery was loaded from CDN")
            }
        }
    },

    {
        load : timeout + "//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/js/bootstrap.min.js",
        callback : function (url, result, key){
            if(!$.fn.modal){
                // load bootstrap.min.css, resource # 62497
                yepnope("css!<t4 type='media' id='62497'/>")
                // yepnope('../js/vendor/min/bootstrap.min.js')
                warn("bootstrapmin.js was loaded from Server")
            }else{
                warn("bootstrap.min.js was loaded from CDN")
            }
        }
    },

    // {
    //     load : "http://trumba.com/scripts/spuds.js"
    //     complete : {

    //     }
    // },

    {
        // test msudenver.edu domain href or look for .spuds class in page via jQuery
        // test : !!href.match(/homepage/i),

        test : !!href.match(/^(http|https)(\:\/\/msudenver.edu\/$)/g) || !!$$$(".spuds"),
        yep  : "<t4 type='media' id='62783'/>",
        nope : warn(".spuds not found or not the homepage"),
        // both : ["../js/vendor/plugins.js", "../js/main.min.js" ],
        both : [
            // // plugins.js, resource # 62499
            "<t4 type='media' id='62499'/>",
            // main.min.js resource # 62498
            "<t4 type='media' id='62498'/>"
        ]

    },

    {
        //  adds check for newsroom url build
        // test : Modernizr.newsroom,
        test : !!href.match(/newsroom/i),
        yep : {
            // slider.js 62500
            "slider.js" : "<t4 type='media' id='62500'/>",
            // "slider.js" : "../js/utils/slider.js",

            // newsroom.css  62509
            "newsroom.css"  : "css!<t4 type='media' id='62509'/>"
            // "newsroom.css"  : "../css/newsroom.css"
        },
        callback : function(url, result, key){
            // log("should only be called in newsroom")
            // log("key :" + key)
            ("slider.js" === key && result === true) ? initCarousel() : nope()
        }
    }

])
