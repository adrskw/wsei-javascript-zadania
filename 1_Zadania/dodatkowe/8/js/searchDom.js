// Zadanie 2
// punkt 1
var menu = document.getElementById("menu");

function getDataInfo(element) {
    let liElements = element.children;
    let resultArray = [];

    for (var i = 0; i < liElements.length; i++) {
        resultArray.push(liElements[i].dataset.info);
    }

    return resultArray;
}

console.log("punkt 1");
console.log(getDataInfo(menu));