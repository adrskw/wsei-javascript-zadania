document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
	
	// Zadanie 0
	function getDatasInfo(elements) {
		let dataValues = [];
		
		for(var i = 0; i < elements.length; i++) {
			dataValues[i] = elements[0].dataset.color;
		}

		return dataValues;
	}
	
	console.log(getDatasInfo(links));

	// Zadanie 1
	function printTagAndClass(elements) {
		for(var i = 0; i < elements.length; i++) {
			let className = elements[i].className;
			let tagName = elements[i].tagName;
			
			console.log(i + ". tag: " + tagName + ", class: " + className);
		}
	}
	console.log("homeElement:")
	printTagAndClass([homeElement]);
	console.log("childElements:")
	printTagAndClass(childElements);
	console.log("banner:")
	printTagAndClass([banner]);
	console.log("blocks:")
	printTagAndClass(blocks);
	console.log("links:")
	printTagAndClass(links);
	
	// Zadanie 2
	for(var i = 0; i < blocks.length; i++) {
		console.log(blocks[i].innerHTML);
		blocks[i].innerHTML = "Nowa wartość diva o klasie blocks";
		console.log(blocks[i].innerHTML);
		console.log(blocks[i].outerHTML);
	}
	/*
		innerHTML zwraca tylko kod znajdujący się w środku danego elementu
		outerHTML zwraca kod znajdujący się w środku danego elementu wraz z kodem tego elementu
		
		Analiza: ustalenie nowej wartości innerHTML zmieniło wewnętrzny kod każdego diva o klasie block
	*/
	
	// Zadanie 3
	function getId(element) {
		return element.id;
	}
	
	let mainFooter = document.getElementById("mainFooter");
	
	console.log(getId(mainFooter));
	
	// Zadanie 4
	function getTags(elements) {
		let tags = [];
		
		for(var i = 0; i < elements.length; i++) {
			tags[i] = elements[i].tagName;
		}
		
		return tags;
	}
	
	console.log(getTags(childElements));
});
