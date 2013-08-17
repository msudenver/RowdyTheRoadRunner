// Generated by CoffeeScript 1.6.2
(function() {
  'use strict';  $(function() {
    Modernizr.load({
      test: Modernizr.mq("only all"),
      yep: console.log("mq supports"),
      nope: 'css/utils/mediaAllForIE8.css'
    });
    $(".clickable").click(function(event) {
      event.preventDefault();
      if ($(this).data().href) {
        return window.open($(this).data().href, "_self");
      }
    });
    $Trumba.addSpud({
      webName: "msudenver-events-calendars",
      spudType: "upcoming",
      url: {
        filterview: "HomePageFeed"
      },
      teaserBase: "http://msudenver.edu/events",
      spudId: "homepage_events"
    });
    Modernizr.addTest('firefox', function() {
      return !!navigator.userAgent.match(/firefox/i);
    });
    Modernizr.addTest('sitemanager', function() {
      return !!document.location.host.match(/sitemanager.msudenver.edu/i) || !!document.location.host.match(/msudenver.edu/i);
    });
    return $('div#top3').load("/newsroom/home/");
  });

  
	var _gaq = _gaq || []; 
	_gaq.push(['_setAccount', 'UA-505529-1']); 
	_gaq.push(['_trackPageview']); 

	(function() { 
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; 
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; 
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); 
	})(); 
;

}).call(this);
