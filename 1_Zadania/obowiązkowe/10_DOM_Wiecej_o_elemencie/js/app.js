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
	
	// Zadanie 1
	let chrome = document.querySelector(".ex1 .chrome");
	chrome.style.width = "100px";
	chrome.nextElementSibling.innerHTML = "Google Chrome";
	let edge = document.querySelector(".ex1 .edge");
	edge.style.backgroundImage = 'url("assets/img/edge.png")';
	edge.nextElementSibling.href = "https://www.microsoft.com/pl-pl/windows/microsoft-edge";
	let firefox = document.querySelector(".ex1 .firefox");
	firefox.style.backgroundImage = 'url("assets/img/firefox.png")';
	firefox.nextElementSibling.href = "https://www.mozilla.org/pl/firefox/";
	firefox.nextElementSibling.innerHTML = "Mozilla Firefox";
	
	// Kod zostaje dopisany wprost do elementów w HTML a nie do pliku CSS
	
	
});