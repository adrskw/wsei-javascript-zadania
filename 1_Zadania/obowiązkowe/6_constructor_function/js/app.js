// Zadanie 1
function Basket() {
	this.products = [];
	this.sum = 0;
}

Basket.prototype.addProduct = function (name, price) {
	this.products.push({
		name: name,
		price: price
	});
	this.sum += price;
}

Basket.prototype.showBasket = function () {
	//console.log("Produkty: " + JSON.stringify(this.products, null, 4));
	for(var i = 0; i < this.products.length; i++) {
		console.log(this.products[i].name + " " + this.products[i].price + " zł");
	}
	console.log("Kwota do zapłaty: " + this.sum + " zł");
}

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();

// Zadanie 1
var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

var johnRobot = new Robot("John");
var williamRobot = new Robot("William");
var kateRobot = new Robot("Kate");
var joshRobot = new Robot("Josh");

joshRobot.sayHi("William");
kateRobot.changeName("Tina");
kateRobot.sayHi("Josh");
williamRobot.isFunctional = false;
williamRobot.sayHi("Tina");
williamRobot.fixIt();
williamRobot.sayHi("Tina");

// Zadanie 2
function Calculator() {
	this.operations = [];
}

Calculator.prototype.add = function (num1, num2) {
	var result = num1 + num2;
	console.log(result);
	this.operations.push("added " + num1 + " to " + num2 +" got " + result);
}
Calculator.prototype.multiply = function (num1, num2) {
	var result = num1 * num2;
	console.log(result);
	this.operations.push("multiplied " + num1 + " with " + num2 +" got " + result);
}
Calculator.prototype.subtract = function (num1, num2) {
	var result = num1 - num2;
	console.log(result);
	this.operations.push("subtracted " + num1 + " from " + num2 +" got " + result);
}
Calculator.prototype.divide = function (num1, num2) {
	var result = num1 / num2;
	console.log(result);
	this.operations.push("divided " + num1 + " by " + num2 +" got " + result);
}
Calculator.prototype.printOperations = function () {
	console.log(this.operations);
}
Calculator.prototype.clearOperations = function () {
	this.operations = [];
}

var calculator1 = new Calculator();
console.log(calculator1);
calculator1.add(2, 5);
calculator1.clearOperations();
calculator1.subtract(99, 5);
calculator1.divide(50, 2);
calculator1.divide(88, 4);
calculator1.printOperations();

var calculator2 = new Calculator();
calculator2.multiply(10, 4);
calculator2.add(2, 9);
calculator2.printOperations();