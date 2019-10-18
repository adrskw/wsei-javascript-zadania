
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

// Zadanie 0
function checkArray(inputArray) {
	var finalArray = []
	
	for(var i = 0; i < inputArray.length; i++) {
		finalArray[i] = true; // zakładamy że każdy element jest dodatni
		
		for(var j = 0; j < inputArray[i].length; j++) {
			if(inputArray[i][j] % 2 != 0) {
				finalArray[i] = false; // jeśli występuje nieparzysta zmień na fałsz
			}
		}
	}
	console.log(finalArray);
}
var arr = [
[11, 12],
[42, 2],
[-4, -120],
[0, 0],
[1, 34],
];
checkArray(arr);

// Zadanie 1
console.log(task1Array[2][1]);
console.log(task1Array.length);
console.log(task1Array[3][1]);

// Zadanie 2
for(var i = 0; i < task2Array.length; i++) {
	console.log(task2Array[i]);
}

for(var i = 0; i < task2Array.length; i++) {
	console.log("array " + i + " length: " + task2Array[i].length);
}

for(var i = 0; i < task2Array.length; i++) {
	for(var j = 0; j < task2Array[i].length; j++) {
		console.log(task2Array[i][j]);
	}
}

// Zadanie 3
function print2DArray(inputArray) {
	for(var i = 0; i < inputArray.length; i++) {
		for(var j = 0; j < inputArray[i].length; j++) {
			console.log(inputArray[i][j]);
		}
	}
}

// Zadanie 4
var task4Array = [
['test', 25],
[21, 33],
[44, 66],
['opel', 'audi'],
['bmw', 'skoda']
];
print2DArray(task4Array);

// Zadanie 5
function create2DArray(rows, columns) {
	var finalArray = [];
	var number = 0;
	
	for(var i = 0; i < rows; i++) {
		finalArray[i] = [];
		for(var j = 0; j < columns; j++) {
			number++;
			finalArray[i][j] = number;
		}
	}
	console.log(finalArray);
}
create2DArray(4,4);