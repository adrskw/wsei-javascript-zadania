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