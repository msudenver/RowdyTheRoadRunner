
// replacement for modernizr.load Function
//

// test if this is the /newsroom
Modernizr.addTest('newsroom', function(){
            return !!document.location.href.match(/newsroom/i);
});

yepnope([
    {
        load : "//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.js",
        callback : function (url, result, key){
            // log(url)
            // log(result)
            // log(key)
            if(!window.jQuery){
                yepnope('../js/vendor/jquery.min.js');
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
                yepnope('../js/vendor/bootstrap/min/bootstrap.min.js');
                console.warn("bootstrap was loaded from Server");
            }else{
                console.warn("bootstrap was loaded from CDN");
            }
        },
        complete: function(){
            yepnope(["http://www.trumba.com/scripts/spuds.js",
                "../js/vendor/plugins.js",
                "../js/main.min.js"]);
            console.log("")
        }
    },
    {
        //  adds check for newsroom url build
        test : Modernizr.newsroom,
        yep : ["../js/utils/slider.js", "../css/newsroom.css"],
        complete : function(){
            initCarousel();
        }
    }
]);

// log utils
var log  = function(x){ console.log(x)};
var warn = function(x){ console.warn(x)};



// 08.20.13 @ 10:40pm

// Modernizr.load({
// 	test : Modernizr.mq("only all"),
// 	nope : ["css/utils/mediaAllForIE8.css","http://cdnjs.cloudflare.com/ajax/libs/respond.js/1.2.0/respond.min.js"]
// });

// 08.29.13 @ 10:40pm

// Modernizr.load([{
// 		load : "//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js",
// 		complete : function(){

//             // if(!window.jquery){Modernizr.load("<t4 type='media' id='60221' formatter='image/path'/>")}

//             if(!window.jQuery) Modernizr.load("../js/vendor/jquery.min.js");
//             console.log("$ loaded via Modernizr");
// 		    Modernizr.load("../js/utils/slider.js");
//         }


// 		// will wait and for the fallback to load and execute..
// 		// ,
// 		// load: console.log("Fallback executed, jQuery loaded from media library")
// }]);

// example
// Modernizr.load([
//   {
//     load: '//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js',
//     complete: function () {
//       if ( !window.jQuery ) {
//             Modernizr.load('js/libs/jquery-1.7.1.min.js');
//       }
//     }
//   },
//   {
//     // This will wait for the fallback to load and
//     // execute if it needs to.
//     load: 'needs-jQuery.js'
//   }
// ]);



