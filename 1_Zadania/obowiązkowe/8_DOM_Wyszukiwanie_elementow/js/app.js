document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

	// Zadanie 0
	var titleClassElement = document.querySelector(".title");
	
	function getDataAnimation(element) {
		var dataAnimation = element.dataset.animation;
		
		return dataAnimation;
	}
	
	console.log(getDataAnimation(titleClassElement));
	getDataAnimation(titleClassElement);
	
	// Zadanie 1
	var test = document.getElementById("home");
	console.log(test);
	var test = document.querySelector("#home");
	console.log(test);
	
	var test = document.querySelector("li[data-direction]");
	console.log(test);
	
	var test = document.querySelector(".block");
	console.log(test);
	
	
});
