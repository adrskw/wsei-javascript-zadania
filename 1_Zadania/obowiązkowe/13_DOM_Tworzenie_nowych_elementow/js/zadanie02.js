document.addEventListener("DOMContentLoaded", function () {
	var orderId = document.getElementById("orderId");
	var item = document.getElementById("item");
	var quantity = document.getElementById("quantity");
	var addBtn = document.getElementById("addBtn");
	var orders = document.getElementById("orders");
	
	addBtn.addEventListener("click", function () {
		orders.innerHTML += "<tr><td>" + orderId.value + "</td><td>" + item.value + "</td><td>" + quantity.value + "</td></tr>";
	})
})