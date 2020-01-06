document.addEventListener("DOMContentLoaded", function() {
    // punkt 2
    console.log("Działa");

    var prev = document.getElementById("prevPicture");
    var next = document.getElementById("nextPicture");
    var list = document.querySelectorAll(".slider ul li");
    var imageIndex = 0;
    console.log(prev);
    console.log(next);
    console.log(list);
    console.log(imageIndex);

    // punkt 3
    list[imageIndex].classList.add("visible");

    // punkt 4
    prev.addEventListener("click", function () {
        console.log("kliknięto: prev");
    });

    next.addEventListener("click", function () {
        console.log("kliknięto: next");

        // punkt 5
        list[imageIndex].classList.remove("visible");
        imageIndex++;
        list[imageIndex].classList.add("visible");
    });


});
