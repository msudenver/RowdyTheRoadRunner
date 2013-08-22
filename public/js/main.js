// Generated by CoffeeScript 1.6.2
(function() {
  'use strict';  $(function() {
    var spud;

    $(".clickable").click(function(event) {
      event.preventDefault();
      if ($(this).data().href) {
        return window.open($(this).data().href, "_self");
      }
    });
    spud = $Trumba.addSpud({
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
    if ($("html").hasClass('sitemanager')) {
      return (function() {
        console.warn("running on sitemanager");
        spud();
        return $('div#top3').load("/newsroom/home/");
      })();
    } else {
      return console.warn("running on localhost");
    }
  });

}).call(this);
