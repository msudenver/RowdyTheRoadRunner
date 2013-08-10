// Generated by CoffeeScript 1.6.2
(function() {
  'use strict';  $(function() {
    /*	REMOVE FOR PRODUCTION, DEV ONLY
    */

    var localUrl;

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
    if (!!navigator.userAgent.match(/firefox/i) === true) {
      $('.triangle').css("display", "none");
    }
    $(window).resize(function() {
      return console.log("resize::" + $(window).width());
    });
    if (document.location.href === "http://localhost:3000/" || document.location.href === "http://msudenver.edu/") {
      return $('div#top3').load("/newsroom/top3/");
    }
  });

}).call(this);
