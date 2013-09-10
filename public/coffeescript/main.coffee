
'use strict';

$ ->
    href = document.location.href

	$('body').animate({ opacity: 1 })

	# Turns elements with class .clickable into links
	$(".clickable").click (event) ->
		event.preventDefault()
		if $(this).data().href then window.open($(this).data().href ,"_self")

	# detect firefox and add .firefox class to document
	Modernizr.addTest 'firefox', ->
		!!navigator.userAgent.match(/firefox/i);

	# adds check for sitemanager build
	Modernizr.addTest 'homepage' , ->
		!!href.match(/^(http|https)(\:\/\/msudenver.edu\/$)/g)

	# loads top 3 stories from the newsroom
	if $("html").hasClass('homepage')

		# adds Trumba spud to Homepage events <div>
		$Trumba.addSpud({
			webName: "msudenver-events-calendars",
			spudType : "upcoming" ,
			url : { filterview : "HomePageFeed" } ,
			teaserBase : "http://msudenver.edu/events",
			spudId : "homepage_events"
		});

		# load top 3 stories on the homepage
		$('div#top3').load("/newsroom/home/")

	else console.warn "running on localhost"



