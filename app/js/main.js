$(function() {

  'use strict';
  var href = document.location.href;
  // Turns elements with class .clickable into links
  $(".clickable").click(function(event) {
    if ($(this).data().href) {
      //event.preventDefault()
      return window.open($(this).data().href, "_self");
    }
  });
  // detect firefox and add .firefox class to document
  Modernizr.addTest('firefox', function() {
    return !!navigator.userAgent.match(/firefox/i);
  });

  if($('html').hasClass('firefox')){
    // $.webshims.polyfill();
  }
  // adds check for sitemanager build
  // Modernizr.addTest('homepage', function() {
    // return !!href.match(/^(http|https)(\:\/\/msudenver.edu\/$)/g) || !!href.match(/^(http|https)(\:\/\/0.0.0.0:9000\/$)/g)
    // return !!href.match(/^(http|https)(\:\/\/webc.msudenver.edu\/$)/g) || !!href.match(/^(http|https)(\:\/\/0.0.0.0:9000\/$)/g);
  // });
  // loads top 3 stories from the newsroom
  // if ($("html").hasClass('homepage')) {
  //   // adds Trumba spud to Homepage events <div>
  //   $Trumba.addSpud({
  //     webName: "msudenver-events-calendars",
  //     spudType: "upcoming",
  //     url: {
  //       filterview: "HomePageFeed"
  //     },
  //     teaserBase: "http://msudenver.edu/events",
  //     spudId: "homepage_events"
  //   });
  //   // load top 3 stories on the homepage
  //   $('div#top3').load("/newsroom/home/");
  // }
});

/*
//@ sourceMappingURL=main.js.map
*/
