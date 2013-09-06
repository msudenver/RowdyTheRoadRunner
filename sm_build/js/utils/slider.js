/*
			 ***
	jquery feature load
	---------------------
	Loads slider
	stories from -url-
	styles it and kicks
	off bootstrap
	carousel

	David Viramontes
	for MSU Denver
	04.13
	^^^^^^^^^^^^^^^^^^^^^
	revisted for redesign
	08.29.13
 */

// original url for newsroom top 3
// var url = "/newsroom/channels/slider/";

var url = "slider/slider.html";

var carousel_indicators = ['<ol class="carousel-indicators">',
    '<li data-target="#slider" data-slide-to="0" class="active">',
    '</li>',
    '<li data-target="#slider" data-slide-to="1">',
    '</li>',
    '<li data-target="#slider" data-slide-to="2">',
    '</li>',
    '</ol>'].join(' ');

var carousel_controls = [
    '<a class="left carousel-control" href="#slider" data-slide="prev">',
    '<span class="icon-prev"></span>',
    '</a>',
    '<a class="right carousel-control" href="#slider" data-slide="next">',
    '<span class="icon-next"></span>',
    '</a>'].join(' ');

function initCarousel(){

    $('.content').prepend('<div id="slider" class="carousel slide"></div>');

    carousel_div = $('.carousel');
    carousel_div.append([carousel_indicators, '<div class="carousel-inner"></div>']);

    $(".carousel-inner").load(url, function(){
        $(".item :first").addClass('active');
    });
    carousel_div.append(carousel_controls);

    // start carousel function call
    carousel_div.carousel();
    console.warn("!!! carousel function called !!!");
}


// $("#slider").css({
//     "width":"100%",
//     "margin-left": "0px",
//     // "margin-bottom": "0px",
//     "float": "left",
//     "border" : "none"
// })

// var container= '<div class="container"><div id="slider" class="carousel slide"><div class="carousel-inner"></div><a class="carousel-control left" href="#slider" data-slide="prev">&lsaquo;</a><a class="carousel-control right" href="#slider" data-slide="next">&rsaquo;</a></div></div>';


// $('.content').prepend('<div id="slider"></div>');

// $("#slider").html(container);

// $(".carousel-inner").load(url, function(){
//     $(".item :first").addClass('active');
// });

// $('.carousel').carousel({
//     interval: 5000,
//     pause: "hover"
// });

// ! redundant  ie 10 fix
// $(".item :first").addClass('active');
