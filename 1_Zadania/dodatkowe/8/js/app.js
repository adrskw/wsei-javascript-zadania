// Zadanie 1
function Tree(type) {
    this.type = type;
}

Tree.prototype.bloom = function () {
    return "I am blooming";
}

var sosna = new Tree("sosna");
var dab = new Tree("d�b");
var swierk = new Tree("�wierk");
console.log(sosna);
console.log(dab);
console.log(swierk);
console.log(swierk.bloom());