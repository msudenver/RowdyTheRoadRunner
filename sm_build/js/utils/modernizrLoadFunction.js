// 
Modernizr.load({
	test : Modernizr.mq("only all"),
	yep  : console.info('!!!@media support!!!'),
	nope : ["css/utils/mediaAllForIE8.css", "//cdnjs.cloudflare.com/ajax/libs/respond.js/1.2.0/respond.min.js"]
});