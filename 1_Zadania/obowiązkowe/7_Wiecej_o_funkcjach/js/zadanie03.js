sayHello(); // funkcja wywoła się, gdyż funkcja jest definiowana zanim kod zostanie wykonany
function sayHello() {
	console.log("Cześć");
}
sayHello(); // funkcja wywoła się normalnie

sayHelloV2(); // funkcja nie wywyoła się, gdyż funkcja jest definiowana w trakcie wykonywania kodu
var sayHelloV2 = function () {
	console.log("Witaj");
}
sayHelloV2(); // funkcja wywoła się normalnie