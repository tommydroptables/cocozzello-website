const monthNames = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];

//API Request to GitHub to update my Project information
function printRepoCount() {
	var responseObj = JSON.parse(this.responseText);
	var table = "";
	var easterEag = "";
	var easterEagEnding = "";

	let gitProjects = []

	// Sort the response by the last time the project was updated
	for (var i = 0; i < responseObj.length; i++) {
		// Don't show forked repos
		if (responseObj[i].fork) {
			continue
		}

		lastUpdatedEpoch = Date.parse(responseObj[i].updated_at)
		lastUpdated = new Date(responseObj[i].updated_at)
		created     = new Date(responseObj[i].created_at)

		newItem = {
			"name": responseObj[i].name,
			"html_url": responseObj[i].html_url,
			"description": responseObj[i].description,
			"epoch": lastUpdatedEpoch,
			"created_at": created,
			"updated_at": lastUpdated,
		}

		// The first item must be appended to allow for the sort to work
		if (gitProjects.length == 0) {
			gitProjects.push(newItem)
			continue
		}

		// Set a variable with the current length since we will be modifying the array in the loop
		currentLength = gitProjects.length

		// Add the new item in the location sorted by the epoch
		var added = false
		for (var projectEpochsIndex = 0; projectEpochsIndex < currentLength; projectEpochsIndex++) {
			if (lastUpdatedEpoch > gitProjects[projectEpochsIndex].epoch) {
				gitProjects.splice(projectEpochsIndex, 0, newItem);
				added = true
				break
			}
		}
		if (!added) {
			gitProjects.push(newItem)
		}
	}


	for (var i = 0; i < gitProjects.length; i++) {
		// TODO: Add this application back to the nginx container
		// if (responseObj[i].name === "2048") {
		// 	easterEag = "<a id='easterEag' href='2048'>";
		// 	easterEagEnding = "</a>";
		// }
		// else
		// {
		// 	easterEag = "";
		// 	easterEagEnding = "";
		// }

		var project = gitProjects[i]
		var createdDateString =  monthNames[project.created_at.getMonth()] + "-" + project.created_at.getFullYear()
		var updatedString =  monthNames[project.updated_at.getMonth()] + "-" + project.updated_at.getFullYear()

		table +=
			"<table class='resume_table'>"
				+ "<tr>"
					+ "<td class='resume_table_leftside'>"
					+ createdDateString
					+ " - "
					+ updatedString
					+ "</td>"
					+ "<td class='resume_table_rightside'>"
					+ easterEag
						+ project.name + easterEagEnding + " @ <a href= '" +  project.html_url + "'>GitHub</a>"
						+ "<p style='padding-top: .5em'></p>"
						+ "<ul type='circle'>"
							+ "<li><p>" + project.description + "</p></li>"
						+ "</ul>"
					+ "</td>"
				+ "</tr>"
			+ "</table>";
	}

	table += "<table class='resume_table'>"
			+ "<tr>"
				+ "<td class='resume_table_leftside'>"
				+ "</td>"
				+ "<td class='resume_table_rightside'>"
				+ "</td>"
			+ "</tr>"
		+ "</table>";

		$('#gitTable').replaceWith(table);
}

var request = new XMLHttpRequest();
request.onload = printRepoCount;
request.open('get', 'https://api.github.com/users/cocoztho000/repos', true)
request.send()
