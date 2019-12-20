document.addEventListener("DOMContentLoaded", function () {
	var list1 = document.getElementById("list1");
	var list2 = document.getElementById("list2");
	
	var moveButtons = document.getElementsByClassName("moveBtn");
	
 	for(var i = 0; i < moveButtons.length; i++) {
		moveButtons[i].addEventListener("click", function() {
			let liElement = this.parentNode;
			if(this.parentNode.parentNode.id == "list1") {
				this.parentNode.remove();
				list2.appendChild(liElement);
			}
			else {
				this.parentNode.remove();
				list1.appendChild(liElement);
			}
		});
	}
})