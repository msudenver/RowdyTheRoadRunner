/*
 * jQuery.t4slideshow.js
 * ---------------------
 * TERMINALFOUR jQuery Slideshow Plugin

  
 	Basic Markup Structure:
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

	<div id="slideshow">
		<ul>
			<li><img src="images/slideshowImage1.jpg" /></li>
			<li><img src="images/slideshowImage2.jpg" /></li>
			<li><img src="images/slideshowImage3.jpg" /></li>
		</ul>
		<a href="javascript:;" class="slideshow-Prev"></a>
		<a href="javascript:;" class="slideshow-Next"></a>
	</div>


 	
 	
 	Initialize Javascript:
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 	$('#slideshow').t4slideshow();
 		- Automatically hides all items and sets the first item to be active. Calls
 		the "play" method to begin an automated rotation.
 	
 			

	Method Calls:
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

	Play:
		$('#slideshow').t4slideshow("play");
			- Creates a setInterval for automatic banner rotation
	
	Stop:
		$('#slideshow').t4slideshow("stop");
			- Clears the automated banner rotation setInterval
	
	Next:
		$('#slideshow').t4slideshow("next");
			- Stops the setInterval and fades in the next slide. If there is no next item 
			it uses the first item.
	
	Prev:
		$('#slideshow').t4slideshow("prev");
			- Stops the setInterval and fades out the current slide revealing the previous 
			item. If there is no previous item it will use the last one.
		
	Destroy:
		$('#slideshow').t4slideshow("destroy");
			

 */
(function( $ ){
	
	var loopSlideshow = 0;
	var looptime = 9000;			// 9 Seconds
	var methods = {
		
		init : function( options ) {
			
			$("ul li",this).hide();							// Hide all items
			$("ul li:first",this).addClass('active');		// Set first to be active
			$("ul li.active",this).show();					// Show the active item
			$(this).t4slideshow("play");					// Start a timer
		},
		destroy : function( ) {
			$this = $(this);
			clearInterval(loopSlideshow);
			return $(window).unbind($this);
		},
		play : function( ) { 
			$this = $(this);
			return loopSlideshow = setInterval(function() { 
				$this.t4slideshow("next") 
			}, looptime);
		},
		stop : function( ) { 
			return clearInterval(loopSlideshow);
		},
		next : function( ) { 
			// Clear Timeout
			clearInterval(loopSlideshow);
			$this = $(this);
			
			// Check if no next item appears
			if($("ul li.active", this).next().length == 0){
				// Show :first item
				var nextItem = $("ul li:first", this);
				var activeItem = $("ul li.active", this);
				
				$(nextItem).show();
				return $(activeItem).fadeOut('slow', function() {
					$(activeItem).removeClass("active");
					$(nextItem).addClass("active");
					$this.t4slideshow("play");	
				});
			} else {
				// Show .next() item
				var nextItem = $("ul li.active", this).next();
				var activeItem = $("ul li.active", this);
				
				return $(nextItem).fadeIn('slow', function() {
					$(activeItem).hide();
					$(activeItem).removeClass("active");
					$(nextItem).addClass("active");
					$this.t4slideshow("play");	
				});
			}			
		},
		prev : function( ) {			
			// Clear Timeout
			clearInterval(loopSlideshow);
			$this = $(this);
			
			// Check if no previous item appears
			if($("ul li.active", this).prev().length == 0){
				// Show :last item
				var prevItem = $("ul li:last", this);
				var activeItem = $("ul li.active", this);
				
				return $(prevItem).fadeIn('slow', function() {
					$(activeItem).hide();
					$(activeItem).removeClass("active");
					(prevItem).addClass("active");
					$this.t4slideshow("play");	
				});
				
			} else {
				// Show .prev() item
				var activeItem = $("ul li.active", this);
				var prevItem = $("ul li.active", this).prev();
				
				$(prevItem).show();
				return $(activeItem).fadeOut('slow', function() {
					$(activeItem).removeClass("active");
					$(prevItem).addClass("active");
					$this.t4slideshow("play");	
				});
			}
		}
	};
	
	$.fn.t4slideshow = function( method ) {
	
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.t4slideshow' );
		}    
		
	};

})( jQuery );

