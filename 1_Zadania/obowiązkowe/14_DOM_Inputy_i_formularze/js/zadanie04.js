document.addEventListener("DOMContentLoaded", function() {
	let name = document.getElementById("name");
	let type = document.getElementById("type");
	
	name.addEventListener("keyup", function() {
		let nameValue = name.value;
		
		if(nameValue[0] == 4) {
			type.innerHTML = "Visa";
			
			if(nameValue.length >= 13 && nameValue.length <= 16) {
				name.parentNode.classList.add("has-success");
			}
			else {
				name.parentNode.classList.remove("has-success");
			}
		}
		else if(nameValue[0] == 5) {
			type.innerHTML = "MasterCard";
			
			if(nameValue.length === 16) {
				name.parentNode.classList.add("has-success");
			}
			else {
				name.parentNode.classList.remove("has-success");
			}
		}
		else if(nameValue[0] == 3 && (nameValue[1] == 4 || nameValue[1] == 7)) {
			type.innerHTML = "American Express";
			
			if(nameValue.length === 15) {
				name.parentNode.classList.add("has-success");
			}
			else {
				name.parentNode.classList.remove("has-success");
			}
		}
		else {
			name.parentNode.classList.remove("has-success");
			type.innerHTML = "";
		}
	})
})