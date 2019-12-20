document.addEventListener("DOMContentLoaded", function(){
	let list = document.getElementsByClassName("list")[0];
	
	document.getElementById("remove").addEventListener("click", function() {
		list.innerHTML = "";
	});
})