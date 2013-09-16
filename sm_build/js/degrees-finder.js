// Generated by CoffeeScript 1.6.2
(function() {
  var back2top;

  back2top = $("div.back2top");

  back2top.addClass("disappear");

  back2top.click(function(event) {
    event.preventDefault();
    return $("html, body").animate({
      scrollTop: 0
    }, 450);
  });

  $("input.checkbox").click(function(event) {
    return $("html, body").animate({
      scrollTop: 0
    }, 450);
  });

  $(window).scroll(function() {
    var position;

    position = $(this).scrollTop();
    if (position > 200) {
      back2top.removeClass("disappear");
      return back2top.addClass("appear");
    } else if (position > 0) {
      $(".categories").css({
        "background-color": "rgba(69,67,69,0.63)"
      });
      $("th.Name").css({
        "background-color": "rgba(69,67,69,0)"
      });
      $(".todo").css("padding-bottom", "0");
      $(".mainContainer").css("margin-bottom", "0");
      return $("th.Name").text(" ");
    } else if (position <= 200) {
      $(".mainContainer").css("margin-bottom", "20px");
      back2top.removeClass("appear");
      back2top.addClass("disappear");
      $(".categories").css({
        "background-color": "rgba(69,67,69,1.0)"
      });
      return $("th.Name").text("Program");
    }
  });

}).call(this);
