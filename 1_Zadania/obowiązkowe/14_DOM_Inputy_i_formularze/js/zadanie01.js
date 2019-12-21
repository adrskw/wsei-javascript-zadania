document.addEventListener("DOMContentLoaded", function() {
	let invoiceData = document.getElementById("invoiceData");
	invoiceData.style.display = "none";
	
	document.getElementById("invoice").addEventListener("click", function() {

		if (this.checked === true) {
			invoiceData.style.display = "block";
		}
		else {
			invoiceData.style.display = "none";
		}
	})
})