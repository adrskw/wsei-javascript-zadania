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

