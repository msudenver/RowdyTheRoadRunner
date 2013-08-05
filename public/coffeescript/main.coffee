$ ->
	# conditionally load jquery method
	# if window.jQuery  document.write('<script src="<t4 type='media' id='60221'/>"><\/script>');

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

	# resize function remove for pruction
	$(window).resize ->
		console.log("resize::"+ $(window).width());

	# loads top 3 stories from the newsroom
	$('div#top3').load("/newsroom/top3/");
