document.addEventListener("DOMContentLoaded", function () {
	function counter(buttonId) {
		document.getElementById(buttonId).addEventListener("click", function() {
			(this.nextElementSibling.getElementsByClassName("counter")[0].innerHTML)++;
		});
	}
	
	counter("button1");
	counter("button2");
	counter("button3");
});