// Zadanie 0
var parentElements = document.getElementsByClassName("parent");

for(var i = 0; i < parentElements.length; i++) {
	parentElements[i].addEventListener("mouseover", function(e) {
		let childElement = e.target.getElementsByClassName("children")[0];
		childElement.style.display = "block";
	});
	
	parentElements[i].addEventListener("mouseleave", function(e) {
		let childElement = e.target.getElementsByClassName("children")[0];
		childElement.style.display = "none";
	});
}