	


	//API Request to GitHub to update my Project information 
		function printRepoCount() {
		  var responseObj = JSON.parse(this.responseText);
		  var table = "";
		  var easterEag = "";
		  var easterEagEnding = "";
		  for (var i = responseObj.length - 1; i >= 0; i--) 
		  {
		  	
 		  	if (responseObj[i].name === "2048") {
		  		easterEag = "<a id='easterEag' href='2048'>";
		  		easterEagEnding = "</a>";
		  	}
		  	else
		  	{
		  		 easterEag = "";
		  	 	easterEagEnding = "";
		  	}

		  	table +=
		  		"<table class='resume_table'>"
					+ "<tr> "
						+ "<td class='resume_table_leftside'>"
						+ responseObj[i].created_at.substring(0, 4)
						+ " - "
						+ responseObj[i].updated_at.substring(0, 4) 
						+ "</td>"
						+ "<td class='resume_table_rightside'>"
						+ easterEag
							+ responseObj[i].name + easterEagEnding + " @ <a href= '" +  responseObj[i].html_url + "'>GitHub</a>" 
							+ "<p style='padding-top: .5em'></p>" 
							+ "<ul type='circle'>"	
								+ "<li><p>" + responseObj[i].description + "</p></li>"
							+ "</ul>"
						+ "</td>"
					+ "</tr>"
				+ "</table>";
		  }

		  table += "<table class='resume_table'>"
					+ "<tr> "
						+ "<td class='resume_table_leftside'>"
						+ "</td>"
						+ "<td class='resume_table_rightside'>"
							+ " <a href= ''></a>" 
						+ "</td>"
					+ "</tr>"
				+ "</table>";


		  $('#gitTable').replaceWith(table);
		}

		var request = new XMLHttpRequest();
		request.onload = printRepoCount;
		request.open('get', 'https://api.github.com/users/cocoztho000/repos', true)
		request.send()