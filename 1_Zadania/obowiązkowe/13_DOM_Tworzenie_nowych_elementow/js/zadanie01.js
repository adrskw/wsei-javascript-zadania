document.addEventListener("DOMContentLoaded", function () {
	var button = document.getElementsByClassName("button")[0];
	var list = document.getElementsByClassName("menu")[0];
	var counter = 0;
	
	button.addEventListener("click", function () {
		list.innerHTML += "<li>Element " + (counter + 1) + " - w chwili dodania było " + counter + " elementów</li>"
		counter++;
	})
})