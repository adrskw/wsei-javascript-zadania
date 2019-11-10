document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
	
	// Zadanie 0
	let elements = document.querySelectorAll(".ex5 li");
	
	for(var i = 0; i < elements.length; i++) {
		if((i % 2) == 0) {
			elements[i].style.backgroundColor = "green";
		}
		
		if((i % 5) == 0) {
			elements[i].className = "big";
		}

		if((i % 3) == 0) {
			elements[i].children[0].style.textDecoration = "underline";
		}
		else {
			elements[i].children[0].style.textDecoration = "none";
		}
	}
});