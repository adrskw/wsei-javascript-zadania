document.addEventListener('DOMContentLoaded', function () {
    var numbers = [5, 10, 12, 20, 100];
    var result = numbers.reduce(function (prev, curr, index, array) {
        return prev * curr;
    })
    console.log(result);

    // Zadanie 0
    var cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
    var citiesCount = cities.map(function (city) {
        return city.length;
    });
    console.log(citiesCount);

    // Zadanie 1
    function randomize(param1, param2, callback) {
        var randomNumber = Math.floor(Math.random() * param2) + param1;

        if (callback instanceof Function) {
            callback(randomNumber);
        }
    }

    randomize(1, 6, function (number) {
        console.log("wylosowana liczba: " + number)
    });
    randomize(1, 6, "test");

    // Zadanie 2
    var animals = ["cat", "shrimp", "giraffe"];
    animals.forEach(function (animal) {
        console.log(animal);
    });
})