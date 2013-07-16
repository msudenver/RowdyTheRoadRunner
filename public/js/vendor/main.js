
$(document).ready(function(){
	'use strict' ;

	var width_threshold = 1200;
	var currentLocation =  (document.location.href).toString();

	// removes sharing icons from full story template
	magazineLocationTest();
	// make thumbails clickable if location == main magainze site
	patternMatchMagazineLocation();
	// remove for production
	sizedebuggin();

	// removes sharing icons from full story template
	function magazineLocationTest(){
		var found = currentLocation.match(/magazine\/20*/g) || [];
		if(found.length >= 1) {
			$(".addthis").css("display","none") ;
		}
	}

	function patternMatchMagazineLocation(){
		var found = currentLocation.match(/magazine/g) || []; 
		if(found.length >= 1){
			// makes magazine preview clickable 
			$(".magazine-preview, .thumbnail, .carousel-caption")
				.click(function(){
					var ulr = $(this).data().href ;
					window.open(ulr,"_self");
				}
			);
		}else{
			// reset cursor if not on main magainze site
			$('.thumbnail').css('cursor', 'inherit');
		}
	}

	function sizedebuggin(){
		var container = $('#content-width');
		// on load 
		container.text(" "+ $(window).width());

		// on resize
		$(window)
			.resize(function(){
				container.text(" "+ $(window).width());
			});
	}


	// detect scroll 
	$(window).scroll(function(){
		var position = $(window).scrollTop();
		var width     =  $(window).width();
		$(".magazine-logo").removeClass("magazine-logo-change");
		$(".container-fluid").removeClass("container-fluid-change");
		$(".msudenver-logo").removeClass("msudenver-logo-change");

		if( position > 15 && width > width_threshold) {
			$(".container-fluid").toggleClass("container-fluid-change");
			$(".magazine-logo").toggleClass("magazine-logo-change");
			$(".msudenver-logo").toggleClass("msudenver-logo-change");
		}

	});
});



