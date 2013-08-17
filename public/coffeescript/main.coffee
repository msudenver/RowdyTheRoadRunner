
'use strict';

$ ->

	# Turns elements with class .clickable into links
	$(".clickable").click (event) ->
		event.preventDefault()
		if $(this).data().href then window.open($(this).data().href ,"_self")

	# adds Trumba spud to Homepage events <div>	

	$Trumba.addSpud({
		webName: "msudenver-events-calendars",
		spudType : "upcoming" ,
		url : { filterview : "HomePageFeed" } ,
		teaserBase : "http://sitemanager.msudenver.edu/events",
		spudId : "homepage_events"
	})


	# detect firefox and add .firefox class to document
	Modernizr.addTest 'firefox', ->
		!!navigator.userAgent.match(/firefox/i);

	# adds check for sitemanager build 
	Modernizr.addTest 'sitemanager' , ->		
		!!document.location.host.match(/sitemanager.msudenver.edu/i) or !!document.location.host.match(/msudenver.edu/i)
			

	# loads top 3 stories from the newsroom
	$('div#top3').load "/newsroom/home/"



