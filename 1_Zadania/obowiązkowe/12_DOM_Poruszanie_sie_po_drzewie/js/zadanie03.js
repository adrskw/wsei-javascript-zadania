document.addEventListener("DOMContentLoaded", function () {
	function changeColor(defaultColor = false) {
		var liElements = this.getElementsByTagName("li");
		
		if(defaultColor == true) {
			for(var i = 0; i < liElements.length; i++) {
				liElements[i].style.backgroundColor = "initial";
			}
		}
		else {
			for(var i = 0; i < liElements.length; i++) {
				liElements[i].style.backgroundColor = "green";
			}
			
			liElements[0].style.backgroundColor = "red";
			liElements[(liElements.length - 1)].style.backgroundColor = "blue";
		}
	}
	
	var divs = document.getElementsByClassName("listContainer");
	
	for(var i = 0; i < divs.length; i++) {
		divs[i].addEventListener("mouseenter", function(e) {
			changeColor.call(this);
		});
		
		divs[i].addEventListener("mouseleave", function(e) {
			changeColor.call(this, true);
		}); 
	}
});