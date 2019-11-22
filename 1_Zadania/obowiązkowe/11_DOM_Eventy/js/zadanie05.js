document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("bigBox").addEventListener("click", function(e) {
		var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
		e.target.style.backgroundColor = randomColor;
	});
});