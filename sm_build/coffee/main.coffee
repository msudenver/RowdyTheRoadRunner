$ ->
	# display window width and height on load
	# container = $("#content-width")
	# container.text "W : " + $(window).width() + "px" + " by H : " + $(window).height() + "px" + " - - parent.scrollTop value "  + #{$(window, window.parent.document).scrollTop()}

	# display content width & height information on resize
	# $(window).resize ->
	# 	container.text "W : " + $(window).width() + "px" + " by H : " + $(window).height() + "px"

	# hide back2top button 
	back2top = $("div.back2top");
	back2top.addClass "disappear"

	# handle click event on back2top button
	back2top.click (event) -> 
		event.preventDefault()
		$("html, body").animate { scrollTop : 0 }, 450

	$("input.checkbox").click (event) -> 
		$("html, body").animate { scrollTop : 0 }, 450


	$(window).scroll ->

		position = $(this).scrollTop()
		
		if   position > 200 
			back2top.removeClass "disappear" 
			back2top.addClass "appear"
			# $("table#results > caption").css { "margin-bottom" : "27px"}
			
		# else if position > 0 
			# $(".categories").css {"background-color" : "rgba(69,67,69,0.63)" }
			
			# $("th.Name").css {"background-color" : "rgba(69,67,69,0)"}
			# $(".todo").css "padding-bottom", "0"
			# $("caption").css("margin-bottom" , "0")
			# $("th.Name").text(" ")
			
		else if position <= 200
			# $("caption").css("margin-bottom" , "20px")
			back2top.removeClass "appear" 
			back2top.addClass  "disappear"
			# $(".categories").css {"background-color" : "rgba(69,67,69,1.0)" }
			# $("th.Name").text("Program")

			

