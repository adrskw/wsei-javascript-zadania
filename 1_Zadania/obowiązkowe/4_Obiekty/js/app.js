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

// Zadanie 4
var movie = {
    director: "Peter Jackson",
    writers: [" J.R.R. Tolkien ", "Fran Walsh", "Philippa Boyens", "Peter Jackson"],
    stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    country: "New Zealand | USA",
    budget: "$93,000,000",
    imdbPoints: 8.8,
    year: 2001,
    time: "2h 58 min",
    category: " Adventure, Drama, Fantasy"
}

for(var property in movie) {
	console.log(movie[property]);
}

// Zadanie 5
var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
            },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
            }
        ]
    },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
            },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
            }
        ]
    }
];

for(var i = 0; i < animals.length; i++) {
	for(var property in animals[i]) {
		console.log(animals[i][property]);
	}
}

// Zadanie 6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

if(spoon.isExist === true) {
	console.log("Łyżka istnieje");
}
else {
	console.log("Łyżka nie istnieje");
}