document.addEventListener("click", function (e) {
	if(e.target.className == "deleteBtn") {
		e.target.parentNode.parentNode.remove();
	}
});