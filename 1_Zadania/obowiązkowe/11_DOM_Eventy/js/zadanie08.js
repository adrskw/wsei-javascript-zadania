document.addEventListener("DOMContentLoaded", function () {
	// domyślne wartości
	var windowWidth = window.outerWidth;
	var windowHeight = window.outerHeight;
	document.getElementById("windowWidth").innerHTML = windowWidth;
	document.getElementById("windowHeight").innerHTML = windowHeight;

	window.addEventListener("resize", function(e) {
		windowWidth = window.outerWidth;
		windowHeight = window.outerHeight;
	
		document.getElementById("windowWidth").innerHTML = windowWidth;
		document.getElementById("windowHeight").innerHTML = windowHeight;
	});
});