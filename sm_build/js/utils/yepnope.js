/*
                __-YEPNOPE-__
                -------------
     replacement for modernizr.load Function

*/

'use strict';

//  utils
var log  = function(args){ console.log(args)};
var warn = function(args){ console.warn(args)};
var nope = function(){ return};

yepnope([
    {
        load : "//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.js",
        callback : function (url, result, key){
            if(!window.jQuery){
                // load jquery.min.js, resource # 62496
                yepnope("<t4 type='media' id='62496'/>");
                // yepnope('../js/vendor/jquery.min.js');
                console.warn("jQuery was loaded from Server");
            }else {
                console.warn("jQuery was loaded from CDN");
            }
        }
    },
    {
        load : "//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/css/bootstrap.min.css",


        // callback will always fire after an error or a timeout
        // typically 5000 ms
        callback : function(url, result, key){
            if($("#bootstrapCssTest").is(":visible") === true){
                // load bootstrap.min.css, resource # 62542
                yepnope("<t4 type='media' id='62542'/>");
                // yepnope('../css/vendor/bootstrap.min.css');
                console.warn("bootstrap.min.css loaded from server")
            }else{
                console.warn("bootstrap.min.css loaded from CDN")
            }

        }

    },
    {
        // load main.min.css, resource # 62508
        // load: '../css/main.min.css',
        load: "<t4 type='media' id='62508'/>",
        complete : function(){
            console.warn("main.min.css loaded from server");
        }
    },
    {
        load : "//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/js/bootstrap.min.js",
        callback : function (url, result, key){
            if(!$.fn.modal){
                // load main.min.css, resource # 62497
                yepnope("<t4 type='media' id='62497'/>");
                // yepnope('../js/vendor/bootstrap/min/bootstrap.min.js');
                console.warn("bootstrapmin.js was loaded from Server");
            }else{
                console.warn("bootstrap.min.js was loaded from CDN");
            }
        },
        complete: function(){
            yepnope([
                "http://www.trumba.com/scripts/spuds.js",
                // plugins.js, resource # 62499
                "<t4 type='media' id='62497'/>",
                // "../js/vendor/plugins.js",

                // main.min.js resource # 62498
                "<t4 type='media' id='62497'/>"
                // "../js/main.min.js"
            ]);
        }
    },
    {
        //  adds check for newsroom url build
        // test : Modernizr.newsroom,
        test : !!document.location.href.match(/newsroom/i),
        yep : {
        // slider.js 62500
        // "<t4 type='media' id='62500'/>"
        "slider.js" : "../js/utils/slider.js",

        // newsroom.css  62509
        // "<t4 type='media' id='62509'/>"
        "newsroom"  : "../css/newsroom.css"
        },
        callback : function(url, result, key){
            // log("should only be called in newsroom");
            // log("key :" + key);
            ("slider.js" === key && result === true) ? initCarousel() : nope();
        }
    }
]);
