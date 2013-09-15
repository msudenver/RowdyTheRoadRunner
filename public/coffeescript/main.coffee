
'use strict';

$ ->
    # $.holdReady(true);

    # $.getScript "http://trumba.com/scripts/spuds.js", (data, status, jqxhr)->
    #     console.log(data)
    #     console.log(status)
    #     console.log(jqxhr)

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




# `
# function createCORSRequest(method, url) {
#   var xhr = new XMLHttpRequest();
#   if ("withCredentials" in xhr) {

#     // Check if the XMLHttpRequest object has a "withCredentials" property.
#     // "withCredentials" only exists on XMLHTTPRequest2 objects.
#     xhr.open(method, url, true);

#   } else if (typeof XDomainRequest != "undefined") {

#     // Otherwise, check if XDomainRequest.
#     // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
#     xhr = new XDomainRequest();
#     xhr.open(method, url);

#   } else {

#     // Otherwise, CORS is not supported by the browser.
#     xhr = null;

#   }
#   return xhr;
# }

# `
# xhr = createCORSRequest('GET', "http://trumba.com/scripts/spuds.js");
# xhr2 = createCORSRequest('GET', "https://raw.github.com/jquery/jquery-color/master/jquery.color.js");

# if not xhr then throw new Error('CORS not supported for xhr2');

# if not xhr2 then throw new Error('CORS not supported for xhr2');
# console.dir(xhr)
# console.dir(xhr2)

# xhr.onload = ->
#     console.log("response text :: #{responseText}")
# xhr.onerror = ->
#     console.log("there was an error")
