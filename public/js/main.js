var $$___public_coffeescript_main = {};
$$___public_coffeescript_main = (function(module, exports) {
  'use strict';
$(function() {
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

  return module.exports;
})({exports: $$___public_coffeescript_main}, $$___public_coffeescript_main);

//@ sourceMappingURL=main.js.map