(function() {
  'use strict';
  $(function() {
    var href;
    return href = document.location.href;
  });

  $('body').animate({
    opacity: 1
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

  Modernizr.addTest('homepage', function() {
    return !!href.match(/^(http|https)(\:\/\/msudenver.edu\/$)/g);
  });

  if ($("html").hasClass('homepage')) {
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
  } else {
    console.warn("running on localhost");
  }

}).call(this);
