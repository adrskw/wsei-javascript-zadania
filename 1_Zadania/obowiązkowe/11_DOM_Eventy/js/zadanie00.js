// Zadanie 0a
/* var parentElements = document.getElementsByClassName("parent");

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
*/

// Zadanie 0b
var parentElements = document.getElementsByClassName("parent");

for(var i = 0; i < parentElements.length; i++) {
	parentElements[i].addEventListener("mouseenter", function(e) {			
		function hideChildrenElement(){
			let childElement = this.getElementsByClassName("children")[0];
			childElement.style.display = "block";
		}
		
		hideChildrenElement.call(this);
	});

	parentElements[i].addEventListener("mouseleave", function(e) {
		function hideChildrenElement(){
			let childElement = this.getElementsByClassName("children")[0];
			childElement.style.display = "none";
		}
		
		hideChildrenElement.call(this);
	});
} 