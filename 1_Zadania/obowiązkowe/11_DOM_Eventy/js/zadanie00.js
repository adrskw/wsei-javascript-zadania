// Zadanie 0a
var parentElements = document.getElementsByClassName("parent");

for(var i = 0; i < parentElements.length; i++) {
	parentElements[i].addEventListener("mouseenter", function(e) {
		let childElement = this.getElementsByClassName("children")[0];
		childElement.style.display = "block";
	});

	parentElements[i].addEventListener("mouseleave", function(e) {
		let childElement = this.getElementsByClassName("children")[0];
		childElement.style.display = "none";
	});
} 