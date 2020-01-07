// Zadanie 1
function getNumber(number, numbersArray) {
    for (var i = 0; i < numbersArray.length; i++) {
        if (number === numbersArray[i]) {
            return true;
        }
    }

    return false;
}
console.log("task 1");
console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
console.log(getNumber(5, [33, 54, 2, 1, 4, 100]));

// Zadanie 2
function createIdentityMatrix(rows, columns) {
    let resultArray = [];

    for (var i = 0; i < rows; i++) {
        let rowArray = [];

        for (var j = 0; j < columns; j++) {
            if (j == i) {
                rowArray.push(1);
            }
            else {
                rowArray.push(0);
            }
        }
        resultArray.push(rowArray);
    }

    return resultArray;
}
console.log("task 2");
console.log(createIdentityMatrix(4, 4));

// Zadanie 3
function sortPlanet(planets) {
    return planets.sort((a, b) => b.numberOfMoons - a.numberOfMoons);
}
console.log("task 3");
console.log(sortPlanet(planets));


// Dodatkowe
// Zadanie 1 - dodatkowe
function addTheSameNumbers(number, numbersArray) {
    let result = 0;

    if (numbersArray.includes(number)) {
        for (var i = 0; i < numbersArray.length; i++) {
            if (number === numbersArray[i]) {
                result += number;
            }
        }
    }
    else {
        result = null;
    }
    

    return result;
}
console.log("extra task 1");
console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]));
console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));
console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));

// Zadanie 2 - dodatkowe
function factors(number) {
    let resultArray = [];

    if (number > 0) {
        for (var i = 1; i <= Math.floor(Math.sqrt(number)); i++) {
            if (number % i === 0) {
                resultArray.push(i);

                if (number / i !== i) {
                    resultArray.push(number / i);
                }
            }
        }
        resultArray.sort((a, b) => b - a);
    }

    return resultArray;
}
console.log("extra task 2");
console.log(factors(2));
console.log(factors(54));
console.log(factors(-4));