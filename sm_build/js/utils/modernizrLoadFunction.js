// 08.20.13 @ 10:40pm

// Modernizr.load({
// 	test : Modernizr.mq("only all"),
// 	nope : ["css/utils/mediaAllForIE8.css","http://cdnjs.cloudflare.com/ajax/libs/respond.js/1.2.0/respond.min.js"]
// });

// 08.29.13 @ 10:40pm
Modernizr.load([
	{
		load : '<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>',
		complete : function(){
			if(!window.jquery){Modernizr.load("<t4 type='media' id='60221' formatter='image/path'/>")}
		},
		// will wait and for the fallback to load and execute..
		load: console.log("Fallback executed, jQuery loaded from media library")
	}
]);
