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

// punkt 2
var mainContener = document.getElementById("main-contener");

function getElementClass(element) {
    return Array.from(element.classList);
}

console.log("punkt 2");
console.log(getElementClass(mainContener));

// punkt 3
var pinkColor = document.querySelector(".pink-color");

function getElementText(element) {
    return element.innerText;
}

console.log("punkt 3");
console.log(getElementText(pinkColor));

// punkt 4
var images = document.getElementsByClassName("images");

function getElementAlt(element) {
    let resultArray = [];

    for (var i = 0; i < element.length; i++) {
        resultArray.push(element[i].alt);
    }

    return resultArray;
}

console.log("punkt 4");
console.log(getElementAlt(images));