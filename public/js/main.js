// Generated by CoffeeScript 1.6.2
'use strict';$(function() {
  return $(".no-fouc").removeClass("no-fouc");
});

$(".clickable").click(function(event) {
  event.preventDefault();
  if ($(this).data().href) {
    return window.open($(this).data().href, "_self");
  }
});

Modernizr.addTest('firefox', function() {
  return !!navigator.userAgent.match(/firefox/i);
});

Modernizr.addTest('sitemanager', function() {
  return !!document.location.host.match(/sitemanager.msudenver.edu/i) || !!document.location.host.match(/msudenver.edu/i);
});

if ($("html").hasClass('sitemanager')) {
  $Trumba.addSpud({
    webName: "msudenver-events-calendars",
    spudType: "upcoming",
    url: {
      filterview: "HomePageFeed"
    },
    teaserBase: "http://msudenver.edu/events",
    spudId: "homepage_events"
  });
  $('div#top3').load("/newsroom/home/");
  console.warn("running on sitemanager");
} else {
  console.warn("running on localhost");
}
