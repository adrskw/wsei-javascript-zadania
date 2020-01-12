document.addEventListener('DOMContentLoaded', function () {
    var numbers = [5, 10, 12, 20, 100];
    var result = numbers.reduce(function (prev, curr, index, array) {
        return prev * curr;
    })
    console.log(result);

    var cities = ["Krak�w", "Olsztyn", "Szczecin", "Ostr�w Wielkopolski"];
    var citiesCount = cities.map(function (city) {
        return city.length;
    });
    console.log(citiesCount);
})