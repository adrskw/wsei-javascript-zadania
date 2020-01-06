/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener("DOMContentLoaded", function () {
    // punkt 2
    console.log("Dziala");

    var tooltips = document.getElementsByClassName("tooltip");

    console.log(tooltips);

    // punkt 3, 4
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].addEventListener("mouseover", function () {
            console.log(this.dataset.text);
        });

        tooltips[i].addEventListener("mouseout", function () {
            console.log(this.dataset.text);
        });
    }
});
