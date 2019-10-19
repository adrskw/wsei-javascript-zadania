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
	
	
});
