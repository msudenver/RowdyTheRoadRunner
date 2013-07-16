/*
 * jQuery.scripts.js
 * ------------------
 * MSCD jQuery
 ********************************************************* */


// custom functions




// document.ready
$(document).ready(function() {

	// Homepage Slideshow
	$('#slideshow').t4slideshow();
	$('.slideshow-Next').click(function() { $('#slideshow').t4slideshow("next"); });
	$('.slideshow-Prev').click(function() { $('#slideshow').t4slideshow("prev"); });

	// Homepage Feature Image
	if ($("#featuredContent").length > 0) {
		$(function(){
			$('#featuredContent li:gt(0)').hide();
			setInterval(function(){
				$('#featuredContent ul li:first-child').fadeOut().next('li').fadeIn().end().appendTo('#featuredContent ul');
			}, 5000);
		});
	}
	
	// Tools Menu
	$('#toolsMenu li:first').css('border-left','none');
	
	// Main Navigation
	$('#primaryNav li:nth-child(2)').css('width','120px');
	$('#primaryNav li:nth-child(5)').css('width','125px');
	$('#primaryNav li:nth-child(7)').css('width','115px');

	// MegaMenu
	$('#megaMenuToggle a').click(function() {
		$('#megaMenu').slideToggle();
		return false;
	});
	
	// Search Focus
	$('input.searchText').each(function() {
	    var default_value = $(this).attr("value");
	    $(this).focus(function() {
	        if(this.value == default_value) {
	            this.value = '';
	        }
	    });
	    $(this).blur(function() {
	        if(this.value == '') {
	            this.value = default_value;
	        }
	    });
	});
	
	
	// Information Box IE Height fix
	if ($.browser.msie && $.browser.version <= 7){
		$("#content .infoBox").each(function(index) {
			$("div.infoBox-title", this).css({ 'display' : 'block', 'float':'left'});
			$("div.infoBox-content", this).css({ 'margin-left' : '150px'});
			$("div.infoBox-title", this).css({ 'height' : $(this).height() });
		});
	}
	
	
	// RAVE ALERT
	if ($("#ravealert").length > 0) {
		var raveAlertURL = "http://www.getrave.com/rss/DenverAlerts/channel2"; 		// Path to RAVE xml.
		var enableAlert = false;
		$("#ravealert").hide();		// Ensure element is hidden to begin with!
		
		if(enableAlert) {
			$.xdajax({
				url: raveAlertURL,
				type:"GET",
				success: function(o) {
					var root=$.loadXML(o.responseText);
					$(root).find('item').each(function(){
						var title = $(this).find('title').text();
						var description = $(this).find('description').text();
						var url = $(this).find('url').text();
						
						if(description.toLowerCase() != "all clear") {
							$("#ravealert h2").text("" + title); $("#ravealert p").text(description); $("#ravealert").show(); 
						} else {
							$("#ravealert").hide();
						}
					});
				}
			});
		}
	}

});