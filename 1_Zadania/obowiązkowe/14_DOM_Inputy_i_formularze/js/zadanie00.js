document.addEventListener("DOMContentLoaded", function() {
	let btn = document.querySelector("button");
	
	btn.addEventListener("click", function(e) {
		let errors = document.getElementsByClassName("error-message")[0];
		errors.innerHTML = "";
		let email = document.getElementById("email").value;
		let name = document.getElementById("name").value;
		let surname = document.getElementById("surname").value;
		let pass1 = document.getElementById("pass1").value;
		let pass2 = document.getElementById("pass2").value;
		let agreeCheckbox = document.getElementById("agree");
		
		if(email.indexOf("@") == -1) {
			errors.innerHTML += "Email musi posiadać znak @<br>";
			e.preventDefault();
		}
		
		if(name.length <= 6) {
			errors.innerHTML += "Twoje imię jest za krótkie<br>";
			e.preventDefault();
		}
		
		if(surname.length <= 6) {
			errors.innerHTML += "Twoje nazwisko jest za krótkie<br>";
			e.preventDefault();
		}
		
		if(pass1 !== pass2 || pass1 === "" || pass2 === "") {
			errors.innerHTML += "Hasła nie są takie same lub puste<br>";
			e.preventDefault();
		}
		
		if(agreeCheckbox.checked === false) {
			errors.innerHTML += "Musisz zaakceptować warunki<br>";
			e.preventDefault();
		}
	})
});