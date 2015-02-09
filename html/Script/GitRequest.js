	//API Request to GitHub to update my Project information 
		function printRepoCount() {
		  var responseObj = JSON.parse(this.responseText);
		  var table = "";
		  for (var i = responseObj.length - 1; i >= 0; i--) {
		  	table +=
		  		"<table class='resume_table'>"
				+ "<tr> "
				+ "<td class='resume_table_leftside'>"
				+ responseObj[i].updated_at.substring(0, 4) 
				+ "</td>"
				+ "<td class='resume_table_rightside'>"

				+ responseObj[i].name + " @ <a href= '" +  responseObj[i].html_url + "'>GitHub</a>" 
				+ "<p style='padding-top: .5em'></p>" 
				+ "<ul type='circle'>"
				+ "<li><p>" + responseObj[i].description + "</p></li>"
				+ "</ul>"
				+ "</td>"
				+ "</tr>"
				+ "</table>" ;


		  };
		  $('#gitTable').replaceWith(table);
		}

		var request = new XMLHttpRequest();
		request.onload = printRepoCount;
		request.open('get', 'https://api.github.com/users/cocoztho000/repos', true)
		request.send()