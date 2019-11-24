document.addEventListener("DOMContentLoaded", function () {
	function changeColor() {
		var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
		
		this.parentNode.style.backgroundColor = randomColor;
	}
	
	var buttons = document.getElementsByClassName("button");
	
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function() {
			changeColor.call(this);
		});
	}
});