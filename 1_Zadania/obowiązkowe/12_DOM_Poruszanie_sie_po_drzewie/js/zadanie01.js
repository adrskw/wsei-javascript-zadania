document.addEventListener("DOMContentLoaded", function () {
	function toggle() {
		let siblingElement = this.nextElementSibling;

		if(siblingElement != null) {
			let elementDisplay = siblingElement.style.display;
			
			if(elementDisplay == "none") {
				siblingElement.style.display = "block";
			}
			else {
				siblingElement.style.display = "none";
			}
		}
	}
	
	var buttons = document.getElementsByClassName("button");
	
	
	
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function() {
			toggle.call(this);
		});
	}
});