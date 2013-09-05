
// log utils
var log  = function(args){ console.log(args)};
var warn = function(args){ console.warn(args)};

// replacement for modernizr.load Function

// test if this is the /newsroom
Modernizr.addTest('newsroom', function(){
    return !!document.location.href.match(/newsroom/i);
});

yepnope([
    {
        load : ["//nnetdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/css/bootstrap.min.css",
        // load main.min.css, resource # 62508
        "<t4 type='media' id='62508'/>"],
        complete : function(){
            console.warn("bootstrap.css loaded from CDN");
            console.warn("main.min.css loaded from server");
        }
    },
    {
        load : "//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.js",
        callback : function (url, result, key){
            if(!window.jQuery){
                // load jquery.min.js, resource # 62496
                yepnope("<t4 type='media' id='62496'/>");
                console.warn("jQuery was loaded from Server");
            }else {
                console.warn("jQuery was loaded from CDN");
            }
        }
    },
    {
        load : "//netdna.bootstrapcdn.com/bootstrap/3.0.0-rc1/js/bootstrap.min.js",
        callback : function (url, result, key){
            if(!$.fn.modal){
                // load bootstrap.min.js, resource # 62497
                yepnope("<t4 type='media' id='62497'/>");
                console.warn("bootstrap was loaded from Server");
            }else{
                console.warn("bootstrap was loaded from CDN");
            }
        },
        complete: function(){
            yepnope(["http://www.trumba.com/scripts/spuds.js",
                // plugins.js, resource # 62499
                "<t4 type='media' id='62497'/>",
                // main.min.js resource # 62498
                "<t4 type='media' id='62497'/>"
            ]);
            console.warn("trumba spuds, plugins.js and main.min.js loaded");
        }
    },
    {
        //  adds check for /newsroom url
        test : Modernizr.newsroom,
        yep : [
        // 62500
        "../js/utils/slider.js",
        // 62509
         "../css/newsroom.css"],
        complete : function(){
            initCarousel();
        }
    }
]);





