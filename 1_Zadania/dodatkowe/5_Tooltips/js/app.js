/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener("DOMContentLoaded", function () {
    // punkt 2
    console.log("Dziala");

    var tooltips = document.getElementsByClassName("tooltip");

    console.log(tooltips);

    // punkt 3, 4, 5
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].addEventListener("mouseover", function () {
            let tooltipText = document.createElement("span");
            tooltipText.className = "tooltipText";
            tooltipText.innerText = this.dataset.text;
            this.appendChild(tooltipText);

            console.log(this.dataset.text);
        });

        tooltips[i].addEventListener("mouseout", function () {
            console.log(this.dataset.text);
        });
    }
});
