document.addEventListener("DOMContentLoaded", function() {
	let windowsImg = document.querySelector('img[alt="Windows"]');
	let appleImg = document.querySelector('img[alt="Apple"]');
	let ubuntuImg = document.querySelector('img[alt="Ubuntu"]');
	
	appleImg.style.display = "none";
	ubuntuImg.style.display = "none";
	
	document.querySelector("select").addEventListener("change", function() {
		let selectedOs = this.options[this.selectedIndex].value;
		
		windowsImg.style.display = "none";
		appleImg.style.display = "none";
		ubuntuImg.style.display = "none";
		
		switch(selectedOs) {
			case "Windows":
				windowsImg.style.display = "block";
				break;
			case "Os X":
				appleImg.style.display = "block";
				break;
			case "Ubuntu":
				ubuntuImg.style.display = "block";
				break;
		}
	})
})