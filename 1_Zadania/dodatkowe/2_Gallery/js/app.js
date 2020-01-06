document.addEventListener("DOMContentLoaded", function () {
    // Punkt 2
    console.log("Dzia³a");
    var list = document.querySelectorAll(".gallery ul li");
    var bodyTag = document.body;

    console.log(list);
    console.log(bodyTag);

    // Punkt 3
    for (var i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function () {
            console.log(this);
        });
    }
});