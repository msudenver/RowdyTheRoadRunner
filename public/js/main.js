// Generated by CoffeeScript 1.6.2
(function() {
  'use strict';  $(function() {
    /*	REMOVE FOR PRODUCTION, DEV ONLY
    */

    var localUrl;

    if (document.location.origin === "http://localhost:3000") {
      console.log("localhost");
      localUrl = document.location.protocol + "//" + document.location.host + "/templates/";
      console.warn("template loading from : " + localUrl);
      $(window).on('HTMLImportsLoaded', function(e) {
        var footer_template, quickTools_template, templates;

        console.log("templates loaded!!!");
        templates = window.HTMLImports.importer.documents;
        quickTools_template = templates[localUrl + 'quicktool_and_logo.html'].body.querySelectorAll("div.container:first-child");
        footer_template = templates[localUrl + 'footer.html'].body.querySelectorAll("div.container:first-child");
        $(".quicktool_and_logo_template").html(quickTools_template);
        return $(".footer_template").html(footer_template);
      });
    }
    $(".clickable").click(function(event) {
      event.preventDefault();
      if ($(this).data().href) {
        return window.open($(this).data().href, "_self");
      }
    });
    $Trumba.addSpud({
      webName: "msudenver-events-calendars",
      spudType: "upcoming",
      teaserBase: "http://www.trumba.com/calendars/msudenver-events-calendars",
      spudId: "homepage_events"
    });
    Modernizr.addTest('firefox', function() {
      return !!navigator.userAgent.match(/firefox/i);
    });
    Modernizr.addTest('sitemager', function() {
      return document.location.url === "http://localhost:3000" || document.location.url === "http://localhost:8080";
    });
    $(window).resize(function() {
      return console.log("resize::" + $(window).width());
    });
    return $('div#top3').load("/newsroom/top3/");
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
