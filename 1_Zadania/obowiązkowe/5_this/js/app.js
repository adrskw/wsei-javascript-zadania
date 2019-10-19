// Zadanie 0
var car = {
	brand: "Mercedes",
	color: "Czarny",
	numberOfKilometers: 0,
	printCarinfo: function() {
		console.log(this.color + " " + this.brand + ", " + this.numberOfKilometers + "km")
	},
	drive: function(km) {
		this.numberOfKilometers += km;
	}
}
car.printCarinfo();
car.drive(20);
car.printCarinfo();

// Zadanie 1
car.overviews = ["23.11.2016", "21.11.2017", "20.11.2018"];
car.addOverview = function(date) {
	this.overviews.push(date);
}
car.printOverviews = function() {
	console.log(this.overviews);
}

car.addOverview("18.11.2019");
car.printOverviews();

// Zadanie 2
var calculator = {
	a: 0,
	b: 0,
	
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },

	sum: function () {
		return (this.a + this.b);
	},
	
	multiply: function () {
		return (this.a * this.b);
	}
};

calculator.save(2, 3);
console.log(calculator.sum());
console.log(calculator.multiply());

// Zadanie 3
var stairs = {
	step: 0,
	up: function () {
		this.step += 1;
	},
	down: function () {
		this.step -= 1;
	},
	printStep: function () {
		console.log(this.step);
	}
}

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep();