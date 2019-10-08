// Zadanie 0
function distFromAvarage(numbers) {
	count = 0;

	for(var i = 0; i < numbers.length; i++) {
		count = count + numbers[i];
	}
	average = count/numbers.length;

	for(var i = 0; i < numbers.length; i++) {
		numbers[i] = numbers[i] - average;
	}
	console.log(numbers);
}

// Zadanie 1
owoce = ['kiwi', 'pomarańcza', 'mandarynka'];
console.log(owoce[0]);
console.log(owoce[owoce.length - 1]);

for(var i = 0; i < owoce.length; i++) {
	console.log(owoce[i]);
}

// Zadanie 2
function createArray(number) {
    var newArray = [];

    for (var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}

console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));

// Zadanie 3
function printTable(inputArray) {
	for(var i = 0; i < inputArray.length; i++) {
		console.log(inputArray[i]);
	}
} 
printTable([2, 'asd', 'test', 412]);

// Zadanie 4
function multiply(inputArray) {
	var finalNumber = inputArray[0];
	
	for(var i = 1; i < inputArray.length; i++) {
		finalNumber *= inputArray[i];
	}
	
	console.log(finalNumber);
}
multiply([1,2,3,4,5,6,7]);
multiply([1,1,1,1]);
multiply([2,8,3,7]);

// Zadanie 5
function getEvenAvarage(inputArray) {
	var sumEven = 0;
	var amountEven = 0
	
	for(var i = 0; i < inputArray.length; i++) {
		if(inputArray[i] % 2 == 0) {
			sumEven += inputArray[i];
			amountEven++;
		}
	}
	
	var averageEven = sumEven / amountEven;
	
	if(averageEven != 0) {
		console.log(averageEven);
	}
	else {
		console.log(null);
	}
}
getEvenAvarage([1,2,3,4,5,6,7]);
getEvenAvarage([1,1,1,1]);
getEvenAvarage([2,8,3,7,4]);

// Zadanie 6
function sortArray(inputArray) {
	inputArray = inputArray.sort(function(a, b){return a-b});
	console.log(inputArray);
}
sortArray([145,11,3,64,4,6,10]);

// Zadanie 7
function addArrays(firstArray, secondArray) {
	var elementCount = Math.max(firstArray.length, secondArray.length);
	var finalArray = [];
	
	for(var i = 0; i < elementCount; i++) {
		if(firstArray[i] === undefined) {
			firstArray[i] = 0;
		}
		if(secondArray[i] === undefined) {
			secondArray[i] = 0;
		}
		
		finalArray[i] = firstArray[i] + secondArray[i];
	}
	console.log(finalArray);
}
addArrays([4,0,1,3,4], [1,9,6,7,8,17]);
addArrays([8,3,22], [1,3,2]);
addArrays([2,3,1,5,3,5], [3,1,76,1]);