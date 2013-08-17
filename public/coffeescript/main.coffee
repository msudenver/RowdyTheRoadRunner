'use strict';

$ ->
	# UTILS
	# -----
	
	# location1 = "http://localhost:3000/"
	# location2 = "http://localhost:8080/"
	# location3 = "http://msudenver.edu/"
	# location4 = "http://msudenver.edu/"

	# locate = (url) ->
	# 	!!url.match(/https:\/\/location3/i)

	# console.log "locate function returns :: #{locate(location2)}"

	# Turns elements with class .clickable into links
	$(".clickable").click (event) ->
		event.preventDefault()
		if $(this).data().href then window.open($(this).data().href ,"_self")

	# adds Trumba spud to Homepage events <div>	
	$Trumba.addSpud({
		webName: "msudenver-events-calendars",
		spudType : "upcoming" ,
		teaserBase : "http://sitemanager.msudenver.edu/events",
		url : { filterview : "HomePageFeed" } ,
		spudId : "homepage_events"
	})


	# detect firefox and add .firefox class to document
	Modernizr.addTest 'firefox', ->
		!!navigator.userAgent.match(/firefox/i);

	# adds check for sitemanager build 
	Modernizr.addTest 'sitemanager' , ->		
		!!document.location.host.match(/sitemanager.msudenver.edu/i) or !!document.location.host.match(/msudenver.edu/i)
				

	# console.log "some other funciton context"
	# if $('.firefox').length then $('div.triangle').css "display", "none"
	
	# resize function remove for pruction
	# $(window).resize ->
	# 	console.log("resize::"+ $(window).width());

	# loads top 3 stories from the newsroom
	$('div#top3').load "/newsroom/top3/"



# Google analytics tracking code 
`
	var _gaq = _gaq || []; 
	_gaq.push(['_setAccount', 'UA-505529-1']); 
	_gaq.push(['_trackPageview']); 

	(function() { 
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; 
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; 
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); 
	})(); 
`
