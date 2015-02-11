		//hide or show the 'top' button when the user is at the top of the page
		var hidden = 0;
		$(window).scroll( function(){
			if($(window).scrollTop() > 0) 
				hidden = 0;
			else
				hidden = 1;

			if (hidden == 0 &&  $('body').width() > 390) 
				$("#header_top_button").show();
			else
				$("#header_top_button").hide();
		});


		$(window).resize( function(){ 
			if ($('body').width() > 390) 
				$("#header_top_button").show();	
			else
				$("#header_top_button").hide();	
		});

		
		//top button move user back to the top
		$(function(){
		    $("#header_top_button").click(function() {
			    if($(window).scrollTop() > 0) {
	       			var emSize = parseFloat($("body").css("font-size"));
				    $('html, body').animate({
				        scrollTop: 0
				    }, 500);
				    return false;
	   			}
			});
		});

		// move user to the resume section
		$(function(){
		    $("#resume_button").click(function() {
		    	var emSize = parseFloat($("body").css("font-size"));
			    $('html, body').animate({
			        scrollTop: $("#resume_title").offset().top - (emSize * 1)
			    }, 500);
			    return false;
			});
		});

		//move user to the projects section
		$(function(){
			

		    $("#projects_button").click(function() {
		    	var size = 0;
				var emSize = parseFloat($("body").css("font-size"));
				if ($('body').width() < 680)
				{ 
					size = $("#projects").offset().top - (emSize * 4);
					console.log("1: " + size);
				}
				else
				{
						
					size = $("#projects").offset().top - (emSize * 2);
					console.log("2: " + size);
					if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
					{ 
						size = $("#projects").offset().top - (emSize * 4);
						console.log("3: " + size);
					}	
				}
			    $('html, body').animate({
			        scrollTop: size
			    }, 500);
			    return false;
			});
		});

		//move user to the skills section
		$(function(){
			var size = 0;
				
		    $("#skills_button").click(function() {
		    	var emSize = parseFloat($("body").css("font-size"));
				if ($('body').width() < 680)
				{ 
					size = $("#activities").offset().top - (emSize * 4);
					console.log("1: " + size);
				}
				else
				{
					size = $("#activities").offset().top - (emSize * 2);
					console.log("2: " + size);
					if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
					{ 
						size = $("#activities").offset().top - (emSize * 4);
						console.log("3: " + size);
					}	
				}
			    $('html, body').animate({
			        scrollTop: size
			    }, 500);
			    return false;
			});
		});


		// move user to the resume section
		$(function(){
		    $("#resume_button2").click(function() {
		    	var emSize = parseFloat($("body").css("font-size"));
			    $('html, body').animate({
			        scrollTop: $("#resume_title").offset().top - (emSize * 1)
			    }, 500);
			    return false;
			});
		});




		$(function(){
			$("#contact_button").click(function() {
				document.getElementById('foot').style.removeProperty("transition");
			    document.getElementById('foot').style.removeProperty("backgroundColor");
			    document.getElementById('foot').style["backgroundColor"] = "#EEEEEE";
				console.log("test");
			});
		});


		// move user to the Contact section
		$(function(){
		    $("#contact_button").click(function() {
		    	var emSize = parseFloat($("body").css("font-size"));
			    $('html, body').animate({
			        scrollTop: $("footer").offset().top + (emSize * 2)
			    }, 500);
			    document.getElementById('foot').style.removeProperty("backgroundColor");
			    document.getElementById('foot').style["transition"] = "background-color 3s .2s ease";
			    document.getElementById('foot').style["backgroundColor"] = "#0D47A1";
			    

			    console.log("2");
			    return false;
			});
		});

		// move user to the Download section
		$(function(){
		    $("#download_button").click(function() {
		    	var emSize = parseFloat($("body").css("font-size"));
			    $('html, body').animate({
			        scrollTop: $("#download_title").offset().top + (emSize * 2)
			    }, 500);
			    return false;
			});
		});