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