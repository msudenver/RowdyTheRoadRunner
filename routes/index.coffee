exports.index = (req, res) ->

	# The below 2 lines are required for Cross Domain Communication(Allowing the methods that come as Cross           
	# Domain Request

	res.header("Access-Control-Allow-Origin", "http://localhost");
	res.header("Access-Control-Allow-Methods", "GET, POST");
	

	console.log(req.url)
	# if req.url is "/" then res.render("index")
	# else if req.url is "/2col" then res.render("twocol")
	switch req.url
		when "/"     then res.render("index")
		when "/2col" then res.render("twocol")
		when "/3col" then res.render("threecol")
		when "/1col" then res.render("onecol")

# exports.twocol = (req, res) ->
# 	# res.render("index", {title : "it works"})
# 	res.render("twocol")