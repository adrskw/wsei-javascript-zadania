document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("box").addEventListener("mousemove", function(e) {
		document.getElementById("globalX").innerHTML = e.clientX;
		document.getElementById("globalY").innerHTML = e.clientY;
	
		var rect = e.target.getBoundingClientRect();	
		document.getElementById("localX").innerHTML = e.clientX - rect.left;
		document.getElementById("localY").innerHTML = e.clientY - rect.top;
	});
});