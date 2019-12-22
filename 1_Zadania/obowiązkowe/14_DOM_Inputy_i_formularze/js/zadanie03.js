document.addEventListener("DOMContentLoaded", function() {
	document.querySelector("button").addEventListener("click", function(e) {
		let team1 = document.getElementById("team1").value;
		let team2 = document.getElementById("team2").value;
		let points1 = document.getElementById("points1").value;
		let points2 = document.getElementById("points2").value;
		let resultTable = document.querySelector("table");

		e.preventDefault();
		
		if (team1 !== team2 && points1 >= 0 && points2 >= 0) {
			resultTable.innerHTML += "<tr><td>" + team1 + "</td><td>" + team2 + "</td><td>" + points1 + " - " + points2 + "</td></tr>"
		}
	})
})