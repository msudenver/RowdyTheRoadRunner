
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
// var url = "/newsroom/channels/slider/";



var container= '<div class="container"><div id="slider" class="carousel slide"><div class="carousel-inner"></div><a class="carousel-control left" href="#slider" data-slide="prev">&lsaquo;</a><a class="carousel-control right" href="#slider" data-slide="next">&rsaquo;</a></div></div>';  

// if(window.jQuery){
	$(document).ready(function(){

		var url = "slider/slider.html";

		$('.content').prepend('<div id="slider"></div>');
		
		$("#slider").css({
			"width":"100%",
			"margin-left": "0px",
			"margin-bottom": "20px",
			"float": "left",
			"border" : "none"
		})

		$("#slider").html(container);

		$(".carousel-inner").load(url, function(){
			$(".item :first").addClass('active');
		});

		$('.carousel').caro({
			interval: 9000,
			pause: "hover"
		});
		// // ! redundant  ie 10 fix
		$(".item :first").addClass('active');	
	});
// }
