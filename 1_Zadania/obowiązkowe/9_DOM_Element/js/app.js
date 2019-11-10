document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
	
	// Zadanie 0
	function getDatasInfo(elements) {
		let dataValues = [];
		
		for(var i = 0; i < elements.length; i++) {
			dataValues[i] = elements[0].dataset.color;
		}

		return dataValues;
	}
	
	console.log(getDatasInfo(links));


});
