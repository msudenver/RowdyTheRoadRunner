'use strict';

$ ->

	###	REMOVE FOR PRODUCTION, DEV ONLY	###
	# get document's origin and append path to templates for window.HTMLImport obj lookup

	localUrl = document.location.protocol + "//" + document.location.host + "/templates/" 
	console.warn("template loading from : #{localUrl}")

	# notify if html imports have been loaded
	$(window).on 'HTMLImportsLoaded', (e) ->

		console.log("templates loaded!!!")

		# cache reference to imported documents
		templates = window.HTMLImports.importer.documents

		
		quickTools_template = templates[localUrl + 'quicktool_and_logo.html']
			.body
			.querySelectorAll("div.container:first-child");

		footer_template = templates[localUrl + 'footer.html']
			.body
			.querySelectorAll("div.container:first-child");
		
		# insert html template into window 
		$(".quicktool_and_logo_template").html(quickTools_template)
		$(".footer_template").html(footer_template)
 

	# Turns elements with class .clickable into links
	$(".clickable").click (event) ->
		event.preventDefault()
		if $(this).data().href then window.open( $(this).data().href ,"_self")

	# adds Trumba spud to Homepage events <div>	
	$Trumba.addSpud({
		webName: "msudenver-events-calendars",
		spudType : "upcoming" ,
		teaserBase : "http://www.trumba.com/calendars/msudenver-events-calendars",
		spudId : "homepage_events"
	})

	# detect firefox and add .firefox class to document
	Modernizr.addTest 'firefox', ->
		!!navigator.userAgent.match(/firefox/i);

	if !!navigator.userAgent.match(/firefox/i) is true 
		$('.triangle').css "display", "none"
		

	# resize function remove for pruction
	$(window).resize ->
		console.log("resize::"+ $(window).width());

	# loads top 3 stories from the newsroom
	# TODO: include check for homepage only 
	# navigator.location === '/'
	if document.location.href is "http://localhost:3000/" or document.location.href is "http://msudenver.edu/" then $('div#top3').load "/newsroom/top3/"

