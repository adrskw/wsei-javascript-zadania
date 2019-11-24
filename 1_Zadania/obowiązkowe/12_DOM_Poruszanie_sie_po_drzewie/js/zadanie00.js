// ELEMENT .first
var first = document.getElementsByClassName("first")[0];
// Pierwsze dziecko
var first_FirstChild = first.firstElementChild;
// Trzecie dziecko
var first_ThirdChild = first_FirstChild.children[2];

console.log(first);
console.log(first_FirstChild);
console.log(first_ThirdChild);

// ELEMENT #second
var second = document.getElementById("second");

// Rodzic
var second_parent = second.parentNode;
// Czwarte dziecko
var second_forthChild = second_parent.children[3];

console.log(second);
console.log(second_parent);
console.log(second_forthChild);

// ELEMENT O ATRYBUCIE data-ex = third
var third = document.querySelector("[data-ex='third']");

// Dziadek
var third_grandparent = third.parentNode.parentNode;

// Ostatnie dziecko
var third_lastChild = third_grandparent.lastElementChild;

// Pierwsze dziecko
var third_firstChild = third_lastChild.firstElementChild;

// Środkowe dziecko
var third_middleChildId = Math.floor((third_firstChild.childElementCount) / 2);
var third_middleChild = third_firstChild.children[third_middleChildId];

console.log(third);
console.log(third_grandparent);
console.log(third_lastChild);
console.log(third_firstChild);
console.log(third_middleChild);

// ELEMENT DIV O KLASIE FORTH
var forth = document.querySelector("div.forth");

// Rodzic
var forth_parent = forth.parentNode;

// Pierwsze dziecko o tagu article
var forth_firstArticle = forth_parent.getElementsByTagName("article")[0];

// Drugie dziecko o tagu p
var forth_secondP = forth_firstArticle.getElementsByTagName("p")[1];

console.log(forth);
console.log(forth_parent);
console.log(forth_firstArticle);
console.log(forth_secondP);