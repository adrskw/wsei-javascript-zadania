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