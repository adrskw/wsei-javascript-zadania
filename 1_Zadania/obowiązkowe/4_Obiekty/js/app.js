// Zadanie 0a
var country = {
	capital: "Warszawa",
	population: 40000000,
	president: "Andrzej Duda",
	primeMinisters: ["Jan Kowalski", "Janusz Nowak", "Edyta Polak"]
}
console.log("Stolica: " + country.capital);
console.log("Populacja: " + country.population);
console.log("Prezydent: " + country.president);
console.log("Premierzy: " + country.primeMinisters);

// Zadanie 0b
var timeMachine = {
	shape: "okrągły",
	model: "V2",
	run: function(date, place) {
		return "przeniesiono się do daty " + date + " w miejscu " + place;
	}
}
console.log("Kształt: " + timeMachine.shape);
console.log("Model: " + timeMachine.model);
console.log("Uruchomienie: " + timeMachine.run("21.12.2013", "Londyn"));

// Zadanie 1
var book = {
	title: "Quo vadis: Powieść z czasów Nerona ",
	author: "Henryk Sienkiewicz",
	numberOfPages: 460
}
console.log("Tytuł: " + book.title);
console.log("Autor: " + book.author);
console.log("Liczba stron: " + book.numberOfPages);

// Zadanie 2
var person = {
	name: "Adrian",
	age: 21,
	sayHello: function() {
		console.log("hello")
	}
}
console.log("Imię: " + person.name);
console.log("Wiek: " + person.age);
person.sayHello();

// Zadanie 3
var sandwiches = {
	title: "Kanapki",
	servings: 2
}
sandwiches.ingredients = ["2 kromki chleba", "masło", "4 plastry szynki", "2 plastry sera", "pomidor", "ogórek", "cebula"];

console.log("Nazwa : " + sandwiches.title);
console.log("Porcje : " + sandwiches.servings);
console.log("Składniki : " + sandwiches.ingredients);
