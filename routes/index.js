// Generated by CoffeeScript 1.6.2
(function() {
  exports.index = function(req, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    console.log(req.url);
    switch (req.url) {
      case "/":
        return res.render("index");
      case "/2col":
        return res.render("twocol");
      case "/3col":
        return res.render("threecol");
      case "/1col":
        return res.render("onecol");
    }
  };

}).call(this);
