#!/usr/bin/env casperjs

shebang = "#!/usr/bin/env casperjs"
###
 			PHANTOM.JS
 			----------
 			
###
# page = require("webpage").create()

# url = "http://147.153.144.172:3000"
# # or with argument passes in cli
# # url = system.args[1]

# page.open url, (status) -> 
# 	title = page.evaluate ->
# 		document.title
# 	console.log("Hello world, page title is #{title}")
# 	phantom.exit()

###
 			CASPER.JS
 			---------

###

casper = require("casper").create()
cronJob = require("cron").CronJob
moment = require("./node_modules/moment/moment")

now = moment(new Date()).format("YYYY-MM-DD-hh:mm")
half_hour = 1800000 # in ms

local = "http://localhost:3000"
url = ""

# list or args
arg1 = casper.cli.args[0]
arg2 = casper.cli.args[1]

casperJob = ->

	if arg1 ? url = arg1 else url = local
	
	# arrays containing view ports
	viewports = [
	 	[320,480],
	    [320,568],
	    [600,1024],
	    [1024,768],
	    [1280,800],
	    [1440,900]
	]

	# region parameters
	x = 0
	y = 0



	# save dir regex
	savedir   = url.replace(/[^a-zA-Z0-9]/gi, '-').replace(/^https?-+/, '');

	casper.start()

	casper.each viewports, (self, viewport, i) ->
 		
		
		width = viewport[0]
		height = viewport[1]

		casper.wait 5000 , ->
			@viewport(width, height)
			casper.thenOpen url, ->
				@echo "Opening at #{width}"

				# fullPageFileName = "#{savedir}/fullPage-#{width}.png"
				# actualViewPageFileName = "#{savedir}-#{moment}/#{width}-#{height}.png"

				fullPageFileName = "#{now}/fullPage-#{width}.png"
				actualViewPageFileName = "#{now}-region[x,y]/#{width}-#{height}.png"

				#capture full body
				@captureSelector(fullPageFileName, "body")
				#capture snaps a pre-defined selection of the page 
				@capture(actualViewPageFileName, {top:0, left:0, width:width, height:height})

				@echo "spanshoot taken.."

	casper.run ->
		@echo "Finished captures for #{url}"
		# @exit()



job = new cronJob("* * * * *", -> 
		console.log("printing every minute..");
		casperJob()
	, null, true)














