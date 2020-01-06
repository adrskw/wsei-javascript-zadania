/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener("DOMContentLoaded", function () {
    // punkt 2
    console.log("Dziala");

    var tooltips = document.getElementsByClassName("tooltip");

    console.log(tooltips);

    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].addEventListener("mouseover", function () {
            console.log("najechano");
        });

        tooltips[i].addEventListener("mouseout", function () {
            console.log("wyjechano");
        });
    }
});
